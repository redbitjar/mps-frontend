import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable }) {
  // console.log("data");
  // console.log(data);
  // console.log(isConnectable);
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

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
        <div className="div4">{data.workDate}</div>
        {/* <div className="div4">4</div> */}
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

export default CustomNode;
