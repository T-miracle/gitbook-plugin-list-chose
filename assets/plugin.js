// 当子元素为空时，隐藏全部元素
function hiddenTitle() {
	let uls = document.querySelectorAll('h2+ul');
	hidden(uls);
	let ols = document.querySelectorAll('h2+ol');
	hidden(ols);
}

function hidden(els) {
	for (let i = 0; i < els.length; i++) {
		let lis = els[i].getElementsByTagName('li');
		let count = 0;
		for (let j = 0; j < lis.length; j++) {
			if (lis[j].classList.contains('hide')) {
				count++;
			}
		}
		if (lis.length === count) {
			els[i].classList.add('hide');
			els[i].previousElementSibling.classList.add('hide');
		} else {
			els[i].classList.remove('hide');
			els[i].previousElementSibling.classList.remove('hide');
		}
	}
}
// 显示元素
function showElem(el) {
	for (let i = 0; i < el.length; i++) {
		el[i].parentNode.classList.remove('hide');
	}
}
// 隐藏元素
function hiddenElem(el) {
	for (let i = 0; i < el.length; i++) {
		el[i].parentNode.classList.add('hide');
	}
}
// 查询全部
function queryAll() {
	showElem(document.querySelectorAll('.cbtn'));
	hiddenTitle();
}
// 查询某元素
function queryElement(el) {
	hiddenElem(document.querySelectorAll('.cbtn'));
	showElem(document.querySelectorAll(".cbtn[data='" + el + "']"));
	hiddenTitle();
}
