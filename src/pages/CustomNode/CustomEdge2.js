import { xor } from "lodash";
import React, { useCallback, useState } from "react";
import "./CustomEdge.css";
import {
  EdgeProps,
  getBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
  useEdges,
  getSmoothStepPath,
  useStore,
} from "reactflow";

function CustomEdge2({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  style = {},
  markerEnd,
  label,
}) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  // const selected = useStore(
  //   useCallback(
  //     (store) => store.edges.find((x) => x.id === id && x.selected),
  //     [id]
  //   )
  // );

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
  console.log(`selected:${selected ? "true" : "false"}`);
  console.log(`criticalPathEdge:${criticalPathEdge ? "true" : "false"}`);

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

  return (
    <>
      {/* <path id={id} className="react-flow__edge-path" d={edgePath} /> */}

      {/* <BaseEdge path={edgePath} markerEnd={markerEnd} style={_edgeStyle()} /> */}
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
          {/* <input value={text} onChange={onChange2} className="nodrag nopan" /> */}

          {/* <button
className="edgebutton"
onClick={(event) => onEdgeClick(event, id)}
>
×
</button> */}
          {/* <input value={text} onChange={onChange} style={{ width: `20px` }} /> */}

          <input
            data-id={id}
            type="number"
            value={data.label || ""}
            onChange={(e) => data.onChange(e, edges)}
            style={{ width: `20px` }}
          />

          {/* {data.label} */}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default React.memo(CustomEdge2);
