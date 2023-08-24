/*
# | 鼠 | mouse   | z |
# | 牛 | Cattle  | c |
# | 虎 | tiger   | y |
# | 兔 | rabbit  | m |
# | 龙 | Dragon  | e |
# | 蛇 | snake   | s |
# | 马 | horse   | w |
# | 羊 | sheep   | o |
# | 猴 | monkey  | n |
# | 鸡 | chicken | u |
# | 狗 | dog     | x |
# | 猪 | pig     | h |
*/

const T= '甲乙丙丁戊己庚辛壬癸';
const D= '子丑寅卯辰巳午未申酉戌亥';
const S= '鼠牛虎兔龙蛇马羊猴鸡狗猪';

/* 构造测试部分。
  function tgdz(){
    this.g= int=> int %10;
    this.z= int=> int %12;
    this.gz= int=> int %60;

    this.tg= int=> T[(int -1) %10];
    this.dz= int=> D[(int -1) %12];
    this.xs= int=> S[(int -4) %12];
    this.gz= int=> T[(int -1) %10] + D[(int -1) %12];

    this.n= this.gz(int -3);
  }
  */

const t= int=> int %10;
const d= int=> int %12;
const gzs= int=> int %60;

const g= int=> T[(int -1) %10];
const z= int=> D[(int -1) %12];
const sx= int=> S[(int -4) %12];
const gz= int=> T[(int -1) %10] + D[(int -1) %12];

// 年月日时干支部分。
const year= int=> gz(int -3);
// http://www.360doc.com/content/12/0818/15/5869127_230867785.shtml
// 依据年干推算建寅天干，累月干支。
// 甲己丙，乙庚戊，丙辛庚，丁壬壬，戊癸甲。
const moon= (jaro,luno)=> {
  const lc= [5,1,2,3,4]
  const lx= [0,6,7,8,9]
  // 年干得月干。
  const y= (jaro - 3) % 10;
  const m= lc.indexOf(y) & lx.indexOf(y);
  const mz= m * 2 +1;
  const ms= T[mz];

  return ms
};
const day= (jaro,luno,tago)=> gz();
const hour= (jaro,luno,tago,horo)=> gz();


console.log( gz(8) )