import { } from 'value'


// 中文日期。
function cnDay(e){
  // 个位转中文。
  const dig= ez=> ["","一","二","三","四","五","六","七","八","九"][ez %10];
  // 总数控制。
  const ett= e > 0 && e <= 31 && e;
  // 转换。
  switch(ett){
    case e %10:
      return dig(e);
      break;
    case e %20:
      return "十" + dig(e);
      break;
    case e %30:
      return "廿" + dig(e);
      break;
    case e %40:
      return "卅" + dig(e);
      break;
    default: return false;
  }
}

// 五政七要。
function sepDay(e){
  switch(e){
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
    default: return false;
  }
}