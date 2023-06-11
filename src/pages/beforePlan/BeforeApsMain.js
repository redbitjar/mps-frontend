import React, { useEffect, useRef } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import { gantt, predecessorEditor } from "dhtmlx-gantt";
import "./BeforeApsMain.css";

let ganttModules = {};
const tasks = {
  data: [
    {
      id: 11,
      text: "Project #1",
      type: "project",
      progress: 0,
      open: true,
      start_date: "02-04-2023",
      duration: 13,
      parent: 0,
    },
    {
      id: 13,
      text: "A",
      start_date: "2023-06-09",
      type: "project",
      render: "split",
      parent: "11",
      progress: 0,
      open: true,
      erectext: "B101",
      asstext: "B101",
      tontext: "31.71",
    },
    {
      id: 31,
      processType: "1",
      start_date: "2023-06-09",
      duration: 11,
      type: "task",
      parent: "13",
      progress: 0,
      open: true,
    },
    {
      id: 32,
      processType: "2",
      start_date: "2023-06-28",
      duration: 21,
      type: "task",
      parent: "13",
      progress: 0,
      open: true,
    },
    {
      id: 33,
      processType: "3",
      start_date: "2023-07-18",
      duration: 51,
      type: "task",
      parent: "13",
      progress: 0,
      open: true,
    },
    {
      id: 34,
      processType: "4",
      start_date: "2023-10-13",
      duration: 45,
      type: "task",
      parent: "13",
      progress: 0,
      open: true,
    },
    {
      id: 35,
      processType: "5",
      start_date: "2023-12-21",
      duration: 9,
      type: "task",
      parent: "13",
      progress: 0,
      open: true,
    },
    {
      id: 36,
      processType: "6",
      start_date: "2024-01-08",
      duration: 0,
      type: "milestone",
      parent: "13",
      progress: 0,
      open: true,
    },
    {
      id: 14,
      text: "M",
      start_date: "2023-06-03",
      type: "project",
      render: "split",
      parent: "11",
      progress: 0,
      open: true,
      erectext: "B201",
      asstext: "B201",
      tontext: "31.63",
    },
    {
      id: 41,
      processType: "1",
      start_date: "2023-06-03",
      duration: 13,
      type: "task",
      parent: "14",
      progress: 0,
      open: true,
    },
    {
      id: 42,
      processType: "2",
      start_date: "2023-06-26",
      duration: 20,
      type: "task",
      parent: "14",
      progress: 0,
      open: true,
    },
    {
      id: 43,
      processType: "3",
      start_date: "2023-07-14",
      duration: 47,
      type: "task",
      parent: "14",
      progress: 0,
      open: true,
    },
    {
      id: 44,
      processType: "4",
      start_date: "2023-10-04",
      duration: 45,
      type: "task",
      parent: "14",
      progress: 0,
      open: true,
    },
    {
      id: 45,
      processType: "5",
      start_date: "2023-12-13",
      duration: 9,
      type: "task",
      parent: "14",
      progress: 0,
      open: true,
    },
    {
      id: 46,
      processType: "6",
      start_date: "2024-01-03",
      duration: 0,
      type: "milestone",
      parent: "14",
      progress: 0,
      open: true,
    },
    {
      id: 15,
      text: "F",
      start_date: "2023-06-23",
      type: "project",
      render: "split",
      parent: "11",
      progress: 0,
      open: true,
      erectext: "B301",
      asstext: "B301",
      tontext: "9.52",
    },
    {
      id: 51,
      processType: "1",
      start_date: "2023-06-23",
      duration: 12,
      type: "task",
      parent: "15",
      progress: 0,
      open: true,
    },
    {
      id: 52,
      processType: "2",
      start_date: "2023-07-14",
      duration: 18,
      type: "task",
      parent: "15",
      progress: 0,
      open: true,
    },
    {
      id: 53,
      processType: "3",
      start_date: "2023-08-08",
      duration: 53,
      type: "task",
      parent: "15",
      progress: 0,
      open: true,
    },
    {
      id: 54,
      processType: "4",
      start_date: "2023-11-01",
      duration: 38,
      type: "task",
      parent: "15",
      progress: 0,
      open: true,
    },
    {
      id: 55,
      processType: "5",
      start_date: "2023-12-29",
      duration: 9,
      type: "task",
      parent: "15",
      progress: 0,
      open: true,
    },
    {
      id: 56,
      processType: "6",
      start_date: "2024-01-17",
      duration: 0,
      type: "milestone",
      parent: "15",
      progress: 0,
      open: true,
    },
    {
      id: 16,
      text: "H",
      start_date: "2023-07-23",
      type: "project",
      render: "split",
      parent: "11",
      progress: 0,
      open: true,
      erectext: "B401",
      asstext: "B401",
      tontext: "4.56",
    },
    {
      id: 61,
      processType: "1",
      start_date: "2023-07-23",
      duration: 11,
      type: "task",
      parent: "16",
      progress: 0,
      open: true,
    },
    {
      id: 62,
      processType: "2",
      start_date: "2023-08-18",
      duration: 18,
      type: "task",
      parent: "16",
      progress: 0,
      open: true,
    },
    {
      id: 63,
      processType: "3",
      start_date: "2023-09-05",
      duration: 40,
      type: "task",
      parent: "16",
      progress: 0,
      open: true,
    },
    {
      id: 64,
      processType: "4",
      start_date: "2023-11-12",
      duration: 34,
      type: "task",
      parent: "16",
      progress: 0,
      open: true,
    },
    {
      id: 65,
      processType: "5",
      start_date: "2024-01-07",
      duration: 10,
      type: "task",
      parent: "16",
      progress: 0,
      open: true,
    },
    {
      id: 66,
      processType: "6",
      start_date: "2024-01-31",
      duration: 0,
      type: "milestone",
      parent: "16",
      progress: 0,
      open: true,
    },
    {
      id: 17,
      text: "H",
      start_date: "2023-08-25",
      type: "project",
      render: "split",
      parent: "11",
      progress: 0,
      open: true,
      erectext: "B402",
      asstext: "B402",
      tontext: "1.02",
    },
    {
      id: 71,
      processType: "1",
      start_date: "2023-08-25",
      duration: 13,
      type: "task",
      parent: "17",
      progress: 0,
      open: true,
    },
    {
      id: 72,
      processType: "2",
      start_date: "2023-09-15",
      duration: 18,
      type: "task",
      parent: "17",
      progress: 0,
      open: true,
    },
    {
      id: 73,
      processType: "3",
      start_date: "2023-10-09",
      duration: 34,
      type: "task",
      parent: "17",
      progress: 0,
      open: true,
    },
    {
      id: 74,
      processType: "4",
      start_date: "2023-12-01",
      duration: 20,
      type: "task",
      parent: "17",
      progress: 0,
      open: true,
    },
    {
      id: 75,
      processType: "5",
      start_date: "2024-01-15",
      duration: 10,
      type: "task",
      parent: "17",
      progress: 0,
      open: true,
    },
    {
      id: 76,
      processType: "6",
      start_date: "2024-02-12",
      duration: 0,
      type: "milestone",
      parent: "17",
      progress: 0,
      open: true,
    },
    {
      id: 18,
      text: "H",
      start_date: "2023-08-10",
      type: "project",
      render: "split",
      parent: "11",
      progress: 0,
      open: true,
      erectext: "B403",
      asstext: "B403",
      tontext: "2.3",
    },
    {
      id: 81,
      processType: "1",
      start_date: "2023-08-10",
      duration: 11,
      type: "task",
      parent: "18",
      progress: 0,
      open: true,
    },
    {
      id: 82,
      processType: "2",
      start_date: "2023-08-30",
      duration: 18,
      type: "task",
      parent: "18",
      progress: 0,
      open: true,
    },
    {
      id: 83,
      processType: "3",
      start_date: "2023-09-17",
      duration: 36,
      type: "task",
      parent: "18",
      progress: 0,
      open: true,
    },
    {
      id: 84,
      processType: "4",
      start_date: "2023-11-20",
      duration: 40,
      type: "task",
      parent: "18",
      progress: 0,
      open: true,
    },
    {
      id: 85,
      processType: "5",
      start_date: "2024-01-23",
      duration: 10,
      type: "task",
      parent: "18",
      progress: 0,
      open: true,
    },
    {
      id: 86,
      processType: "6",
      start_date: "2024-02-21",
      duration: 0,
      type: "milestone",
      parent: "18",
      progress: 0,
      open: true,
    },
  ],
  links: [
    { id: "11", source: "31", target: "32", type: "0", lag: 3 },
    { id: "12", source: "32", target: "33", type: "0", lag: -7 },
    { id: "13", source: "33", target: "34", type: "0", lag: 4 },
    { id: "14", source: "34", target: "35", type: "0", lag: 6 },
    { id: "15", source: "35", target: "36", type: "0", lag: 3 },
    { id: "21", source: "41", target: "42", type: "0", lag: 3 },
    { id: "22", source: "42", target: "43", type: "0", lag: -6 },
    { id: "23", source: "43", target: "44", type: "0", lag: 4 },
    { id: "24", source: "44", target: "45", type: "0", lag: 6 },
    { id: "25", source: "45", target: "46", type: "0", lag: 6 },
    { id: "31", source: "51", target: "52", type: "0", lag: 5 },
    { id: "32", source: "52", target: "53", type: "0", lag: -6 },
    { id: "33", source: "53", target: "54", type: "0", lag: 5 },
    { id: "34", source: "54", target: "55", type: "0", lag: 5 },
    { id: "35", source: "55", target: "56", type: "0", lag: 5 },
    { id: "41", source: "61", target: "62", type: "0", lag: 4 },
    { id: "42", source: "62", target: "63", type: "0", lag: -6 },
    { id: "43", source: "63", target: "64", type: "0", lag: 5 },
    { id: "44", source: "64", target: "65", type: "0", lag: 4 },
    { id: "45", source: "65", target: "66", type: "0", lag: 8 },
    { id: "51", source: "71", target: "72", type: "0", lag: 4 },
    { id: "52", source: "72", target: "73", type: "0", lag: -5 },
    { id: "53", source: "73", target: "74", type: "0", lag: 6 },
    { id: "54", source: "74", target: "75", type: "0", lag: 10 },
    { id: "55", source: "75", target: "76", type: "0", lag: 9 },
    { id: "61", source: "81", target: "82", type: "0", lag: 3 },
    { id: "62", source: "82", target: "83", type: "0", lag: -5 },
    { id: "63", source: "83", target: "84", type: "0", lag: 6 },
    { id: "64", source: "84", target: "85", type: "0", lag: 6 },
    { id: "65", source: "85", target: "86", type: "0", lag: 11 },
  ],
};

