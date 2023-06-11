import React, { useEffect, useRef } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import { gantt } from "dhtmlx-gantt";
import "./MountedConnectionMain.css";

const tasks = {
  data: [
    {
      id: 1,
      start_date: "2023-06-03",
      ActCode: "B201-HCU-110",
      text: "B201-HULLSHOP-CUTTING",
      duration: 13,
      sortorder: 0,
      open: 1,
      type: "task",
    },
    {
      id: 2,
      start_date: "2023-06-03",
      ActCode: "B201-HBE-110",
      text: "B201-HULLSHOP-BENDING",
      duration: 13,
      sortorder: 1,
      open: 1,
      type: "task",
    },
    {
      id: 3,
      start_date: "2023-06-26",
      ActCode: "B201-HSA-110",
      text: "B201-HULLSHOP-SUB_ASSEMBLY",
      duration: 20,
      sortorder: 2,
      open: 1,
      type: "task",
    },
    {
      id: 4,
      start_date: "2023-07-14",
      ActCode: "B201-HAS-110",
      text: "B201-HULLSHOP-ASSEMBLY",
      duration: 47,
      sortorder: 3,
      open: 1,
      type: "task",
    },
    {
      id: 5,
      start_date: "2023-10-04",
      ActCode: "B201-HPO-110",
      text: "B201-HULLSHOP-PRE_OUTFITTING",
      duration: 45,
      sortorder: 4,
      open: 1,
      type: "task",
    },
    {
      id: 6,
      start_date: "2023-12-13",
      ActCode: "B201-HBP-110",
      text: "B201-HULLSHOP-BLOCK_PAINTING",
      duration: 9,
      sortorder: 5,
      open: 1,
      type: "task",
    },
    {
      id: 7,
      start_date: "2023-07-14",
      ActCode: "B201-HSF-999",
      text: "B201-HULLSHOP-SCAFFOLDING",
      duration: 47,
      sortorder: 6,
      open: 1,
      type: "task",
    },
    {
      id: 8,
      start_date: "2024-01-03",
      ActCode: "B201-BER-110",
      text: "B201-BERTH-ERECTION",
      duration: 3,
      sortorder: 7,
      open: 1,
      type: "task",
    },
    {
      id: 9,
      start_date: "2023-06-09",
      ActCode: "B101-HCU-110",
      text: "B101-HULLSHOP-CUTTING",
      duration: 11,
      sortorder: 8,
      open: 1,
      type: "task",
    },
    {
      id: 10,
      start_date: "2023-06-09",
      ActCode: "B101-HBE-110",
      text: "B101-HULLSHOP-BENDING",
      duration: 11,
      sortorder: 9,
      open: 1,
      type: "task",
    },
    {
      id: 11,
      start_date: "2023-06-28",
      ActCode: "B101-HSA-110",
      text: "B101-HULLSHOP-SUB_ASSEMBLY",
      duration: 21,
      sortorder: 10,
      open: 1,
      type: "task",
    },
    {
      id: 12,
      start_date: "2023-07-18",
      ActCode: "B101-HAS-110",
      text: "B101-HULLSHOP-ASSEMBLY",
      duration: 51,
      sortorder: 11,
      open: 1,
      type: "task",
    },
    {
      id: 13,
      start_date: "2023-10-13",
      ActCode: "B101-HPO-110",
      text: "B101-HULLSHOP-PRE_OUTFITTING",
      duration: 45,
      sortorder: 12,
      open: 1,
      type: "task",
    },
    {
      id: 14,
      start_date: "2023-12-21",
      ActCode: "B101-HBP-110",
      text: "B101-HULLSHOP-BLOCK_PAINTING",
      duration: 9,
      sortorder: 13,
      open: 1,
      type: "task",
    },
    {
      id: 15,
      start_date: "2023-07-18",
      ActCode: "B101-HSF-999",
      text: "B101-HULLSHOP-SCAFFOLDING",
      duration: 51,
      sortorder: 14,
      open: 1,
      type: "task",
    },
    {
      id: 16,
      start_date: "2024-01-08",
      ActCode: "B101-BER-110",
      text: "B101-BERTH-ERECTION",
      duration: 7,
      sortorder: 15,
      open: 1,
      type: "task",
    },
    {
      id: 17,
      start_date: "2023-06-23",
      ActCode: "B301-HCU-110",
      text: "B301-HULLSHOP-CUTTING",
      duration: 12,
      sortorder: 16,
      open: 1,
      type: "task",
    },
    {
      id: 18,
      start_date: "2023-06-23",
      ActCode: "B301-HBE-110",
      text: "B301-HULLSHOP-BENDING",
      duration: 12,
      sortorder: 17,
      open: 1,
      type: "task",
    },
    {
      id: 19,
      start_date: "2023-07-14",
      ActCode: "B301-HSA-110",
      text: "B301-HULLSHOP-SUB_ASSEMBLY",
      duration: 18,
      sortorder: 18,
      open: 1,
      type: "task",
    },
    {
      id: 20,
      start_date: "2023-08-08",
      ActCode: "B301-HAS-110",
      text: "B301-HULLSHOP-ASSEMBLY",
      duration: 53,
      sortorder: 19,
      open: 1,
      type: "task",
    },
    {
      id: 21,
      start_date: "2023-11-01",
      ActCode: "B301-HPO-110",
      text: "B301-HULLSHOP-PRE_OUTFITTING",
      duration: 38,
      sortorder: 20,
      open: 1,
      type: "task",
    },
    {
      id: 22,
      start_date: "2023-12-29",
      ActCode: "B301-HBP-110",
      text: "B301-HULLSHOP-BLOCK_PAINTING",
      duration: 9,
      sortorder: 21,
      open: 1,
      type: "task",
    },
    {
      id: 23,
      start_date: "2023-08-08",
      ActCode: "B301-HSF-999",
      text: "B301-HULLSHOP-SCAFFOLDING",
      duration: 53,
      sortorder: 22,
      open: 1,
      type: "task",
    },
    {
      id: 24,
      start_date: "2024-01-17",
      ActCode: "B301-BER-110",
      text: "B301-BERTH-ERECTION",
      duration: 10,
      sortorder: 23,
      open: 1,
      type: "task",
    },
    {
      id: 25,
      start_date: "2023-07-23",
      ActCode: "B401-HCU-150",
      text: "B401-HULLSHOP-CUTTING",
      duration: 11,
      sortorder: 24,
      open: 1,
      type: "task",
    },
    {
      id: 26,
      start_date: "2023-07-23",
      ActCode: "B401-HBE-150",
      text: "B401-HULLSHOP-BENDING",
      duration: 11,
      sortorder: 25,
      open: 1,
      type: "task",
    },
    {
      id: 27,
      start_date: "2023-08-18",
      ActCode: "B401-HSA-150",
      text: "B401-HULLSHOP-SUB_ASSEMBLY",
      duration: 18,
      sortorder: 26,
      open: 1,
      type: "task",
    },
    {
      id: 28,
      start_date: "2023-09-05",
      ActCode: "B401-HAS-150",
      text: "B401-HULLSHOP-ASSEMBLY",
      duration: 40,
      sortorder: 27,
      open: 1,
      type: "task",
    },
    {
      id: 29,
      start_date: "2023-11-12",
      ActCode: "B401-HPO-150",
      text: "B401-HULLSHOP-PRE_OUTFITTING",
      duration: 34,
      sortorder: 28,
      open: 1,
      type: "task",
    },
    {
      id: 30,
      start_date: "2024-01-07",
      ActCode: "B401-HBP-150",
      text: "B401-HULLSHOP-BLOCK_PAINTING",
      duration: 10,
      sortorder: 29,
      open: 1,
      type: "task",
    },
    {
      id: 31,
      start_date: "2023-09-05",
      ActCode: "B401-HSF-150",
      text: "B401-HULLSHOP-SCAFFOLDING",
      duration: 40,
      sortorder: 30,
      open: 1,
      type: "task",
    },
    {
      id: 32,
      start_date: "2024-01-31",
      ActCode: "B401-BER-150",
      text: "B401-BERTH-ERECTION",
      duration: 7,
      sortorder: 31,
      open: 1,
      type: "task",
    },
    {
      id: 33,
      start_date: "2023-08-25",
      ActCode: "B402-HCU-150",
      text: "B402-HULLSHOP-CUTTING",
      duration: 13,
      sortorder: 32,
      open: 1,
      type: "task",
    },
    {
      id: 34,
      start_date: "2023-08-25",
      ActCode: "B402-HBE-150",
      text: "B402-HULLSHOP-BENDING",
      duration: 13,
      sortorder: 33,
      open: 1,
      type: "task",
    },
    {
      id: 35,
      start_date: "2023-09-15",
      ActCode: "B402-HSA-150",
      text: "B402-HULLSHOP-SUB_ASSEMBLY",
      duration: 18,
      sortorder: 34,
      open: 1,
      type: "task",
    },
    {
      id: 36,
      start_date: "2023-10-09",
      ActCode: "B402-HAS-150",
      text: "B402-HULLSHOP-ASSEMBLY",
      duration: 34,
      sortorder: 35,
      open: 1,
      type: "task",
    },
    {
      id: 37,
      start_date: "2023-12-01",
      ActCode: "B402-HPO-150",
      text: "B402-HULLSHOP-PRE_OUTFITTING",
      duration: 20,
      sortorder: 36,
      open: 1,
      type: "task",
    },
    {
      id: 38,
      start_date: "2024-01-15",
      ActCode: "B402-HBP-150",
      text: "B402-HULLSHOP-BLOCK_PAINTING",
      duration: 10,
      sortorder: 37,
      open: 1,
      type: "task",
    },
    {
      id: 39,
      start_date: "2023-10-09",
      ActCode: "B402-HSF-150",
      text: "B402-HULLSHOP-SCAFFOLDING",
      duration: 34,
      sortorder: 38,
      open: 1,
      type: "task",
    },
    {
      id: 40,
      start_date: "2024-02-12",
      ActCode: "B402-BER-150",
      text: "B402-BERTH-ERECTION",
      duration: 6,
      sortorder: 39,
      open: 1,
      type: "task",
    },
    {
      id: 41,
      start_date: "2023-08-10",
      ActCode: "B403-HCU-150",
      text: "B403-HULLSHOP-CUTTING",
      duration: 11,
      sortorder: 40,
      open: 1,
      type: "task",
    },
    {
      id: 42,
      start_date: "2023-08-10",
      ActCode: "B403-HBE-150",
      text: "B403-HULLSHOP-BENDING",
      duration: 11,
      sortorder: 41,
      open: 1,
      type: "task",
    },
    {
      id: 43,
      start_date: "2023-08-30",
      ActCode: "B403-HSA-150",
      text: "B403-HULLSHOP-SUB_ASSEMBLY",
      duration: 18,
      sortorder: 42,
      open: 1,
      type: "task",
    },
    {
      id: 44,
      start_date: "2023-09-17",
      ActCode: "B403-HAS-150",
      text: "B403-HULLSHOP-ASSEMBLY",
      duration: 36,
      sortorder: 43,
      open: 1,
      type: "task",
    },
    {
      id: 45,
      start_date: "2023-11-20",
      ActCode: "B403-HPO-150",
      text: "B403-HULLSHOP-PRE_OUTFITTING",
      duration: 40,
      sortorder: 44,
      open: 1,
      type: "task",
    },
    {
      id: 46,
      start_date: "2024-01-23",
      ActCode: "B403-HBP-150",
      text: "B403-HULLSHOP-BLOCK_PAINTING",
      duration: 10,
      sortorder: 45,
      open: 1,
      type: "task",
    },
    {
      id: 47,
      start_date: "2023-09-17",
      ActCode: "B403-HSF-150",
      text: "B403-HULLSHOP-SCAFFOLDING",
      duration: 36,
      sortorder: 46,
      open: 1,
      type: "task",
    },
    {
      id: 48,
      start_date: "2024-02-21",
      ActCode: "B403-BER-150",
      text: "B403-BERTH-ERECTION",
      duration: 7,
      sortorder: 47,
      open: 1,
      type: "task",
    },
  ],
  links: [
    { id: 1, target: 2, source: 1, type: "1", lag: 0 },
    { id: 2, target: 3, source: 2, type: "0", lag: 3 },
    { id: 3, target: 4, source: 3, type: "1", lag: 15 },
    { id: 4, target: 5, source: 4, type: "0", lag: 4 },
    { id: 5, target: 6, source: 5, type: "0", lag: 6 },
    { id: 6, target: 7, source: 4, type: "1", lag: 0 },
    { id: 7, target: 8, source: 6, type: "0", lag: 6 },
    { id: 8, target: 9, source: 1, type: "1", lag: 4 },
    { id: 9, target: 10, source: 9, type: "1", lag: 0 },
    { id: 10, target: 11, source: 10, type: "0", lag: 3 },
    { id: 11, target: 12, source: 11, type: "1", lag: 15 },
    { id: 12, target: 13, source: 12, type: "0", lag: 4 },
    { id: 13, target: 14, source: 13, type: "0", lag: 6 },
    { id: 14, target: 15, source: 12, type: "1", lag: 0 },
    { id: 15, target: 16, source: 14, type: "0", lag: 3 },
    { id: 16, target: 17, source: 9, type: "1", lag: 11 },
    { id: 17, target: 18, source: 17, type: "1", lag: 0 },
    { id: 18, target: 19, source: 18, type: "0", lag: 5 },
    { id: 19, target: 20, source: 19, type: "1", lag: 13 },
    { id: 20, target: 21, source: 20, type: "0", lag: 5 },
    { id: 21, target: 22, source: 21, type: "0", lag: 5 },
    { id: 22, target: 23, source: 20, type: "1", lag: 0 },
    { id: 23, target: 24, source: 22, type: "0", lag: 5 },
    { id: 24, target: 25, source: 17, type: "1", lag: 21 },
    { id: 25, target: 26, source: 25, type: "1", lag: 0 },
    { id: 26, target: 27, source: 26, type: "0", lag: 4 },
    { id: 27, target: 28, source: 27, type: "1", lag: 13 },
    { id: 28, target: 29, source: 28, type: "0", lag: 5 },
    { id: 29, target: 30, source: 29, type: "0", lag: 4 },
    { id: 30, target: 31, source: 28, type: "1", lag: 0 },
    { id: 31, target: 32, source: 30, type: "0", lag: 8 },
    { id: 32, target: 33, source: 25, type: "1", lag: 19 },
    { id: 33, target: 34, source: 33, type: "1", lag: 0 },
    { id: 34, target: 35, source: 34, type: "0", lag: 4 },
    { id: 35, target: 36, source: 35, type: "1", lag: 13 },
    { id: 36, target: 37, source: 36, type: "0", lag: 6 },
    { id: 37, target: 38, source: 37, type: "0", lag: 10 },
    { id: 38, target: 39, source: 36, type: "1", lag: 0 },
    { id: 39, target: 40, source: 38, type: "0", lag: 9 },
    { id: 40, target: 41, source: 25, type: "1", lag: 9 },
    { id: 41, target: 42, source: 41, type: "1", lag: 0 },
    { id: 42, target: 43, source: 42, type: "0", lag: 3 },
    { id: 43, target: 44, source: 43, type: "1", lag: 13 },
    { id: 44, target: 45, source: 44, type: "0", lag: 6 },
    { id: 45, target: 46, source: 45, type: "0", lag: 6 },
    { id: 46, target: 47, source: 44, type: "1", lag: 0 },
    { id: 47, target: 48, source: 46, type: "0", lag: 11 },
  ],
};

