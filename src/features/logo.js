if (document.getElementById('changeLogo') == null) {
	var changeLogo = document.createElement('style')
	changeLogo.id = 'changeLogo'
	document.head.appendChild(changeLogo)
}
chrome.storage.sync.get('logo', function(data) {
	if (data.logo == true) {
		document.getElementById('changeLogo').innerHTML = "html[dir] [data-asset-intro-image-dark] {\
			animation: logo 1s steps(15) infinite;\
            background-image: url('/img/animated-doodle_600127bdb5f7627ede5cd4ef320f55b0.png');\
            background-position: 0;\
			filter: contrast(0.6) saturate(1.8) brightness(0.9);\
			width: 355px;\
			height: 355px;\
			background-size: 1600% auto;\
        }\
        @keyframes logo {\
            to {background-position-x: 100%}\
        }\
		[data-icon='intro-md-beta-logo-dark'] > svg {\
			display: none;\
		}"
	} else {
		document.getElementById('changeLogo').innerHTML = ''
	}
})