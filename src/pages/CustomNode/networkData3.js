export const initialNodes = [
  {
    id: "DF11C",
    type: "cpmMain",
    position: {
      x: -396,
      y: -280.5,
    },
    data: {
      est: 1,
      lst: 1,
      blockName: "DF11C",
      workDate: "2023-07-01",
      criticalPath: true,
    },
    width: 70,
    height: 55,
    selected: false,
    positionAbsolute: {
      x: -396,
      y: -280.5,
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
          criticalPath: false,
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
        target: "DF31C",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "2",
        },
        id: "reactflow__edge-DF11Cb-DF31C",
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
          criticalPath: true,
          label: "3",
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
      x: -517.5,
      y: -177,
    },
    data: {
      est: 2,
      lst: 5,
      blockName: "DF21P",
      workDate: "2023-07-02",
      criticalPath: false,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -517.5,
      y: -177,
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
        target: "DF41C",
        targetHandle: null,
        data: {
          criticalPath: false,
          label: "4",
        },
        id: "reactflow__edge-DF21Pb-DF41C",
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
        target: "DF21P",
        targetHandle: null,
        data: {
          label: "1",
          criticalPath: false,
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
      x: -369,
      y: -134.5,
    },
    data: {
      est: 3,
      lst: 3,
      blockName: "DF31C",
      workDate: "2023-07-03",
      criticalPath: true,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -369,
      y: -134.5,
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
          label: "6",
          criticalPath: true,
        },
        id: "reactflow__edge-DF31Cb-DF41C",
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
        target: "DF31C",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "2",
        },
        id: "reactflow__edge-DF11Cb-DF31C",
        selected: false,
      },
    ],
  },
  {
    id: "DF39C",
    type: "cpm",
    position: {
      x: -269.5,
      y: -87.5,
    },
    data: {
      est: 4,
      lst: 4,
      blockName: "DF39C",
      workDate: "2023-07-04",
      criticalPath: true,
    },
    width: 72,
    height: 57,
    selected: true,
    positionAbsolute: {
      x: -269.5,
      y: -87.5,
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
        target: "DF41C",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "5",
        },
        id: "reactflow__edge-DF39Cb-DF41C",
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
          criticalPath: true,
          label: "3",
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
      x: -543.5,
      y: -29.5,
    },
    data: {
      est: 9,
      lst: 9,
      blockName: "DF41C",
      workDate: "2023-07-09",
      criticalPath: true,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -543.5,
      y: -29.5,
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
        source: "DF39C",
        sourceHandle: "b",
        target: "DF41C",
        targetHandle: null,
        data: {
          criticalPath: true,
          label: "5",
        },
        id: "reactflow__edge-DF39Cb-DF41C",
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
          criticalPath: false,
          label: "4",
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
          label: "6",
          criticalPath: true,
        },
        id: "reactflow__edge-DF31Cb-DF41C",
        selected: true,
      },
    ],
  },
  {
    id: "DF51P",
    type: "cpm",
    position: {
      x: -157.5,
      y: -34.5,
    },
    data: {
      est: 0,
      lst: 0,
      blockName: "DF51P",
      workDate: "",
      criticalPath: false,
    },
    width: 72,
    height: 57,
    selected: false,
    positionAbsolute: {
      x: -157.5,
      y: -34.5,
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
      workDate: "",
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
      criticalPath: false,
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
    target: "DF31C",
    targetHandle: null,
    data: {
      criticalPath: true,
      label: "2",
    },
    id: "reactflow__edge-DF11Cb-DF31C",
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
      criticalPath: true,
      label: "3",
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
    target: "DF41C",
    targetHandle: null,
    data: {
      criticalPath: true,
      label: "5",
    },
    id: "reactflow__edge-DF39Cb-DF41C",
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
      criticalPath: false,
      label: "4",
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
      label: "6",
      criticalPath: true,
    },
    id: "reactflow__edge-DF31Cb-DF41C",
    selected: false,
  },
];
