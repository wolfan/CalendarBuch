// export default function az(srt){let qz= srt.toUpperCase(); return qz}

// 1、输出公历日期包括时间。
// 2、输出农历时间。
//   2.1、农历时间的对比。
// 3、输出儒略历、伊历以及其它历法。
// 4、节日、行程的操作。

// 完整的格式
// {
//   day: [1,1],
//   week: 0~7,
//   lunar: [12,1],
//   holiday: [
//     {
//       style: 'nl'\'gl'\''
//     }
//   ],
//   event: []
// }

function Monato(jara, monata=0, format= Object){
  let rz= new Array
  if(monata >0){
    return false
  }else{
    let monthz= new Array
    for(let i of [1,2,3,4,5,6,7,8,9,10,11,12]){
      let month= new Object
      month["month"]= i
      month["day"]= new Date(jara, i, 0).getDate()
      month["week"]= new Date(jara, (i -1), 1).getDay()

      monthz.push(month)
    }

    return monthz
  }


  // let monthz=
  return rz
}

// w2, 7-2=5 d-5=x x+7

console.log(Monato(2022,10), Monato(2022))