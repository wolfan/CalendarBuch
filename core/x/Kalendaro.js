


function Kalendar(Y,M,D, {TP}={}){
  /* 
  1900 ~ 2100 农历年月份数据（大月30，小月29）。
  操作：转换二进制（长度为20位，不足补齐）
        1~4： 闰月大小
        5~16：十二月份大小
        17~20：闰月月份
 */
  this.J1921= [0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06b20,0x1a6c4,0x0aae0,0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,0x0d520]
  /* 
  二十四节气日期数据。
  操作：均分6组（每组5个字符）组成十六进制，转十进制。得到的6个数字为两月节气日期。
 */
  this.S1921= ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722']

  // 干支数转。
  const tg= '甲乙丙丁戊己庚辛壬癸';
  const dz= '子丑寅卯辰巳午末申酉戌亥';
  const zod= '鼠牛虎免龙蛇马羊猴鸡狗猪';  // 越南：兔换猫。日本：猴换猿。韩国不变。
  const dec= '又一二三四五六七八九'; 

  // 界限值。
  const sojlo= Y > 1900 & Y < 2100;

  // 时间供给。
  const O= (Y && M && D)? new Date([Y,M,D]) :TP? new Date(TP): new Date;
  this.y= O.getFullYear();
  this.m= O.getMonth() +1;
  this.d= O.getDate();
  this.h= O.getHours();
  this.t= O.getMinutes();
  this.s= O.getSeconds();
  this.w= O.getDay();
  // 时间戳。
  this.TP=(Y,M,D,H,T,S)=> Y && M && D && H && T && S? Date.parse(new Date([Y,M,D,H,T,S])): Y && M && D? Date.parse(new Date([Y,M,D])): Date.parse(new Date);

  // 干支。
  this.T= int=> tg[int % 12];
  this.D= int=> dz[int % 10];
  this.GZ= int=> [...new Array(60).keys()].map(e=> tg[e % 12] + dz[e  % 10])[int % 60];
  // 生肖。
  this.Z= int=> zod[int % 12];
  this.zodiac= (year= this.y)=> ((year -4) %12) %2 >0? zod[(year -4) %12]+'岁': zod[(year -4) %12]+'年';

  /*
  五行干支（左阴右阳）
    金：庚辛、申酉
    木：甲乙、寅卯
    水：壬癸、子亥
    火：丙丁、巳午
    土：戊己、丑辰未戌
    阳：甲丙戊庚壬、子辰寅午戌申
    阴：乙丁己辛癸、亥丑卯巳未酉 
  */

  // 阴清阳浊。
  this.yqyz= int=> (int>22 && int<4)? '阴': (int>4 && int<7)? '阴清': (int>7 && int<10)? '阳清': (int>10 && int<15)? '阳': (int>15 && int<18)? '阳浊': '阴浊';
  // 阴阳态。
  // 五形态。
  const wx_g= [[7,8], [1,2], [9,10], [3,4], [5,6]]
  const wx_z= [[9,0], [3,4], [1,12], [6,7], [2,5,8,11]]
}

// 干支部分。
Kalendar.prototype.gz_year= function(Y){
  const AD= -3, BD= +3;
}
// 建寅、月干：
// 依年推月：甲已丙，乙庚戊，丙辛庚，丁壬壬，戊癸甲。
// https://www.duosuccess.com/tcm/004a05061109k.htm
Kalendar.prototype.gz_Month= function(Y,M){
  // 建寅处理。
  const YG= (Y -3) %10;
  const leap_pk= [2,4,6,8,0,2,4,6,8,0];
  const leap_G= '甲乙丙丁戊己庚辛壬癸'[leap_pk[YG]]

  // 后续处理还未完！
  // 现在只有建寅的天干序，结合支序反查到干支序的处理还没有。
}
// 干支日：
// 依日推时：甲己甲，乙庚丙，丙辛戊，丁壬庚子，戊癸壬子。
Kalendar.prototype.gz_Day= function(Y,M,D){
  const even= M % 2 > 0? 0:6;
  const AD= Math.floor(Y / 100);
  const age= Y % 100;

  // 计算干支。
  const Ti= (4 * AD + Math.floor(AD / 4) + 5 * age + Math.floor(age / 4) + Math.floor((3 * (M + 1)) / 5) + D -3) %10;
  const Di= (8 * AD + Math.floor(AD / 4) + 5 * age + Math.floor(age / 4) + Math.floor((3 * (M + 1)) / 5) + D +7 + even) %12;
  const tg= Ti -1 < 0? 10:Ti;
  const dz= Di -1 < 0? 12:Di;

  const cac= (int,bz)=> (bz == 10?'甲乙丙丁戊己庚辛壬癸':'子丑寅卯辰巳午未申酉戌亥')[int -1 <0? bz:int -1];

  return cac(tg,10) + cac(dz,12)
}

