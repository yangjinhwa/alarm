import { drawAlarmList } from "./draw-dom";
import { alertTextValue, alarmListUl } from './index';

export const dummyData = {
  "id1" : {
    alertTime: '2020-09-14T17:04',
    defaultTime: '2020-09-14T17:04',
    message: '메시지1',
    timeMode: '',
    alertMode: '',
    isTurnOn: true
  },
  "id2" : {
    alertTime: '2020-09-14T17:04',
    defaultTime: '2020-09-14T17:04',
    message: '메시지1',
    timeMode: '',
    alertMode: '',
    isTurnOn: true
  }
};

export const byIds = {};
export const ids = [];
let createNum = 0;

export function addAlarm() {
  const newId = `alarmId${createNum++}`;
  byIds[newId] = {
    alertTime: alertModeTimeSelect.value + `:00`, // 2020-09-14T17:04
    defaultTime: defaultTimeSelect.value, // 2020-09-14T17:04
    message: alertTextValue.value,
    timeMode: timeModeSelect.value,
    alertMode: alertModeSelect.value,
    isTurnOn: true
  };
  ids.push(newId);
}

export function loadAlarmList() {
  // 인풋 초기화
  alertTextValue.value = '';
  // 리스트뷰 초기화
  alarmListUl.innerHTML = null;
  // data update 때 마다 view redraw
  drawAlarmList(ids);
}

