// 年的表述

// 奇年偶岁
const jaroDek=(int)=>{return (int %2 >0)? '年':'岁'}

// 公历闰年判断
const superJaro=(int)=>{return (int %4 == 0&&int %100 !== 0)||(int %100 == 0&&int %400 == 0)? true:false}


// 农历闰年


// 公元前后判断
function judoAD(int){
  // 数字判断
  let i= isNaN(int);
  // 是否超出极限值
  let limigo= 2046;
  // 不是0年
  let nulo= (int === 0);

  // 判断
  let malgusta= (i or nulo)? `M! juddoAD()`;
  // flatante
  // test
}