/*====================================
=            DOM IS READY            =
====================================*/
//$(function() {
//    $('.pagination .active a').click(function() {
//        return false;
//    });
//});


/*========================================
=            WINDOW IS LOADED            =
========================================*/

document.addEventListener("DOMContentLoaded", function() {

    var feed = new Instafeed({

    get: 'user',
        userId: 15736008,
        accessToken: '15736008.b239643.d2b6bb19a3134c69bbc035dbdbaa8bd9',
        target: 'instafeed',
        sortBy: 'most-liked',
        limit: 10,
        resolution: 'standard_resolution',
        template: '<div class="insta-item"><a class="insta-image" href="{{image}}"><img alt="{{user.full_name}}" src="{{image}}" /><div class="img-backdrop"><div class="insta-caption"><p>{{caption}}</p></div></div><div class="caption"><a></a></div></a></div>',

        filter: function(image) {
            return image.type === 'image';
        },

        after: function () {
            if (!this.hasNext()) {
                loadButton.setAttribute('disabled', 'disabled');
            }
        }
    });

    var loadButton = document.getElementById("insta-btn");
    loadButton.addEventListener("click", function() {
        feed.next();
    });

    feed.run();
});

