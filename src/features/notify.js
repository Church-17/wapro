if (document.getElementById('notify') == null) {
	const targetNode = document.getElementById('app');
	const callback = function(mutationsList, observer) {
	    if (document.getElementById('side').children[1].tagName == 'SPAN') {
			document.getElementById('side').children[1].id = 'notify';
			chrome.storage.sync.get('notify', function(data) {
				if (data.notify) {
					document.getElementById('notify').style.height = 0;
				} else {
					document.getElementById('notify').style = '';
				}
			})
			observer.disconnect();
		}
	}
	const observer = new MutationObserver(callback);
	observer.observe(targetNode, {childList: true});
} else {
	chrome.storage.sync.get('notify', function(data) {
		if (data.notify) {
			document.getElementById('notify').style.height = 0;
		} else {
			document.getElementById('notify').style = '';
		}
	})
}
	