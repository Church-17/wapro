if(document.getElementById('id_color') == null) {
	var id_color = document.createElement('style')
	id_color.id = 'id_color'
	document.head.appendChild(id_color)
}
chrome.storage.sync.get('color', function(data) {
	if(data.color) {
		document.getElementById('id_color').innerHTML = '.dark {\
			---darker: #0c4130;\
			---dark: #0b563d;\
			---main: #008c69;\
			---light: #009c76;\
			---lighter: #0fa587;\
			--active-tab-marker: var(---main);\
			--announcement-speaker-background: var(---dark);\
			--button-primary-background: var(---main);\
			--button-primary-background-hover: var(---light);\
			--button-round-background: var(---main);\
			--button-secondary: var(---main);\
			--button-secondary-hover: var(---main);\
			--chat-marker: var(---lighter);\
			--checkbox-background: var(---main);\
			--communities-green: var(---lighter);\
			--date-picker-header-background-color: var(---main);\
			--date-picker-today-background-color: var(---main);\
			--highlight: var(---lighter);\
			--icon-high-emphasis: var(---main);\
			--icon-search-back: var(---main);\
			--input-border-active: var(---main);\
			--intro-border: var(---dark);\
			--menu-tabs-list-active: var(---main);\
			--outgoing-background: var(---dark);\
			--outgoing-background-rgb: 11,86,61;\
			--outgoing-background-deeper: var(---darker);\
			--outgoing-background-deeper-rgb: 18,78,58;\
			--poll-bar-fill-receiver: var(---light);\
			--progress-primary: var(---main);\
			--ptt-draft-button-send: var(---main);\
			--ptt-draft-button-send-hover: var(---light);\
			--round-icon-background: var(---main);\
			--switch-button-checked-color: var(---main);\
			--teal-lighter: var(---main);\
			--typing: var(---lighter);\
			--unread-marker-background: var(---light);\
			--wds-teal-500: var(---light);\
		}'
	} else {
		document.getElementById('id_color').innerHTML = ''
	}
})