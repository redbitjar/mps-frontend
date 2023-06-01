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
import { Button } from "@mui/material";

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

const cpmChildRerender = function (copiedNodes, edges, nodeConEdges) {
  console.log(copiedNodes);
  console.log(edges);
  console.log(nodeConEdges);

  let sourceNodes = nodeConEdges.map((nce) => {
    return copiedNodes.find((cn) => cn.id === nce.target);
  });

  let sourceNextEdges = [];

  sourceNodes.forEach((sn) => {
    const es = edges.filter((eg) => eg.source === sn.id);
    sourceNextEdges = [...sourceNextEdges, ...es];
  });

  let newRootNodeConEdges = [];

  if (sourceNextEdges.length > 0) {
    newRootNodeConEdges = sourceNextEdges.map((sbNode) => {
      let parentNode = copiedNodes.find((n) => n.id === sbNode.source);

      return {
        sourceEst: parentNode.data.est || 0,
        sourceLst: parentNode.data.lst || 0,
        sourceWorkDate: parentNode.data.workDate,
        source: sbNode.source,
        target: sbNode.target,
        label: sbNode.data.label,
      };
    });

    for (let conEdge of newRootNodeConEdges) {
      const idx = copiedNodes.findIndex((e) => conEdge.target === e.id);

      copiedNodes[idx].data = {
        ...copiedNodes[idx].data,
        est: 0,
        lst: 0,
      };
    }

    for (let conEdge of newRootNodeConEdges) {
      const idx = copiedNodes.findIndex((e) => conEdge.target === e.id);

      copiedNodes[idx].data = {
        ...copiedNodes[idx].data,

        est:
          copiedNodes[idx].data.est >=
          Number(conEdge.sourceEst) + Number(conEdge.label)
            ? copiedNodes[idx].data.est
            : Number(conEdge.sourceEst) + Number(conEdge.label),

        lst:
          copiedNodes[idx].data.lst >=
          Number(conEdge.sourceLst) + Number(conEdge.label)
            ? copiedNodes[idx].data.lst
            : Number(conEdge.sourceLst) + Number(conEdge.label),
      };
    }

    for (let conEdge of newRootNodeConEdges) {
      const idx = copiedNodes.findIndex((e) => conEdge.target === e.id);
      if (
        copiedNodes[idx].data.lst !==
        Number(conEdge.sourceLst) + Number(conEdge.label)
      ) {
        const sourceIdx = copiedNodes.findIndex((e) => conEdge.source === e.id);
        copiedNodes[sourceIdx].data = {
          ...copiedNodes[sourceIdx].data,
          lst: copiedNodes[idx].data.lst - Number(conEdge.label),
        };
      }
    }

    cpmChildRerender(copiedNodes, edges, newRootNodeConEdges);
  }

  // const copy3 = _.cloneDeep(nodeConEdges);
  // if (rootNode && rootNodeConEdges.length > 0) {
  // newRootNodeConEdges = rootNodeConEdges.map((sbNode) => {
  // return {
  // sourceEst: rootNode.data.est && 0,
  // sourceLst: rootNode.data.lst && 0,
  // sourceWorkDate: rootNode.data.workDate,
  // source: sbNode.source,
  // target: sbNode.target,
  // label: sbNode.data.label,

  // };

  // });

  // debugger;
};

const cpmRerender = function (nodes, edges) {
  let copiedNodes = [...nodes];
  const rootNode = copiedNodes.find((n) => n.type === "cpmMain");
  const rootNodeConEdges = edges.filter((e) => e.source === rootNode.id);
  let newRootNodeConEdges = [];

  if (rootNode && rootNodeConEdges.length > 0) {
    newRootNodeConEdges = rootNodeConEdges.map((sbNode) => {
      return {
        sourceEst: rootNode.data.est || 0,
        sourceLst: rootNode.data.lst || 0,
        sourceWorkDate: rootNode.data.workDate,
        source: sbNode.source,
        target: sbNode.target,
        label: sbNode.data.label,
      };
    });

    // debugger;

    for (let conEdge of newRootNodeConEdges) {
      const idx = copiedNodes.findIndex((e) => conEdge.target === e.id);

      copiedNodes[idx].data = {
        ...copiedNodes[idx].data,
        est: Number(conEdge.sourceEst) + Number(conEdge.label),
        lst: Number(conEdge.sourceLst) + Number(conEdge.label),
      };
    }
  } else {
    alert("루트 로드가 연결되지 않았습니다.");
  }

  cpmChildRerender(copiedNodes, edges, newRootNodeConEdges);

  return copiedNodes;
};

function Flow(props) {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const [curConnect, setCurConnect] = useState({});

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
    const tValue = e.target.value;

    setEdges((prev) => {
      const finIndex = prev.findIndex((p) => p.selected === true);
      let copiedItems = [...prev];
      copiedItems[finIndex].data = {
        ...copiedItems[finIndex].data,
        label: tValue,
      };

      return copiedItems;
    });
  };

  const onIncrease = () => {
    // console.log(nodes);
    // console.log(edges);
    // console.log(curConnect);
    const newNodes = cpmRerender(nodes, edges);
    setNodes(newNodes);
    // debugger;
  };

  const onSelectionChange = useCallback(
    (params) => {
      const ret = edges.find((e) => {
        return e.selected && e;
      });
      setCurConnect((prev) => {
        return { ...ret };
      });
    },

    [edges]
  );

  const onConnect = useCallback(
    (connection) => {
      const source = nodes.find((n) => n.id === connection.source);
      const target = nodes.find((n) => n.id === connection.target);
      if (source.data.workDate > target.data.workDate) return;
      connection.data = {
        ...connection.data,
        onChange: onChange,
      };

      setEdges((eds) => {
        // debugger;
        return addEdge(connection, eds);
      });
    },

    [setEdges]
  );

  return (
    <>
      <div>
        {/* <button onClick={onIncrease}>+1</button> */}

        <Button variant="outlined" onClick={onIncrease}>
          연결 재설정
        </Button>
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
          onSelectionChange={onSelectionChange}
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
