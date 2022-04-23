if (document.getElementById('changeLinePx') == null) {
	var changeLinePx = document.createElement('style')
	changeLinePx.id = 'changeLinePx'
	document.head.appendChild(changeLinePx)
}
chrome.storage.sync.get('linePx', function(data) {
	document.getElementById('changeLinePx').innerHTML = '.selectable-text[spellcheck=true] {max-height: ' + data.linePx * 20 + 'px!important}'
})