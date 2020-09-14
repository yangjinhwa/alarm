import { drawAlarmList } from "./draw-dom";
import { alertTextValue, alarmListUl } from './index';

export const dummyData = {
  "id1" : {
    alertTime: '09:30 AM',
    message: '메시지1',
    timeMode: '',
    alertMode: '',

  },
  "id2" : {
    alertTime: '09:30 PM',
    message: '메시지1',
    timeMode: '',
    alertMode: '',
  }
};

export const byIds = {};
export const ids = [];

export function loadAlarmList() {
  // 인풋 초기화
  alertTextValue.value = '';
  // 리스트뷰 초기화
  alarmListUl.innerHTML = null;
  // data update 때 마다 view redraw
  drawAlarmList(ids);
}

