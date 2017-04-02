/*========================================
 =            WINDOW IS LOADED            =
 ========================================*/

document.addEventListener("DOMContentLoaded", function() {
  var tutorialFeed = new Instafeed ({

    get: 'user',
    userId: 15736008,
    accessToken: '15736008.b239643.d2b6bb19a3134c69bbc035dbdbaa8bd9',
    target: 'tutorial-instafeed',
    sortBy: 'most-recent',
    limit: 9,
    resolution: 'standard_resolution',
    template: '<div class="image-item insta-page">' +
    '<a class="image insta-image" href="{{image}}">' +
    '<img alt="{{user.full_name}}" src="{{image}}" />' +
    '<div class="img-backdrop">' +
    '<div class="insta-caption">' +
    '<p>{{caption}}</p>' +
    '</div>' +
    '</div>' +
    '<div class="captions">' +
    '<a></a>' +
    '</div>' +
    '</a>' +
    '</div>',

    after: function () {
      loader.style.display = 'none';
      if (!this.hasNext()) {
        loadButton.setAttribute('disabled', 'disabled');
      }
    }
  });

  var loadButton = document.getElementById("insta-btn"),
      loader = document.getElementById("loader");

  loadButton.addEventListener("click", function() {
    tutorialFeed.next();
  });

  tutorialFeed.run();
});

