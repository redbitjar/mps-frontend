import { useCallback, useEffect, useState } from "react";

import _ from "lodash";

import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  Panel,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  getRectOfNodes,
  getTransformForBounds,
  updateEdge,
  useEdges,
  useEdgesState,
  useNodesState,
  useOnSelectionChange,
  useReactFlow,
} from "reactflow";
// import dagre from "dagre";
import dagre from "dagre";

import "reactflow/dist/style.css";
import "./CustomNode.css";
import { initialNodes, initialEdges } from "./networkData";
import {
  initialNodes as initialNodes2,
  initialEdges as initialEdges2,
} from "./networkData2";
import {
  initialNodes as initialNodes3,
  initialEdges as initialEdges3,
} from "./networkData3";
import {
  initialNodes as initialNodes4,
  initialEdges as initialEdges4,
} from "./networkData4";

import CustomNode from "./CustomNode.js";
import CustomEdge2 from "./CustomEdge2";

import CustomNode2 from "./CustomNode2";
import CustomNode3 from "./CustomNode3";
import CustomNode4 from "./CustomNode4";
import { toPng } from "html-to-image";

window.interfaces = {};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 60;
const nodeHeight = 60;

const getLayoutedElements = (nodes, edges, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);
const onLoad = (reactFlowInstance) => {
  debugger;
  setTimeout(() => reactFlowInstance.fitView(), 0);
};

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

const nodeTypes = {
  cpm: CustomNode,
  cpmMain: CustomNode2,
  cpmEnd: CustomNode3,
  cpmEvent: CustomNode4,
};
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
let originalData = {};
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

function nodesRerender2(sourceNode, parentIndex) {
  let { id, data, prevEdges, prevNodes, targetEdges } = sourceNode;
  const { est: sourceEst, lst: sourceLst, startDate } = data;

  let _targetNodeIds = targetEdges.map((m) => m.target);
  let _targetNodes = [];
  _targetNodeIds.forEach((_ids) => {
    // _targetNodes.push(reRenderNodes.find((f) => f.data.blockName === _ids));
    _targetNodes.push(reRenderNodes.find((f) => f.id === _ids));
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
      // _tPrevNodes.push(reRenderNodes.find((f) => f.data.blockName === _ids));
      _tPrevNodes.push(reRenderNodes.find((f) => f.id === _ids));
    });

    _tPrevNodes.forEach((_tPrevNode, _tPrevIdx) => {
      const {
        est: prevEst,
        lst: prevLst,
        startDate: prestartDate,
      } = _tPrevNode.data;
      const { label: prevLabel } = tPrevEdges[_tPrevIdx].data;
      const _tempEst = Number(prevEst) + Number(prevLabel || 0);
      const _tempLst = Number(prevLst) + Number(prevLabel || 0);
      const _d = prestartDate.split("-");
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
      startDate: toStringByFormatting(maxDate),
      endDate: toStringByFormatting(maxDate),
    };

    nodesRerender2(_targetNode);
  });
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
      // _tPrevNodes.push(reRenderNodes.find((f) => f.data.blockName === _ids));
      _tPrevNodes.push(reRenderNodes.find((f) => f.id === _ids));
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
          // (f) => f.data.blockName === _targetEdge.target
          (f) => f.id === _targetEdge.target
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
        let minDate = new Date(8640000000000000);
        for (let _targetEdge of tTargetEdges) {
          let _tNode = reRenderNodes.find(
            // (f) => f.data.blockName === _targetEdge.target
            (f) => f.id === _targetEdge.target
          );
          const { label: targetLabel } = _targetEdge.data;
          const { lst: targetLst, endDate: targetEndDate } = _tNode.data;
          const _tempLst = Number(targetLst) - Number(targetLabel || 0);
          const _d = targetEndDate.split("-");
          const _tempDate = new Date(_d[0], _d[1] - 1, _d[2]);
          _tempDate.setDate(_tempDate.getDate() - Number(targetLabel || 0));
          minLst = minLst > _tempLst ? _tempLst : minLst;
          minDate = minDate > _tempDate ? _tempDate : minDate;
        }
        _node.data.lst = minLst;
        _node.data.endDate = toStringByFormatting(minDate);
      }
    }
  }
}

