/* 
  * 一	二	三	四	五	六	日
  * 月	火	水	木	金	土	日
  * MON	TUE	WTD	THU	FRI	SAT	SUN
  */

// temp delete
const O= new Date();
const Y= O.getFullYear();
const M= O.getMonth();
const D= O.getDate();
const H= O.getHours();
const T= O.getMinutes();
const S= O.getSeconds();
const W= O.getDay();

function semajno(int=W, com='ym'){
  let d={
    '1':['一','月','MON'],
    '2':['二','火','TUE'],
    '3':['三','水','WTD'],
    '4':['四','木','THU'],
    '5':['五','金','FRI'],
    '6':['六','土','SAT'],
    '7':['天','日','SUN']
  }
  // let j= {'ym':[1,'曜'],'wk':[0,'星期'],'en':2}

  switch(com){
    case 'ym': 
      return d[int][1] +'曜' 
      break
    case 'wk': return '星期'+ d[int][0];
      break
    case 'en': return d[int][2]
      break
  }
}

semajno()