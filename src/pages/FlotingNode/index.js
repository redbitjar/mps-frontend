import dagre from "dagre";
import { toPng } from "html-to-image";
import _, { add } from "lodash";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import ReactFlow, {
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

import CustomConnectionLine from "./CustomConnectionLine";
import CustomNode from "./CustomNode";
import CustomNodeEnd from "./CustomNodeEnd";
import CustomNodeEvent from "./CustomNodeEvent";
import CustomNodeMain from "./CustomNodeMain";
import FloatingEdge from "./FloatingEdge";

import "reactflow/dist/style.css";
import "./CustomNode.css";
import {
  holidayDate as _holidayDate,
  originalData as _originalData,
  initialEdges as sInitialEdges,
  initialNodes as sInitialNodes,
} from "./ServiceData2";
import { initialEdges, initialNodes } from "./networkData";
import {
  initialEdges as initialEdges2,
  initialNodes as initialNodes2,
} from "./networkData2";
import {
  initialEdges as initialEdges3,
  initialNodes as initialNodes3,
} from "./networkData3";
import "./style.css";

window.interfaces = {};
window.dateFormat = function (date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;
  minute = minute >= 10 ? minute : "0" + minute;
  second = second >= 10 ? second : "0" + second;

  return (
    date.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second
  );
};

const rfStyle = {
  backgroundColor: "#B8CEFF",
};
const connectionLineStyle = {
  strokeWidth: 3,
  stroke: "black",
};

const nodeTypes = {
  cpm: CustomNode,
  cpmMain: CustomNodeMain,
  cpmEnd: CustomNodeEnd,
  cpmEvent: CustomNodeEvent,
  //   cpmEvent: CustomNode4,
};

const edgeTypes = {
  floating: FloatingEdge,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: "black" },
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
};

let reRenderNodes = [];
let reRenderEdges = [];
let originalData = {};
let holidays = [];

