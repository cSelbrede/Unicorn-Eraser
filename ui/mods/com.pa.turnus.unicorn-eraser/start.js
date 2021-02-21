var unicornEraserLoaded;

if (!unicornEraserLoaded) {
    unicornEraserLoaded = true;

    try {
        var oldNews = model.processNewsContent;
        model.processNewsContent = function(html) {
            return "<p>Hello world!</p>";
        }
    } catch(e) {
        console.error(e);
        console.error(JSON.stringify(e));
    }
}
