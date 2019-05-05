// 年的表述

// 奇年偶岁
const jaroDek=(int)=>{return (int %2 >0)? '年':'岁'}

// 公历闰年判断
// const leap= (y %100)? ((y %4)? 28:29):29;
function leapYear(int){
  return (int %100)? ((int %4)? 28:29) :29;
}

// 获取指定月份有多少天
function goDay(yy,mm){
  return new Date(yy,mm,0).getDate();
}
// 获取指定日期星期几
function goWeek(yy,mm,dd){
  return new Date(`${yy}-${mm}-${dd}`).getDay();
}

// 农历闰年


// 公元前后判断

// dome's
