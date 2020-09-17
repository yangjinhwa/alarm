import { drawAlarmList } from "./draw-dom";
import { alertTextValue, alarmListUl } from './index';
import moment from "moment";

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

function sortAlarmList() {
  const sortId = ids.sort((a,b) => {
    const beginningTime = moment(byIds[a].alertTime, 'YYYY.MM.DD HH:mm');
    const endTime = moment(byIds[b].alertTime, 'YYYY.MM.DD HH:mm');
    return beginningTime - endTime;
  });
  return sortId
}

export function removeList(targetAlarmId) {
  delete byIds[targetAlarmId];
  const targetIdIndex = ids.indexOf(targetAlarmId);
  ids.splice(targetIdIndex,1);
}

export function loadAlarmList() {
  // 리스트뷰 초기화
  alarmListUl.innerHTML = null;

  // 리스트 내림차순
  const sortId = sortAlarmList();

  // data update 때 마다 view redraw
  drawAlarmList(sortId);
}

