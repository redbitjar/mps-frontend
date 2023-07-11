import { useCallback, useEffect, useState } from "react";

import _ from "lodash";

import ReactFlow, {
  MarkerType,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  updateEdge,
  useEdges,
  useEdgesState,
  useNodesState,
  useOnSelectionChange,
} from "reactflow";

import "reactflow/dist/style.css";

import { initialNodes, initialEdges } from "./networkData";
import CustomNode from "./CustomNode.js";
import CustomEdge2 from "./CustomEdge2";
import "./CustomNode.css";
import CustomNode2 from "./CustomNode2";

window.interfaces = {};

function leftPad(value) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}

function toStringByFormatting(source, delimiter = "-") {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
}

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const nodeTypes = { cpm: CustomNode, cpmMain: CustomNode2 };
const edgeTypes = {
  custom: CustomEdge2,
};

const defaultEdgeOptions = {
  labelBgStyle: { fill: "transparent" },
  type: "custom",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
};

// let copiedNodes = [];

let reRendreNodes = [];
let criticalPath = [];
// copiedNodes = _.cloneDeep(initialNodes);

function nodesConnectEdges(edges) {
  // console.log("nodesConnectEdges---------start");
  // // console.log("reRendreNodes : ", nodes);
  // console.log("reRendreNodes : ", reRendreNodes);
  // console.log("edges : ", edges);
  // console.log("nodesConnectEdges---------end");
  // debugger;

  // 1. 엣지 검색
  // let connectedEdges = edges.filter(f => f.soruce === parentNode.id)
  // 2. reRendreNodes부터 타겟 노드 검색
  // 3. reRendreNodes에 parent Node 검색
  // 3.1 parent Node 정보 수정
  // 3.2 target 노드 배열 추가
  // 3.3 edge label 정보 추가
  // reRendreNodes

  for (let _node of reRendreNodes) {
    _node.targetEdges = [];
    _node.targetNodes = [];
    _node.prevEdges = [];
    _node.prevNodes = [];

    for (let _edges of edges) {
      if (_edges.source === _node.id) {
        _node.targetEdges.push(_edges);

        _node.targetNodes.push(
          reRendreNodes.find((f) => f.id === _edges.target)
        );
      } else if (_edges.target === _node.id) {
        _node.prevEdges.push(_edges);

        _node.prevNodes.push(reRendreNodes.find((f) => f.id === _edges.source));
      }
    }
  }
}

function nodesRerender(sourceNode, parentIndex) {
  let { id, data, prevEdges, prevNodes, targetEdges, targetNodes } = sourceNode;
  const { est: sourceEst, lst: sourceLst, workDate } = data;

  targetNodes.forEach((_targetNode, _idx) => {
    // const label = targetEdges[_idx].data.label;
    // let maxEst = Number(label || 0) + sourceEst;
    // let maxlst = Number(label || 0) + sourceLst

    let maxEst = Number.MIN_SAFE_INTEGER;
    let maxLst = Number.MIN_SAFE_INTEGER;
    // let maxLabel = Number.MIN_SAFE_INTEGER;
    let maxDate = new Date(0);
    const _data = data;

    const { prevEdges: tPrevEdges, prevNodes: tPrevNodes } = _targetNode;
    tPrevNodes.forEach((_tPrevNode, _tPrevIdx) => {
      const {
        est: prevEst,
        lst: prevLst,
        workDate: preWorkDate,
      } = _tPrevNode.data;
      const { label: prevLabel } = tPrevEdges[_tPrevIdx].data;
      const _tempEst = Number(prevEst) + Number(prevLabel || 0);
      const _tempLst = Number(prevLst) + Number(prevLabel || 0);
      const _d = preWorkDate.split("-");
      const _tempDate = new Date(_d[0], _d[1] - 1, _d[2]);
      _tempDate.setDate(_tempDate.getDate() + Number(prevLabel || 0));

      maxEst = _tempEst > maxEst ? _tempEst : maxEst;
      maxLst = _tempLst > maxLst ? _tempLst : maxLst;
      maxDate = _tempDate > maxDate ? _tempDate : maxDate;
    });

    _targetNode.data = {
      ..._targetNode.data,
      est: maxEst,
      lst: maxLst,
      workDate: toStringByFormatting(maxDate),
    };

    nodesRerender(_targetNode);
  });
}

function Flow(props) {
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  useEffect(() => {
    // copiedNodes = _.cloneDeep(initialNodes);
    // setNodes(copiedNodes);

    setNodes([...initialNodes]);
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },

    [setEdges]
  );

  const onIncrease = useCallback((e) => {
    // console.log("onIncrease start");
    // console.log("nodes : ", nodes);
    // console.log("edges : ", edges);
    // console.log("onIncrease end");
    console.log("criticalPath : ", criticalPath);

    // debugger;
  });

  const onGetNodesAndEdgesClick = useCallback((e) => {
    console.log("------ ", nodes);
    console.log("------ ", edges);
    return {
      nodes: nodes,
      edges: edges,
    };
  });
  const onGetEdgesClick = useCallback((e) => {
    console.log("------ ", edges);
  });

  const onNodeRerenderClick = useCallback((e) => {
    // console.log("onNodeRerenderClick start");
    // console.log("nodes : ", nodes);
    // console.log("edges : ", edges);
    // // console.log("copiedNodes : ", copiedNodes);
    // console.log("onNodeRerenderClick end");
    // 첫노드 찾기, reRendreNodes 재구성
    // const rootNode = nodes.find((n) => n.type === "cpmMain");

    reRendreNodes = _.cloneDeep(nodes);

    // console.log(reRendreNodes);
    // debugger;

    nodesConnectEdges(edges);

    // console.log(reRendreNodes);
    // debugger;

    const rootNodeIndex = reRendreNodes.findIndex((n) => n.type === "cpmMain");
    const rootNode = reRendreNodes[rootNodeIndex];

    nodesRerender(rootNode, rootNodeIndex);
    setNodes(reRendreNodes);
  });

  window.interfaces.onGetNodesAndEdgesClick = onGetNodesAndEdgesClick;
  window.interfaces.onNodeRerenderClick = onNodeRerenderClick;

  const onChange = useCallback((e, edges) => {
    const tValue = e.target.value;

    console.log("onChange edges: ", edges);

    setEdges((prev) => {
      const finIndex = prev.findIndex((p) => p.selected === true);
      let copiedItems = [...prev];
      copiedItems[finIndex].data = {
        ...copiedItems[finIndex].data,
        label: tValue,
      };

      return copiedItems;
    });
  });

  const onConnect = useCallback(
    (connection) => {
      // console.log("onConnect");
      // console.log("onConnect nodes : ", nodes);
      // debugger;

      const source = nodes.find((n) => n.id === connection.source);
      const target = nodes.find((n) => n.id === connection.target);

      // if (source.data.workDate > target.data.workDate) return;

      connection.data = {
        ...connection.data,
        onChange: onChange,
      };

      setEdges((eds) => {
        return addEdge(connection, eds);
      });
    },

    [nodes, setEdges]
  );

  return (
    <>
      {/* <div>
        <button onClick={onIncrease}>+1</button>
      </div> */}

      <div>
        <button onClick={onNodeRerenderClick}>reRender</button>
        <button onClick={onGetNodesAndEdgesClick}>getNodes</button>
        <button onClick={onGetEdgesClick}>getEdges</button>
      </div>

      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          {...props}
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypes}
          defaultEdgeOptions={defaultEdgeOptions}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={rfStyle}
        />
      </div>
    </>
  );
}

function FlowWidthProvider(props) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWidthProvider;
