// 干支部分的计算、逻辑。

// 测试用临时调用区
const G= '甲乙丙丁戊己庚辛壬癸';
const Z= '子丑寅卯辰巳午末申酉戌亥';
// --------------


function GZ(int){
  const int= ~~int;
  
  // 快速求算干支
  let gz={
    Tg:(int)=> G[int %10 -1],
    Dz:(int)=> Z[int %12 -1]
  }

  let gzPinrt= gz.Tg(int) + gz.Dz(int);

  let gzSek= int %60;

  function jaro(int){
    let d= int %60;
    let d1= d %10;
    let d2= d %12;
    return G[d1]+Z[d2];
  }
  function monato(int){}
  function tago(int){}
  function tempo(int){}

}