chrome.storage.sync.get('line', function(data) {
	if (data.line == null) {
		chrome.storage.sync.set({line: 15})
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

chrome.storage.sync.get('notify', function(data) {
	if (data.notify == null) {
		chrome.storage.sync.set({notify: false})
	}
})