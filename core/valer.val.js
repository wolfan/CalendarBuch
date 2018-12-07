// ALL DEF&INIT VALER
/* STATEMENT VALER CHARACTER
乾坤震艮离坎兑巽
☰	☷	☳	☶	☲	☵	☱	☴ 
伏羲先天：乾巽坎艮坤震离兑
文王后天：离坤兑乾坎艮震巽
连山：		艮离震乾兑坎巽坤
归藏：		坤震离兑乾巽坎艮
文殊：		艮离坎巽震坤乾兑

阳——————————阴——————————
太阳	少阴	少阳	太阴
乾 兑 离 震 巽 坎 艮 坤
天 泽 火 雷 风 水 山 地
头 口 目 足 股 耳 手 腹
脑 肺 胆 心 肝 肾 胃 脾
S  ES E  EN WS W  WN N			先天
WN W  S  E  ES N  EN WS			后天
金 金 火 木 木 水 土 土
*/

/* fonction name list
	星宫	ast astrologo
	神方	dio 
	辞让	amu amuzo
	纪历	kal kalendaro
	祭典	fes	festivalo
	押尾	bet betado	*/

// BASIS
const g= '甲乙丙丁戊己庚辛壬癸';
const z= '子丑寅卯辰巳午末申酉戌亥';
const wx= '月火水木金土日';
const bg= '坤艮坎巽震离兑乾'; // 12345678
const gx= '地山水风雷火泽天';
const sx= '鼠牛虎兔龙蛇马羊猴鸡狗猪';
const ye= '正二三四五六七八九十冬腊';
const xx= '一二三四五六七八九十百千万亿兆京垓姊穰沟涧正载';
const dx= '零壹贰叁肆伍陆柒捌拾廿卅卌百皕仟萬億兆京垓姊穰沟涧正载';

// 国际单位制词头
// 百进制
const SIup= '十百千兆吉太拍艾泽尧';
const SIdw= '分厘毫微纳皮飞阿仄幺';
// SORT

// 各纪年初始值
const Kongzi= +551;
const Xuanyuan= +2698;
const Buddha= +543;
const RC= -1912;
const NK= -1912;
const Sk= -1919;

// HOUST
// DAY
// MOON
// YAER
// OTHER


// EXAMINATION
function chineseNumerals(int,force){
	// 为0不显示。
	// 0，在百位如（101）时，0为‘又、有’。
	// 0，在千位如（1001）以上时，为‘余’。
	// 2，在个位为‘二’，十、百位以上为‘两’。
	// 1，十位上不输出‘一’，如102，百余二
	let hz='十百千万';
	let sz='零一二三四五六七八九';

	let a= int.toString();
	let a1= a.length;
	let a2= a1 -1;

	// 关于1在十位上的判断。
	if(a1 >=1){let s1= 0;}
	// 关于2的判断。
	if(cx1 >=2){let sz[1]= '两';}


	// 判断force值，如果为tw：台湾，in：国际，cn、null为默认。

	let R= int;

	return R;
}



// R= Math.ceil(a /100);
R= chineseNumerals(1201);
console.log(R)