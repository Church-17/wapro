var lineNow = document.getElementById('lineNow')
var lineBack = document.getElementById('lineBack')
var lineForth = document.getElementById('lineForth')
var switchLogo = document.getElementById('switchLogo')
var switchColor = document.getElementById('switchColor')
var switchNotify = document.getElementById('switchNotify')

chrome.storage.sync.get(['linePx','logo','color', 'notify'], function(data) {
	lineNow.innerHTML = data.linePx
	switchLogo.checked = data.logo
	switchColor.checked = data.color
	switchNotify.checked = data.notify
})

lineBack.onclick = function() {
	var linePx = lineNow.innerHTML
	if (linePx == 1) {return}
	lineNow.innerHTML = linePx - 1
	chrome.storage.sync.set({linePx: linePx - 1})
	chrome.tabs.query({url: "*://web.whatsapp.com/"}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "feature/line.js"})
    })
}
lineForth.onclick = function() {
	var linePx = lineNow.innerHTML
	lineNow.innerHTML = linePx - (-1)
	chrome.storage.sync.set({linePx: linePx - (-1)})
	chrome.tabs.query({url: "*://web.whatsapp.com/"}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "feature/line.js"})
    })
}

switchLogo.onchange = function() {
    chrome.storage.sync.set({logo: switchLogo.checked})
    chrome.tabs.query({url: "*://web.whatsapp.com/"}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "feature/logo.js"})
    })
}

switchColor.onchange = function() {
    chrome.storage.sync.set({color: switchColor.checked})
    chrome.tabs.query({url: "*://web.whatsapp.com/"}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "feature/color.js"})
    })
}

switchNotify.onchange = function() {
    chrome.storage.sync.set({notify: switchNotify.checked})
    chrome.tabs.query({url: "*://web.whatsapp.com/"}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "features/notify.js"})
    })
}