window.ganttModules = {};

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

function refreshUndoBtns(gantt) {
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
// 주석
// setInterval(refreshUndoBtns, 1000);

// const toolbarMenu = {
//   undo: function () {
//     gantt.undo();
//     refreshUndoBtns();
//   },
//   redo: function () {
//     gantt.redo();
//     refreshUndoBtns();
//   },
//   zoomToFit: function () {
//     window.ganttModules.zoomToFit.toggle();
//     toggleCheckbox(zoomToFitCheckbox, config.zoom_to_fit);
//     const scalesDropdown = document.querySelector("#scale_combo");
//     const zoomLevelName =
//       zoomConfig.levels[gantt.ext.zoom.getCurrentLevel()].name;
//     scalesDropdown.value = zoomLevelName;
//   },
//   fullscreen: function () {
//     gantt.ext.fullscreen.toggle();
//   },
//   collapseAll: function () {
//     gantt.eachTask(function (task) {
//       task.$open = false;
//     });
//     gantt.render();
//   },
//   expandAll: function () {
//     gantt.eachTask(function (task) {
//       task.$open = true;
//     });
//     gantt.render();
//   },
//   toggleAutoScheduling: function () {
//     gantt.config.auto_scheduling = !gantt.config.auto_scheduling;

//     if (gantt.config.auto_scheduling) {
//       gantt.autoSchedule();
//     }
//   },
//   toggleCriticalPath: function () {
//     gantt.config.highlight_critical_path =
//       !gantt.config.highlight_critical_path;

//     gantt.render();
//   },
//   toPDF: function () {
//     // workaround for the bug with the export
//     gantt.config.columns[5].editor = null;
//     gantt.exportToPDF({
//       header: `<style>.timeline_cell{width: ${gantt.$task_data.scrollWidth}px !important;}</style>`,
//       raw: true,
//     });
//     gantt.config.columns[5].editor = predecessorEditor;
//   },
//   toPNG: function () {
//     // workaround for the bug with the export
//     gantt.config.columns[5].editor = null;
//     gantt.exportToPNG({
//       header: `<style>.timeline_cell{width: ${gantt.$task_data.scrollWidth}px !important;}</style>`,
//       raw: true,
//     });
//     gantt.config.columns[5].editor = predecessorEditor;
//   },
//   toExcel: function () {
//     // workaround for the bug with the export
//     gantt.config.columns[5].editor = null;
//     gantt.exportToExcel();
//     gantt.config.columns[5].editor = predecessorEditor;
//   },
//   toMSProject: function () {
//     // workaround for the bug with the export
//     gantt.config.columns[5].editor = null;
//     gantt.exportToMSProject();
//     gantt.config.columns[5].editor = predecessorEditor;
//   },
// };

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

window.ganttModules.zoomToFit = (function (gantt) {
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
const date_to_str = gantt.date.date_to_str(gantt.config.task_date);
const today = new Date(2019, 9, 5);
gantt.addMarker({
  start_date: today,
  css: "today",
  text: "Today",
  title: "Today: " + date_to_str(today),
});

const start = new Date(2019, 9, 28);
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

gantt.config.layout = {
  css: "gantt_container",
  cols: [
    {
      width: 640,
      min_width: 300,

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

const textEditor = { type: "text", map_to: "text" };
const codeEditor = { type: "text", map_to: "ActCode" };
const dateEditor = { type: "date", map_to: "start_date" };
const durationEditor = {
  type: "duration",
  map_to: "duration",
  formatter: durationFormatter,
  min: 0,
  max: 10000,
};
const predecessorEditor = {
  type: "predecessor",
  map_to: "auto",
  formatter: linksFormatter,
};

// gantt.config.columns = [
//   {
//     name: "",
//     width: 15,
//     resize: false,
//     template: function (task) {
//       return (
//         "<span class='gantt_grid_wbs'>" + gantt.getWBSCode(task) + "</span>"
//       );
//     },
//   },
//   {
//     name: "ActCode",
//     tree: true,
//     label: "Act. Code",
//     width: 180,
//     resize: true,
//     editor: codeEditor,
//   },
//   {
//     name: "text",
//     label: "Act. Name",
//     width: 180,
//     resize: true,
//     editor: textEditor,
//   },
//   {
//     name: "predecessors",
//     label: "Predecessors",
//     width: 80,
//     align: "left",
//     editor: predecessorEditor,
//     resize: true,
//     template: function (task) {
//       const links = task.$target;
//       const labels = [];
//       for (let i = 0; i < links.length; i++) {
//         const link = gantt.getLink(links[i]);
//         labels.push(linksFormatter.format(link));
//       }
//       return labels.join(", ");
//     },
//   },
//   {
//     name: "start_date",
//     label: "Start",
//     align: "center",
//     resize: true,
//     width: 80,
//     editor: dateEditor,
//   },
//   {
//     name: "duration_formatted",
//     label: "Duration",
//     resize: true,
//     align: "center",
//     width: 60,
//     template: function (task) {
//       return durationFormatter.format(task.duration);
//     },
//     editor: durationEditor,
//   },
//   { name: "add", width: 44 },
// ];

// gantt.locale.labels.section_actCode = "Act. Code";
// gantt.locale.labels.section_actText = "Act. Name";
// gantt.config.lightbox.sections = [
//   {
//     name: "actCode",
//     height: 70,
//     map_to: "ActCode",
//     type: "textarea",
//     focus: true,
//   },
//   {
//     name: "actText",
//     height: 70,
//     map_to: "text",
//     type: "textarea",
//     focus: true,
//   },
//   {
//     name: "type",
//     type: "typeselect",
//     map_to: "type",
//     filter: function (name, value) {
//       return !!(
//         value != gantt.config.types.project &&
//         value != gantt.config.types.placeholder
//       );
//     },
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
//     name: "actCode",
//     height: 70,
//     map_to: "ActCode",
//     type: "textarea",
//     focus: true,
//   },
//   {
//     name: "actText",
//     height: 70,
//     map_to: "text",
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
//     name: "actText",
//     height: 70,
//     map_to: "text",
//     type: "textarea",
//     focus: true,
//   },
//   {
//     name: "type",
//     type: "typeselect",
//     map_to: "type",
//     filter: function (name, value) {
//       return !!(value != gantt.config.types.project);
//     },
//   },
//   {
//     name: "time",
//     type: "duration",
//     single_date: true,
//     map_to: "auto",
//     formatter: durationFormatter,
//   },
// ];

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

//   let html =
//     "<b>ActName:</b> " +
//     task.text +
//     "<br/><b>Start:</b> " +
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

// // 휴일 설정 kimo
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

// 주석다시살려야함
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

// 주석
// let collapseCheckbox = document.querySelector("#collapse"),
//   autoSchedulingCheckbox = document.querySelector("#auto-scheduling"),
//   criticalPathCheckbox = document.querySelector("#critical-path"),
//   zoomToFitCheckbox = document.querySelector("#zoom-to-fit"),
//   scaleComboElement = document.getElementById("scale_combo");

//
// collapseCheckbox.addEventListener("click", function () {
//   let action = "expandAll";

//   config.collapse = !config.collapse;
//   toggleCheckbox(collapseCheckbox, config.collapse);

//   if (config.collapse) {
//     action = "collapseAll";
//   }

//   if (toolbarMenu[action]) {
//     toolbarMenu[action]();
//   }
// });

// autoSchedulingCheckbox.addEventListener("click", function () {
//   let action = "toggleAutoScheduling";

//   config.auto_scheduling = !config.auto_scheduling;
//   toggleCheckbox(autoSchedulingCheckbox, config.auto_scheduling);

//   if (toolbarMenu[action]) {
//     toolbarMenu[action]();
//   }
// });

// criticalPathCheckbox.addEventListener("click", function () {
//   let action = "toggleCriticalPath";

//   config.critical_path = !config.critical_path;
//   toggleCheckbox(criticalPathCheckbox, config.critical_path);

//   if (toolbarMenu[action]) {
//     toolbarMenu[action]();
//   }
// });

// zoomToFitCheckbox.addEventListener("click", function () {
//   let action = "zoomToFit";

//   config.zoom_to_fit = !config.zoom_to_fit;
//   toggleCheckbox(zoomToFitCheckbox, config.zoom_to_fit);

//   if (toolbarMenu[action]) {
//     toolbarMenu[action]();
//   }
// });

// scaleComboElement.addEventListener("change", function () {
//   let scaleValue = this.value;

//   gantt.ext.zoom.setLevel(scaleValue);
//   config.zoom_to_fit = false;
//   zoomToFitMode = false;
//   toggleCheckbox(zoomToFitCheckbox, false);
// });

function MountedConnectionMain() {
  let ganttContainer2 = useRef();

  gantt.config.highlight_critical_path = true;
  useEffect(() => {
    gantt.config.columns = [
      {
        name: "",
        width: 15,
        resize: false,
        template: function (task) {
          return (
            "<span class='gantt_grid_wbs'>" + gantt.getWBSCode(task) + "</span>"
          );
        },
      },
      {
        name: "ActCode",
        tree: true,
        label: "Act. Code",
        width: 180,
        resize: true,
        editor: codeEditor,
      },
      {
        name: "text",
        label: "Act. Name",
        width: 180,
        resize: true,
        editor: textEditor,
      },
      {
        name: "predecessors",
        label: "Predecessors",
        width: 80,
        align: "left",
        editor: predecessorEditor,
        resize: true,
        template: function (task) {
          const links = task.$target;
          const labels = [];
          for (let i = 0; i < links.length; i++) {
            const link = gantt.getLink(links[i]);
            labels.push(linksFormatter.format(link));
          }
          return labels.join(", ");
        },
      },
      {
        name: "start_date",
        label: "Start",
        align: "center",
        resize: true,
        width: 80,
        editor: dateEditor,
      },
      {
        name: "duration_formatted",
        label: "Duration",
        resize: true,
        align: "center",
        width: 60,
        template: function (task) {
          return durationFormatter.format(task.duration);
        },
        editor: durationEditor,
      },
      { name: "add", width: 44 },
    ];

    gantt.locale.labels.section_actCode = "Act. Code";
    gantt.locale.labels.section_actText = "Act. Name";
    gantt.config.lightbox.sections = [
      {
        name: "actCode",
        height: 70,
        map_to: "ActCode",
        type: "textarea",
        focus: true,
      },
      {
        name: "actText",
        height: 70,
        map_to: "text",
        type: "textarea",
        focus: true,
      },
      {
        name: "type",
        type: "typeselect",
        map_to: "type",
        filter: function (name, value) {
          return !!(
            value != gantt.config.types.project &&
            value != gantt.config.types.placeholder
          );
        },
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
        name: "actCode",
        height: 70,
        map_to: "ActCode",
        type: "textarea",
        focus: true,
      },
      {
        name: "actText",
        height: 70,
        map_to: "text",
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
        name: "actText",
        height: 70,
        map_to: "text",
        type: "textarea",
        focus: true,
      },
      {
        name: "type",
        type: "typeselect",
        map_to: "type",
        filter: function (name, value) {
          return !!(value != gantt.config.types.project);
        },
      },
      {
        name: "time",
        type: "duration",
        single_date: true,
        map_to: "auto",
        formatter: durationFormatter,
      },
    ];

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

      let html =
        "<b>ActName:</b> " +
        task.text +
        "<br/><b>Start:</b> " +
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

    // 휴일 설정 kimo
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
        window.ganttModules.zoomToFit.toggle();
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
    gantt.init(ganttContainer2);
    gantt.parse(tasks);
    gantt.render();
  }, []);
  return (
    // <div
    //   ref={(input) => {
    //     ganttContainer = input;
    //   }}
    //   style={{ width: "100%", height: "100%" }}
    // >
    //   GanttPage
    // </div>

    <div className="demo-main-container">
      <div className="demo-main-content">
        <div
          ref={(input) => {
            ganttContainer2 = input;
          }}
          style={{ width: "100%", height: "100%" }}
        ></div>
        {/* <div id="gantt_here"></div> */}
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

export default MountedConnectionMain;
