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

let reRenderNodes = [];
let reRenderEdges = [];
let criticalPath = [];
// copiedNodes = _.cloneDeep(initialNodes);

function nodesConnectEdges2(edges) {
  for (let _node of reRenderNodes) {
    _node.targetEdges = [];
    // _node.targetNodes = [];
    _node.prevEdges = [];
    // _node.prevNodes = [];

    for (let _edges of edges) {
      if (_edges.source === _node.id) {
        // _node.data.weight = _edges.data.label;
        _node.targetEdges.push(_edges);
        // _node.targetNodes.push(
        //   reRenderNodes.find((f) => f.id === _edges.target)
        // );
      } else if (_edges.target === _node.id) {
        _node.prevEdges.push(_edges);
        // _node.prevNodes.push(reRenderNodes.find((f) => f.id === _edges.source));
      }
    }
  }
}

function nodesConnectEdges(edges) {
  // console.log("nodesConnectEdges---------start");
  // // console.log("reRenderNodes : ", nodes);
  // console.log("reRenderNodes : ", reRenderNodes);
  // console.log("edges : ", edges);
  // console.log("nodesConnectEdges---------end");
  // debugger;

  // 1. 엣지 검색
  // let connectedEdges = edges.filter(f => f.soruce === parentNode.id)
  // 2. reRenderNodes부터 타겟 노드 검색
  // 3. reRenderNodes에 parent Node 검색
  // 3.1 parent Node 정보 수정
  // 3.2 target 노드 배열 추가
  // 3.3 edge label 정보 추가
  // reRenderNodes

  for (let _node of reRenderNodes) {
    _node.targetEdges = [];
    _node.targetNodes = [];
    _node.prevEdges = [];
    _node.prevNodes = [];

    for (let _edges of edges) {
      if (_edges.source === _node.id) {
        // _node.data.weight = _edges.data.label;
        _node.targetEdges.push(_edges);
        _node.targetNodes.push(
          reRenderNodes.find((f) => f.id === _edges.target)
        );
      } else if (_edges.target === _node.id) {
        _node.prevEdges.push(_edges);
        _node.prevNodes.push(reRenderNodes.find((f) => f.id === _edges.source));
      }
    }
  }
}

