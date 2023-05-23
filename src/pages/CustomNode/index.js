import { useCallback, useState } from "react";
import ReactFlow, {
  MarkerType,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomNode from "./CustomNode.js";

import "./CustomNode.css";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: "node-1" },
  },
  {
    id: "node-2",
    type: "textUpdater",
    position: { x: 100, y: 0 },
    data: { value: "node-2" },
  },
  {
    id: "node-3",
    type: "textUpdater",
    position: { x: 0, y: 100 },
    data: { value: "node-3" },
  },
  {
    id: "node-4",
    type: "textUpdater",
    position: { x: 100, y: 100 },
    data: { value: "node-4" },
  },  
  
  {
    id: "node-5",
    type: "textUpdater",
    position: { x: 200, y: 0 },
    data: { value: "node-5" },
  },
  {
    id: "node-6",
    type: "textUpdater",
    position: { x: 300, y: 0 },
    data: { value: "node-6" },
  },
  {
    id: "node-7",
    type: "textUpdater",
    position: { x: 200, y: 100 },
    data: { value: "node-7" },
  },
  {
    id: "node-8",
    type: "textUpdater",
    position: { x: 300, y: 100 },
    data: { value: "node-8" },
  },  

  {
    id: "node-9",
    type: "textUpdater",
    position: { x: 0, y: 200 },
    data: { value: "node-9" },
  },
  {
    id: "node-10",
    type: "textUpdater",
    position: { x: 100, y: 200 },
    data: { value: "node-10" },
  },
  {
    id: "node-11",
    type: "textUpdater",
    position: { x: 200, y: 200 },
    data: { value: "node-11" },
  },
  {
    id: "node-12",
    type: "textUpdater",
    position: { x: 300, y: 200 },
    data: { value: "node-12" },
  }, 
];

const initialEdges = [
  {
    id: "e1-3",
    source: "node-1",
    target: "node-3",
  },
  {
    id: "e1-9",
    source: "node-3",
    target: "node-9",
  },
  {
    id: "e1-7",
    source: "node-5",
    target: "node-7",
  },
  {
    id: "e1-11",
    source: "node-7",
    target: "node-11",
  },
  // {
  //   id: "e1-3",
  //   source: "1",
  //   target: "3",
  // },
];

const nodeTypes = { textUpdater: CustomNode };

const defaultEdgeOptions = {  
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: 'black',
  },
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    
    <ReactFlow
      nodes={nodes}
      edges={edges}
      defaultEdgeOptions={defaultEdgeOptions}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
    />
  );
}

export default Flow;
