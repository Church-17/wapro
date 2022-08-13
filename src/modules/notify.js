executeNotify = function() {
	chrome.storage.sync.get('notify', function(data) {
		if (data.notify) {
			document.getElementById('id_notify').style.height = 0
		} else {
			document.getElementById('id_notify').style = ''
		}
	})
}

if (document.getElementById('id_notify') == null) {
	const targetNode = document.getElementById('app');
	const callback = function(mutationsList, observer) {
	    if (document.getElementById('side').parentNode.children[1].tagName == 'SPAN') {
			document.getElementById('side').parentNode.children[1].id = 'id_notify';
			executeNotify()
			observer.disconnect();
		}
	}
	const observer = new MutationObserver(callback);
	observer.observe(targetNode, {childList: true});
} else {
	executeNotify()
}
	