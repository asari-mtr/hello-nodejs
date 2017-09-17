var $ = require("jquery");
var moment = require("moment");

$(function(){
    var $msg = $("#msg");
    $msg.fadeOut("slow", function() {
        $msg.text("Webpack " +
        moment().format("YYYY-MM-DD HH:mm:ss"))
        .css("color", "red")
        .fadeIn("slow");
    });
})
