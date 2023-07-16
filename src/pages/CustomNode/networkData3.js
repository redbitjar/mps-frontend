export const initialNodes = [
  {
      "id": "DF11C",
      "type": "cpmMain",
      "position": {
          "x": -346.5,
          "y": -295.5
      },
      "data": {
          "est": 1,
          "lst": 1,
          "blockName": "DF11C",
          "startDate": "2023-07-01",
          "endDate": "2023-07-01",
          "criticalPath": true
      },
      "width": 70,
      "height": 55,
      "selected": false,
      "positionAbsolute": {
          "x": -346.5,
          "y": -295.5
      },
      "dragging": false,
      "targetEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF11C",
              "sourceHandle": "b",
              "target": "DF21P",
              "targetHandle": null,
              "data": {
                  "label": "1",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF11Cb-DF21P",
              "selected": false
          },
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF11C",
              "sourceHandle": "b",
              "target": "DF39C",
              "targetHandle": null,
              "data": {
                  "label": "1",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF11Cb-DF39C",
              "selected": false
          }
      ],
      "prevEdges": []
  },
  {
      "id": "DF21P",
      "type": "cpm",
      "position": {
          "x": -464,
          "y": -198.5
      },
      "data": {
          "est": 2,
          "lst": 2,
          "blockName": "DF21P",
          "startDate": "2023-07-02",
          "endDate": "2023-07-02",
          "criticalPath": true
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -464,
          "y": -198.5
      },
      "dragging": false,
      "targetEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF21P",
              "sourceHandle": "b",
              "target": "DF31C",
              "targetHandle": null,
              "data": {
                  "label": "1",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF21Pb-DF31C",
              "selected": false
          },
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF21P",
              "sourceHandle": "b",
              "target": "DF41C",
              "targetHandle": null,
              "data": {
                  "label": "11",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF21Pb-DF41C",
              "selected": false
          }
      ],
      "prevEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF11C",
              "sourceHandle": "b",
              "target": "DF21P",
              "targetHandle": null,
              "data": {
                  "label": "1",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF11Cb-DF21P",
              "selected": false
          }
      ]
  },
  {
      "id": "DF31C",
      "type": "cpm",
      "position": {
          "x": -313.5,
          "y": -76.5
      },
      "data": {
          "est": 4,
          "lst": 10,
          "blockName": "DF31C",
          "startDate": "2023-07-04",
          "endDate": "2023-07-10",
          "criticalPath": false
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -313.5,
          "y": -76.5
      },
      "dragging": false,
      "targetEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF31C",
              "sourceHandle": "b",
              "target": "DF41C",
              "targetHandle": null,
              "data": {
                  "label": "1",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF31Cb-DF41C",
              "selected": false
          },
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF31C",
              "sourceHandle": "b",
              "target": "DF61P",
              "targetHandle": null,
              "data": {
                  "label": "4",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF31Cb-DF61P",
              "selected": false
          }
      ],
      "prevEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF39C",
              "sourceHandle": "b",
              "target": "DF31C",
              "targetHandle": null,
              "data": {
                  "label": "2",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF39Cb-DF31C",
              "selected": false
          },
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF21P",
              "sourceHandle": "b",
              "target": "DF31C",
              "targetHandle": null,
              "data": {
                  "label": "1",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF21Pb-DF31C",
              "selected": false
          }
      ]
  },
  {
      "id": "DF39C",
      "type": "cpm",
      "position": {
          "x": -217.5,
          "y": -188.5
      },
      "data": {
          "est": 2,
          "lst": 2,
          "blockName": "DF39C",
          "startDate": "2023-07-02",
          "endDate": "2023-07-02",
          "criticalPath": true
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -217.5,
          "y": -188.5
      },
      "dragging": false,
      "targetEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF39C",
              "sourceHandle": "b",
              "target": "DF31C",
              "targetHandle": null,
              "data": {
                  "label": "2",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF39Cb-DF31C",
              "selected": false
          },
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF39C",
              "sourceHandle": "b",
              "target": "DF51P",
              "targetHandle": null,
              "data": {
                  "criticalPath": true,
                  "label": "6"
              },
              "id": "reactflow__edge-DF39Cb-DF51P",
              "selected": true
          }
      ],
      "prevEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF11C",
              "sourceHandle": "b",
              "target": "DF39C",
              "targetHandle": null,
              "data": {
                  "label": "1",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF11Cb-DF39C",
              "selected": false
          }
      ]
  },
  {
      "id": "DF41C",
      "type": "cpm",
      "position": {
          "x": -422.5,
          "y": -1.5
      },
      "data": {
          "est": 13,
          "lst": 13,
          "blockName": "DF41C",
          "startDate": "2023-07-13",
          "endDate": "2023-07-13",
          "criticalPath": true
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -422.5,
          "y": -1.5
      },
      "dragging": false,
      "targetEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF41C",
              "sourceHandle": "b",
              "target": "DF61P",
              "targetHandle": null,
              "data": {
                  "criticalPath": true,
                  "label": "1"
              },
              "id": "reactflow__edge-DF41Cb-DF61P",
              "selected": false
          }
      ],
      "prevEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF21P",
              "sourceHandle": "b",
              "target": "DF41C",
              "targetHandle": null,
              "data": {
                  "label": "11",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF21Pb-DF41C",
              "selected": false
          },
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF31C",
              "sourceHandle": "b",
              "target": "DF41C",
              "targetHandle": null,
              "data": {
                  "label": "1",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF31Cb-DF41C",
              "selected": false
          }
      ]
  },
  {
      "id": "DF51P",
      "type": "cpm",
      "position": {
          "x": -152,
          "y": -45.5
      },
      "data": {
          "est": 8,
          "lst": 8,
          "blockName": "DF51P",
          "startDate": "2023-07-08",
          "endDate": "2023-07-08",
          "criticalPath": true
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -152,
          "y": -45.5
      },
      "dragging": false,
      "targetEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF51P",
              "sourceHandle": "b",
              "target": "DF61P",
              "targetHandle": null,
              "data": {
                  "criticalPath": true,
                  "label": "6"
              },
              "id": "reactflow__edge-DF51Pb-DF61P",
              "selected": false
          }
      ],
      "prevEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF39C",
              "sourceHandle": "b",
              "target": "DF51P",
              "targetHandle": null,
              "data": {
                  "criticalPath": true,
                  "label": "6"
              },
              "id": "reactflow__edge-DF39Cb-DF51P",
              "selected": true
          }
      ]
  },
  {
      "id": "DF61P",
      "type": "cpm",
      "position": {
          "x": -264,
          "y": 40
      },
      "data": {
          "est": 14,
          "lst": 14,
          "blockName": "DF61P",
          "startDate": "2023-07-14",
          "endDate": "2023-07-14",
          "criticalPath": true
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -264,
          "y": 40
      },
      "dragging": false,
      "targetEdges": [],
      "prevEdges": [
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF31C",
              "sourceHandle": "b",
              "target": "DF61P",
              "targetHandle": null,
              "data": {
                  "label": "4",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF31Cb-DF61P",
              "selected": false
          },
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF51P",
              "sourceHandle": "b",
              "target": "DF61P",
              "targetHandle": null,
              "data": {
                  "criticalPath": true,
                  "label": "6"
              },
              "id": "reactflow__edge-DF51Pb-DF61P",
              "selected": false
          },
          {
              "labelBgStyle": {
                  "fill": "transparent"
              },
              "type": "custom",
              "markerEnd": {
                  "type": "arrowclosed",
                  "color": "black"
              },
              "source": "DF41C",
              "sourceHandle": "b",
              "target": "DF61P",
              "targetHandle": null,
              "data": {
                  "criticalPath": true,
                  "label": "1"
              },
              "id": "reactflow__edge-DF41Cb-DF61P",
              "selected": false
          }
      ]
  }
]

