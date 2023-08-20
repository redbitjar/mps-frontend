export const initialNodes = [
  {
    id: "DF11C",
    type: "cpmMain",
    position: {
      x: -316.37388497652586,
      y: -323.3392018779343,
    },
    data: {
      est: 1,
      lst: 1,
      blockName: "DF11C",
      startDate: "2023-07-01",
      endDate: "2023-07-01",
      criticalPath: true,
    },
    width: 60,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: -316.37388497652586,
      y: -323.3392018779343,
    },
    dragging: false,
    targetEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF11C",
        sourceHandle: null,
        target: "DF21P",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: false,
        },
        id: "reactflow__edge-DF11C-DF21P",
        selected: false,
      },
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF11C",
        sourceHandle: null,
        target: "DF39C",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "2",
        },
        id: "reactflow__edge-DF11C-DF39C",
        selected: false,
      },
    ],
    prevEdges: [],
  },
  {
    id: "DF21P",
    type: "cpm",
    position: {
      x: -428.6,
      y: -227.89999999999998,
    },
    data: {
      est: 2,
      lst: 4,
      blockName: "DF21P",
      startDate: "2023-07-02",
      endDate: "2023-07-04",
      criticalPath: false,
    },
    width: 60,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: -428.6,
      y: -227.89999999999998,
    },
    dragging: false,
    targetEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF21P",
        sourceHandle: null,
        target: "DF31C",
        targetHandle: null,
        data: {
          criticalPath: false,
          label: "3",
        },
        id: "reactflow__edge-DF21P-DF31C",
        selected: false,
      },
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF21P",
        sourceHandle: null,
        target: "DF41C",
        targetHandle: null,
        data: {
          criticalPath: false,
          label: "4",
        },
        id: "reactflow__edge-DF21P-DF41C",
        selected: false,
      },
    ],
    prevEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF11C",
        sourceHandle: null,
        target: "DF21P",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: false,
        },
        id: "reactflow__edge-DF11C-DF21P",
        selected: false,
      },
    ],
  },
  {
    id: "DF31C",
    type: "cpm",
    position: {
      x: -313.5,
      y: -76.5,
    },
    data: {
      est: 8,
      lst: 8,
      blockName: "DF31C",
      startDate: "2023-07-08",
      endDate: "2023-07-08",
      criticalPath: true,
    },
    width: 60,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: -313.5,
      y: -76.5,
    },
    dragging: false,
    targetEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF31C",
        sourceHandle: null,
        target: "DF51P",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "6",
        },
        id: "reactflow__edge-DF31C-DF51P",
        selected: false,
      },
    ],
    prevEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF39C",
        sourceHandle: null,
        target: "DF31C",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "5",
        },
        id: "reactflow__edge-DF39C-DF31C",
        selected: false,
      },
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF21P",
        sourceHandle: null,
        target: "DF31C",
        targetHandle: null,
        data: {
          criticalPath: false,
          label: "3",
        },
        id: "reactflow__edge-DF21P-DF31C",
        selected: false,
      },
    ],
  },
  {
    id: "DF39C",
    type: "cpm",
    position: {
      x: -183.29999999999998,
      y: -188.5,
    },
    data: {
      est: 3,
      lst: 3,
      blockName: "DF39C",
      startDate: "2023-07-03",
      endDate: "2023-07-03",
      criticalPath: true,
    },
    width: 60,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: -183.29999999999998,
      y: -188.5,
    },
    dragging: false,
    targetEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF39C",
        sourceHandle: null,
        target: "DF31C",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "5",
        },
        id: "reactflow__edge-DF39C-DF31C",
        selected: false,
      },
    ],
    prevEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF11C",
        sourceHandle: null,
        target: "DF39C",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "2",
        },
        id: "reactflow__edge-DF11C-DF39C",
        selected: false,
      },
    ],
  },
  {
    id: "DF41C",
    type: "cpm",
    position: {
      x: -422.5,
      y: -1.5,
    },
    data: {
      est: 6,
      lst: 8,
      blockName: "DF41C",
      startDate: "2023-07-06",
      endDate: "2023-07-08",
      criticalPath: false,
    },
    width: 60,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: -422.5,
      y: -1.5,
    },
    dragging: false,
    targetEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF41C",
        sourceHandle: null,
        target: "DF61P",
        targetHandle: null,
        data: {
          criticalPath: false,
          label: "7",
        },
        id: "reactflow__edge-DF41C-DF61P",
        selected: true,
      },
    ],
    prevEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF21P",
        sourceHandle: null,
        target: "DF41C",
        targetHandle: null,
        data: {
          criticalPath: false,
          label: "4",
        },
        id: "reactflow__edge-DF21P-DF41C",
        selected: false,
      },
    ],
  },
  {
    id: "DF51P",
    type: "cpm",
    position: {
      x: -162.7,
      y: -45.400000000000006,
    },
    data: {
      est: 14,
      lst: 14,
      blockName: "DF51P",
      startDate: "2023-07-14",
      endDate: "2023-07-14",
      criticalPath: true,
    },
    width: 60,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: -162.7,
      y: -45.400000000000006,
    },
    dragging: false,
    targetEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF51P",
        sourceHandle: null,
        target: "DF61P",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "1",
        },
        id: "reactflow__edge-DF51P-DF61P",
        selected: false,
      },
    ],
    prevEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF31C",
        sourceHandle: null,
        target: "DF51P",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "6",
        },
        id: "reactflow__edge-DF31C-DF51P",
        selected: false,
      },
    ],
  },
  {
    id: "DF61P",
    type: "cpm",
    position: {
      x: -285.5,
      y: 36,
    },
    data: {
      est: 15,
      lst: 15,
      blockName: "DF61P",
      startDate: "2023-07-15",
      endDate: "2023-07-15",
      criticalPath: true,
    },
    width: 60,
    height: 60,
    selected: false,
    positionAbsolute: {
      x: -285.5,
      y: 36,
    },
    dragging: false,
    targetEdges: [],
    prevEdges: [
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF41C",
        sourceHandle: null,
        target: "DF61P",
        targetHandle: null,
        data: {
          criticalPath: false,
          label: "7",
        },
        id: "reactflow__edge-DF41C-DF61P",
        selected: true,
      },
      {
        style: {
          strokeWidth: 3,
          stroke: "black",
        },
        type: "floating",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF51P",
        sourceHandle: null,
        target: "DF61P",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "1",
        },
        id: "reactflow__edge-DF51P-DF61P",
        selected: false,
      },
    ],
  },
];

