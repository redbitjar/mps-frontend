import React, { useState } from "react";

import {
  EdgeProps,
  getBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
  useEdges,
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
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const edges = useEdges();

  return (
    <>
      {/* <path id={id} className="react-flow__edge-path" d={edgePath} /> */}

      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />

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
