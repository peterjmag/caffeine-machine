# The Caffeine Machine

The Caffeine Machine is my entry for [Thumbtack's Espresso Bar Slot Machine
programming challenge](http://www.thumbtack.com/challenges).

## Browser compatibility

- Chrome 12+
- Safari 5+
- Mobile Safari on iOS 3.2+

Firefox is not yet completely supported. I've been experimenting with support
for it on the [firefox branch][1]. You can find a list of Firefox issues in the
Bugs section below.

## About

I chose to depend heavily on CSS3 keyframe animation to create the spinning
effect. There are a few reasons for this. The most important of these is sheer
performance—CSS3 3D animations are significantly smoother than JS/jQuery. It
also allowed me to take advantage of built-in timing functions (ease-in, etc.)
that would normally require a lot of extra JS. The CSS3 transition property was
another option, but I found its behavior inconsistent. For example, reels would
often skip all of those extra spins, which makes for a pretty lame slot machine.
CSS3 transitions also made it a bit more difficult to create the "overbounce"
effect at the end of the main spin.

That said, this approach does have its drawbacks. For one, @keyframe rules are
not "attached" to any specific element in a stylesheet, so I had to inject them
into a style element with some slightly awkward JS. (Check out the
keyframe_rule() function in [script.js][2] to see what I mean.) I'm working on a
more elegant approach using the CSSOM (instead of just removing and replacing
text), based on [these][3] [two][4]  StackOverflow posts. Another minor issue is
that images on the reel appear slightly blurry, even when the source image is
larger than the rendered result. This appears to be the case for all elements
"pushed" toward the viewer via CSS—WebKit doesn't resample them for their new
position in 3D space, presumably for performance reasons.

## Bugs

- Firefox: The spin button only works once. After the first spin, reels do not 
animate, and no results are displayed
- Firefox: Spinning animation is jerky, inconsistent
- Firefox: Slots flicker intermittently

## Todo

- Responsive, mobile version for smartphones and tablets
- Create a 2D fallback for browsers that don't support 3D tranforms (IE and 
Opera in particular)

[1]: https://github.com/peterjmag/caffeine-machine/tree/firefox
[2]: https://github.com/peterjmag/caffeine-machine/blob/master/js/script.js
[3]: http://stackoverflow.com/questions/10342494/set-webkit-keyframes-values-using-javascript-variable
[4]: http://stackoverflow.com/questions/5105530/programmatically-changing-webkit-transformation-values-in-animation-rules
