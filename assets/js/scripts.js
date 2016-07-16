'use strict';

$(document).ready(init);

function init() {
  enableSmoothScroll();
  copyYear();
}

/** Smooth scroll on link click  */
function enableSmoothScroll() {
    var $root = $('html, body');
    $('a[href*=#]').click(function() {
        var scrollToPos = $( $(this).attr('href') ).offset().top
        $root.animate({
            scrollTop: scrollToPos
        }, 500);
        return false;
    });
}

/** Set copyright year */
function copyYear() {
  var currentYear = new Date().getFullYear();
  var $yearString = $('#copy-date');
  $yearString.text(currentYear);
}