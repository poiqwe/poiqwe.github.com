(function(){
    var hero = document.createElement('script'), item = document.createElement('script');
    hero.src = 'http://poiqwe.github.com/playdota2/hero.js';
    item.src = 'http://poiqwe.github.com/playdota2/item.js';
    document.getElementsByTagName('head')[0].appendChild(hero);
    document.getElementsByTagName('head')[0].appendChild(item);
})();

unsafeWindow.addEventListener("load",replaceImages,true);

function replaceImages() {
    
}