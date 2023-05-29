export const initialNodes = [
  {
    id: "node-1",
    type: "cpm",
    position: { x: 0, y: 0 },
    data: { value: "node-1" },
  },
  {
    id: "node-2",
    type: "cpm",
    position: { x: 100, y: 0 },
    data: { value: "node-2" },
  },
  {
    id: "node-3",
    type: "cpm",
    position: { x: 0, y: 100 },
    data: { value: "node-3" },
  },
  {
    id: "node-4",
    type: "cpm",
    position: { x: 100, y: 100 },
    data: { value: "node-4" },
  },

  {
    id: "node-5",
    type: "cpm",
    position: { x: 200, y: 0 },
    data: { value: "node-5" },
  },
  {
    id: "node-6",
    type: "cpm",
    position: { x: 300, y: 0 },
    data: { value: "node-6" },
  },
  {
    id: "node-7",
    type: "cpm",
    position: { x: 200, y: 100 },
    data: { value: "node-7" },
  },
  {
    id: "node-8",
    type: "cpm",
    position: { x: 300, y: 100 },
    data: { value: "node-8" },
  },

  {
    id: "node-9",
    type: "cpm",
    position: { x: 0, y: 200 },
    data: { value: "node-9" },
  },
  {
    id: "node-10",
    type: "cpm",
    position: { x: 100, y: 200 },
    data: { value: "node-10" },
  },
  {
    id: "node-11",
    type: "cpm",
    position: { x: 200, y: 200 },
    data: { value: "node-11" },
  },
  {
    id: "node-12",
    type: "cpm",
    position: { x: 300, y: 200 },
    data: { value: "node-12" },
  },
];

export const initialEdges = [
  {
    id: "e1-3",
    source: "node-1",
    target: "node-3",
    label: "8",
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
