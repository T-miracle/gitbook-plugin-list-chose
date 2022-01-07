var chose;

module.exports = {
	// 注入自定义的css和js文件
	website: {
		assets: './assets',
		js: ['plugin.js'],
		css: ['plugin.css'],
	},
	// Map of hooks 一些钩子函数
	hooks: {},

	// Map of new blocks
	blocks: {
		chose: {
			shortcuts: {
				parsers: ['markdown', 'asciidoc', 'restructuredtext'],
				start: '{=',
				end: '=}',
			},
			process: function (blk) {
				data = JSON.parse(blk.body);
				chose = data;
				var btnbtngroupHTML = `
					<div class="choseGroup">
					<span class="i"></span>
					<div class="btn-box">`;
				for (var i in data) {
					if (i === '全部')
						btnbtngroupHTML += `<button class="chosebtn" style="background-color: ${data[i]}" onClick="queryAll()">${i}</button/>`;
					else
						btnbtngroupHTML += `<button class="chosebtn" style="background-color:${data[i]}" onClick="queryElement(\'${i}\')">${i}</button/>`;
				}
				btnbtngroupHTML += '</div></div>';
				return btnbtngroupHTML;
			},
		},
		btn: {
			shortcuts: {
				parsers: ['markdown', 'asciidoc', 'restructuredtext'],
				start: '{-',
				end: '-}',
			},
			process: function (blk) {
				data = blk.body;
				let btnHTML = `<button class="cbtn" data="${data}" style="background-color: ${chose[data]}">${data}</button>`;
				return btnHTML;
			},
		},
	},

	// Map of new filters
	filters: {},
};
