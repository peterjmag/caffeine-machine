/**
 * Author: Peter Magenheimer
 */

var slot_types = ['coffee', 'tea', 'espresso'];

/**
 * Clear previous spin and get new random reel parameters. Initiate spin and
 * bind get_results() to animationend event.
 */
function spin_reels() {
    $('#keyframes').empty();
    $('.reel, #results *').removeClass('active');

    var reel_params = get_reel_params();

    $('#keyframes').append(keyframe_rule('reel-1-spin', reel_params[0]),
                           keyframe_rule('reel-2-spin', reel_params[1]),
                           keyframe_rule('reel-3-spin', reel_params[2]));

    $('.reel').addClass('active');

    $("#reel-3").unbind('animationend webkitAnimationEnd')
        .bind('animationend webkitAnimationEnd', {reel_params: reel_params}, get_results);
}

/**
 * Generate random spin parameters for three reels.
 * @return {reel_params} A multi-dimensional array with the following
 *     parameters for each reel: end_slot, end_slot_type, end_degrees,
 *     and bounce.
 */
function get_reel_params() {
    var reel_params = [];
    while(reel_params.length < 3) {
        var reel = [];
        reel['end_slot'] = Math.floor(Math.random()*12) + 1;
        reel['end_slot_type'] = slot_types[(reel['end_slot'] % 3)];
        reel['end_degrees'] = (reel['end_slot'] * 30) + 3600;
        reel['bounce'] = Math.floor(Math.random()*14) + reel['end_degrees'];
        reel_params.push(reel);
    }
    return reel_params;
}

/**
 * Process the spin results. If all three reels match, display the appropriate
 * victory text and image. If not, display the loss text.
 * @params {event} The jQuery event object from the bind() in spin_reels().
 */
function get_results(event) {
    var r1 = event.data.reel_params[0]['end_slot_type'];
    var r2 = event.data.reel_params[1]['end_slot_type'];
    var r3 = event.data.reel_params[2]['end_slot_type'];
    if ((r1 == r2) && (r1 == r3)) {
        $('.drink').text(r1);
        $('.win, .' + r1).addClass('active');
    } else {
        $('.lose').addClass('active');
    };
}

/**
 * Generate a CSS @keyframes rule for the spin.
 * @params {string} The keyframe rule identifier.
 * @params {array} The random reel parameters to be used.
 */
function keyframe_rule(name, params) {
    var rule = "\
        @-webkit-keyframes " + name + " {\
            0% { -webkit-transform: rotateX(0); }\
            97% { -webkit-transform: rotateX(-" + params['bounce'] + "deg); }\
            100% { -webkit-transform: rotateX(-" + params['end_degrees'] + "deg); }\
        }";
    return rule;
}

$(document).ready(function() {
    $('head').append($('<style id="keyframes"/>'));

    $('.spin').click(spin_reels);

    $('#hyperspeed').change(function() {
        $('body').toggleClass('hyperspeed')
    });
});