function nodesRerender2(sourceNode, parentIndex) {
  let { id, data, prevEdges, prevNodes, targetEdges } = sourceNode;
  const { est: sourceEst, lst: sourceLst, workDate } = data;

  let _targetNodeIds = targetEdges.map((m) => m.target);
  let _targetNodes = [];
  _targetNodeIds.forEach((_ids) => {
    _targetNodes.push(reRenderNodes.find((f) => f.data.blockName === _ids));
  });

  _targetNodes.forEach((_targetNode, _idx) => {
    // const label = targetEdges[_idx].data.label;
    // let maxEst = Number(label || 0) + sourceEst;
    // let maxlst = Number(label || 0) + sourceLst

    let maxEst = Number.MIN_SAFE_INTEGER;
    let maxLst = Number.MIN_SAFE_INTEGER;
    // let maxLabel = Number.MIN_SAFE_INTEGER;
    let maxDate = new Date(0);

    const { prevEdges: tPrevEdges } = _targetNode;

    let _prevNodeIds = tPrevEdges.map((m) => m.source);
    let _tPrevNodes = [];
    _prevNodeIds.forEach((_ids) => {
      _tPrevNodes.push(reRenderNodes.find((f) => f.data.blockName === _ids));
    });

    _tPrevNodes.forEach((_tPrevNode, _tPrevIdx) => {
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

    nodesRerender2(_targetNode);
  });
}

// function nodesRerender(sourceNode, parentIndex) {
//   let { id, data, prevEdges, prevNodes, targetEdges, targetNodes } = sourceNode;
//   const { est: sourceEst, lst: sourceLst, workDate } = data;

//   targetNodes.forEach((_targetNode, _idx) => {
//     // const label = targetEdges[_idx].data.label;
//     // let maxEst = Number(label || 0) + sourceEst;
//     // let maxlst = Number(label || 0) + sourceLst

//     let maxEst = Number.MIN_SAFE_INTEGER;
//     let maxLst = Number.MIN_SAFE_INTEGER;
//     // let maxLabel = Number.MIN_SAFE_INTEGER;
//     let maxDate = new Date(0);
//     const _data = data;

//     const { prevEdges: tPrevEdges, prevNodes: tPrevNodes } = _targetNode;
//     tPrevNodes.forEach((_tPrevNode, _tPrevIdx) => {
//       const {
//         est: prevEst,
//         lst: prevLst,
//         workDate: preWorkDate,
//       } = _tPrevNode.data;
//       const { label: prevLabel } = tPrevEdges[_tPrevIdx].data;
//       const _tempEst = Number(prevEst) + Number(prevLabel || 0);
//       const _tempLst = Number(prevLst) + Number(prevLabel || 0);
//       const _d = preWorkDate.split("-");
//       const _tempDate = new Date(_d[0], _d[1] - 1, _d[2]);
//       _tempDate.setDate(_tempDate.getDate() + Number(prevLabel || 0));

//       maxEst = _tempEst > maxEst ? _tempEst : maxEst;
//       maxLst = _tempLst > maxLst ? _tempLst : maxLst;
//       maxDate = _tempDate > maxDate ? _tempDate : maxDate;
//     });

//     _targetNode.data = {
//       ..._targetNode.data,
//       est: maxEst,
//       lst: maxLst,
//       workDate: toStringByFormatting(maxDate),
//     };

//     nodesRerender(_targetNode);
//   });
// }

function reverseNodesRerender2(sourceNode, edges) {
  let _reRenderNodes = reRenderNodes;
  let _reRenderEdges = reRenderEdges;
  let _sourceNode = sourceNode;
  debugger;
}
function reverseNodesRerender(sourceNode, edges) {
  let needVisit = []; // 탐색해야할 노드들
  needVisit.push(sourceNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const _node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.

    // 큐에 이전 노드 입력 시작
    const { prevEdges: tPrevEdges } = _node;
    let _prevNodeIds = tPrevEdges.map((m) => m.source);
    let _tPrevNodes = [];
    _prevNodeIds.forEach((_ids) => {
      _tPrevNodes.push(reRenderNodes.find((f) => f.data.blockName === _ids));
    });
    needVisit = [...needVisit, ..._tPrevNodes];
    // 큐에 이전 노드 입력 끝

    if (_node.targetEdges.length === 0) {
      continue;
    } else {
      let { targetEdges: tTargetEdges } = _node;
      let criticalPathNode = false;

      for (let _targetEdge of tTargetEdges) {
        let _tNode = reRenderNodes.find(
          (f) => f.data.blockName === _targetEdge.target
        );
        if (
          _node.data.est + Number(_targetEdge.data.label) === _tNode.data.est &&
          _tNode.data.criticalPath
        ) {
          criticalPathNode = true;
          _targetEdge.data.criticalPath = true;
        } else {
          _targetEdge.data.criticalPath = false;
        }
      }
      _node.data.criticalPath = criticalPathNode;

      if (criticalPathNode === false) {
        let minLst = Number.MAX_SAFE_INTEGER;
        for (let _targetEdge of tTargetEdges) {
          let _tNode = reRenderNodes.find(
            (f) => f.data.blockName === _targetEdge.target
          );
          const { label: targetLabel } = _targetEdge.data;
          const { lst: targetLst } = _tNode.data;
          const _tempLst = Number(targetLst) - Number(targetLabel || 0);
          minLst = minLst > _tempLst ? _tempLst : minLst;
        }
        _node.data.lst = minLst;
      }
    }
  }
}

// function reverseNodesRerender(sourceNode, edges) {
//   let prevNodes = sourceNode.prevNodes;
//   let criticalNode;
//   for (let node of prevNodes) {
//     // debugger;
//     let criticalEdge = edges.find(
//       (e) =>
//         e.source === node.data.blockName &&
//         e.target === sourceNode.data.blockName
//     );
//     if (
//       sourceNode.data.est === node.data.est + Number(criticalEdge.data.label) &&
//       sourceNode.data.criticalPath
//     ) {
//       if (node.type !== "cpmMain") {
//         node.data.criticalPath = true;
//       }

//       criticalEdge.style = {
//         strokeWidth: 1,
//         stroke: "#FF0072",
//       };
//     } else {
//       if (node.type !== "cpmMain") {
//         if (node.id === "DF39C") debugger;
//         const isRefCriticalPath = node.targetNodes.findIndex(
//           (f) => f.data.criticalPath === true
//         );
//         if (isRefCriticalPath) return;
//         node.data.criticalPath = false;
//         node.data.lst = sourceNode.data.est - Number(criticalEdge.data.label);
//         // if (node.targetEdges.length === 1) {
//         //   node.data.lst = sourceNode.data.lst - Number(criticalEdge.data.label);
//         // }
//       }
//       criticalEdge.style = {
//         strokeWidth: 1,
//         stroke: "#b1b1b7",
//       };
//     }
//     reverseNodesRerender(node, edges);
//   }
// }

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
    console.log(
      nodes.filter((f) => f.data.criticalPath === true).map((m) => m.id)
    );
    console.log(
      edges
        .filter((f) => f.data.criticalPath === true)
        .map((m) => ({ [m.source]: m.target }))
    );
    debugger;
    return {
      nodes: nodes,
      edges: edges,
    };
  });
  const onGetEdgesClick = useCallback((e) => {
    console.log("------ ", edges);
  });

  const onGetCriticalPathClick = useCallback((e) => {
    // console.log("------ ", edges);
  });

  const onNodeRerenderClick = useCallback((e) => {
    reRenderNodes = _.cloneDeep(nodes);
    reRenderEdges = _.cloneDeep(edges);
    reRenderNodes.forEach((f) => (f.data.criticalPath = false));
    reRenderEdges.forEach((f) => (f.data.criticalPath = false));
    nodesConnectEdges2(reRenderEdges);
    debugger;
    const rootNodeIndex = reRenderNodes.findIndex((n) => n.type === "cpmMain");
    const rootNode = reRenderNodes[rootNodeIndex];
    nodesRerender2(rootNode, rootNodeIndex);

    let leafNodes = reRenderNodes.filter(
      (f) => f.targetEdges.length === 0 && f.prevEdges.length > 0
    );
    leafNodes.forEach((m) => (m.data.criticalPath = true));
    if (leafNodes.length === 1) {
      for (let l of leafNodes) {
        reverseNodesRerender(l, reRenderEdges);
      }
      console.log("nodesRerender edges : " + reRenderEdges);
    }

    for (let _edge of reRenderEdges) {
      if (_edge.data.criticalPath === true) {
        _edge.style = {
          strokeWidth: 1,
          stroke: "#FF0072",
        };
      } else {
        _edge.style = {
          strokeWidth: 1,
          stroke: "#b1b1b7",
        };
      }
    }

    reRenderEdges.filter((f) => f.data.criticalPath === true).forEach((e) => e);

    //   // debugger;
    setNodes(reRenderNodes);
    setEdges(reRenderEdges);
  });

  // const onNodeRerenderClick = useCallback((e) => {
  //   // console.log("onNodeRerenderClick start");
  //   // console.log("nodes : ", nodes);
  //   // console.log("edges : ", edges);
  //   // // console.log("copiedNodes : ", copiedNodes);
  //   // console.log("onNodeRerenderClick end");
  //   // 첫노드 찾기, reRenderNodes 재구성
  //   // const rootNode = nodes.find((n) => n.type === "cpmMain");

  //   reRenderNodes = _.cloneDeep(nodes);
  //   reRenderEdges = _.cloneDeep(edges);
  //   nodesConnectEdges(reRenderEdges);

  //   const rootNodeIndex = reRenderNodes.findIndex((n) => n.type === "cpmMain");
  //   const rootNode = reRenderNodes[rootNodeIndex];

  //   nodesRerender(rootNode, rootNodeIndex);
  //   // debugger;
  //   let leafNodes = reRenderNodes.filter(
  //     (f) => f.targetNodes.length === 0 && f.prevNodes.length > 0
  //   );
  //   leafNodes.map((m) => (m.data.criticalPath = true));
  //   if (leafNodes.length === 1) {
  //     for (let l of leafNodes) {
  //       // debugger;
  //       reverseNodesRerender(l, reRenderEdges);
  //     }
  //     console.log("nodesRerender edges : " + reRenderEdges);
  //   }

  //   // debugger;

  //   setNodes(reRenderNodes);
  //   setEdges(reRenderEdges);
  // });

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
    debugger;
    window.interfaces.onNodeRerenderClick();
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
        <button onClick={onGetCriticalPathClick}>getCriticalPath</button>
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
