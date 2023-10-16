import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  Panel,
  ReactFlowProvider,
  addEdge,
  getRectOfNodes,
  getTransformForBounds,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";

import TreeMapNode from "./TreeMapNode";

import "reactflow/dist/style.css";
import "./TreeMpaNode.css";
import { initialEdges, initialNodes } from "./treeMapSampleData";

// import "./style.css";

window.interfaces = {};

const rfStyle = {
  // backgroundColor: "#B8CEFF",
  backgroundColor: "#ececec",
};

const nodeTypes = {
  cpm: TreeMapNode,
};

let reRenderNodes = [];
let reRenderEdges = [];
let originalData = {};

/* Start */
function TreeMap(props) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  //   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isConnectedToggle, setIsConnectedToggle] = useState(false);
  const isConnectedMounted = useRef(false);
  // const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const { getNodes } = useReactFlow();
  const { setViewport, zoomIn, zoomOut } = useReactFlow();

  const onGetNodesAndEdgesClick = useCallback((e) => {
    console.log("------ ", nodes);
    console.log("------ ", edges);

    return {
      nodes: nodes,
      edges: edges,
      originalData: originalData,
    };
  });

  const onIFDataNodeBind = useCallback((caseId, gongsaNo, nodes, rawData) => {
    let initialNodes = nodes || [];
    originalData = rawData || {};
    debugger;
    setNodes([...initialNodes]);
  });

  const onIFGetBlockLayout = useCallback((e) => {
    console.log(nodes);
    console.log(originalData);
    debugger;
    return {
      nodes: nodes,
      originalData: originalData,
    };
  });

  const onIFIdUpdate = useCallback((id) => {
    originalData.id = id;
    debugger;
  });

  window.interfaces.onBlockLayoutBind = onIFDataNodeBind;
  window.interfaces.onGetBlockLayout = onIFGetBlockLayout;
  window.interfaces.onIFIdUpdate = onIFIdUpdate;

  return (
    <>
      {/* <div
        style={{
          width: "100%",
          height: "40px",
          marginBottom: "5px",
          backgroundColor: "red",
        }}
      > */}
      {/* <button onClick={onNodeRerenderClick}>reRender</button> */}
      {/* <button onClick={onGetNodesAndEdgesClick}>getNodes</button> */}
      {/* <button onClick={onEdgesClear}>edgesClear</button>
        <button onClick={onDataNodeBind}>onDataChange</button>
        <button onClick={fitViewTestClick}>fitview</button>
        <button onClick={submit}>confirm</button>
        <button onClick={onInputFocus}>focus</button> */}
      {/* // </div> */}
      {/* <div>
        <button onClick={submit}>confirm</button>
      </div> */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        // fitView
        nodeTypes={nodeTypes}
        // edgeTypes={edgeTypes}
        // defaultEdgeOptions={defaultEdgeOptions}
        proOptions={{ hideAttribution: true }}
        // isValidConnection={isValidConnection}
        // onInit={onInit}
        snapGrid={[10, 10]}
        snapToGrid={true}
        // fitViewOptions={{ padding: 2 }}
        style={rfStyle}
      >
        <Panel position="top-right"></Panel>
        <Background
          id="1"
          gap={10}
          color="#f1f1f1"
          variant={BackgroundVariant.Lines}
        />
        <Background
          id="2"
          gap={10}
          // gap={10}
          offset={1}
          color="#ccc"
          variant={BackgroundVariant.Lines}
        />
      </ReactFlow>
    </>
  );
}

function FlowWidthProvider(props) {
  return (
    <ReactFlowProvider>
      <TreeMap {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWidthProvider;