function addClass(node, className) {
  node.classList.add(className);
}

function removeClass(node, className) {
  node.classList.remove(className);
}

function getButton(name) {
  return document.querySelector(".demo-actions [data-action='" + name + "']");
}

function highlightButton(name) {
  addClass(getButton(name), "menu-item-active");
}
function unhighlightButton(name) {
  removeClass(getButton(name), "menu-item-active");
}

function disableButton(name) {
  addClass(getButton(name), "disabled");
}

function enableButton(name) {
  removeClass(getButton(name), "disabled");
}

function refreshUndoBtns() {
  if (!gantt.getUndoStack || !gantt.getUndoStack().length) {
    disableButton("undo");
  } else {
    enableButton("undo");
  }

  if (!gantt.getRedoStack || !gantt.getRedoStack().length) {
    disableButton("redo");
  } else {
    enableButton("redo");
  }
}

// setInterval(refreshUndoBtns, 1000);

var weekScaleTemplate = function (date) {
  var dateToStr = gantt.date.date_to_str("%d %M");
  var weekNum = gantt.date.date_to_str("(week %W)");
  var endDate = gantt.date.add(gantt.date.add(date, 1, "week"), -1, "day");
  return dateToStr(date) + " - " + dateToStr(endDate) + " " + weekNum(date);
};

