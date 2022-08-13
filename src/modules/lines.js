if (document.getElementById('changelines') == null) {
	var changelines = document.createElement('style')
	changelines.id = 'changelines'
	document.head.appendChild(changelines)
}
chrome.storage.sync.get('lines', function(data) {
	document.getElementById('changelines').innerHTML = '.selectable-text[spellcheck=true] {max-height: ' + data.lines * 20 + 'px!important}'
})