export const initialEdges =[
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF11C",
      "sourceHandle": "b",
      "target": "DF21P",
      "targetHandle": null,
      "data": {
          "label": "1",
          "criticalPath": true
      },
      "id": "reactflow__edge-DF11Cb-DF21P",
      "selected": false
  },
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF11C",
      "sourceHandle": "b",
      "target": "DF39C",
      "targetHandle": null,
      "data": {
          "label": "1",
          "criticalPath": true
      },
      "id": "reactflow__edge-DF11Cb-DF39C",
      "selected": false
  },
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF39C",
      "sourceHandle": "b",
      "target": "DF31C",
      "targetHandle": null,
      "data": {
          "label": "2",
          "criticalPath": false
      },
      "id": "reactflow__edge-DF39Cb-DF31C",
      "selected": false
  },
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF21P",
      "sourceHandle": "b",
      "target": "DF31C",
      "targetHandle": null,
      "data": {
          "label": "1",
          "criticalPath": false
      },
      "id": "reactflow__edge-DF21Pb-DF31C",
      "selected": false
  },
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF21P",
      "sourceHandle": "b",
      "target": "DF41C",
      "targetHandle": null,
      "data": {
          "label": "11",
          "criticalPath": true
      },
      "id": "reactflow__edge-DF21Pb-DF41C",
      "selected": false
  },
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF31C",
      "sourceHandle": "b",
      "target": "DF41C",
      "targetHandle": null,
      "data": {
          "label": "1",
          "criticalPath": false
      },
      "id": "reactflow__edge-DF31Cb-DF41C",
      "selected": false
  },
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF39C",
      "sourceHandle": "b",
      "target": "DF51P",
      "targetHandle": null,
      "data": {
          "criticalPath": true,
          "label": "6"
      },
      "id": "reactflow__edge-DF39Cb-DF51P",
      "selected": false
  },
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF31C",
      "sourceHandle": "b",
      "target": "DF61P",
      "targetHandle": null,
      "data": {
          "label": "4",
          "criticalPath": false
      },
      "id": "reactflow__edge-DF31Cb-DF61P",
      "selected": false
  },
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF51P",
      "sourceHandle": "b",
      "target": "DF61P",
      "targetHandle": null,
      "data": {
          "criticalPath": true,
          "label": "6"
      },
      "id": "reactflow__edge-DF51Pb-DF61P",
      "selected": false
  },
  {
      "labelBgStyle": {
          "fill": "transparent"
      },
      "type": "custom",
      "markerEnd": {
          "type": "arrowclosed",
          "color": "black"
      },
      "source": "DF41C",
      "sourceHandle": "b",
      "target": "DF61P",
      "targetHandle": null,
      "data": {
          "criticalPath": true,
          "label": "1"
      },
      "id": "reactflow__edge-DF41Cb-DF61P",
      "selected": false
  }
]
