(function() {
  'use strict';

  var count = 0;

  (function(){
    var posterContainer = document.querySelector('.poster-container'),
        poster = document.querySelector('.poster');
    posterContainer.addEventListener('click', function() {
      if(count % 2 == 0){
        count++;
        this.style.background = "url('../img/trump.gif') center center no-repeat #1b2136";
        this.style.backgroundSize = "cover";
        poster.style.display = 'none';
      } else {
        count++;
        this.style.background = "#1b2136";
        poster.style.display = 'flex';
      }
    }, false);
  }());

})();
