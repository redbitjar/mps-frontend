export const initialNodes = [
  {
    id: "DF11C",
    type: "cpmMain",
    position: {
      x: -346.5,
      y: -295.5,
    },
    data: {
      est: 1,
      lst: 1,
      blockName: "DF11C",
      startDate: "2023-07-01",
      endDate: "2023-07-01",
      criticalPath: true,
    },
    width: 70,
    height: 55,
    selected: false,
    positionAbsolute: {
      x: -346.5,
      y: -295.5,
    },
    dragging: false,
    targetEdges: [
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF11C",
        sourceHandle: "b",
        target: "DF21P",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: true,
        },
        id: "reactflow__edge-DF11Cb-DF21P",
        selected: false,
      },
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF11C",
        sourceHandle: "b",
        target: "DF39C",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: false,
        },
        id: "reactflow__edge-DF11Cb-DF39C",
        selected: false,
      },
    ],
    prevEdges: [],
  },
  {
    id: "DF21P",
    type: "cpm",
    position: {
      x: -464,
      y: -198.5,
    },
    data: {
      est: 2,
      lst: 2,
      blockName: "DF21P",
      startDate: "2023-07-02",
      endDate: "2023-07-02",
      criticalPath: true,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -464,
      y: -198.5,
    },
    dragging: false,
    targetEdges: [
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF21P",
        sourceHandle: "b",
        target: "DF31C",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: false,
        },
        id: "reactflow__edge-DF21Pb-DF31C",
        selected: false,
      },
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF21P",
        sourceHandle: "b",
        target: "DF41C",
        targetHandle: null,
        data: {
          label: "11",
          criticalPath: true,
        },
        id: "reactflow__edge-DF21Pb-DF41C",
        selected: true,
      },
    ],
    prevEdges: [
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF11C",
        sourceHandle: "b",
        target: "DF21P",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: true,
        },
        id: "reactflow__edge-DF11Cb-DF21P",
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
      est: 4,
      lst: 12,
      blockName: "DF31C",
      startDate: "2023-07-04",
      endDate: "2023-07-12",
      criticalPath: false,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -313.5,
      y: -76.5,
    },
    dragging: false,
    targetEdges: [
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF31C",
        sourceHandle: "b",
        target: "DF41C",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: false,
        },
        id: "reactflow__edge-DF31Cb-DF41C",
        selected: false,
      },
    ],
    prevEdges: [
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF39C",
        sourceHandle: "b",
        target: "DF31C",
        targetHandle: null,
        data: {
          label: "2",
          criticalPath: false,
        },
        id: "reactflow__edge-DF39Cb-DF31C",
        selected: false,
      },
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF21P",
        sourceHandle: "b",
        target: "DF31C",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: false,
        },
        id: "reactflow__edge-DF21Pb-DF31C",
        selected: false,
      },
    ],
  },
  {
    id: "DF39C",
    type: "cpm",
    position: {
      x: -217.5,
      y: -188.5,
    },
    data: {
      est: 2,
      lst: 10,
      blockName: "DF39C",
      startDate: "2023-07-02",
      endDate: "2023-07-10",
      criticalPath: false,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -217.5,
      y: -188.5,
    },
    dragging: false,
    targetEdges: [
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF39C",
        sourceHandle: "b",
        target: "DF31C",
        targetHandle: null,
        data: {
          label: "2",
          criticalPath: false,
        },
        id: "reactflow__edge-DF39Cb-DF31C",
        selected: false,
      },
    ],
    prevEdges: [
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF11C",
        sourceHandle: "b",
        target: "DF39C",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: false,
        },
        id: "reactflow__edge-DF11Cb-DF39C",
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
      est: 13,
      lst: 13,
      blockName: "DF41C",
      startDate: "2023-07-13",
      endDate: "2023-07-13",
      criticalPath: true,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -422.5,
      y: -1.5,
    },
    dragging: false,
    targetEdges: [],
    prevEdges: [
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF21P",
        sourceHandle: "b",
        target: "DF41C",
        targetHandle: null,
        data: {
          label: "11",
          criticalPath: true,
        },
        id: "reactflow__edge-DF21Pb-DF41C",
        selected: true,
      },
      {
        labelBgStyle: {
          fill: "transparent",
        },
        type: "custom",
        markerEnd: {
          type: "arrowclosed",
          color: "black",
        },
        source: "DF31C",
        sourceHandle: "b",
        target: "DF41C",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: false,
        },
        id: "reactflow__edge-DF31Cb-DF41C",
        selected: false,
      },
    ],
  },
  {
    id: "DF51P",
    type: "cpm",
    position: {
      x: -197.5,
      y: -25,
    },
    data: {
      est: 0,
      lst: 0,
      blockName: "DF51P",
      startDate: "",
      endDate: "",
      criticalPath: false,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -197.5,
      y: -25,
    },
    dragging: false,
    targetEdges: [],
    prevEdges: [],
  },
  {
    id: "DF61P",
    type: "cpm",
    position: {
      x: -285.5,
      y: 36,
    },
    data: {
      est: 0,
      lst: 0,
      blockName: "DF61P",
      startDate: "",
      endDate: "",
      criticalPath: false,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -285.5,
      y: 36,
    },
    dragging: false,
    targetEdges: [],
    prevEdges: [],
  },
];

export const initialEdges = [
  {
    labelBgStyle: {
      fill: "transparent",
    },
    type: "custom",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF11C",
    sourceHandle: "b",
    target: "DF21P",
    targetHandle: null,
    data: {
      label: "1",
      criticalPath: true,
    },
    id: "reactflow__edge-DF11Cb-DF21P",
    selected: false,
  },
  {
    labelBgStyle: {
      fill: "transparent",
    },
    type: "custom",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF11C",
    sourceHandle: "b",
    target: "DF39C",
    targetHandle: null,
    data: {
      label: "1",
      criticalPath: false,
    },
    id: "reactflow__edge-DF11Cb-DF39C",
    selected: false,
  },
  {
    labelBgStyle: {
      fill: "transparent",
    },
    type: "custom",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF39C",
    sourceHandle: "b",
    target: "DF31C",
    targetHandle: null,
    data: {
      label: "2",
      criticalPath: false,
    },
    id: "reactflow__edge-DF39Cb-DF31C",
    selected: false,
  },
  {
    labelBgStyle: {
      fill: "transparent",
    },
    type: "custom",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF21P",
    sourceHandle: "b",
    target: "DF31C",
    targetHandle: null,
    data: {
      label: "1",
      criticalPath: false,
    },
    id: "reactflow__edge-DF21Pb-DF31C",
    selected: false,
  },
  {
    labelBgStyle: {
      fill: "transparent",
    },
    type: "custom",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF21P",
    sourceHandle: "b",
    target: "DF41C",
    targetHandle: null,
    data: {
      label: "11",
      criticalPath: true,
    },
    id: "reactflow__edge-DF21Pb-DF41C",
    selected: false,
  },
  {
    labelBgStyle: {
      fill: "transparent",
    },
    type: "custom",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "DF31C",
    sourceHandle: "b",
    target: "DF41C",
    targetHandle: null,
    data: {
      label: "1",
      criticalPath: false,
    },
    id: "reactflow__edge-DF31Cb-DF41C",
    selected: false,
  },
];
