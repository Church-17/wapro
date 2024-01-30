if(document.getElementById('id_lines') == null) {
	var id_lines = document.createElement('style')
	id_lines.id = 'id_lines'
	document.head.appendChild(id_lines)
}
chrome.storage.sync.get('lines', function(data) {
	document.getElementById('id_lines').innerHTML = '[spellcheck=true] {\
		max-height: ' + data.lines * 22 + 'px!important\
	}'
})