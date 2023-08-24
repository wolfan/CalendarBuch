import {uglify} from 'rollup-plugin-uglify'

export default {
	input: "core/index.js",
	output: {
		name: "calendarz",
		file: "calendar.js",
		// 静态life，动态ems。
		format: "iife",
	},
	plugins: [
		uglify()
	]
}