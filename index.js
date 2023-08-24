import dj from './core/_value.js'

// 返回 gala 数据。
function galoop(m,d,y){
  const gala= [] // 综合节日（gala\holi\datreveno\cere）数的总集处理结果。
  for(let iz of gala){
    if(
      iz.day[0] === m
      &
      iz.day[1] === d
    ){
      if(iz.jara === y){} // 特定年份事件处理。
      return iz.ti // 当日的数据串流（Array）
    }
  }
}

function calendarBuch(data, {}={}){

  // 默认输出对象，包含 list:array, unu:int(week), monday: int(202209)/[2022,09]

}

// module.exports.calendarBuch= calendarBuch;