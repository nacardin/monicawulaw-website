(function() {
  'use strict';

  InstantClick.init();

  var wow = new window.WOW({
    'animateClass': 'animated',
    'offset': 100,
    // 'callback': function(box) {
    //   console.log('WOW: animating <' + box.tagName.toLowerCase() + '>');
    // }
  });
  wow.init();

}());
