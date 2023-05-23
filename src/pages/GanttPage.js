import React, { useEffect, useRef } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import { gantt } from "dhtmlx-gantt";
import { sample_gannt_data } from "./SampleData/GanttSampleData";


export default function GanttPage(props) {
  let ganttContainer = useRef();

  useEffect(() => {
    gantt.attachEvent("onLinkClick", function (id) {
      var link = gantt.getLink(id),
        src = gantt.getTask(link.source),
        trg = gantt.getTask(link.target),
        types = gantt.config.links;

      var first = "",
        second = "";
      switch (link.type) {
        case types.finish_to_start:
          first = "finish";
          second = "start";
          break;
        case types.start_to_start:
          first = "start";
          second = "start";
          break;
        case types.start_to_finish:
          first = "finish";
          second = "finish";
          break;
        default:
          break;
      }

      gantt.message(
        "Must " +
          first +
          "<b>" +
          src.text +
          "</b> to " +
          second +
          "<b>" +
          trg.text +
          "</b>"
      );
    });
    gantt.init(ganttContainer);
    gantt.parse(sample_gannt_data);
  }, []);
  return <div ref={(input) => {
    ganttContainer = input;
  }} style={{width: '100%', height: '100%'}}>GanttPage</div>;
}