const defaultViewport = { x: 0, y: 0, zoom: 1 };
const snapGrid = [25, 25];
let cnt = 0;
const imageWidth = 1024;
const imageHeight = 768;

function downloadImage(dataUrl) {
  const a = document.createElement("a");

  a.setAttribute("download", "reactflow.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

const getNodeId = () => `randomnode_${+new Date()}`;

function Flow(props) {
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const { getNodes } = useReactFlow();

  const [reactflowInstance, setReactflowInstance] = useState(null);

  const handleResize = useCallback(() => {
    reactflowInstance && reactflowInstance.fitView();
  }, [reactflowInstance]);

  const onInit = useCallback(
    (flowInstance) => {
      // setNodes([...props.nodes]);
      // setEdges([...props.edges]);

      if (!reactflowInstance) {
        setReactflowInstance(flowInstance);
        // setTimeout(() => fitViewTestClick(), 0);
      }

      // cnt++;
      // setNodes([...initialNodes]);
    },
    [props.nodes, props.edges, setNodes, setEdges, reactflowInstance]
  );

  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
      debugger;
      // fitViewTestClick();
      setTimeout(() => reactflowInstance.fitView(), 0.5);
    },
    [nodes, edges, reactflowInstance]
  );

  const onDownImgClick = useCallback(() => {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );

    toPng(document.querySelector(".react-flow__viewport"), {
      backgroundColor: "#1a365d",
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then(downloadImage);
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    reactflowInstance && setTimeout(() => reactflowInstance.fitView(), 0);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, reactflowInstance]);

  // useEffect(() => {
  //   cnt++;
  //   setNodes([...initialNodes]);
  // }, []);

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
    return {
      nodes: nodes,
      edges: edges,
      originalData: originalData,
    };
  });
  const onEdgesClear = useCallback((e) => {
    console.log("------ ", edges);
    setEdges([]);
  });

  const onIdUpdate = useCallback((id) => {
    originalData.id = id;
  });
  const onIFDataNodeBind = useCallback((nodes, edges, rawData) => {
    let initialNodes = nodes || [];
    let initialEdges = edges || [];
    originalData = rawData || {};
    // initialEdges
    //   .filter((f) => f.data && f.data.criticalPath === true)
    //   .forEach((e) => (e.animated = true));
    // initialEdges.forEach((e) => (e.data.onChange = onChange));
    initialEdges.forEach((e) => {
      if (e.data) e.data.onChange = onChange;
    });
    setNodes([...initialNodes]);
    setEdges([...initialEdges]);

    setTimeout(() => fitViewTestClick(), 0);
  });

  const onDataNodeBind = useCallback((e) => {
    let _initNode = _.cloneDeep[nodes];

    if (cnt === 1) {
      cnt++;
      // initialEdges2
      //   .filter((f) => f.data && f.data.criticalPath === true)
      //   .forEach((e) => (e.animated = true));
      initialEdges2.forEach((e) => (e.data.onChange = onChange));
      // debugger;
      setNodes([...initialNodes2]);
      setEdges([...initialEdges2]);
    } else if (cnt === 2) {
      cnt++;
      // initialEdges3
      //   .filter((f) => f.data && f.data.criticalPath === true)
      //   .forEach((e) => (e.animated = true));
      initialEdges3.forEach((e) => (e.data.onChange = onChange));
      setNodes([...initialNodes3]);
      setEdges([...initialEdges3]);
    } else {
      cnt = 1;
      let _initialEdges = initialEdges;
      // initialEdges
      //   .filter((f) => f.data && f.data.criticalPath === true)
      //   .forEach((e) => (e.animated = true));
      initialEdges.forEach((e) => (e.data.onChange = onChange));
      initialEdges.forEach((e) => {
        if (e.data) e.data.onChange = onChange;
      });
      setNodes([...initialNodes]);
      setEdges([...initialEdges]);
    }
    setTimeout(() => fitViewTestClick(), 0);
    // console.log("------ ", edges);
  });

  const onNodeRerenderClick = useCallback((e) => {
    reRenderNodes = _.cloneDeep(nodes);
    reRenderEdges = _.cloneDeep(edges);
    reRenderNodes.forEach((f) => {
      if (!f.data) f.data = {};
      f.data.criticalPath = false;
    });
    reRenderEdges.forEach((f) => {
      if (!f.data) f.data = {};
      f.data.criticalPath = false;
    });
    nodesConnectEdges2(reRenderEdges);
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

    setNodes(reRenderNodes);
    setEdges(reRenderEdges);
  });

  const fitViewTestClick = useCallback(
    (e) => {
      debugger;
      reactflowInstance.fitView();
    },
    [reactflowInstance]
  );

  window.interfaces.onGetNodesAndEdgesClick = onGetNodesAndEdgesClick;
  window.interfaces.onNodeRerenderClick = onNodeRerenderClick;
  window.interfaces.onDataNodeBind = onIFDataNodeBind;
  window.interfaces.onIdUpdate = onIdUpdate;

  const onChange = useCallback((e, edges) => {
    const tValue = e.target.value;
    let selectedEdge = edges.find((f) => f.id === e.target.dataset.id);
    selectedEdge.selected = true;
    console.log("onChange edges: ", edges);

    setEdges((prev) => {
      const finIndex = prev.findIndex((p) => p.id === selectedEdge.id);
      let copiedItems = [...prev];
      copiedItems[finIndex].data = {
        ...copiedItems[finIndex].data,
        label: tValue,
      };

      return copiedItems;
    });
    window.interfaces.onNodeRerenderClick();
  });

  const onAdd = useCallback(() => {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight;
    const newNode = {
      id: getNodeId(),
      type: "cpmEvent",
      data: {
        est: 0,
        lst: 0,
        blockName: "Event",
        startDate: "",
        endDate: "",
      },
      width: 70,
      height: 55,
      selected: false,
      positionAbsolute: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      dragging: false,
      targetEdges: [],
      prevEdges: [],
    };
    setNodes((nds) => {
      return [...nds, newNode];
      // let _nds = nds;
      // debugger;
      // nds.concat(newNode);
      // debugger;
    });
  }, [setNodes]);

  const onConnect = useCallback(
    (connection) => {
      // console.log("onConnect");
      // console.log("onConnect nodes : ", nodes);
      // debugger;

      const source = nodes.find((n) => n.id === connection.source);
      const target = nodes.find((n) => n.id === connection.target);

      // if (source.data.startDate > target.data.startDate) return;

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
  const { setViewport, zoomIn, zoomOut } = useReactFlow();

  const handleTransform = useCallback(() => {
    setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 800 });
  }, [setViewport]);

  return (
    <>
      {/* <div>
        <button onClick={onIncrease}>+1</button>
      </div> */}

      <div>
        <button onClick={onNodeRerenderClick}>reRender</button>
        <button onClick={onGetNodesAndEdgesClick}>getNodes</button>
        <button onClick={onEdgesClear}>edgesClear</button>
        <button onClick={onDataNodeBind}>onDataChange</button>
        <button onClick={fitViewTestClick}>fitview</button>
      </div>

      {/* <div style={{ width: "100vw", height: "100vh" }}> */}
      <div style={{ height: 800 }}>
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
          // onLoad={(instance) => setTimeout(() => instance.fitView(), 0)}
          onInit={onInit}
          // onLoad={onLoad}
          // minZoom={0.2}
          fitView
          snapToGrid={true}
          proOptions={{ hideAttribution: true }}
          snapGrid={[25, 25]}
          fitViewOptions={{ padding: 4 }}
          // defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
          // attributionPosition="top-right"
          style={rfStyle}
        >
          <Panel position="top-right">
            {/* <button onClick={() => zoomIn({ duration: 800 })}>zoom in</button>
            <button onClick={() => zoomOut({ duration: 800 })}>zoom out</button>
            <button onClick={handleTransform}>pan to center(0,0,1)</button> */}
            <button onClick={() => onLayout("TB")}>위아래 정렬</button>
            <button onClick={() => onLayout("LR")}>왼쪽오른쪽 정렬</button>
            <button onClick={onDownImgClick}>다운로드</button>
            <button onClick={onAdd}>이벤트 추가</button>
          </Panel>
          <Controls />
          {/* <Background
            id="1"
            gap={10}
            color="#f1f1f1"
            variant={BackgroundVariant.Lines}
          />
          <Background
            id="2"
            gap={100}
            offset={1}
            color="#ccc"
            variant={BackgroundVariant.Lines}
          /> */}
        </ReactFlow>
        {/* <Background variant="dots" gap={12} size={1} /> */}
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
