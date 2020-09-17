import { alarmListUl, defaultTimeSelect, alertModeTimeSelect, alertMsgBox, messageList } from './index';
import { byIds, dummyData, ids } from "./store";
import moment from "moment";

export function drawTimeNow() {
  const realTimeString = window.document.getElementById('realTime');
  setInterval(() => {
    const localTime = new Date().toLocaleString();
    realTimeString.innerHTML = localTime;
  }, 1000)
}

export function drawLocalTime() {
  defaultTimeSelect.value = moment().format('YYYY-MM-DDTHH:mm');
  alertModeTimeSelect.value = moment().format('YYYY-MM-DDTHH:mm');
}

function createBtnWrap(id) {
  const buttonWrapDiv = document.createElement('div');
  const removeBtn = document.createElement('button');
  const stopBtn = document.createElement('button');
  buttonWrapDiv.setAttribute('id','buttonWrap');
  removeBtn.setAttribute('id', `${id}-removeBtn`);
  stopBtn.setAttribute('id', `${id}-stopBtn`);
  removeBtn.innerHTML = '삭제';
  stopBtn.innerHTML = '끄기';
  buttonWrapDiv.appendChild(stopBtn);
  buttonWrapDiv.appendChild(removeBtn);

  return buttonWrapDiv
}

function createAlarmInnerText(id, alertTime, message) {
  const alarmInnerText = document.createElement('div');
  const handleAlarmSpan = document.createElement('span');
  const timeSpan = document.createElement('span');
  const messageSpan = document.createElement('span');
  handleAlarmSpan.innerHTML = '*';
  timeSpan.innerHTML = `알람시간 : ${alertTime} / `;
  messageSpan.innerHTML = `메시지 : ${message}`;
  alarmInnerText.appendChild(handleAlarmSpan);
  alarmInnerText.appendChild(timeSpan);
  alarmInnerText.appendChild(messageSpan);

  return alarmInnerText
}

function createDom(list) {
  const {id, alertTime, defaultTime, message, timeMode, alertMode} = list
  const alarmTime = moment(alertTime).format('YYYY.MM.DD hh:mm a');
  const listLi = document.createElement('li');
  listLi.setAttribute('id',id);
  const alarmInnerText = createAlarmInnerText(id, alarmTime, message);
  listLi.appendChild(alarmInnerText);
  listLi.appendChild(createBtnWrap(id));
  return listLi
}

export function drawAlertMessage(message) {
  messageList.push(message);
  alertMsgBox.innerHTML = null;
  messageList.forEach(message => {
    const div = window.document.createElement('div');
    div.innerHTML = message;
    alertMsgBox.appendChild(div);
  })
}

export function drawAlarmList(sortId) {
  const updateLists = sortId.map((id) => {
    return {id: id, ...byIds[id]}
  });
  updateLists.forEach((list) => {
    const createLi = createDom(list);
    alarmListUl.appendChild(createLi);
  });
}


