//
$(document).ready(function() {
    // $("button").click(function() {
        $.getJSON("https://api.myjson.com/bins/1gglc", function(result) {
            for (var i = 0; i < result.refugees.length; i++) {
                $("ul").append('<li>' + result.refugees[i].name + "</li> ");
            }
        });
    // });
});
