/* Author: Peter Magenheimer

*/

function spin_reels() {
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

    $("#reel-3").unbind('animationend webkitAnimationEnd')
        .bind('animationend webkitAnimationEnd', {reel_params: reel_params}, get_results);
}

function get_results(event) {
    var r1 = event.data.reel_params[0]['end_slot_type'];
    var r2 = event.data.reel_params[1]['end_slot_type'];
    var r3 = event.data.reel_params[2]['end_slot_type'];
    if ((r1 == r2) && (r1 == r3)) {
        alert("woohoo!");
    };
}

$(document).ready(function() {
    $('head').append($('<style id="keyframes"/>'));

    $('#spin').click(spin_reels);
});






