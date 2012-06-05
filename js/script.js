/* Author:

*/

$(document).ready(function() {
    $('head').append($('<style id="keyframes"/>'))
    $('#spin').click(function() {
        $('.reel').removeClass('active');
        var end_degrees = (Math.floor(Math.random()*12) * 30) + 3600;
        var bounce = Math.floor(Math.random()*14) + end_degrees;
        $('#keyframes').text("@-webkit-keyframes spin {\
            0% {\
                -webkit-transform: rotateX(0);\
            }\
            97% {\
                -webkit-transform: rotateX(-" + bounce + "deg);\
            }\
            100% {\
                -webkit-transform: rotateX(-" + end_degrees + "deg);\
            }\
        }");
        $('.reel').addClass('active');
    });
});






