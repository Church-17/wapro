var lineNow = document.getElementById('lineNow')
var lineBack = document.getElementById('lineBack')
var lineForth = document.getElementById('lineForth')
var switchLogo = document.getElementById('switchLogo')
var switchColor = document.getElementById('switchColor')

chrome.storage.sync.get(['linePx','logo','color'], function(data) {
	lineNow.innerHTML = data.linePx / 20
	lineBack.value = data.linePx
	lineForth.value = data.linePx
	switchLogo.checked = data.logo
	switchColor.checked = data.color
})

lineBack.onclick = function() {
	var linePx = lineBack.value
	if (linePx == 20) {return}
	lineNow.innerHTML = (linePx - 20) / 20
	lineBack.value = (linePx - 20)
	lineForth.value = (linePx - 20)
	chrome.storage.sync.set({linePx: (linePx - 20)})
	chrome.tabs.query({url: "*://web.whatsapp.com/"}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "feature/line.js"})
    })
}
lineForth.onclick = function() {
	var linePx = lineForth.value
	lineNow.innerHTML = (linePx - (-20)) / 20
	lineBack.value = (linePx - (-20))
	lineForth.value = (linePx - (-20))
	chrome.storage.sync.set({linePx: (linePx - (-20))})
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