const zoomConfig = {
  levels: [
    {
      name: "days",
      scales: [
        { unit: "month", step: 1, format: " %Y, %F" },
        { unit: "week", step: 1, format: weekScaleTemplate },
        { unit: "day", step: 1, format: "%D, %d" },
      ],
      round_dnd_dates: true,
      min_column_width: 60,
      scale_height: 60,
    },
    {
      name: "weeks",
      scales: [
        { unit: "month", step: 1, format: " %Y, %F" },
        {
          unit: "week",
          step: 1,
          format: function (date) {
            const dateToStr = gantt.date.date_to_str("%d");
            const endDate = gantt.date.add(
              gantt.date.add(date, 1, "week"),
              -1,
              "day"
            );
            return dateToStr(date) + " - " + dateToStr(endDate);
          },
        },
      ],
      round_dnd_dates: false,
      min_column_width: 60,
      scale_height: 60,
    },
    {
      name: "months",
      scales: [
        { unit: "year", step: 1, format: "%Y" },
        { unit: "month", step: 1, format: "%M" },
      ],
      round_dnd_dates: false,
      min_column_width: 50,
      scale_height: 60,
    },
    {
      name: "quarters",
      scales: [
        { unit: "year", step: 1, format: "%Y" },
        {
          unit: "quarter",
          step: 1,
          format: function quarterLabel(date) {
            const month = date.getMonth();
            let q_num;

            if (month >= 9) {
              q_num = 4;
            } else if (month >= 6) {
              q_num = 3;
            } else if (month >= 3) {
              q_num = 2;
            } else {
              q_num = 1;
            }

            return "Q" + q_num;
          },
        },
        { unit: "month", step: 1, format: "%M" },
      ],
      round_dnd_dates: false,
      min_column_width: 50,
      scale_height: 60,
    },
    {
      name: "years",
      scales: [
        { unit: "year", step: 1, format: "%Y" },
        {
          unit: "year",
          step: 5,
          format: function (date) {
            const dateToStr = gantt.date.date_to_str("%Y");
            const endDate = gantt.date.add(
              gantt.date.add(date, 5, "year"),
              -1,
              "day"
            );
            return dateToStr(date) + " - " + dateToStr(endDate);
          },
        },
      ],
      round_dnd_dates: false,
      min_column_width: 50,
      scale_height: 60,
    },
    {
      name: "years",
      scales: [
        {
          unit: "year",
          step: 10,
          format: function (date) {
            const dateToStr = gantt.date.date_to_str("%Y");
            const endDate = gantt.date.add(
              gantt.date.add(date, 10, "year"),
              -1,
              "day"
            );
            return dateToStr(date) + " - " + dateToStr(endDate);
          },
        },
        {
          unit: "year",
          step: 100,
          format: function (date) {
            const dateToStr = gantt.date.date_to_str("%Y");
            const endDate = gantt.date.add(
              gantt.date.add(date, 100, "year"),
              -1,
              "day"
            );
            return dateToStr(date) + " - " + dateToStr(endDate);
          },
        },
      ],
      round_dnd_dates: false,
      min_column_width: 50,
      scale_height: 60,
    },
  ],
};

gantt.ext.zoom.init(zoomConfig);

let zoomToFitMode = false;
ganttModules.zoomToFit = (function (gantt) {
  let cachedSettings = {};

  function saveConfig() {
    const config = gantt.config;
    cachedSettings = {};
    cachedSettings.scales = config.scales;
    cachedSettings.template = gantt.templates.date_scale;
    cachedSettings.start_date = config.start_date;
    cachedSettings.end_date = config.end_date;
    cachedSettings.zoom_level = gantt.ext.zoom.getCurrentLevel();
  }

  function restoreConfig() {
    applyConfig(cachedSettings);
  }

  function applyConfig(config, dates) {
    if (config.scales[0].date) {
      gantt.templates.date_scale = null;
    } else {
      gantt.templates.date_scale = config.scales[0].template;
    }

    gantt.config.scales = config.scales;

    if (dates && dates.start_date && dates.start_date) {
      const unit = config.scales[config.scales.length - 1].unit;
      gantt.config.start_date = gantt.date.add(dates.start_date, -1, unit);
      gantt.config.end_date = gantt.date.add(
        gantt.date[unit + "_start"](dates.end_date),
        2,
        unit
      );
    } else {
      gantt.config.start_date = gantt.config.end_date = null;
    }

    if (config.zoom_level !== undefined) {
      gantt.ext.zoom.setLevel(config.zoom_level);
    }
  }

  function zoomToFit() {
    const project = gantt.getSubtaskDates(),
      areaWidth = gantt.$task.offsetWidth;
    const scaleConfigs = zoomConfig.levels;

    let zoomLevel = 0;
    for (let i = 0; i < scaleConfigs.length; i++) {
      zoomLevel = i;
      const level = scaleConfigs[i].scales;
      const lowestScale = level[level.length - 1];
      const columnCount = getUnitsBetween(
        project.start_date,
        project.end_date,
        lowestScale.unit,
        lowestScale.step || 1
      );
      if ((columnCount + 2) * gantt.config.min_column_width <= areaWidth) {
        break;
      }
    }

    if (zoomLevel == scaleConfigs.length) {
      zoomLevel--;
    }

    gantt.ext.zoom.setLevel(scaleConfigs[zoomLevel].name);
    applyConfig(scaleConfigs[zoomLevel], project);

    gantt.render();
  }

  // get number of columns in timeline
  function getUnitsBetween(from, to, unit, step) {
    let start = new Date(from),
      end = new Date(to);
    let units = 0;
    while (start.valueOf() < end.valueOf()) {
      units++;
      start = gantt.date.add(start, step, unit);
    }
    return units;
  }

  return {
    enable: function () {
      zoomToFitMode = true;
      saveConfig();
      zoomToFit();
      gantt.render();
    },
    toggle: function () {
      if (zoomToFitMode) {
        this.disable();
      } else {
        this.enable();
      }
    },
    disable: function () {
      zoomToFitMode = false;
      restoreConfig();
      gantt.render();
    },
  };
})(gantt);

