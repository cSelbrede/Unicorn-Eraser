var unicornEraserLoaded;

if (!unicornEraserLoaded) {
    unicornEraserLoaded = true;

    try {
        (function(){
            // Switch immediately to news tab, since community videos might have footage of unicorns
            model.communityTabGroup('news');

            // Remove unicorn references from the news tab
            var superProcessNewsContent = model.processNewsContent;
            model.processNewsContent = function(html) {
                if (model.newsUrl() === 'https://planetaryannihilation.com/news/rainbows-unicorns-updates/')
                {
                    var regex = /Rainbows & Unicorns/i
                    trimmedTitle = model.newsTitle().replace(regex, '').trim();
                    model.newsTitle(trimmedTitle);

                    html = '<p>Full update notes: <a href="https://planetaryannihilation.com/news/rainbows-unicorns-updates/">https://planetaryannihilation.com/news/updates</a>';
                }

                return superProcessNewsContent(html);
            }
        })();
    } catch(e) {
        console.error(e);
        console.error(JSON.stringify(e));
    }
}
