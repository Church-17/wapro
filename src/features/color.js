if (document.getElementById('changeColor') == null) {
	var changeColor = document.createElement('style')
	changeColor.id = 'changeColor'
	document.head.appendChild(changeColor)
}
chrome.storage.sync.get('color', function(data) {
	if (data.color == true) {
		document.getElementById('changeColor').innerHTML = '.dark {\
			---main: #008c69;\
			---light: #009c76;\
			---lighter: #0fa587;\
			--active-tab-marker: var(---main);\
			--audio-progress-outgoing: var(---light);\
			--audio-track-outgoing: #136b59;\
			--beta-tag-background: #145d44;\
			--button-primary-background: var(---main);\
			--button-primary-background-hover: var(---light);\
			--button-round-background: var(---main);\
			--button-secondary: var(---main);\
			--button-secondary-hover: var(---main);\
			--chat-marker-admin: var(---main);\
			--chat-marker-admin-border: rgba(0,140,105,0.7);\
			--checkbox-background: var(---main);\
			--highlight: var(---lighter);\
			--icon-high-emphasis: var(---main);\
			--input-border-active: var(---main);\
			--intro-border: #045f47;\
			--menu-tabs-list-active: var(---main);\
			--outgoing-background: #165a43;\
			--outgoing-background-rgb: 22,90,67;\
			--outgoing-background-deeper: #124e3a;\
			--outgoing-background-deeper-rgb: 18,78,58;\
			--progress-primary: var(---main);\
			--round-icon-background: var(---main);\
			--typing: var(---lighter);\
			--unread-marker-background: var(---light);\
		}'
	} else {
		document.getElementById('changeColor').innerHTML = ''
	}
})
