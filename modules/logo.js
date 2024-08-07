if(document.getElementById('id_logo') == null) {
	var id_logo = document.createElement('style')
	id_logo.id = 'id_logo'
	document.head.appendChild(id_logo)
}
chrome.storage.sync.get('logo', function(data) {
	if(data.logo) {
		document.getElementById('id_logo').innerHTML = "html[dir] [data-asset-intro-image-dark], [data-icon='intro-md-beta-logo-dark'], div:has(> [src='/img/native-desktop-hero_a22b846aefcd2de817624e95873b2064.png']), div:has(> [src='https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png']) {\
			animation: logo 1s steps(15) infinite;\
            background-image: url('/img/animated-doodle_600127bdb5f7627ede5cd4ef320f55b0.png');\
            background-position: 0;\
			filter: contrast(0.6) saturate(1.8) brightness(0.9);\
			width: 355px;\
			height: 355px;\
			background-size: 1600% auto;\
			margin: auto;\
        }\
        @keyframes logo {\
            to {background-position-x: 100%}\
        }\
		[data-icon='intro-md-beta-logo-dark'] > svg, [src='/img/native-desktop-hero_a22b846aefcd2de817624e95873b2064.png'], [src='https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png'] {\
			display: none;\
		}"
	} else {
		document.getElementById('id_logo').innerHTML = ''
	}
})