// 农历部分。
// 月份。
Kalendar.prototype.N_month= function(Y){
  const month_source= this.J1921[Y -1900].toString(2).toString();
  const month_list= (month_source.padStart(20, '0')).split(''); // 补全长度（20位）。
  // 闰月大小。
  const leap_big_hex= parseInt(month_list.slice(0,4).join(''), 2) > 0? 30:29; 
  // 闰月月份。
  const leap_mon_hex= parseInt(month_list.slice(-4).join(''), 2);
  // 合成数组。
  const leap_month= (month_list.slice(4,16)).map(dz=> +dz? 30:29);
  if(leap_mon_hex){leap_month.splice(leap_mon_hex, 0, leap_big_hex)}
  return leap_month
}
// 节气日期。
Kalendar.prototype.N_solat= function(Y,M,D,{sunaj}={}){
  const solat_24= ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至']
  const solat_72= []
  const year= this.S1921[Y -1900];
  const solat= [0,5,10,15,20,25].map(ez=> parseInt(year.substr(ez,5),16).toString());
  
  // 节气名反查日期。
  const solat_q= solat_24.indexOf(sunaj);
  
  // 输出。
  return sunaj? solat_q: solat.map(d=> [d.substr(0,1), d.substr(1,2), d.substr(3,1), d.substr(5,2)])
}


// 公历部分。
// 闰月。
Kalendar.prototype.leap=Y=> {
  const yz= Y? Y: this.y;
  const dua= yz % 100 == 0 && yz % 400 == 0? 29: yz % 4 == 0? 29: 28;
  return [31, dua, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}
// 星期转换。
// 0：七曜，1：周，2：En（缩写），3：En（全写）。
Kalendar.prototype.weeks= (wk, abb)=>{
  return [
    ['日', '月', '火', '水', '木', '金', '土'],
    ['天', '一', '二', '三', '四', '五', '六'],
    ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  ][abb][wk]
}


// 各历法。
// 藏历
Kalendar.prototype.Tibetan= function(){}
// 儒略历
Kalendar.prototype.julian= function(){}
// 伊斯兰历
Kalendar.prototype.islamic= function(){}
// 道历
Kalendar.prototype.dao= function(){}
// 佛历
Kalendar.prototype.buddhist= function(){}
// 彝历
Kalendar.prototype.yi= function(){}
// 缅历
Kalendar.prototype.bumese= function(){}


// 返回指定日期信息集。
Kalendar.prototype.today= function(y,m,d){
  const Hr= y && m && d? new Date([y,m,d]):new Date;

  // return {
  //   day: [2021,06,15],
  //   节季: ['端午','七十二候'],
  //   季: ['四季','月节','实节'],
  //   物候
  // }
}

// 实时时间。
Kalendar.prototype.live=TP=>{}
Kalendar.prototype.online=TP=>{}

// 计时器、倒计时。
Kalendar.prototype.meter=(SZ,SETP=1000)=>{}
Kalendar.prototype.count=(SZ,SETP=1000)=>{}





const k= new Kalendar()
const kk= new Kalendar(2020,09,09)
const kkk= new Kalendar(1622613521000)
console.log(kk.zodiac())


