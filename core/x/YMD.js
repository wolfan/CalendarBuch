// 年月日、时分秒、星期的转换

function lv(int){
  const o= new Date();
  const r= {
    y: o.getFullYear(),
    m: o.getMonth(),
    d: o.getDate(),
    h: o.getHours(),
    t: o.getMinutes,
    s: o.getSeconds(),
    w: o.getDay()
  }
}