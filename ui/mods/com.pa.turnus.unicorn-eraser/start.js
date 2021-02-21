var unicornEraserLoaded;

if (!unicornEraserLoaded) {
    unicornEraserLoaded = true;

    try {
        var superProcessNewsContent = model.processNewsContent;
        model.processNewsContent = function(html) {
            if (model.newsUrl() === 'https://planetaryannihilation.com/news/rainbows-unicorns-updates/')
            {
                var regex = /Rainbows & Unicorns/i
                trimmedTitle = model.newsTitle().replace(regex, '').trim();
                model.newsTitle(trimmedTitle);

                return "<p>UNICORN DETECTED...</p><p>ANNIHILATING...</P><p>UNICORN COMMANDER SUCCESSFULLY ANNIHILATED!</p>";
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
