if (document.getElementById('changeColor') == null) {
	var changeColor = document.createElement('style')
	changeColor.id = 'changeColor'
	document.head.appendChild(changeColor)
}
chrome.storage.sync.get('color', function(data) {
	if (data.color == true) {
		document.getElementById('changeColor').innerHTML = '.dark {\
			--active-tab-marker: #008c69;\
			--audio-progress-outgoing: #009c76;\
			--audio-track-outgoing: #136b59;\
			--button-primary-background: #008c69;\
			--button-primary-background-hover: #009c76;\
			--button-round-background: #008c69;\
			--button-secondary: #008c69;\
			--button-secondary-hover: #008c69;\
			--chat-marker-admin: #008c69;\
			--chat-marker-admin-border: rgba(0,140,105,0.7);\
			--checkbox-background: #008c69;\
			--highlight: #0fa587;\
			--input-border-active: #008c69;\
			--intro-border: #045f47;\
			--menu-tabs-list-active: #008c69;\
			--outgoing-background: #165a43;\
			--outgoing-background-rgb: 22,90,67;\
			--outgoing-background-deeper: #124e3a;\
			--progress-primary: #008c69;\
			--teal: #008c69;\
			--typing: #0fa587;\
			--unread-marker-background: #009c76;\
		}'
	} else {
		document.getElementById('changeColor').innerHTML = ''
	}
})
