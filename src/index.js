import { drawLocalTime } from "./draw-dom";
import { byIds, ids, loadAlarmList } from "./store";

export const alarmListUl = window.document.getElementById('alarmLists');
export const dateTimeSelect = window.document.getElementById('dateTimeSelect');
export const alertModeSelect = window.document.getElementById('alertModeSelect');
export const alertTextValue = window.document.getElementById('alertTextValue');
export const alertModeTimeSelect = window.document.getElementById('alertModeTimeSelect');
export const timeModeSelect = window.document.getElementById('timeModeSelect');
const addAlarmBtn = window.document.getElementById('addAlarmBtn');

let createNum = 0;

function addAlarm() {
  const newId = `alarmId${createNum++}`;
  byIds[newId] = {
    alertTime: alertModeTimeSelect.value,
    message: alertTextValue.value,
    timeMode: timeModeSelect.value,
    alertMode: alertModeSelect.value,
  };
  ids.push(newId);
  loadAlarmList();
}

addAlarmBtn.addEventListener('click', () => {
  addAlarm();
});

// buttonWrap 에 event 심기 (보류)
alarmListUl.addEventListener('click', (e) => {
  const targetBtnId = e.target.id;
});

function timer() {
  setInterval(() => {
    const localTime = new Date();
    drawLocalTime(localTime);
  }, 1000);
}

timer();