export const initialEdges = [
  {
    style: {
      strokeWidth: 3,
      stroke: "black",
    },
    type: "floating",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF11C",
    sourceHandle: null,
    target: "DF21P",
    targetHandle: null,
    data: {
      label: "1",
      criticalPath: false,
    },
    id: "reactflow__edge-DF11C-DF21P",
    selected: false,
  },
  {
    style: {
      strokeWidth: 3,
      stroke: "black",
    },
    type: "floating",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF11C",
    sourceHandle: null,
    target: "DF39C",
    targetHandle: null,
    data: {
      criticalPath: true,
      label: "2",
    },
    id: "reactflow__edge-DF11C-DF39C",
    selected: false,
  },
  {
    style: {
      strokeWidth: 3,
      stroke: "black",
    },
    type: "floating",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF39C",
    sourceHandle: null,
    target: "DF31C",
    targetHandle: null,
    data: {
      criticalPath: true,
      label: "5",
    },
    id: "reactflow__edge-DF39C-DF31C",
    selected: false,
  },
  {
    style: {
      strokeWidth: 3,
      stroke: "black",
    },
    type: "floating",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF21P",
    sourceHandle: null,
    target: "DF31C",
    targetHandle: null,
    data: {
      criticalPath: false,
      label: "3",
    },
    id: "reactflow__edge-DF21P-DF31C",
    selected: false,
  },
  {
    style: {
      strokeWidth: 3,
      stroke: "black",
    },
    type: "floating",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF21P",
    sourceHandle: null,
    target: "DF41C",
    targetHandle: null,
    data: {
      criticalPath: false,
      label: "4",
    },
    id: "reactflow__edge-DF21P-DF41C",
    selected: false,
  },
  {
    style: {
      strokeWidth: 3,
      stroke: "black",
    },
    type: "floating",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF41C",
    sourceHandle: null,
    target: "DF61P",
    targetHandle: null,
    data: {
      criticalPath: false,
      label: "7",
    },
    id: "reactflow__edge-DF41C-DF61P",
    selected: false,
  },
  {
    style: {
      strokeWidth: 3,
      stroke: "black",
    },
    type: "floating",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF31C",
    sourceHandle: null,
    target: "DF51P",
    targetHandle: null,
    data: {
      criticalPath: true,
      label: "6",
    },
    id: "reactflow__edge-DF31C-DF51P",
    selected: false,
  },
  {
    style: {
      strokeWidth: 3,
      stroke: "black",
    },
    type: "floating",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF51P",
    sourceHandle: null,
    target: "DF61P",
    targetHandle: null,
    data: {
      criticalPath: true,
      label: "1",
    },
    id: "reactflow__edge-DF51P-DF61P",
    selected: false,
  },
];
