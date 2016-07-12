(function() {
  'use strict';

  var w = window,
    d = document,
    ee = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth= w.innerWidth || ee.clientWidth || g.clientWidth,
    body = document.body;

  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var video = document.getElementsByTagName("source");
    for(var i = 0; i < video.length; i++){
      video[i].removeAttribute("src");

    }
  }

  var feed = new Instafeed({
    accessToken: '15736008.d6bf5a0.bc5b7503355d4e438d2781ece6649ab8',
    get: 'user',
    userId: 15736008,
    sortBy: 'most-liked',
    resolution: "standard_resolution",
    template:
    '<a href="{{link}}" target="_blank">' +
    '<img src="{{image}}" />' +
    '</a>' ,
    filter: function(image) {
      return image.type === 'image';
    }
  });

  (function(){
    var burger = document.querySelector('.burger-container'),
      header = document.querySelector('.navigation-area-mobile');
    burger.onclick = function() {
      header.classList.toggle('open');
    };
  }());

  (function(){
    function onTabClickMobile(event){
      var actives = document.querySelectorAll('.active'),
        header = document.querySelector('.navigation-area-mobile');

      // deactivate existing active tab and panel
      for (var i=0; i < actives.length; i++){
        actives[i].className = actives[i].className.replace('active', '');
      }

      // activate new tab and panel
      event.target.className += ' active';
      document.getElementById(event.target.href.split('#')[1]).className += ' active active-home';
      header.classList.toggle('open');
    }
    var el = document.getElementById('mobile-tabs');
    el.addEventListener('click', onTabClickMobile, false);
  })();

  (function(){
    function onTabClick(event){
      var actives = document.querySelectorAll('.active');
      for (var i=0; i < actives.length; i++){
        actives[i].className = actives[i].className.replace('active', '');
      }
      event.target.className += ' active';
      document.getElementById(event.target.href.split('#')[1]).className += ' active';
    }

    var el = document.getElementById('tabs');
    el.addEventListener('click', onTabClick, false);
  })();

  (function(){
    var counter = 0,
      items = document.querySelectorAll('.slider .slide'),
      next = document.querySelector('.next'),
      previous = document.querySelector('.previous'),
      numItems = items.length;

    var showCurrent = function(){
      var itemToShow = Math.abs(counter%numItems);
      [].forEach.call( items, function(el){
        el.classList.remove('show');
      });
      items[itemToShow].classList.add('show');
    };

    next.addEventListener('click', function() {
      counter++;
      showCurrent();
    }, false);

    previous.addEventListener('click', function() {
      counter--;
      showCurrent();
    }, false);

  })();


  feed.run();
})();