const calcDateReverse = (toDate, label) => {
  let _toDate = toDate;
  let _label = label;
  let count = 0;
  if (_label === 0) return toDate;
  _toDate.setDate(_toDate.getDate() - 1);
  while (true) {
    if (_label === 0) {
      break;
    } else {
      let tmp = _toDate.getDay();
      if (tmp === 0 || tmp === 6) {
        count++;
        _toDate.setDate(_toDate.getDate() - 1);
        // date2.setDate(date2.getDate() + 1);
        // continue;
      } else if (
        holidays.findIndex((h) => h.getTime() == _toDate.getTime()) > -1
      ) {
        count++;
        _toDate.setDate(_toDate.getDate() - 1);
        // continue;
      } else {
        _label--;
        if (_label > 0) _toDate.setDate(_toDate.getDate() - 1);
      }
    }
  }
  return _toDate;
};
const calcDateNext = (fromDate, label) => {
  let _fromDate = fromDate;
  let _label = label;
  let count = 0;
  if (_label === 0) return _fromDate;
  _fromDate.setDate(_fromDate.getDate() + 1);
  while (true) {
    if (_label === 0) {
      break;
    } else {
      let tmp = _fromDate.getDay();
      if (tmp === 0 || tmp === 6) {
        count++;
        _fromDate.setDate(_fromDate.getDate() + 1);
        // date2.setDate(date2.getDate() + 1);
        // continue;
      } else if (
        holidays.findIndex((h) => h.getTime() == _fromDate.getTime()) > -1
      ) {
        count++;
        _fromDate.setDate(_fromDate.getDate() + 1);
        // continue;
      } else {
        _label--;
        if (_label > 0) _fromDate.setDate(_fromDate.getDate() + 1);
      }
    }
  }
  return _fromDate;
};
const calcDate = (fromDate, toDate) => {
  //   let t =  new Date(holidays[12]);
  // t = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  // console.log(temp_date)
  // console.log(t)
  // temp_date.getTime() === t.getTime()

  let date1 = new Date(fromDate);
  let date2 = new Date(toDate);
  date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  date1.setDate(date1.getDate() + 1);
  let count = 0;

  // console.log(holidays);
  while (true) {
    let temp_date = date1;
    if (date1.getTime() > date2.getTime()) {
      break;
    } else if (date1.getTime() == date2.getTime()) {
      // console.log("count : " + count);
      let tmp = date1.getDay();
      if (tmp === 0 || tmp === 6) {
        count++;
        date1.setDate(date1.getDate() + 1);
        date2.setDate(date2.getDate() + 1);
        continue;
      }
      if (holidays.findIndex((h) => h.getTime() == date1.getTime()) > -1) {
        count++;
        date1.setDate(date1.getDate() + 1);
        date2.setDate(date2.getDate() + 1);
        continue;
      }
      break;
    } else {
      let tmp = date1.getDay();
      if (tmp === 0 || tmp === 6) {
        // 주말s
        // console.log("주말");
        count++;
      } else {
        // 평일
        // console.log("평일");
        if (holidays.findIndex((h) => h.getTime() == date1.getTime()) > -1) {
          count++;
        }
      }
      date1.setDate(date1.getDate() + 1);
    }
  }
  return count;
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 60;
const nodeHeight = 60;

const getLayoutedElements = (nodes, edges, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

function leftPad(value) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}

function toStringByFormatting(source, delimiter = "-") {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
}

function finalNodeRerender(sourceNode, parentIndex) {
  let isFinalDateOver = false;
  let { id, data, prevEdges, prevNodes, targetEdges } = sourceNode;
  const { est: sourceEst, lst: sourceLst, startDate } = data;

  // debugger;
  let maxEst = Number.MIN_SAFE_INTEGER;
  let maxLst = Number.MIN_SAFE_INTEGER;
  let maxDate = new Date(0);
  let _prestartDate = new Date(0);

  const { prevEdges: tPrevEdges, data: sData } = sourceNode;
  if (tPrevEdges.length > 0) {
    let _sData = sData;
    let _sStartDate = sData.startDate.split("-");
    _sStartDate = new Date(_sStartDate[0], _sStartDate[1] - 1, _sStartDate[2]);
    let _prevNodeIds = tPrevEdges.map((m) => m.source);
    let _tPrevNodes = [];
    _prevNodeIds.forEach((_ids) => {
      _tPrevNodes.push(reRenderNodes.find((f) => f.id === _ids));
    });
    _tPrevNodes.forEach((_tPrevNode, _tPrevIdx) => {
      const {
        est: prevEst,
        lst: prevLst,
        startDate: prestartDate,
      } = _tPrevNode.data;
      const { label: prevLabel } = tPrevEdges[_tPrevIdx].data;
      const _tempEst = Number(prevEst) + Number(prevLabel || 0);
      const _tempLst = Number(prevLst) + Number(prevLabel || 0);
      const _d = prestartDate
        ? prestartDate.split("-")
        : "1970-01-01".split("-");
      const _tempPreDate = new Date(_d[0], _d[1] - 1, _d[2]);
      const _tempDate = new Date(_d[0], _d[1] - 1, _d[2]);
      // _tempDate.setDate(_tempDate.getDate() + Number(prevLabel || 0));
      // let addDate = calcDate(_tempPreDate, _tempDate);
      // _tempDate.setDate(_tempDate.getDate() + addDate);

      // debugger;
      _tempDate.setDate(_tempDate.getDate() + Number(prevLabel || 0));
      let addDate = calcDate(_tempPreDate, _sStartDate);
      _tempDate.setDate(_tempDate.getDate() + addDate);

      // debugger;
      maxEst = _tempEst > maxEst ? _tempEst : maxEst;
      maxLst = _tempLst > maxLst ? _tempLst : maxLst;
      // if (_tempDate.getTime() >= maxDate.getTime()) {
      if (_tempEst >= maxEst) {
        _prestartDate = prestartDate;
        maxDate = _tempDate;
        maxEst = _tempEst;
        maxLst = _tempLst;
      }
    });

    if (_sStartDate.getTime() >= maxDate.getTime()) {
      sourceNode.data = {
        ...sourceNode.data,
        est: maxEst,
        lst: maxLst,
        // startDate: toStringByFormatting(maxDate),
        // endDate: toStringByFormatting(maxDate),
      };
    } else {
      confirmAlert({
        message: "완료일을 넘을 수 없습니다",
        buttons: [
          {
            label: "확인",
            onClick: () => selectedEdgeInput.target.focus(),
          },
        ],
      });
      isFinalDateOver = true;
      return isFinalDateOver;
    }
    return isFinalDateOver;
  }
}

function nodesConnectEdges2(edges) {
  for (let _node of reRenderNodes) {
    _node.targetEdges = [];
    // _node.targetNodes = [];
    _node.prevEdges = [];
    // _node.prevNodes = [];

    for (let _edges of edges) {
      if (_edges.source === _node.id) {
        // _node.data.weight = _edges.data.label;
        _node.targetEdges.push(_edges);
        // _node.targetNodes.push(
        //   reRenderNodes.find((f) => f.id === _edges.target)
        // );
      } else if (_edges.target === _node.id) {
        _node.prevEdges.push(_edges);
        // _node.prevNodes.push(reRenderNodes.find((f) => f.id === _edges.source));
      }
    }
  }
}

function nodesRerender2(sourceNode, parentIndex) {
  let { id, data, prevEdges, prevNodes, targetEdges } = sourceNode;
  const { est: sourceEst, lst: sourceLst, startDate } = data;

  let _targetNodeIds = targetEdges.map((m) => m.target);
  let _targetNodes = [];
  _targetNodeIds.forEach((_ids) => {
    _targetNodes.push(reRenderNodes.find((f) => f.id === _ids));
  });

  _targetNodes.forEach((_targetNode, _idx) => {
    let maxEst = Number.MIN_SAFE_INTEGER;
    let maxLst = Number.MIN_SAFE_INTEGER;
    // let maxLabel = Number.MIN_SAFE_INTEGER;
    let maxDate = new Date(0);
    let _prestartDate = new Date(0);

    const { prevEdges: tPrevEdges } = _targetNode;

    let _prevNodeIds = tPrevEdges.map((m) => m.source);
    let _tPrevNodes = [];
    _prevNodeIds.forEach((_ids) => {
      _tPrevNodes.push(reRenderNodes.find((f) => f.id === _ids));
    });

    _tPrevNodes.forEach((_tPrevNode, _tPrevIdx) => {
      const {
        est: prevEst,
        lst: prevLst,
        startDate: prestartDate,
      } = _tPrevNode.data;
      const { label: prevLabel } = tPrevEdges[_tPrevIdx].data;
      const _tempEst = Number(prevEst) + Number(prevLabel || 0);
      const _tempLst = Number(prevLst) + Number(prevLabel || 0);
      const _d = prestartDate
        ? prestartDate.split("-")
        : "1970-01-01".split("-");
      const _tempPreDate = new Date(_d[0], _d[1] - 1, _d[2]);
      let _tempDate = new Date(_d[0], _d[1] - 1, _d[2]);
      // _tempDate.setDate(_tempDate.getDate() + Number(prevLabel || 0));
      // let addDate = calcDate(_tempPreDate, _tempDate);
      // _tempDate.setDate(_tempDate.getDate() + addDate);

      _tempDate = calcDateNext(_tempPreDate, Number(prevLabel || 0));

      // maxEst = _tempEst > maxEst ? _tempEst : maxEst;
      // maxLst = _tempLst > maxLst ? _tempLst : maxLst;
      if (_tempDate.getTime() > maxDate.getTime()) {
        _prestartDate = prestartDate;
        maxDate = _tempDate;
        maxEst = _tempEst;
        maxLst = _tempLst;
      }
      // maxDate = _tempDate > maxDate ? _tempDate : maxDate;
    });

    if (_targetNode.type !== "cpmEnd") {
      _targetNode.data = {
        ..._targetNode.data,
        est: maxEst,
        lst: maxLst,
        startDate: toStringByFormatting(maxDate),
        endDate: toStringByFormatting(maxDate),
      };
    } else {
      // console.log(" _targetNode.type == cpmEnd");
      // let _tStartDate = _targetNode.data.startDate.split("-");
      // _tStartDate = new Date(
      //   _tStartDate[0],
      //   _tStartDate[1] - 1,
      //   _tStartDate[2]
      // );
      // if (_tStartDate.getTime() > maxDate.getTime()) {
      //   _targetNode.data = {
      //     ..._targetNode.data,
      //     est: maxEst,
      //     lst: maxLst,
      //     // startDate: toStringByFormatting(maxDate),
      //     // endDate: toStringByFormatting(maxDate),
      //   };
      // } else {
      //   confirmAlert({
      //     // title: "Confirm to submit",
      //     message: "완료일을 넘을 수 없습니다",
      //     buttons: [
      //       {
      //         label: "확인",
      //         onClick: () => selectedEdgeInput.target.focus(),
      //       },
      //       // {
      //       //   label: "No",
      //       //   // onClick: () => alert("Click No"),
      //       // },
      //     ],
      //   });
      // }
    }

    nodesRerender2(_targetNode);
  });
}

function reverseNodesRerender(sourceNode, edges) {
  let needVisit = []; // 탐색해야할 노드들
  needVisit.push(sourceNode); // 노드 탐색 시작
  const { prevEdges: tPrevEdges } = sourceNode;

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const _node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.

    // 큐에 이전 노드 입력 시작
    const { prevEdges: tPrevEdges, data: sData } = _node;
    let _sStartDate = sData.startDate.split("-");
    _sStartDate = new Date(_sStartDate[0], _sStartDate[1] - 1, _sStartDate[2]);
    let _prevNodeIds = tPrevEdges.map((m) => m.source);
    let _tPrevNodes = [];
    _prevNodeIds.forEach((_ids) => {
      _tPrevNodes.push(reRenderNodes.find((f) => f.id === _ids));
    });
    needVisit = [...needVisit, ..._tPrevNodes];
    // 큐에 이전 노드 입력 끝

    if (_node.targetEdges.length === 0) {
      continue;
    } else {
      let { targetEdges: tTargetEdges } = _node;
      let criticalPathNode = false;

      for (let _targetEdge of tTargetEdges) {
        let _tNode = reRenderNodes.find((f) => f.id === _targetEdge.target);
        if (
          _node.data.est + Number(_targetEdge.data.label) === _tNode.data.est &&
          _tNode.data.criticalPath
        ) {
          criticalPathNode = true;
          _targetEdge.data.criticalPath = true;
        } else {
          _targetEdge.data.criticalPath = false;
        }
      }
      _node.data.criticalPath = criticalPathNode;

      if (criticalPathNode === false) {
        let minLst = Number.MAX_SAFE_INTEGER;
        let minDate = new Date(8640000000000000);
        for (let _targetEdge of tTargetEdges) {
          let _tNode = reRenderNodes.find((f) => f.id === _targetEdge.target);
          const { label: targetLabel } = _targetEdge.data;
          const { lst: targetLst, endDate: targetEndDate } = _tNode.data;
          const _tempLst = Number(targetLst) - Number(targetLabel || 0);
          const _d = targetEndDate.split("-");
          const _tempPreDate = new Date(_d[0], _d[1] - 1, _d[2]);
          let _tempDate = new Date(_d[0], _d[1] - 1, _d[2]);
          // _tempDate.setDate(_tempDate.getDate() - Number(targetLabel || 0));
          // let addDate = calcDate(_sStartDate, _tempPreDate);
          // _tempDate.setDate(_tempDate.getDate() - addDate);
          _tempDate = calcDateReverse(_tempPreDate, Number(targetLabel || 0));
          minLst = minLst > _tempLst ? _tempLst : minLst;
          minDate = minDate > _tempDate ? _tempDate : minDate;
        }
        _node.data.lst = minLst;
        _node.data.endDate = toStringByFormatting(minDate);
      }
    }
  }
}

