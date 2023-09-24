import { useCallback } from "react";
import { Handle, Position } from "reactflow";
const handleStyle = { left: 10 };

function TreeMapNode({ data, isConnectable }) {
  return (
    <div className="treeMapNodeBody">
      <div className="treeMapNodeWrap">
        <div className="block">{data.blockName}</div>
      </div>
    </div>
  );
}

export default TreeMapNode;
