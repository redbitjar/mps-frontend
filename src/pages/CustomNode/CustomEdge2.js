import React, { useState } from "react";
import {
  EdgeProps,
  getBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
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
  onChange,
  props,
}) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const [text, setText] = useState("a");
  return (
    <>
      {/* <path id={id} className="react-flow__edge-path" d={edgePath} /> */}
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            background: "#ffcc00",
            padding: 10,
            borderRadius: 5,
            fontSize: 12,
            fontWeight: 700,
          }}
          className="nodrag nopan"
        >
          <input value={text} />
          {/* <input value={data.label} onChange={data.onChange} /> */}
          {/* {data.label} */}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default CustomEdge2;
