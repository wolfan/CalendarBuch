// 获取本地时间与在线时间

// 获取北京标准时：http://time.as.cn/
function bjTime(ymd, hts, all){}

// 获取本地时间
function localTime(){
  let t= new Date();
  let Y= t.getFullYear();
  let M= t.getMonth();
  let D= t.getDate();
  let H= t.getHours();
  let T= t.getMinutes();
  let S= t.getSeconds();
  let W= t.getDay();

  let YMD= `${Y}-${M}-${D}`;
  let HTS= `${H}-${T}-${S}`;
  let ALL= `${Y}-${M}-${D}:${H}-${T}-${S}`;

  let live= `poi`;

  return {
    Y:Y,M:M,D:D,H:H,T:T,S:S,W:W
  }

}

// 对比两个时间
function vsTime(intl,local){}

// 时实时间
function liveTime(){

  let t= localTime('all');

}

// DOME


R= 123;
console.log(R);