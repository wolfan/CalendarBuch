const vl= require("./value")
const vi= require("./live")
// const gala= require("../gala/gala")

// 基础功能。
const g= e=> vl.G[e % 10];
const z= e=> e=> vl.Z[e % 12];
const gz= e=> vl.G[e % 10] + vl.Z[e % 12];
// 中文日期。
const tago= e=>{
  const dig= e%10>0? vl.N[e %10]: '十';
  switch(e > 0 && e <=31){
    case e>=1 && e<=10: return '初' + dig;
      break;
    case e>=10 && e<20: return '十' + dig;
      break;
    case e>=20 && e<30: return '廿' + dig;
      break;
    case e>=30 && e<=31: return '卅' + dig;
      break;
    default: return null;
  }
}

function week(e){
  switch(e===0 & e <=7){
    case 0: return '日曜';
      break;
    case 1: return '月曜';
      break;
    case 2: return '火曜';
      break;
    case 3: return '水曜';
      break;
    case 4: return '木曜';
      break;
    case 5: return '金曜';
      break;
    case 6: return '土曜';
      break;
  }
}


/**
 * 农历年月份表、节气分析。
 *
 * @param {Number} y - 1900~2100年之间的年份！
 * @return {JSON} 
 */
function analizi(y){
  const monato= vl.MNS[y - 1900].toString(2)
  const suna= vl.STM[y - 1900]

  // 指定年份农历大小月及闰月（输出json）。
  const make20= (Array(20).join('0') + monato).slice(-20)
  // 闰月相关。
  const leap= parseInt(make20.substr(16,4), 2)
  const leap_vf= make20.substr(0,4) === '0000'? 29:30;
  // 月份大小。
  const bigness= make20.substr(4,12)

  // 月份整形。
  const lunoAr= bigness.split('').map(e=> e > 0? 30:29)
  // 插入闰月。
  if(leap > 0){lunoAr.splice(leap,0,leap_vf)}

  
  // 节气数据处理。
  const seg= new Array;
  seg[0]= suna.substr(0,5)
  seg[1]= suna.substr(5,5)
  seg[2]= suna.substr(10,5)
  seg[3]= suna.substr(15,5)
  seg[4]= suna.substr(20,5)
  seg[5]= suna.substr(25,5)
  // 解表。
  const sunaj_source= seg.map(ez=> parseInt(ez, 16) )
  // 分派构建。
  const sunajAr= sunaj_source.map(ez=> [ez.toString().substr(0,1), ez.toString().substr(1,2), ez.toString().substr(3,1), ez.toString().substr(4,2)]).flat()


  // 农历天数总集。
  const entuta_tago= lunoAr.reduce((a,b)=> a+b)

  // 数据整形（json）并输出。
  return {
    jaro: y,
    dec: lunoAr,
    leap: leap > 0? leap:false,
    suna: sunajAr,
    tago: entuta_tago
  }
}

/**
 * 指定某周为节日。
 *
 * @param {Number} m
 * @param {Number} w
 * @param {Number} d
 * @param {String} gala
 */
function galaWeek(m,w,d=0,galaDaj){}

/**
 * 指定某日的节日。
 *
 * @param {Number} m
 * @param {Number} d
 * @param {Boolean} gala - 真为公历，假为农历。
 */
function galaTago(m,d,gl=true){
  const daj= [
    {
      day: 0101,
      ti: '元旦'
    },
    {
      day: 0815,
      ti: '中秋'
    },
    {
      day: 0815,
      ti: '党兔酱'
    }
  ]
  // 以上为测试数据，真数据为 gala.glg & gala.lunr。
}

// Temp! 闰年计算。
const leap= y=> y % 4 === 0? (y % 100 != 0?true: (y % 400? true:false)):false;


// 以立春为界，两个干支年（生肖）交替（并不影响农历年交替）！
function gzRep(){
  // 直接输出日期？还是怎么弄呐！？
}




/**
 * 公历日期转农历日期。
 *
 * @param {Number} y
 * @param {Number} m
 * @param {Number} d
 */
!function leap(y,m,d){


  tp= Date.parse(new Date)
  
  // rz= new Date(86400000 + 25567 +10)
  u1900= Date.parse(new Date(1900,0,1))
  
  // console.log(Date.UTC(2021,9,7), tp)
  console.log(((2021 - 1900) * 12 + 9 +12) % 60)
  console.log(gz(33))


}(2021,10,5)







module.exports= {}

/* 输出日历数据（年，月，日）。
 *  [
 *    {
 *      day: 1,
 *      lunar: {
 *        tago: "初一",
 *        sunaj: "元旦"
 *      },
 *      gala: [],   // 节日 => gala.yaml
 *      event: [],  // 事件 => event.yaml
 *      history: [] // 历史 => history.yaml
 *    }
 *  ]
 */

// 本地化语言设置：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl


/**
 * 输出指定月份数据。
 * @param {string} y 
 * @param {string} m 
 * @param {boolean} sup 
 */
function Kal(y,m,sup=false){
  let ar= new Array;

  // 年份、月份超跃转换。
  const M= (e)=> e < 1? 12: e > 12? 1: e;
  const Y= e=> e < 1? y-1: e > 12? y +1: y;

  // 初始当月值。
  const ak= new Date(y,m,0)
  const ak_tago= ak.getDate()
  const ak_week_ed= ak.getDay()
  const ak_week_op= new Date(y,m-1,1).getDay()

  // 补全星期值。
  const prev_day= ak_week_op -1 >=1? ak_week_op -1:0;
  const next_day= ak_week_ed !== 0? 7 - ak_week_ed:0;
  // 获取上月份总天数。
  const prev_tago= new Date(Y(m), M(m-1), 0).getDate()

  // 生成上下当前月份日期数组（公历）。
  const an_mon= prev_day > 0? Array.from({length: prev_day}, (v,k)=> k+(prev_tago - prev_day + 1)):[];
  const ak_mon= Array.from({length: ak_tago}, (v,k)=> k + 1)
  const po_mon= next_day > 0? Array.from({length: next_day}, (v,k)=> k+1):[];
    
  an_mon.map(ez=> ar.push({ne: false, day: ez}))


  // !! 输出包含农历日期及节庆的总数据集。
  

  console.log(ar)

}