chrome.storage.sync.get('lines', function(data) {
	if(data.lines == null) {
		chrome.storage.sync.set({lines: 15})
	}
})

chrome.storage.sync.get('logo', function(data) {
	if(data.logo == null) {
		chrome.storage.sync.set({logo: true})
	}
})

chrome.storage.sync.get('color', function(data) {
	if(data.color == null) {
		chrome.storage.sync.set({color: true})
	}
})