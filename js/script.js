/* Author: Peter Magenheimer

*/

$(document).ready(function() {
    $('head').append($('<style id="keyframes"/>'))
    $('#spin').click(function() {
        $('.reel').removeClass('active');
        var end_degrees = []
        var bounce = []
        while(end_degrees.length < 3){
            var rand_degrees = (Math.floor(Math.random()*12) * 30) + 3600;
            var rand_bounce = Math.floor(Math.random()*14) + rand_degrees;
            end_degrees.push(rand_degrees);
            bounce.push(rand_bounce);
        }
        $('#keyframes').text("\
            @-webkit-keyframes reel-1-spin {\
                0% {\
                    -webkit-transform: rotateX(0);\
                }\
                97% {\
                    -webkit-transform: rotateX(-" + bounce[0] + "deg);\
                }\
                100% {\
                    -webkit-transform: rotateX(-" + end_degrees[0] + "deg);\
                }\
            }\
            @-webkit-keyframes reel-2-spin {\
                0% {\
                    -webkit-transform: rotateX(0);\
                }\
                97% {\
                    -webkit-transform: rotateX(-" + bounce[1] + "deg);\
                }\
                100% {\
                    -webkit-transform: rotateX(-" + end_degrees[1] + "deg);\
                }\
            }\
            @-webkit-keyframes reel-3-spin {\
                0% {\
                    -webkit-transform: rotateX(0);\
                }\
                97% {\
                    -webkit-transform: rotateX(-" + bounce[2] + "deg);\
                }\
                100% {\
                    -webkit-transform: rotateX(-" + end_degrees[2] + "deg);\
                }\
            }\
            ");
        $('.reel').addClass('active');
    });
});






