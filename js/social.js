/*!
 * Social.js
 *
 * Script to open Facebook and Twitter pop-ups.
 */

function fbs_click(width, height) {
  leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
  topPosition = (window.screen.height / 2) - ((height / 2) + 50);
  var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
  u = location.href;
  t = document.title;
  window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(u) + "&t=" + encodeURIComponent(t), "sharer", windowFeatures);
  return false;
}

function twt_click() {
  window.twttr = window.twttr || {};
  var D = 550,
      A = 450,
      C = screen.height,
      B = screen.width,
      H = Math.round((B/2)-(D/2)),
      G = 0,
      F = document,
      E;

  if (C > A) {
    G = Math.round((C/2)-(A/2));
  }

  window.twttr.shareWin = window.open('http://twitter.com/share?text=vimeo.ga.js%20—%20A%20Google%20Analytics%20plugin%20for%20measuring%20Vimeo%20Player%20Events.&amp;via=sanderheilbron','','left='+H+',top='+G+',width='+D+',height='+A+',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
  E = F.createElement('script');
  E.src = 'http://platform.twitter.com/widgets.js';
  F.getElementsByTagName('head')[0].appendChild(E);
}
