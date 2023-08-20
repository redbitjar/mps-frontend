import { Handle, Position, useStore } from "reactflow";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

const sourceStyle = { zIndex: 1 };

function dateFormatMMDD(date) {
  const d = new Date(date);
  if (!d || isNaN(d)) return;
  const _month = d.getMonth() + 1;
  const _date = d.getDate();

  return `${_month}/${_date}`;
}

export default function CustomNodeEvent({ id, data }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  const label = isTarget ? "Drop here" : "Drag to connect";
  const { criticalPath: isCriticalPath } = data;

  console.log("--------------");
  console.log(isCriticalPath);

  return (
    <div className="customNode">
      <div
        className="customNodeBody"
        // style={{
        //   borderStyle: isTarget ? "dashed" : "solid",
        //   backgroundColor: isTarget ? "#ffcce3" : "#ccd9f6",
        // }}
      >
        {/* If handles are conditionally rendered and not present initially, you need to update the node internals https://reactflow.dev/docs/api/hooks/use-update-node-internals/ */}
        {/* In this case we don't need to use useUpdateNodeInternals, since !isConnecting is true at the beginning and all handles are rendered initially. */}
        {!isConnecting && (
          <Handle
            className="customHandle"
            position={Position.Right}
            type="source"
            style={sourceStyle}
          />
        )}

        <Handle
          className="customHandle"
          position={Position.Left}
          type="target"
        />
        {/* {"Node"} */}
        <div
          className={`text-updater-node event ${
            isCriticalPath ? "criticalNode" : ""
          }`}
        >
          <div className="text-updater-node event">
            <div className="custom-wrap">
              <div className="div1">{data.est}</div>
              <div className="div2">{data.lst}</div>
              <div className="div3">{data.blockName}</div>
              <div className="div4">{dateFormatMMDD(data.startDate)}</div>
              <div className="div5">{dateFormatMMDD(data.endDate)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
