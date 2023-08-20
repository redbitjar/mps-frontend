import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  useStore,
  getStraightPath,
  BaseEdge,
  EdgeLabelRenderer,
  useEdges,
  useNodes,
} from "reactflow";
import { getEdgeParams } from "./Utils";

function isNumber(s) {
  s += ""; // 문자열로 변환
  s = s.replace(/^\s*|\s*$/g, ""); // 좌우 공백 제거
  if (s == "" || isNaN(s)) return false;
  return true;
}

function FloatingEdge({ id, source, target, markerEnd, style, data }) {
  const inputRef = useRef(null);

  // useEffect(() => {
  //   console.log("FloatingEdge useEffect");
  //   console.log("sourceNode : ", sourceNode);
  //   console.log("targetNode : ", targetNode);
  //   console.log("nodes : ", nodes);
  //   console.log("edges : ", edges);
  //   if (inputRef.current) {
  //     if (targetNode.type === "cpmEnd") {
  //       // debugger;
  //       console.log("inputRef");
  //       let e = document.getElementById(id);
  //       let _sD = sourceNode.data.startDate.split("-");
  //       let _tD = targetNode.data.startDate.split("-");
  //       let _sourceStartDate = new Date(_sD[0], _sD[1] - 1, _sD[2]);
  //       let _targetStartDate = new Date(_tD[0], _tD[1] - 1, _tD[2]);

  //       let fD = new Date(_sourceStartDate);
  //       let toD = new Date(_targetStartDate);

  //       let btMs = toD.getTime() - fD.getTime();
  //       let btDay = btMs / (1000 * 60 * 60 * 24);
  //       console.log("일수 차이------- : " + btDay);
  //       // e.value = btDay;
  //       inputRef.current.setAttribute("value", btDay);
  //       e = inputRef.current;
  //       debugger;
  //       // data.onChange(e, edges);
  //       // inputRef.current.dispatchEvent(new Event("change", { value: btDay }));
  //       // inputRef.current.dispatchEvent(new Event("change", { e, edges }));
  //       // inputRef.current.dispatchEvent(new Event("onChange", { e, edges }));
  //       window.interfaces.onDataChange(e, edges);
  //     }
  //   }
  // }, [data]);
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  const selected = useStore(
    useCallback(
      (store) =>
        store.edges.find((x) => {
          return x.id === id && x.selected;
        }),
      [id]
    )
  );
  const criticalPathEdge = useStore(
    useCallback(
      (store) => store.edges.find((x) => x.id === id && x.data.criticalPath),
      [id]
    )
  );
  function _edgeStyle() {
    let _criticalPathEdge = criticalPathEdge;
    const isCriticalPath =
      _criticalPathEdge &&
      _criticalPathEdge.data &&
      _criticalPathEdge.data.criticalPath;
    if (selected && isCriticalPath)
      return { strokeWidth: 1, stroke: "#FF0072" };
    else if (!selected && isCriticalPath)
      return { strokeWidth: 1, stroke: "#FF0072", opacity: 0.6 };
    else if (selected && !isCriticalPath)
      return { strokeWidth: 1, stroke: "#555" };
    else if (!selected && !isCriticalPath)
      return { strokeWidth: 1, stroke: "#b1b1b7" };
  }

  const edges = useEdges();
  const nodes = useNodes();

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
  });

  const handleFocusOn = (e) => {
    window.interfaces.onEdgeInputClick(e);
  };

  return (
    // <path
    //   id={id}
    //   className="react-flow__edge-path"
    //   d={edgePath}
    //   markerEnd={markerEnd}
    //   style={style}
    // />

    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={_edgeStyle()} />

      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            // background: "#ffcc00",
            padding: 10,
            borderRadius: 5,
            fontSize: 8,
            // fontWeight: 700,
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          {data.onChange ? (
            <input
              ref={inputRef}
              id={id}
              data-id={id}
              type="number"
              value={Number.isInteger(Number(data.label)) ? data.label : ""}
              onChange={(e) => data.onChange(e, edges)}
              onFocus={(event) => handleFocusOn(event)}
              style={{ width: `20px` }}
            />
          ) : (
            <input
              ref={inputRef}
              id={id}
              data-id={id}
              type="number"
              readOnly
              value={Number.isInteger(Number(data.label)) ? data.label : ""}
              // onChange={(e) => data.onChange(e, edges)}
              style={{ width: `20px` }}
            />
          )}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default FloatingEdge;
