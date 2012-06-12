/* Author: Peter Magenheimer

*/

$(document).ready(function() {
    $('head').append($('<style id="keyframes"/>'));

    $('#spin').click(function() {
        $('.reel').removeClass('active');

        var slot_types = ['coffee', 'tea', 'espresso'];
        var reel_params = [];
        while(reel_params.length < 3) {
            var reel = [];
            reel['end_slot'] = Math.floor(Math.random()*12) + 1;
            reel['end_slot_type'] = slot_types[(reel['end_slot'] % 3)];
            reel['end_degrees'] = (reel['end_slot'] * 30) + 3600;
            reel['bounce'] = Math.floor(Math.random()*14) + reel['end_degrees'];
            reel_params.push(reel);
        }

        $('#keyframes').text("\
            @-webkit-keyframes reel-1-spin {\
                0% {\
                    -webkit-transform: rotateX(0);\
                }\
                97% {\
                    -webkit-transform: rotateX(-" + reel_params[0]['bounce'] + "deg);\
                }\
                100% {\
                    -webkit-transform: rotateX(-" + reel_params[0]['end_degrees'] + "deg);\
                }\
            }\
            @-webkit-keyframes reel-2-spin {\
                0% {\
                    -webkit-transform: rotateX(0);\
                }\
                97% {\
                    -webkit-transform: rotateX(-" + reel_params[1]['bounce'] + "deg);\
                }\
                100% {\
                    -webkit-transform: rotateX(-" + reel_params[1]['end_degrees'] + "deg);\
                }\
            }\
            @-webkit-keyframes reel-3-spin {\
                0% {\
                    -webkit-transform: rotateX(0);\
                }\
                97% {\
                    -webkit-transform: rotateX(-" + reel_params[2]['bounce'] + "deg);\
                }\
                100% {\
                    -webkit-transform: rotateX(-" + reel_params[2]['end_degrees'] + "deg);\
                }\
            }\
            ");

        $('.reel').addClass('active');
    });
});






