import { useCallback } from "react";

import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function dateFormatMMDD(date) {
  const d = new Date(date);
  if (!d) return;
  const _month = d.getMonth() + 1;
  const _date = d.getDate();

  return `${_month}/${_date}`;
}

function CustomNod4({ data, isConnectable }) {
  return (
    <div className="triangle">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="custom-wrap triangle-wrap">
        <div className="div1 div6">{data.est}</div>
        <div className="div2 div6">{data.lst}</div>
        <div className="div3 div6">{data.blockName}</div>
        <div className="div4 div6 div7">
          {data.startDate && dateFormatMMDD(data.startDate)}
        </div>
        <div className="div5 div6 div7">
          {data.endDate && dateFormatMMDD(data.endDate)}
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default CustomNod4;
