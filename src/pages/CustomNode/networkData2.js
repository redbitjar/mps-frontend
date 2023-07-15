export const initialNodes = [
  {
      "id": "DF11C",
      "type": "cpmMain",
      "position": {
          "x": -369,
          "y": -311.5
      },
      "data": {
          "est": 1,
          "lst": 1,
          "blockName": "DF11C",
          "workDate": "2023-07-01",
          "criticalPath": true
      },
      "width": 70,
      "height": 55,
      "selected": false,
      "positionAbsolute": {
          "x": -369,
          "y": -311.5
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
              "target": "DF31C",
              "targetHandle": null,
              "data": {
                  "label": "2",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF11Cb-DF31C",
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
                  "label": "",
                  "criticalPath": false
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
          "x": -555,
          "y": -180.5
      },
      "data": {
          "est": 2,
          "lst": 2,
          "blockName": "DF21P",
          "workDate": "2023-07-02",
          "criticalPath": true
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -555,
          "y": -180.5
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
              "target": "DF41C",
              "targetHandle": null,
              "data": {
                  "label": "5",
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
          "x": -406.5,
          "y": -167
      },
      "data": {
          "est": 3,
          "lst": 6,
          "blockName": "DF31C",
          "workDate": "2023-07-03",
          "criticalPath": false
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -406.5,
          "y": -167
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
                  "criticalPath": false,
                  "label": "1"
              },
              "id": "reactflow__edge-DF31Cb-DF41C",
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
              "target": "DF31C",
              "targetHandle": null,
              "data": {
                  "label": "2",
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF11Cb-DF31C",
              "selected": false
          }
      ]
  },
  {
      "id": "DF39C",
      "type": "cpm",
      "position": {
          "x": -213,
          "y": -193.5
      },
      "data": {
          "est": 1,
          "lst": 58,
          "blockName": "DF39C",
          "workDate": "2023-07-01",
          "criticalPath": false
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -213,
          "y": -193.5
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
              "target": "DF51P",
              "targetHandle": null,
              "data": {
                  "criticalPath": false
              },
              "id": "reactflow__edge-DF39Cb-DF51P",
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
              "target": "DF39C",
              "targetHandle": null,
              "data": {
                  "label": "",
                  "criticalPath": false
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
          "x": -468.5,
          "y": -70
      },
      "data": {
          "est": 7,
          "lst": 7,
          "blockName": "DF41C",
          "workDate": "2023-07-07",
          "criticalPath": true
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -468.5,
          "y": -70
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
              "target": "DF51P",
              "targetHandle": null,
              "data": {
                  "label": "51",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF41Cb-DF51P",
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
              "source": "DF31C",
              "sourceHandle": "b",
              "target": "DF41C",
              "targetHandle": null,
              "data": {
                  "criticalPath": false,
                  "label": "1"
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
              "source": "DF21P",
              "sourceHandle": "b",
              "target": "DF41C",
              "targetHandle": null,
              "data": {
                  "label": "5",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF21Pb-DF41C",
              "selected": false
          }
      ]
  },
  {
      "id": "DF51P",
      "type": "cpm",
      "position": {
          "x": -273.5,
          "y": -80
      },
      "data": {
          "est": 58,
          "lst": 58,
          "blockName": "DF51P",
          "workDate": "2023-08-27",
          "criticalPath": true
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -273.5,
          "y": -80
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
                  "label": "2",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF51Pb-DF61P",
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
              "source": "DF39C",
              "sourceHandle": "b",
              "target": "DF51P",
              "targetHandle": null,
              "data": {
                  "criticalPath": false
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
              "source": "DF41C",
              "sourceHandle": "b",
              "target": "DF51P",
              "targetHandle": null,
              "data": {
                  "label": "51",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF41Cb-DF51P",
              "selected": false
          }
      ]
  },
  {
      "id": "DF61P",
      "type": "cpm",
      "position": {
          "x": -320.5,
          "y": 24
      },
      "data": {
          "est": 60,
          "lst": 60,
          "blockName": "DF61P",
          "workDate": "2023-08-29",
          "criticalPath": true
      },
      "width": 72,
      "height": 57,
      "selected": false,
      "positionAbsolute": {
          "x": -320.5,
          "y": 24
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
              "source": "DF51P",
              "sourceHandle": "b",
              "target": "DF61P",
              "targetHandle": null,
              "data": {
                  "label": "2",
                  "criticalPath": true
              },
              "id": "reactflow__edge-DF51Pb-DF61P",
              "selected": true
          }
      ]
  }
]

export const initialEdges = [
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
      "target": "DF31C",
      "targetHandle": null,
      "data": {
          "label": "2",
          "criticalPath": false
      },
      "id": "reactflow__edge-DF11Cb-DF31C",
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
          "criticalPath": false,
          "label": "1"
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
      "source": "DF21P",
      "sourceHandle": "b",
      "target": "DF41C",
      "targetHandle": null,
      "data": {
          "label": "5",
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
      "source": "DF11C",
      "sourceHandle": "b",
      "target": "DF39C",
      "targetHandle": null,
      "data": {
          "label": "",
          "criticalPath": false
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
      "target": "DF51P",
      "targetHandle": null,
      "data": {
          "criticalPath": false
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
      "source": "DF41C",
      "sourceHandle": "b",
      "target": "DF51P",
      "targetHandle": null,
      "data": {
          "label": "51",
          "criticalPath": true
      },
      "id": "reactflow__edge-DF41Cb-DF51P",
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
          "label": "2",
          "criticalPath": true
      },
      "id": "reactflow__edge-DF51Pb-DF61P",
      "selected": false
  }
]