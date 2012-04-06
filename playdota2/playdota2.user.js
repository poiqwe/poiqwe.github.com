(function(){
    var hero = document.createElement('script'), item = document.createElement('script');
    hero.src = 'http://poiqwe.github.com/playdota2/hero.js';
    item.src = 'http://poiqwe.github.com/playdota2/items.js';
    document.getElementsByTagName('head')[0].appendChild(hero);
    document.getElementsByTagName('head')[0].appendChild(item);
})();

unsafeWindow.addEventListener("load",replaceImages,true);

function replaceImages() {
    var re = /http:\/\/.*?\.playdota.com\/(img\/)?(hero|items)\/(\d+)\/(icon|thumb|skill-\d)\.((?:[a-z\d]{3}))(?![\w\.])/,
    IMGUR = "http://i.imgur.com/", BITLY = "http://bit.ly/dota2-", EXTENSION = ".png",
	list,img,src,
	category,key,type,
	sizes = {
		thumb: 38,
		icon: 64
	};
	
	list = document.querySelectorAll('img[src*="playdota.com"]');
	
	for (var i=list.length;i--;) {
		img = list[i];
		src = img.src;
		
		if (!re.test(src)) continue;
		
		category = RegExp.$2; // hero | items
		key      = RegExp.$3; // integer
		type  = RegExp.$4; // icon | thumb | skill-0
		
		if (!!!parseInt(key)) continue;
		
		img.style.width = sizes.hasOwnProperty(type) ? sizes[type] : img.style.width;
		img.style.height = sizes.hasOwnProperty(type) ? sizes[type] : img.style.height;
		if (!!unsafeWindow[category][key] && !!unsafeWindow[category][key].imgur)
			img.src = IMGUR + unsafeWindow[category][key].imgur + EXTENSION;
	}
    

}