gantt.templates.grid_row_class = function (start, end, task) {
  return gantt.hasChild(task.id) ? "gantt_parent_row" : "";
};

const font_width_ratio = 7;

gantt.templates.leftside_text = function leftSideTextTemplate(
  start,
  end,
  task
) {
  if (getTaskFitValue(task) === "left") {
    return task.text;
  }
  return "";
};

gantt.templates.rightside_text = function rightSideTextTemplate(
  start,
  end,
  task
) {
  if (getTaskFitValue(task) === "right") {
    return task.text;
  }
  return "";
};

gantt.templates.task_text = function taskTextTemplate(start, end, task) {
  if (getTaskFitValue(task) === "center") {
    return task.text;
  }
  return "";
};

function getTaskFitValue(task) {
  let taskStartPos = gantt.posFromDate(task.start_date),
    taskEndPos = gantt.posFromDate(task.end_date);

  const width = taskEndPos - taskStartPos;
  const textWidth = (task.text || "").length * font_width_ratio;

  if (width < textWidth) {
    let ganttLastDate = gantt.getState().max_date;
    let ganttEndPos = gantt.posFromDate(ganttLastDate);
    if (ganttEndPos - taskEndPos < textWidth) {
      return "left";
    } else {
      return "right";
    }
  } else {
    return "center";
  }
}

gantt.config.static_background = true;

gantt.plugins({
  marker: true,
  fullscreen: true,
  critical_path: true,
  auto_scheduling: true,
  tooltip: true,
  drag_timeline: true,
  undo: true,
});

gantt.config.drag_timeline = {
  ignore: ".gantt_task_line, .gantt_task_link",
  useKey: false,
};

gantt.templates.task_class = function (start, end, task) {
  switch (task.processType) {
    case "1":
      task.type = "task";
      task.text = "CUTTING/BENDING";
      return "first_task";
      break;
    case "2":
      task.type = "task";
      task.text = "SUB ASSAMBLY";
      return "second_task";
      break;
    case "3":
      task.type = "task";
      task.text = "ASSAMBLY";
      return "third_task";
      break;
    case "4":
      task.type = "task";
      task.text = "PRE OUTFITTING";
      return "fourth_task";
      break;
    case "5":
      task.type = "task";
      task.text = "BLOCK PAINTING";
      return "fifth_task";
      break;
    case "6":
      task.type = "milestone";
      task.text = "ERECTION";
      return "sixth_task";
      break;
  }
};

const date_to_str = gantt.date.date_to_str(gantt.config.task_date);
const today = new Date(2023, 5, 2);
gantt.addMarker({
  start_date: today,
  css: "today",
  text: "Today",
  title: "Today: " + date_to_str(today),
});

const start = new Date(2023, 5, 3);
gantt.addMarker({
  start_date: start,
  css: "status_line",
  text: "Start project",
  title: "Start project: " + date_to_str(start),
});

gantt.attachEvent("onTaskCreated", function (item) {
  if (item.duration == 1) {
    item.duration = 72;
  }
  return true;
});

gantt.ext.fullscreen.getFullscreenElement = function () {
  return document.querySelector(".demo-main-container");
};

const durationFormatter = gantt.ext.formatters.durationFormatter({
  enter: "day",
  store: "day",
  format: "day",
  hoursPerDay: 8,
  hoursPerWeek: 40,
  daysPerMonth: 30,
  short: true,
});

const linksFormatter = gantt.ext.formatters.linkFormatter({
  durationFormatter: durationFormatter,
});

// gantt.config.layout = {
//   css: "gantt_container",
//   cols: [
//     {
//       width: 320,
//       min_width: 200,

//       // adding horizontal scrollbar to the grid via the scrollX attribute
//       rows: [
//         {
//           view: "grid",
//           scrollX: "gridScroll",
//           scrollable: true,
//           scrollY: "scrollVer",
//         },
//         { view: "scrollbar", id: "gridScroll", group: "horizontalScrolls" },
//       ],
//     },
//     { resizer: true, width: 1 },
//     {
//       rows: [
//         { view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer" },
//         { view: "scrollbar", id: "scrollHor", group: "horizontalScrolls" },
//       ],
//     },
//     { view: "scrollbar", id: "scrollVer" },
//   ],
// };

// gantt.config.columns = [
//   {
//     name: "",
//     width: 30,
//     resize: false,
//     template: function (task) {
//       return (
//         "<span class='gantt_grid_wbs'>" + gantt.getWBSCode(task) + "</span>"
//       );
//     },
//   },
//   {
//     name: "erectext",
//     align: "center",
//     label: "EREC. BLK",
//     width: 80,
//     resize: true,
//   },
//   {
//     name: "asstext",
//     align: "center",
//     label: "ASS'Y BLK",
//     width: 80,
//     resize: true,
//   },
//   {
//     name: "tontext",
//     align: "center",
//     label: "W/T(ton)",
//     width: 80,
//     resize: true,
//   },
//   { name: "add", width: 44 },
// ];

