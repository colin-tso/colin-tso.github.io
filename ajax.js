var htmlContent = $.getJSON("project-tiles.json", function () {
    console.log("success");
}).done(function (data) {
    var pugHTML = projectTiles(data);
    //console.log(resultHTML);
    $(".projects-tile-container").append(pugHTML);
});