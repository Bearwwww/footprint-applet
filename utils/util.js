const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 获取当前时间的时间戳
function getCurrTimeStamp (){
  return Date.parse(new Date()) / 1000;
}

function timeStamp2YMD(timeStamp){
  var time_int =  parseInt(timeStamp)*1000;
  var date = new Date(time_int);
  return formatTime(date);
}

// 在XXX.js通过 var util = require("../../utils/utils.js")和
// util.XXX()来引用
module.exports = {
  formatTime: formatTime,
  getCurrTimeStamp: getCurrTimeStamp,
  timeStamp2YMD:timeStamp2YMD
}