// gantt.locale.labels.section_strText = "STR.";
// gantt.locale.labels.section_erectext = "EREC. BLK";
// gantt.locale.labels.section_asstext = "ASS'Y BLK";
// gantt.locale.labels.section_tontext = "W/T(ton)";
// gantt.locale.labels.section_processType = "process";
// var processTypes = [
//   { key: "", label: "select" },
//   { key: "1", label: "CUTTING/BENDING" },
//   { key: "2", label: "SUB ASSAMBLY" },
//   { key: "3", label: "ASSAMBLY" },
//   { key: "4", label: "PRE OUTFITTING" },
//   { key: "5", label: "BLOCK PAINTING" },
//   { key: "6", label: "ERECTION" },
// ];

// gantt.config.lightbox.sections = [
//   {
//     name: "processType",
//     height: 38,
//     map_to: "processType",
//     type: "select",
//     options: processTypes,
//   },
//   {
//     name: "time",
//     type: "duration",
//     map_to: "auto",
//     formatter: durationFormatter,
//   },
// ];
// gantt.config.lightbox.project_sections = [
//   {
//     name: "strText",
//     height: 38,
//     map_to: "text",
//     type: "textarea",
//     focus: true,
//   },
//   {
//     name: "erectext",
//     height: 38,
//     map_to: "erectext",
//     type: "textarea",
//     focus: true,
//   },
//   {
//     name: "asstext",
//     height: 38,
//     map_to: "asstext",
//     type: "textarea",
//     focus: true,
//   },
//   {
//     name: "tontext",
//     height: 38,
//     map_to: "tontext",
//     type: "textarea",
//     focus: true,
//   },

//   {
//     name: "time",
//     type: "duration",
//     readonly: true,
//     map_to: "auto",
//     formatter: durationFormatter,
//   },
// ];
// gantt.config.lightbox.milestone_sections = [
//   {
//     name: "processType",
//     height: 38,
//     map_to: "processType",
//     type: "select",
//     options: processTypes,
//   },
//   {
//     name: "time",
//     type: "duration",
//     map_to: "auto",
//     formatter: durationFormatter,
//   },
// ];

// gantt.config.auto_types = true;
// gantt.config.auto_scheduling_compatibility = true;
// gantt.config.open_split_tasks = true;

// //Make resize marker for two columns
// gantt.attachEvent("onColumnResizeStart", function (ind, column) {
//   if (!column.tree || ind == 0) return;

//   setTimeout(function () {
//     const marker = document.querySelector(".gantt_grid_resize_area");
//     if (!marker) return;
//     const cols = gantt.getGridColumns();
//     const delta = cols[ind - 1].width || 0;
//     if (!delta) return;

//     marker.style.boxSizing = "content-box";
//     marker.style.marginLeft = -delta + "px";
//     marker.style.paddingRight = delta + "px";
//   }, 1);
// });

// gantt.templates.tooltip_text = function (start, end, task) {
//   const links = task.$target;
//   const labels = [];
//   for (let i = 0; i < links.length; i++) {
//     const link = gantt.getLink(links[i]);
//     labels.push(linksFormatter.format(link));
//   }
//   const predecessors = labels.join(", ");

//   let html = "";
//   if (task.text) {
//     html += "<b>TaskName:</b> " + task.text + "<br/>";
//   }
//   html +=
//     "<b>Start:</b> " +
//     gantt.templates.tooltip_date_format(start) +
//     "<br/><b>End:</b> " +
//     gantt.templates.tooltip_date_format(end) +
//     "<br><b>Duration:</b> " +
//     durationFormatter.format(task.duration);
//   if (predecessors) {
//     html += "<br><b>Predecessors:</b>" + predecessors;
//   }
//   return html;
// };

// gantt.config.auto_types = true;
// gantt.config.date_format = "%Y-%m-%d %H:%i:%s";
// gantt.config.duration_unit = "day";
// gantt.config.work_time = true;

// // <!-- 휴일 설정 kimo -->
// var holidays = [
//   new Date(2023, 0, 1),
//   new Date(2023, 0, 21),
//   new Date(2023, 0, 22),
//   new Date(2023, 0, 23),
//   new Date(2023, 0, 24),
//   new Date(2023, 2, 1),
//   new Date(2023, 2, 19),
//   new Date(2023, 4, 1),
//   new Date(2023, 4, 5),
//   new Date(2023, 4, 27),
//   new Date(2023, 5, 6),
//   new Date(2023, 6, 1),
//   new Date(2023, 6, 31),
//   new Date(2023, 7, 1),
//   new Date(2023, 7, 2),
//   new Date(2023, 7, 3),
//   new Date(2023, 7, 4),
//   new Date(2023, 7, 15),
//   new Date(2023, 8, 28),
//   new Date(2023, 8, 29),
//   new Date(2023, 8, 30),
//   new Date(2023, 9, 3),
//   new Date(2023, 9, 9),
//   new Date(2023, 11, 25),
//   new Date(2024, 0, 1),
//   new Date(2024, 1, 9),
//   new Date(2024, 1, 10),
//   new Date(2024, 1, 11),
//   new Date(2024, 1, 12),
//   new Date(2024, 2, 1),
//   new Date(2024, 2, 19),
//   new Date(2024, 3, 10),
//   new Date(2024, 4, 1),
//   new Date(2024, 4, 5),
//   new Date(2024, 4, 6),
//   new Date(2024, 4, 15),
//   new Date(2024, 5, 6),
//   new Date(2024, 6, 1),
//   new Date(2024, 6, 29),
//   new Date(2024, 6, 30),
//   new Date(2024, 6, 31),
//   new Date(2024, 7, 1),
//   new Date(2024, 7, 2),
//   new Date(2024, 7, 15),
//   new Date(2024, 8, 16),
//   new Date(2024, 8, 17),
//   new Date(2024, 8, 18),
//   new Date(2024, 9, 3),
//   new Date(2024, 9, 9),
//   new Date(2024, 11, 25),
// ];

