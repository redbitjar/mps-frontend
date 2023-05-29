import { useCallback, useState } from "react";
import ReactFlow, {
  MarkerType,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useEdges,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
// import { initialNodes, initialEdges } from "./nodeData";
import { initialNodes, initialEdges } from "./networkData";

import CustomNode from "./CustomNode.js";
import CustomEdge2 from "./CustomEdge2";

import "./CustomNode.css";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const nodeTypes = { cpm: CustomNode };
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

function Flow(props) {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const edgess = useEdges();
  // const edgess = useEdges();

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
  const onChange = (e) => {
    console.log(e.target.value);
  };
  const onConnect = useCallback(
    (connection) => {
      console.log(connection);
      console.log(nodes);
      console.log(edges);
      console.log(edgess);
      const source = nodes.find((n) => n.id === connection.source);
      const target = nodes.find((n) => n.id === connection.target);
      const diffDay = target.data.est - source.data.est;
      connection.label = diffDay;
      connection.data = {
        ...connection.data,
        label: diffDay,
        onChange: onChange,
      };
      connection.onChange = onChange;
      if (source.data.workDate > target.data.workDate) return;
      setEdges((eds) => {
        return addEdge(connection, eds);
      });
    },
    [setEdges]
  );

  const onIncrease = () => {
    console.log(edges);
    debugger;
    console.log(edgess);
  };

  return (
    <>
      <div>
        <button onClick={onIncrease}>+1</button>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
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
