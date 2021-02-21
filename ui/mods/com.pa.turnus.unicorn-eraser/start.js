(function() {
    console.log("BYE BYE UNICORNS");

    var oldNews = model.processNewsContent;
    model.processNewsContent = function(html) {
        return "<p>Hello world!</p>";
    }
})();
