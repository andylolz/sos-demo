var fsalbertbold = {
	src: '/flash/sifr/fsalbertbold.swf'
};

sIFR.domains = ['*'];

sIFR.activate(fsalbertbold);

sIFR.replace(fsalbertbold, {
	selector: '#home h2'
	,wmode: 'transparent'
	,css: ['.sIFR-root { color: #ffffff; display: block; font-weight: bold; font-size: 30px; }']
	,ratios: [9,1.16,16,1.09,24,1.06,37,1.04,74,1.02,1.01]
	});

sIFR.replace(fsalbertbold, {
	selector: '#home h3'
	,wmode: 'transparent'
	,css: ['.sIFR-root { color: #FBCCA6; display: block; font-size: 26px }']
	,ratios: [9,1.16,16,1.09,24,1.06,37,1.04,74,1.02,1.01]
	});

sIFR.replace(fsalbertbold, {
	selector: '#home .signpost h4.highlight'
	,wmode: 'transparent'
	,css: ['.sIFR-root { color: #f47f20; display: block; font-size: 19px; font-weight: bold; }']
	,ratios: [9,1.16,16,1.09,24,1.06,37,1.04,74,1.02,1.01]
	});

sIFR.replace(fsalbertbold, {
	selector: '#home .signpost h4'
	,wmode: 'transparent'
	,css: ['.sIFR-root { color: #386351; display: block; font-size: 19px; font-weight: bold; }']
	,ratios: [9,1.16,16,1.09,24,1.06,37,1.04,74,1.02,1.01]
	});
	
// sIFR.debug.ratios(fsalbertbold, { selector: '#home h3' });
