var unicornEraserLoaded;

if (!unicornEraserLoaded) {
    unicornEraserLoaded = true;

    try {
        var superProcessNewsContent = model.processNewsContent;
        model.processNewsContent = function(html) {
            if (model.newsUrl() === 'https://planetaryannihilation.com/news/rainbows-unicorns-updates/')
            {
                return "<p>UNICORN DETECTED...</p><p>ANNIHILATING...</P><p>UNICORN COMMANDER SUCCESSFULLY ANNIHILATED!</p>";

                // var content = superProcessNewsContent(html);
                // $(content).find('a').hide();
                // return content;
            }
            else
            {
                return superProcessNewsContent(html);
            }
        }
    } catch(e) {
        console.error(e);
        console.error(JSON.stringify(e));
    }
}
