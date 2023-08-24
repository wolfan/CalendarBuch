# 开发手册

# 需要实现的功能
- 实时时间戳  tp()
- 即时时间值的获取（TP.js）。
- 干支实现（GZ.js）
  - 干支年、月、日、时（八柱）的转换。
  - 干支序数的返回 gz(int)。

# 使用

## ES6
import { tp } from 'CDB.js'

## SCRIPT
const cdb= new CDB(new Date)