// for (var i = 0; i < holidays.length; i++) {
//   gantt.setWorkTime({
//     date: holidays[i],
//     hours: false,
//   });
// }

// // <!-- 휴일 지우기 kimo -->
// // <!-- gantt.config.skip_off_time = true; -->

// gantt.templates.timeline_cell_class = function (task, date) {
//   if (!gantt.isWorkTime(date)) return "week_end";
//   return "";
// };

// gantt.config.row_height = 23;
// gantt.config.order_branch = "marker";
// gantt.config.order_branch_free = true;
// gantt.config.grid_resize = true;

// gantt.config.auto_scheduling_strict = true;
// gantt.ext.zoom.setLevel("months");
// // gantt.init("gantt_here");

// gantt.templates.link_class = function (link) {
//   var types = gantt.config.links;
//   switch (link.type) {
//     case types.finish_to_start:
//       return "finish_to_start";
//       break;
//     case types.start_to_start:
//       return "start_to_start";
//       break;
//     case types.finish_to_finish:
//       return "finish_to_finish";
//       break;
//   }
// };

const navBar = document.querySelector(".demo-actions");

// 주석살려야함
// gantt.event(navBar, "click", function (e) {
//   let target = e.target || e.srcElement;

//   while (!target.hasAttribute("data-action") && target !== document.body) {
//     target = target.parentNode;
//   }

//   if (target && target.hasAttribute("data-action")) {
//     const action = target.getAttribute("data-action");
//     if (toolbarMenu[action]) {
//       toolbarMenu[action]();
//     }
//   }
// });

let config = {
  collapse: false,
  auto_scheduling: false,
  critical_path: false,
  zoom_to_fit: false,
};

function toggleCheckbox(checkbox, state, disabled) {
  state
    ? checkbox.classList.add("checked")
    : checkbox.classList.remove("checked");
  disabled
    ? checkbox.classList.add("disabled")
    : checkbox.classList.remove("disabled");
}

