import { T } from './TgDz';


// 本地时间。
function locadTp(tp){
  const O= tp? new Date(tp) : new Date;
  return {
    Y: O.getFullYear(),
    M: O.getMonth() +1,
    D: O.getDate(),
    H: O.getHours(),
    T: O.getMinutes(),
    S: O.getSeconds(),
    W: O.getDay(),
    tp: Date.parse(new Date)
  }
}

const qq= T[2];

console.log(qq)