// 时间格式提供商。

window['TP']= {}

// 返回串。
function reala(data){
  return {
    y: data.getFullYear(),
    m: data.getMonth() +1,
    d: data.getDate(),
    h: data.getHours(),
    t: data.getMinutes(),
    s: data.getSeconds(),
    w: data.getDay()
  }
}

// 补位操作。
function plen(e){return e < 10? '0' + e : e}

// 返回时间戳。
function tp(){return Date.parse(new Date)}

// 返回年月日格式。
function ymd(tp){
  const vi= new reala(new Date);
  return `${vi.y}-${vi.m}-${vi.d}`
}

// 返回时分秒格式。
function hts(tp){}

// 返回全格式。
function vivi(data){}

// 指定时间。
function ago({tp, ymd}={}){}


// 格式化返回。
function format({data, spe}={}){

  const y= spe.match(/[y+Y+]/g)
  const m= spe.match(/[m+M+]/g)
  const d= spe.match(/[d+D+]/g)
  const h= spe.match(/[h+H+]/g)
  const t= spe.match(/[t+T+]/g)
  const s= spe.match(/[s+S+]/g)
  const w= spe.match(/[w+W+]/g)

  const fmt= spe.match()

}