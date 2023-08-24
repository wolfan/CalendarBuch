// 干支处理。
import { SUNA, MONATO } from 'value'

window['GZ']= {}

// 返回天干。
function G(int){
  const e= int - 1 > -1 && int -1;
  return ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'][e %10];
}

// 返回地支。
function Z(int){
  const e= int - 1 > -1 && int -1;
  return ['子', '丑', '寅', '卯', '辰', '巳', '午', '末', '申', '酉', '戌', '亥'][e %12];
}

/**
 * 返回指定日期干支（八柱）
 * @param {Number} tp 时间戳方式。
 * @param {Array} data 指定日期（年月日时）最底要求年月日。
 */
function GZ({tp, data}={}){

  const Dz= new Date(tp) || new Date(data);
  const y= Dz.getFullYear()
  const m= Dz.getMonth()
  const d= Dz.getDate()
  const h= Dz.getHours()
  const t= Dz.getMinutes()
  const s= Dz.getSeconds()

  /**
   * 年干计算。
   * 公元元年干支序 辛酉 58 ，所以起天干地支减3。
   */
  const gzY= y -3;
  const jaro= G(gzY) + Z(gzY)

  /** 
   * 月干计算。
   * 第一法：依年干寻月干。
   * 甲己：丙  乙庚：戊  丙辛：庚
   * 丁壬：壬  戊癸：甲
   * 计算：年干值 *2 +农历月份为当月月干（地支以子开寅3开取，逐月累加）。
   * 
   * PS：夏历建冬月子，商历建腊月丑。
   */
  
  // 取建月序。
  const konstrui= (gzY %5 +1) + (gzY %5)
  const monato= G(konstrui + m -1) + Z(m -1 + 3)

  /**
   * 日干计算。
   * 第一法：依月干寻日干。
   * 第二法：调节推算法。
   */

  
  /**
   * 时干计算。
   * 第一法：日干寻时法。
   */

}


/**
 * 农历与节气查表操作。
 * 限制 1900 ~ 2100
 */
function limo(jaro){
  if(jaro >=1900 && jaro  <=2100){
    return jaro;
  }else{
    return 'Eraro: Ekster intervalo, 1900 kaj 2100 nur!';
  }
}

// 月份解构。
function monz(jaro, dj=MONATO){
  const Y= limo(jaro)
  const yMonato= dj[Y - 1900]
  const bitMonato= yMonato.toString(2).padStart(20, 0)
  const grandeco= parseInt(bitMonato.substring(0, 4), 2) === 0? 29:30;
  const leap= parseInt(bitMonato.substring(16), 2)
  
  const luno= bitMonato.substring(4,16).split('').map(ez=> +ez === 0? 29:30)
  // 有无闰月。
  if(leap > 0){luno.splice(leap, 0, grandeco)}

  // 输出整形。
  return {
    ks: leap > 0? true:false,
    lz: luno,
    sup: leap
  }
}

// 节气解码。
function suna(jaro, dj=SUNA){
  const Y= limo(jaro)
  const ySuna= dj[Y - 1900]
  // 拆分分组。
  let suna= new Array;
  suna[0]= ySuna.substring(0,5)
  suna[1]= ySuna.substring(5,10)
  suna[2]= ySuna.substring(10,15)
  suna[3]= ySuna.substring(15,20)
  suna[4]= ySuna.substring(20,25)
  suna[5]= ySuna.substring(25)

  const dekdu= suna.map(ez=> [
    String(parseInt(ez, 16)).substring(0,1),
    String(parseInt(ez, 16)).substring(1,3),
    String(parseInt(ez, 16)).substring(3,4),
    String(parseInt(ez, 16)).substring(4),
  ]).flat()
 
  return dekdu
}

