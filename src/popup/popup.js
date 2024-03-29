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
var lines_forth = document.getElementById('lines_forth')
var logo_switch = document.getElementById('logo_switch')
var color_switch = document.getElementById('color_switch')

chrome.storage.sync.get(['lines','logo','color'], function(data) {
	lines_value.innerHTML = data.lines
	logo_switch.checked = data.logo
	color_switch.checked = data.color
})

lines_back.onclick = function() {
	var lines = lines_value.innerHTML
	if(lines == 1) {
		return
	}
	if(lines == 99) {
		lines_forth.classList.remove('disabled')
	}
	if(lines == 2) {
		lines_back.classList.add('disabled')
	}
	lines_value.innerHTML = lines - 1
	chrome.storage.sync.set({lines: lines - 1})
	executeScriptInTab('modules/lines.js')
}
lines_forth.onclick = function() {
	var lines = lines_value.innerHTML
	if(lines == 99) {
		return
	}
	if(lines == 1) {
		lines_back.classList.remove('disabled')
	}
	if(lines == 98) {
		lines_forth.classList.add('disabled')
	}
	lines_value.innerHTML = lines - (-1)
	chrome.storage.sync.set({lines: lines - (-1)})
	executeScriptInTab('modules/lines.js')
}

logo_switch.onchange = function() {
    chrome.storage.sync.set({logo: logo_switch.checked})
    executeScriptInTab('modules/logo.js')
}

color_switch.onchange = function() {
    chrome.storage.sync.set({color: color_switch.checked})
    executeScriptInTab('modules/color.js')
}