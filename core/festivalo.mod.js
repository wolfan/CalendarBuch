// 节庆
// fe(20180924)  => 中秋节
// fe(八，十五)  => 中秋节
// fe(jp,20180815) => 中秋节


function fes(date,month,day,are){
  let feJson={
    "元旦":0101,
    "中秋":0815,
    "国庆":1001
  }
  for(let r in feJson){
    console.log(feJson.r);
  }

  let a= date;
  let b= month;
  let c= day;
  let d= are;

  // let R= `N1: ${a},N2: ${b},N3: ${c},N4: ${d}。`;


  return R;
}