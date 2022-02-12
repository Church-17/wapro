chrome.storage.sync.get('linePx', function(data) {
	if (data.linePx == null) {
		chrome.storage.sync.set({linePx: '300'})
	}
})

chrome.storage.sync.get('logo', function(data) {
	if (data.logo == null) {
		chrome.storage.sync.set({logo: true})
	}
})

chrome.storage.sync.get('color', function(data) {
	if (data.color == null) {
		chrome.storage.sync.set({color: true})
	}
})