let cnt = 0;
const imageWidth = 1024;
const imageHeight = 768;

function downloadImage(dataUrl) {
  const a = document.createElement("a");

  a.setAttribute("download", "reactflow.png");
  debugger;
  a.setAttribute("href", dataUrl);
  a.click();
}

const getNodeId = () => `randomnode_${+new Date()}`;
let selectedEdgeInput = null;
/* Start */
function Flow(props) {
  //   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  //   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isConnectedToggle, setIsConnectedToggle] = useState(false);
  const isConnectedMounted = useRef(false);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const { getNodes } = useReactFlow();

  const submit = () => {
    onIFDataNodeBind(sInitialNodes, sInitialEdges, _originalData, _holidayDate);
    // confirmAlert({
    //   // title: "Confirm to submit",
    //   message: "완료일을 넘을 수 없습니다",
    //   buttons: [
    //     {
    //       label: "확인",
    //       // onClick: () => alert("Click Yes"),
    //     },
    //     // {
    //     //   label: "No",
    //     //   // onClick: () => alert("Click No"),
    //     // },
    //   ],
    // });
  };

  const handleResize = useCallback(() => {
    reactflowInstance && reactflowInstance.fitView();
  }, [reactflowInstance]);

  const onInit = useCallback(
    (flowInstance) => {
      // setNodes([...props.nodes]);
      // setEdges([...props.edges]);

      if (!reactflowInstance) {
        setReactflowInstance(flowInstance);
        // setTimeout(() => fitViewTestClick(), 0);
      }

      // cnt++;
      // setNodes([...initialNodes]);
      // setEdges([...initialEdges]);
    },
    [props.nodes, props.edges, setNodes, setEdges, reactflowInstance]
  );

  useEffect(() => {
    // debugger;
    window.addEventListener("resize", handleResize);
    reactflowInstance && setTimeout(() => reactflowInstance.fitView(), 0);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, reactflowInstance]);

  useEffect(() => {
    if (isConnectedMounted.current) {
      window.interfaces.onNodeRerenderClick();
    } else {
      isConnectedMounted.current = true;
    }
  }, [isConnectedToggle]);

  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges]
  );

  const onDownImgClick = useCallback(() => {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );

    toPng(document.querySelector(".react-flow__viewport"), {
      backgroundColor: "#1a365d",
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then(window.interfaces.onDownImg);
    // }).then(downloadImage);
  });

  const onEdgeInputClick = useCallback((e, edges) => {
    selectedEdgeInput = e;
    // console.log(e);
    // console.log(edges);
  });

  const onNodeRerenderClick = useCallback((e) => {
    // console.log("onNodeRerenderClick");
    reRenderNodes = _.cloneDeep(nodes);
    reRenderEdges = _.cloneDeep(edges);
    reRenderNodes.forEach((f) => {
      if (!f.data) f.data = {};
      f.data.criticalPath = false;
    });
    reRenderEdges.forEach((f) => {
      if (!f.data) f.data = {};
      f.data.criticalPath = false;
    });

    nodesConnectEdges2(reRenderEdges);

    const rootNodeIndex = reRenderNodes.findIndex((n) => n.type === "cpmMain");
    const rootNode = reRenderNodes[rootNodeIndex];
    nodesRerender2(rootNode, rootNodeIndex);

    const finalNodeIndex = reRenderNodes.findIndex((n) => n.type === "cpmEnd");
    const finalNode = reRenderNodes[finalNodeIndex];
    const isFinalDateOver = finalNodeRerender(finalNode, finalNodeIndex);
    if (!isFinalDateOver) {
      let leafNodes = reRenderNodes.filter(
        (f) => f.targetEdges.length === 0 && f.prevEdges.length > 0
      );
      /// 주석 풀어야함 start
      leafNodes.forEach((m) => (m.data.criticalPath = true));
      if (leafNodes.length === 1) {
        for (let l of leafNodes) {
          reverseNodesRerender(l, reRenderEdges);
        }
        console.log("nodesRerender edges : " + reRenderEdges);
      }
      /// 주석 풀어야함 end

      setNodes(reRenderNodes);
      setEdges(reRenderEdges);
    }
  });

  const onGetNodesAndEdgesClick = useCallback((e) => {
    console.log("------ ", nodes);
    console.log("------ ", edges);
    console.log(
      nodes.filter((f) => f.data.criticalPath === true).map((m) => m.id)
    );
    console.log(
      edges
        .filter((f) => f.data.criticalPath === true)
        .map((m) => ({ [m.source]: m.target }))
    );
    return {
      nodes: nodes,
      edges: edges,
      originalData: originalData,
    };
  });

  const onEdgesClear = useCallback((e) => {
    console.log("------ ", edges);
    setEdges([]);
  });

  const onIdUpdate = useCallback((id) => {
    originalData.id = id;
  });

  const onIFDataNodeBind = useCallback((nodes, edges, rawData, hdays) => {
    let initialNodes = nodes || [];
    let initialEdges = edges || [];
    originalData = rawData || {};
    holidays = hdays || [];
    holidays = holidays
      .map((m) => new Date(m))
      .map((t) => new Date(t.getFullYear(), t.getMonth(), t.getDate()));

    // initialEdges
    // .filter((f) => f.data && f.data.criticalPath === true)
    // .forEach((e) => (e.animated = true));
    // initialEdges.forEach((e) => (e.data.onChange = onChange));
    initialEdges.forEach((e) => {
      if (e.data) e.data.onChange = onChange;
    });
    setNodes([...initialNodes]);
    setEdges([...initialEdges]);

    setTimeout(() => fitViewTestClick(), 0);
  });

  const onInputFocus = useCallback((e) => {
    selectedEdgeInput.target.focus();
    debugger;
  });
  const onDataNodeBind = useCallback((e) => {
    let _initNode = _.cloneDeep[nodes];

    if (cnt === 1) {
      cnt++;
      // initialEdges2
      //   .filter((f) => f.data && f.data.criticalPath === true)
      //   .forEach((e) => (e.animated = true));
      initialEdges2.forEach((e) => (e.data.onChange = onChange));
      // debugger;
      setNodes([...initialNodes2]);
      setEdges([...initialEdges2]);
    } else if (cnt === 2) {
      cnt++;
      // initialEdges3
      //   .filter((f) => f.data && f.data.criticalPath === true)
      //   .forEach((e) => (e.animated = true));
      initialEdges3.forEach((e) => (e.data.onChange = onChange));
      setNodes([...initialNodes3]);
      setEdges([...initialEdges3]);
    } else {
      cnt = 1;
      let _initialEdges = initialEdges;
      // initialEdges
      //   .filter((f) => f.data && f.data.criticalPath === true)
      //   .forEach((e) => (e.animated = true));
      initialEdges.forEach((e) => (e.data.onChange = onChange));
      initialEdges.forEach((e) => {
        if (e.data) e.data.onChange = onChange;
      });
      setNodes([...initialNodes]);
      setEdges([...initialEdges]);
    }
    setTimeout(() => fitViewTestClick(), 0);
    // console.log("------ ", edges);
  });

  const fitViewTestClick = useCallback(
    (e) => {
      reactflowInstance.fitView();
    },
    [reactflowInstance]
  );

  const onChange = useCallback((e, edges) => {
    console.log("onChange");
    // debugger;
    const tValue = e.target.value;
    let selectedEdge = edges.find((f) => f.id === e.target.dataset.id);
    selectedEdge.selected = true;
    console.log("onChange edges: ", edges);

    setEdges((prev) => {
      const finIndex = prev.findIndex((p) => p.id === selectedEdge.id);
      let copiedItems = [...prev];
      copiedItems[finIndex].data = {
        ...copiedItems[finIndex].data,
        label: tValue,
      };

      return copiedItems;
    });
    window.interfaces.onNodeRerenderClick();
  });

  const onAdd = useCallback(
    (e) => {
      let _e = e;
      // const x = Math.random() * window.innerWidth - 100;
      // const y = Math.random() * window.innerHeight;
      // const { x, y } = _e.target.getBoundingClientRect();
      // const x = _e.target.offsetLeft;
      // const y = _e.target.offsetTop;
      const x = 0;
      const y = 0;
      // const y = Math.random() * window.innerHeight;
      const newNode = {
        id: getNodeId(),
        type: "cpmEvent",
        data: {
          est: 1,
          lst: 1,
          blockName: "Event",
          startDate: null,
          endDate: null,
        },
        width: 70,
        height: 55,
        selected: false,
        positionAbsolute: {
          x: x,
          y: y,
        },
        position: {
          x: x,
          y: y,
        },
        dragging: false,
      };
      setNodes((nds) => {
        return [...nds, newNode];
        // let _nds = nds;
        // debugger;
        // nds.concat(newNode);
        // debugger;
      });
    },
    [setNodes]
  );

  const isValidConnection = useCallback((source, target, nodes, edges) => {
    const _source = source;
    const _target = target;
    const _nodes = nodes;
    const _edges = edges;

    // console.log(nodes.length);
    // console.log(edges.length);

    let needVisit = []; // 탐색해야할 노드들
    needVisit.push(target); // 노드 탐색 시작
    while (needVisit.length !== 0) {
      const _node = needVisit.shift();
      const { targetEdges: tTargetEdges, data: sData } = _node;
      if (tTargetEdges && tTargetEdges.length > 0) {
        let _targetNodeIds = tTargetEdges.map((m) => m.target);
        const findIdx = _targetNodeIds.findIndex((f) => f === _source.id);
        if (findIdx !== -1) {
          confirmAlert({
            // title: "Confirm to submit",
            message: "사이클 블록은 연결 할수 없습니다",
            buttons: [
              {
                label: "확인",
                // onClick: () => selectedEdgeInput.target.focus(),
              },
              // {
              //   label: "No",
              //   // onClick: () => alert("Click No"),
              // },
            ],
          });
          return false;
        }
        let _tTargetNodes = [];
        _targetNodeIds.forEach((_ids) => {
          _tTargetNodes.push(_nodes.find((f) => f.id === _ids));
        });
        needVisit = [...needVisit, ..._tTargetNodes];
      }
    }

    return true;
  });

  const onConnect = useCallback(
    (connection) => {
      const source = nodes.find((n) => n.id === connection.source);
      const target = nodes.find((n) => n.id === connection.target);
      // const _nodes = nodes;
      // const _edges = edges;

      if (source.id === target.id) return;

      if (!isValidConnection(source, target, nodes, edges)) return;

      let btDay = 0;
      if (target.type === "cpmEnd") {
        if (!source.data.startDate) {
          confirmAlert({
            // title: "Confirm to submit",
            message: "이전 블록 일자가 정해지지 않았습니다.",
            buttons: [
              {
                label: "확인",
                // onClick: () => alert("Click Yes"),
              },
              // {
              //   label: "No",
              //   // onClick: () => alert("Click No"),
              // },
            ],
          });
          return;
        }
        // debugger;
        // console.log("inputRef");
        // let e = document.getElementById(id);
        //
        let _sD = source.data.startDate.split("-");
        let _tD = target.data.startDate.split("-");
        let _sourceStartDate = new Date(_sD[0], _sD[1] - 1, _sD[2]);
        let _targetStartDate = new Date(_tD[0], _tD[1] - 1, _tD[2]);

        let fD = new Date(_sourceStartDate);
        let toD = new Date(_targetStartDate);
        let addDate = calcDate(_sourceStartDate, _targetStartDate);

        let btMs = toD.getTime() - fD.getTime();
        btDay = btMs / (1000 * 60 * 60 * 24);
        // console.log("일수 차이------- : " + btDay);
        // console.log("일수 휴일 차이------- : ", btDay - addDate);
        btDay = btDay - addDate;

        if (btDay < 0) {
          confirmAlert({
            // title: "Confirm to submit",
            message: "완료일을 넘을 수 없습니다",
            buttons: [
              {
                label: "확인",
                onClick: () => selectedEdgeInput.target.focus(),
              },
            ],
          });
          return;
        }
        connection.data = {
          ...connection.data,
          label: btDay,
          onChange: onChange,
        };

        setEdges((eds) => {
          // console.log("setEdges");
          // debugger;
          return addEdge(connection, eds);
        });
        // debugger;
        setIsConnectedToggle(!isConnectedToggle);

        // setTimeout(() => {
        //   reRenderNodes = _.cloneDeep(nodes);
        // const finalNodeIndex = reRenderNodes.findIndex(
        //   (n) => n.type === "cpmEnd"
        // );
        // debugger;
        // const finalNode = reRenderNodes[finalNodeIndex];
        // finalNodeRerender(finalNode, finalNodeIndex);
        // setNodes(reRenderNodes);
        // },300);
      } else {
        if (!source.data.startDate) {
          confirmAlert({
            // title: "Confirm to submit",
            message: "이전 블록 일자가 정해지지 않았습니다.",
            buttons: [
              {
                label: "확인",
                // onClick: () => alert("Click Yes"),
              },
              // {
              //   label: "No",
              //   // onClick: () => alert("Click No"),
              // },
            ],
          });
          return;
        }
        connection.data = {
          ...connection.data,
          label: btDay,
          onChange: onChange,
        };

        setEdges((eds) => {
          // console.log("setEdges");
          return addEdge(connection, eds);
        });
        setIsConnectedToggle(!isConnectedToggle);
      }

      // e.value = btDay;
      // inputRef.current.setAttribute("value", btDay);
      // e = inputRef.current;
      // debugger;
      // data.onChange(e, edges);
      // inputRef.current.dispatchEvent(new Event("change", { value: btDay }));
      // inputRef.current.dispatchEvent(new Event("change", { e, edges }));
      // inputRef.current.dispatchEvent(new Event("onChange", { e, edges }));
      // window.interfaces.onDataChange(e, edges);
      // debugger;
      // if (target.type === "cpmEnd") {
      //   let date1 = new Date(target.data.startDate);
      //   date1 = new Date(
      //     date1.getFullYear(),
      //     date1.getMonth(),
      //     date1.getDate()
      //   );

      //   let date2 = new Date(source.data.startDate);
      //   date2 = new Date(
      //     date2.getFullYear(),
      //     date2.getMonth(),
      //     date2.getDate()
      //   );

      //   let btMs = date1.getTime() - date2.getTime();
      //   let btDay = btMs / (1000 * 60 * 60 * 24);
      //   console.log("일수 차이는?? " + btDay);

      //   let addDate = calcDate(date2, date1);
      //   btDay = btDay - addDate;

      //   console.log("공휴일 제거 일수 차이는?? " + btDay);
      //   debugger;
      //   if (btDay < 0) {
      //     debugger;
      //     confirmAlert({
      //       // title: "Confirm to submit",
      //       message: "완료일을 넘을 수 없습니다",
      //       buttons: [
      //         {
      //           label: "확인",
      //         },
      //       ],
      //     });
      //     return;
      //   }
      //   connection.data = {
      //     ...connection.data,
      //     // onChange: onChange,
      //     label: btDay,
      //   };
      // } else {
      //   connection.data = {
      //     ...connection.data,
      //     onChange: onChange,
      //   };
      // }

      // setEdges(
      //   (eds) => addEdge(connection, eds),
      //   () => window.interfaces.onNodeRerenderClick()
      // );

      // window.interfaces.onNodeRerenderClick();
    },

    [nodes, edges, setEdges]
  );

  // window.interfaces.onDownImg = downloadImage
  window.interfaces.onDownImgClick = onDownImgClick;
  window.interfaces.onGetNodesAndEdgesClick = onGetNodesAndEdgesClick;
  window.interfaces.onNodeRerenderClick = onNodeRerenderClick;
  window.interfaces.onDataNodeBind = onIFDataNodeBind;
  window.interfaces.onIdUpdate = onIdUpdate;
  window.interfaces.onEdgeInputClick = onEdgeInputClick;
  const { setViewport, zoomIn, zoomOut } = useReactFlow();

  const handleTransform = useCallback(() => {
    setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 800 });
  }, [setViewport]);

  return (
    <>
      <div>
        <button onClick={onNodeRerenderClick}>reRender</button>
        <button onClick={onGetNodesAndEdgesClick}>getNodes</button>
        <button onClick={onEdgesClear}>edgesClear</button>
        <button onClick={onDataNodeBind}>onDataChange</button>
        <button onClick={fitViewTestClick}>fitview</button>
        <button onClick={submit}>confirm</button>
        <button onClick={onInputFocus}>focus</button>
      </div>
      {/* <div>
        <button onClick={submit}>confirm</button>
      </div> */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineComponent={CustomConnectionLine}
        connectionLineStyle={connectionLineStyle}
        proOptions={{ hideAttribution: true }}
        // isValidConnection={isValidConnection}
        onInit={onInit}
        style={rfStyle}
      >
        <Panel position="top-right">
          <button onClick={fitViewTestClick}>fitView</button>
          <button onClick={() => zoomIn({ duration: 800 })}>zoom in</button>
          <button onClick={() => zoomOut({ duration: 800 })}>zoom out</button>
          {/* <button onClick={handleTransform}>pan to center(0,0,1)</button> */}
          {/* <button onClick={() => onLayout("TB")}>vertical layout</button>
          <button onClick={() => onLayout("LR")}>horizontal layout</button> */}
          <button onClick={onDownImgClick}>Download Image</button>
          <button onClick={onAdd}>Add Node</button>
        </Panel>
        {/* <Controls /> */}
      </ReactFlow>
    </>
  );
}

// export default Flow;

function FlowWidthProvider(props) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWidthProvider;
