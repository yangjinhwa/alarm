import {drawAlarmList, drawAlertMessage, drawLocalTime, drawTimeNow} from "./draw-dom";
import {addAlarm, byIds, ids, loadAlarmList, removeList} from "./store";
import moment from "moment";

export const alarmListUl = window.document.getElementById('alarmLists');
export const defaultTimeSelect = window.document.getElementById('defaultTimeSelect');
export const alertModeSelect = window.document.getElementById('alertModeSelect');
export const alertTextValue = window.document.getElementById('alertTextValue');
export const alertModeTimeSelect = window.document.getElementById('alertModeTimeSelect');
export const timeModeSelect = window.document.getElementById('timeModeSelect');
export const alertMsgBox = window.document.getElementById('alertMsgBox');
const addAlarmBtn = window.document.getElementById('addAlarmBtn');
export const messageList = [];

addAlarmBtn.addEventListener('click', () => {
  addAlarm();
  // 인풋 초기화
  alertTextValue.value = '';
  loadAlarmList();
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
drawTimeNow();
drawLocalTime();

