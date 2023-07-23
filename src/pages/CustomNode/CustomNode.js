import { useCallback } from "react";
import { Handle, Position } from "reactflow";
const handleStyle = { left: 10 };

function dateFormatMMDD(date) {
  const d = new Date(date);
  if (!d || isNaN(d)) return;
  const _month = d.getMonth() + 1;
  const _date = d.getDate();

  return `${_month}/${_date}`;
}

function CustomNode({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="custom-wrap">
        <div className="div1">{data.est}</div>
        <div className="div2">{data.lst}</div>
        <div className="div3">{data.blockName}</div>
        <div className="div4">{dateFormatMMDD(data.startDate) || ""}</div>
        <div className="div5">{dateFormatMMDD(data.endDate) || ""}</div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
      {/* <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      /> */}
    </div>
  );
}

export default CustomNode;
