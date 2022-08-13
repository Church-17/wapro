if (document.getElementById('changeLine') == null) {
	var changeLine = document.createElement('style')
	changeLine.id = 'changeLine'
	document.head.appendChild(changeLine)
}
chrome.storage.sync.get('line', function(data) {
	document.getElementById('changeLine').innerHTML = '.selectable-text[spellcheck=true] {max-height: ' + data.line * 20 + 'px!important}'
})