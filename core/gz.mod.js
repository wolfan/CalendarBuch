// 干支部分的计算、逻辑。

const G= '甲乙丙丁戊己庚辛壬癸';
const Z= '子丑寅卯辰巳午末申酉戌亥';


// 任意数的干支
const g= int => G[int %10 -1];
const z= int => Z[int %12 -1];
const gz= int=> {
  let n= (int >=1)? int: false;
  return `${g(n)}${z(n)}`;
}
// 测试
const gx= int=> (int -1 >0)?

// 计算年份动干支
function gzYear(int){
  // -1= 56 + -1
  let y= (int >=1)? int -3: int -4;

  let r= y %60;
  return `${r} <- ${y}`;
}

R= gz(12);
console.log(R);