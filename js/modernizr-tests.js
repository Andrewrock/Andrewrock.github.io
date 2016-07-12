if (!Modernizr.backgroundcliptext) {
  ////$('.highlight').removeClass('highlight').addClass('no-highlight');
  //document.querySelectorAll('.highlight').classList.remove('highlight');

  var overlay = document.querySelectorAll('.highlight .slide-number .slide-title' );
      for (var i = 0; i < overlay.length; i++) {
        overlay[i].className += ' no-highlight';
      }
}
