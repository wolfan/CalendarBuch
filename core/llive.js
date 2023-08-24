/**
 * 本机时间格式输出。
 * @param {String} bezono: "ymdhtsw" or "day" or "年月日"。
 * @param {Function} format：default "String", option "Array" & "Object"。
 * @returns Output format according to the format(String)。
 */
 export default function llive(bezono, format= String){
  const Oz= new Date()
  const Y= Oz.getFullYear()
  const M= Oz.getMonth() + 1
  const D= Oz.getDate()
  const H= Oz.getHours()
  const T= Oz.getMinutes()
  const S= Oz.getSeconds()
  const W= Oz.getDay()
  const tp= Date.now()

  const double= e=> e < 10? "0" + e : e;
  const paro= {
    Y, YYYY:Y, YY: Y.toString().substring(2),
    M, MM: double(M),
    D, DD: double(D),
    H, HH: double(H),
    T, TT: double(T),
    S, SS: double(S),
    W, WW: double(W)
  }

  const appel= {
    year: Y, month: M, day: D, hours: H, minute: T, second: S, week: W,
    "年": Y, "月": M, "日": D, "时": H, "分": T, "秒": S, "星期": W,
    tp
  }

  // 字串分析。
  const exp= /(?<=[^(Y)]|^)((Y){1,4})(?=[^(Y)]|$)|((m|M){1,2})|(D{1,2})|(H{1,2})|(T{1,2})|(S{1,2})|(W{1,2})/g

  // 字串转写。
  let al= bezono ?? ""
  let upper= al.toUpperCase()
  let lower= al.toLowerCase()

  // 转换出数组格式。
  let z= upper.match(exp)
  // 去重（需要暂不体现）
  // let z= Array.from(new Set(upper.match(exp)))
  // 元组形成。
  let az= new Array
  if(z){
    az= z
  }else if(lower in appel){
    az= Array.from(lower)
  }else{
    az= false
  }

  // 对象格式。
  let jz= new Object

  // 字串格式输出。
  let t= upper.replace(exp, function(e){
    return paro[e]??e
  })

  // 数据选择。
  let dj= az in appel? appel: paro;

  // format 输出的格式。
  switch(JSON.stringify(new format)){
    case "[]":
      return az.map(d=> dj[d])
    break;
    case "{}":
      for(let iz of az){
        jz[iz]= dj[iz]
      }
      return jz
      break;
    case "\"\"":
      // return lower in appel? dj[lower]: t
      return dj[lower] ?? t
      break;
    default: console.warn("⚠ LIVE TP OUTPUT UNKNOWN MISTAKE ⚠")
  }
}