function BeforeApsMain() {
  let ganttContainer = useRef();

  gantt.config.highlight_critical_path = true;
  useEffect(() => {
    gantt.config.layout = {
      css: "gantt_container",
      cols: [
        {
          width: 320,
          min_width: 200,

          // adding horizontal scrollbar to the grid via the scrollX attribute
          rows: [
            {
              view: "grid",
              scrollX: "gridScroll",
              scrollable: true,
              scrollY: "scrollVer",
            },
            { view: "scrollbar", id: "gridScroll", group: "horizontalScrolls" },
          ],
        },
        { resizer: true, width: 1 },
        {
          rows: [
            { view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer" },
            { view: "scrollbar", id: "scrollHor", group: "horizontalScrolls" },
          ],
        },
        { view: "scrollbar", id: "scrollVer" },
      ],
    };

    gantt.config.columns = [
      {
        name: "",
        width: 30,
        resize: false,
        template: function (task) {
          return (
            "<span class='gantt_grid_wbs'>" + gantt.getWBSCode(task) + "</span>"
          );
        },
      },
      {
        name: "erectext",
        align: "center",
        label: "EREC. BLK",
        width: 80,
        resize: true,
      },
      {
        name: "asstext",
        align: "center",
        label: "ASS'Y BLK",
        width: 80,
        resize: true,
      },
      {
        name: "tontext",
        align: "center",
        label: "W/T(ton)",
        width: 80,
        resize: true,
      },
      { name: "add", width: 44 },
    ];

    gantt.locale.labels.section_strText = "STR.";
    gantt.locale.labels.section_erectext = "EREC. BLK";
    gantt.locale.labels.section_asstext = "ASS'Y BLK";
    gantt.locale.labels.section_tontext = "W/T(ton)";
    gantt.locale.labels.section_processType = "process";
    var processTypes = [
      { key: "", label: "select" },
      { key: "1", label: "CUTTING/BENDING" },
      { key: "2", label: "SUB ASSAMBLY" },
      { key: "3", label: "ASSAMBLY" },
      { key: "4", label: "PRE OUTFITTING" },
      { key: "5", label: "BLOCK PAINTING" },
      { key: "6", label: "ERECTION" },
    ];

    gantt.config.lightbox.sections = [
      {
        name: "processType",
        height: 38,
        map_to: "processType",
        type: "select",
        options: processTypes,
      },
      {
        name: "time",
        type: "duration",
        map_to: "auto",
        formatter: durationFormatter,
      },
    ];
    gantt.config.lightbox.project_sections = [
      {
        name: "strText",
        height: 38,
        map_to: "text",
        type: "textarea",
        focus: true,
      },
      {
        name: "erectext",
        height: 38,
        map_to: "erectext",
        type: "textarea",
        focus: true,
      },
      {
        name: "asstext",
        height: 38,
        map_to: "asstext",
        type: "textarea",
        focus: true,
      },
      {
        name: "tontext",
        height: 38,
        map_to: "tontext",
        type: "textarea",
        focus: true,
      },

      {
        name: "time",
        type: "duration",
        readonly: true,
        map_to: "auto",
        formatter: durationFormatter,
      },
    ];
    gantt.config.lightbox.milestone_sections = [
      {
        name: "processType",
        height: 38,
        map_to: "processType",
        type: "select",
        options: processTypes,
      },
      {
        name: "time",
        type: "duration",
        map_to: "auto",
        formatter: durationFormatter,
      },
    ];

    gantt.config.auto_types = true;
    gantt.config.auto_scheduling_compatibility = true;
    gantt.config.open_split_tasks = true;

    //Make resize marker for two columns
    gantt.attachEvent("onColumnResizeStart", function (ind, column) {
      if (!column.tree || ind == 0) return;

      setTimeout(function () {
        const marker = document.querySelector(".gantt_grid_resize_area");
        if (!marker) return;
        const cols = gantt.getGridColumns();
        const delta = cols[ind - 1].width || 0;
        if (!delta) return;

        marker.style.boxSizing = "content-box";
        marker.style.marginLeft = -delta + "px";
        marker.style.paddingRight = delta + "px";
      }, 1);
    });

    gantt.templates.tooltip_text = function (start, end, task) {
      const links = task.$target;
      const labels = [];
      for (let i = 0; i < links.length; i++) {
        const link = gantt.getLink(links[i]);
        labels.push(linksFormatter.format(link));
      }
      const predecessors = labels.join(", ");

      let html = "";
      if (task.text) {
        html += "<b>TaskName:</b> " + task.text + "<br/>";
      }
      html +=
        "<b>Start:</b> " +
        gantt.templates.tooltip_date_format(start) +
        "<br/><b>End:</b> " +
        gantt.templates.tooltip_date_format(end) +
        "<br><b>Duration:</b> " +
        durationFormatter.format(task.duration);
      if (predecessors) {
        html += "<br><b>Predecessors:</b>" + predecessors;
      }
      return html;
    };

    gantt.config.auto_types = true;
    gantt.config.date_format = "%Y-%m-%d %H:%i:%s";
    gantt.config.duration_unit = "day";
    gantt.config.work_time = true;

    // <!-- 휴일 설정 kimo -->
    var holidays = [
      new Date(2023, 0, 1),
      new Date(2023, 0, 21),
      new Date(2023, 0, 22),
      new Date(2023, 0, 23),
      new Date(2023, 0, 24),
      new Date(2023, 2, 1),
      new Date(2023, 2, 19),
      new Date(2023, 4, 1),
      new Date(2023, 4, 5),
      new Date(2023, 4, 27),
      new Date(2023, 5, 6),
      new Date(2023, 6, 1),
      new Date(2023, 6, 31),
      new Date(2023, 7, 1),
      new Date(2023, 7, 2),
      new Date(2023, 7, 3),
      new Date(2023, 7, 4),
      new Date(2023, 7, 15),
      new Date(2023, 8, 28),
      new Date(2023, 8, 29),
      new Date(2023, 8, 30),
      new Date(2023, 9, 3),
      new Date(2023, 9, 9),
      new Date(2023, 11, 25),
      new Date(2024, 0, 1),
      new Date(2024, 1, 9),
      new Date(2024, 1, 10),
      new Date(2024, 1, 11),
      new Date(2024, 1, 12),
      new Date(2024, 2, 1),
      new Date(2024, 2, 19),
      new Date(2024, 3, 10),
      new Date(2024, 4, 1),
      new Date(2024, 4, 5),
      new Date(2024, 4, 6),
      new Date(2024, 4, 15),
      new Date(2024, 5, 6),
      new Date(2024, 6, 1),
      new Date(2024, 6, 29),
      new Date(2024, 6, 30),
      new Date(2024, 6, 31),
      new Date(2024, 7, 1),
      new Date(2024, 7, 2),
      new Date(2024, 7, 15),
      new Date(2024, 8, 16),
      new Date(2024, 8, 17),
      new Date(2024, 8, 18),
      new Date(2024, 9, 3),
      new Date(2024, 9, 9),
      new Date(2024, 11, 25),
    ];

    for (var i = 0; i < holidays.length; i++) {
      gantt.setWorkTime({
        date: holidays[i],
        hours: false,
      });
    }

    // <!-- 휴일 지우기 kimo -->
    // <!-- gantt.config.skip_off_time = true; -->

    gantt.templates.timeline_cell_class = function (task, date) {
      if (!gantt.isWorkTime(date)) return "week_end";
      return "";
    };

    gantt.config.row_height = 23;
    gantt.config.order_branch = "marker";
    gantt.config.order_branch_free = true;
    gantt.config.grid_resize = true;

    gantt.config.auto_scheduling_strict = true;
    gantt.ext.zoom.setLevel("months");
    // gantt.init("gantt_here");

    gantt.templates.link_class = function (link) {
      var types = gantt.config.links;
      switch (link.type) {
        case types.finish_to_start:
          return "finish_to_start";
          break;
        case types.start_to_start:
          return "start_to_start";
          break;
        case types.finish_to_finish:
          return "finish_to_finish";
          break;
      }
    };

    const toolbarMenu = {
      undo: function () {
        gantt.undo();
        refreshUndoBtns();
      },
      redo: function () {
        gantt.redo();
        refreshUndoBtns();
      },
      zoomToFit: function () {
        ganttModules.zoomToFit.toggle();
        toggleCheckbox(zoomToFitCheckbox, config.zoom_to_fit);
        const scalesDropdown = document.querySelector("#scale_combo");
        const zoomLevelName =
          zoomConfig.levels[gantt.ext.zoom.getCurrentLevel()].name;
        scalesDropdown.value = zoomLevelName;
      },
      fullscreen: function () {
        gantt.ext.fullscreen.toggle();
      },
      collapseAll: function () {
        gantt.eachTask(function (task) {
          task.$open = false;
        });
        gantt.render();
      },
      expandAll: function () {
        gantt.eachTask(function (task) {
          task.$open = true;
        });
        gantt.render();
      },
      toggleAutoScheduling: function () {
        gantt.config.auto_scheduling = !gantt.config.auto_scheduling;

        if (gantt.config.auto_scheduling) {
          gantt.autoSchedule();
        }
      },
      toggleCriticalPath: function () {
        gantt.config.highlight_critical_path =
          !gantt.config.highlight_critical_path;

        gantt.render();
      },
      toPDF: function () {
        // workaround for the bug with the export
        gantt.config.columns[5].editor = null;
        gantt.exportToPDF({
          header: `<style>.timeline_cell{width: ${gantt.$task_data.scrollWidth}px !important;}</style>`,
          raw: true,
        });
        gantt.config.columns[5].editor = predecessorEditor;
      },
      toPNG: function () {
        // workaround for the bug with the export
        gantt.config.columns[5].editor = null;
        gantt.exportToPNG({
          header: `<style>.timeline_cell{width: ${gantt.$task_data.scrollWidth}px !important;}</style>`,
          raw: true,
        });
        gantt.config.columns[5].editor = predecessorEditor;
      },
      toExcel: function () {
        // workaround for the bug with the export
        gantt.config.columns[5].editor = null;
        gantt.exportToExcel();
        gantt.config.columns[5].editor = predecessorEditor;
      },
      toMSProject: function () {
        // workaround for the bug with the export
        gantt.config.columns[5].editor = null;
        gantt.exportToMSProject();
        gantt.config.columns[5].editor = predecessorEditor;
      },
    };

    let collapseCheckbox = document.querySelector("#collapse"),
      autoSchedulingCheckbox = document.querySelector("#auto-scheduling"),
      criticalPathCheckbox = document.querySelector("#critical-path"),
      zoomToFitCheckbox = document.querySelector("#zoom-to-fit"),
      scaleComboElement = document.getElementById("scale_combo");

    collapseCheckbox.addEventListener("click", function () {
      let action = "expandAll";

      config.collapse = !config.collapse;
      toggleCheckbox(collapseCheckbox, config.collapse);

      if (config.collapse) {
        action = "collapseAll";
      }

      if (toolbarMenu[action]) {
        toolbarMenu[action]();
      }
    });

    autoSchedulingCheckbox.addEventListener("click", function () {
      let action = "toggleAutoScheduling";

      config.auto_scheduling = !config.auto_scheduling;
      toggleCheckbox(autoSchedulingCheckbox, config.auto_scheduling);

      if (toolbarMenu[action]) {
        toolbarMenu[action]();
      }
    });

    criticalPathCheckbox.addEventListener("click", function () {
      let action = "toggleCriticalPath";

      config.critical_path = !config.critical_path;
      toggleCheckbox(criticalPathCheckbox, config.critical_path);

      if (toolbarMenu[action]) {
        toolbarMenu[action]();
      }
    });

    zoomToFitCheckbox.addEventListener("click", function () {
      let action = "zoomToFit";

      config.zoom_to_fit = !config.zoom_to_fit;
      toggleCheckbox(zoomToFitCheckbox, config.zoom_to_fit);

      if (toolbarMenu[action]) {
        toolbarMenu[action]();
      }
    });

    scaleComboElement.addEventListener("change", function () {
      let scaleValue = this.value;

      gantt.ext.zoom.setLevel(scaleValue);
      config.zoom_to_fit = false;
      zoomToFitMode = false;
      toggleCheckbox(zoomToFitCheckbox, false);
    });

    gantt.clearAll();
    gantt.init(ganttContainer);
    gantt.parse(tasks);
    gantt.render();
  }, []);

  return (
    <div className="demo-main-container">
      <div className="demo-main-content">
        <div
          ref={(input) => {
            ganttContainer = input;
          }}
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>

      <div className="demo-actions-container">
        <div className="demo-actions">
          <div className="demo-actions__row">
            <div className="demo-actions__col">
              <div className="dhx_demo_checkbox">
                <div id="collapse" className="status-control">
                  <div className="status">
                    <div className="dhx_checkbox_grip"></div>
                  </div>

                  <div className="dhx_checkbox_title">Collapse Rows</div>
                </div>
              </div>
            </div>

            <div className="demo-actions__col">
              <span
                data-action="undo"
                className="icon-btn disabled js-action-btn"
              >
                <img src="./ic_undo_24.png" alt="" />
                Undo
              </span>
            </div>

            <div className="demo-actions__col">
              <span
                data-action="redo"
                className="icon-btn disabled js-action-btn"
              >
                <img src="./ic_redo_24.png" alt="" />
                Redo
              </span>
            </div>

            <div className="demo-actions__col">
              <div className="dhx_demo_checkbox">
                <div id="auto-scheduling" className="status-control">
                  <div className="status">
                    <div className="dhx_checkbox_grip"></div>
                  </div>

                  <div className="dhx_checkbox_title">Auto Scheduling</div>
                </div>
              </div>
            </div>

            <div className="demo-actions__col">
              <div className="dhx_demo_checkbox">
                <div id="critical-path" className="status-control">
                  <div className="status">
                    <div className="dhx_checkbox_grip"></div>
                  </div>

                  <div className="dhx_checkbox_title">Critical Path</div>
                </div>
              </div>
            </div>

            <div className="demo-actions__col">
              <div className="dhx_demo_checkbox">
                <div id="zoom-to-fit" className="status-control">
                  <div className="status">
                    <div className="dhx_checkbox_grip"></div>
                  </div>

                  <div className="dhx_checkbox_title">Zoom to Fit</div>
                </div>
              </div>
            </div>

            <div className="demo-actions__col">
              <div className="scale-container">
                <select
                  className="scale-combo"
                  id="scale_combo"
                  placeholder=""
                  defaultValue={""}
                >
                  <option value="" disabled="">
                    Zoom to:
                  </option>
                  <option value="years">Years</option>
                  <option value="quarters">Quarters</option>
                  <option value="months">Months</option>
                  <option value="weeks">Weeks</option>
                  <option value="days">Days</option>
                </select>
              </div>
            </div>
          </div>

          <div className="demo-actions__last-elem">
            <span
              className="demo-btn outline-btn js-action-btn"
              data-action="fullscreen"
            >
              Fullscreen
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeforeApsMain;
