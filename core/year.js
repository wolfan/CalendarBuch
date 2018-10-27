// 年的表述

// 奇年偶岁
const jaroDek=(int)=>{return (int %2 >0)? '年':'岁'}

// 公历闰年判断
const superJaro=(int)=>{return (int %4 == 0&&int %100 !== 0)||(int %100 == 0&&int %400 == 0)? true:false}


// 农历闰年


// 公元前后判断