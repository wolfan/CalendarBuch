/* 
 * Number.MAX_SAFE_INTEGER: 9007199254740991（9e15）
 * https://www.jianshu.com/p/05395ded2569
 * 基于js对超大整数的失真，所以超出 9e15 的整数强制使用字串模式。
 * 
 * 关于中文数字及其进制 => 参看CINADIGITAL.md
 * 默认提供 1、转写（万亿兆京垓姊穰沟涧正载）千进制。2、正整数大写（零壹贰参肆伍陆柒捌玖拾含（二十）佰仟）。
 * 
 */

const H= new Array;
const D= new Array;
const B= new Array;
// 初始数字。
H[1]= '一';
H[2]= '二';
H[3]= '三';
H[4]= '四';
H[5]= '五';
H[6]= '六';
H[7]= '七';
H[8]= '八';
H[9]= '九';
// 初始单位。
D[1]= '万';
D[2]= '亿';
D[3]= '兆';
D[4]= '京';
D[5]= '垓';
D[6]= '姊';
D[7]= '穰';
D[8]= '沟';
D[9]= '涧';
D[10]= '正';
D[11]= '载';
// 初始大写数位。
B[0]= '零';
B[1]= '壹';
B[2]= '贰';
B[3]= '参';
B[4]= '肆';
B[5]= '伍';
B[6]= '陆';
B[7]= '柒';
B[8]= '捌';
B[9]= '玖';


// 字段处理。
function Seg(e){
  const tb= e.toString().split('').map(e=> +e);
  const ln= tb.length;
  const sg= ln%4 === 0? ln/4: Math.floor((ln/4) +1);
  
  if(ln%4 === 0){
    return [...Array(sg).keys()].map(ez=> tb.slice(ez*4, ez*4 +4))
  }else{
    const kr= tb.slice(0, ln%4);
    const tr= tb.slice(ln%4);
    return [kr, ...[...Array(Math.floor(ln/4)).keys()].map(ez=> tr.slice(ez*4, ez*4 +4))]
  }
}

// 千分位处理。
function Miloj(e){
  const tb= e.toString().split('').map(ez=> +ez)
  const ln= tb.length;

  const per= e=> e? H[e] + '百': '又';
  const ten= e=> e? H[e] + '十': '又';
  // const dig= e=> e? H[e]: '';
  const dig= e=> H[e]||""

  switch(ln){
    case 4: return tb[1] + tb[2] + tb[3] === 0? H[tb[0]] + '千'
    :
      tb[1] + tb[2] === 0?
      H[tb[0]] + '千又' +H[tb[3]]
    :
      tb[2] + tb[3] === 0?
      H[tb[0]] + '千' + per(tb[1])
    :
      H[tb[0]] + '千' + per(tb[1]) + ten(tb[2]) + dig(tb[3]);
      break;
    case 3: return tb[1] + tb[2] === 0? H[tb[0]] + '百': H[tb[0]] + '百' + ten(tb[1]) + dig(tb[2]);
      break;
    case 2: return tb[1] === 0? H[tb[0]] + '十': H[tb[0]] + '十' + H[tb[1]];
      break;
    case 1: return H[tb[0]];
      break;
    default: return false;
  }
}

// 转换中文数字（千进位）。
function Cina(e){
  const seg= Seg(e);
  const unit= D.slice(1, seg.length).reverse()

  const rz= seg.map((ez, ky)=> {
    let quantile= +ez.join('')
    let qunit= ky <= seg.length -2? unit[ky]: '';
    let befor= ez.length === quantile.toString().length? '':'又';

    if(quantile > 0){
      return befor + Miloj(quantile) + qunit;
    }else{return 'null'}

  })

  return e > 10000? rz.join(''): Miloj(e);
}

// 大写转换。
function bigCina(e){}