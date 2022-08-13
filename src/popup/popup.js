executeScriptInTab = function(path) {
	chrome.tabs.query({url: "*://web.whatsapp.com/"}, function(tabs) {
		chrome.scripting.executeScript({
			target: {tabId: tabs[0].id},
			files: [path]
		})
	})
}

var lines_value = document.getElementById('lines_value')
var lines_back = document.getElementById('lines_back')
var linesForth = document.getElementById('linesForth')
var switchLogo = document.getElementById('switchLogo')
var switchColor = document.getElementById('switchColor')
var switchNotify = document.getElementById('switchNotify')

chrome.storage.sync.get(['lines','logo','color', 'notify'], function(data) {
	lines_value.innerHTML = data.lines
	lines_back.value = data.lines
	linesForth.value = data.lines
	switchLogo.checked = data.logo
	switchColor.checked = data.color
	switchNotify.checked = data.notify
})

lines_back.onclick = function() {
	var lines = lines_value.innerHTML
	if (lines == 1) {return}
	lines_value.innerHTML = lines - 1
	lines_back.value = lines - 1
	linesForth.value = lines - 1
	chrome.storage.sync.set({lines: lines - 1})
	executeScriptInTab('modules/lines.js')
}
linesForth.onclick = function() {
	var lines = lines_value.innerHTML
	lines_value.innerHTML = lines - (-1)
	lines_back.value = lines - (-1)
	linesForth.value = lines - (-1)
	chrome.storage.sync.set({lines: lines - (-1)})
	executeScriptInTab('modules/lines.js')
}

switchLogo.onchange = function() {
    chrome.storage.sync.set({logo: switchLogo.checked})
    executeScriptInTab('modules/logo.js')
}

switchColor.onchange = function() {
    chrome.storage.sync.set({color: switchColor.checked})
    executeScriptInTab('modules/color.js')
}

switchNotify.onchange = function() {
    chrome.storage.sync.set({notify: switchNotify.checked})
    executeScriptInTab('modules/notify.js')
}