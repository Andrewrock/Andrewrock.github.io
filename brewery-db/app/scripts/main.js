/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the 'License');
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  var app = angular.module('myapp', []);

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a 'New content is
                // available; please refresh.' message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  app.controller('MainCtrl', function($scope) {
    /* add a beer with missing information,
     hide this beer for the featured beer
     */
    $scope.beers = [
      {
        id: 'BRsKOI',
        type: 'beer',
        name: 'El Diablo',
        description: 'This ale is our Lil\u2019 ' +
        'Sunshine Golden Ale infused with ' +
        'chipotle peppers. El Diablo is ' +
        'spicy and refreshing all at the ' +
        'same time. Caution: May require a ' +
        'back-up pint.',
        abv: '4.5',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/BRsKOI\/' +
        'upload_ejy92C-medium.png',
        genre: 'North American Origin Ales',
        otherBeers: 'Golden or Blonde ' +
        'Ale'
      },
      {
        id: '7G7PV7',
        type: 'beer',
        name: 'De La Vigne',
        description: '',
        abv: '',
        label: '',
        genre: 'North American Origin Ales',
        otherBeers: 'Golden or Blonde ' +
        'Ale'
      },
      {
        id: 'iTZlLw',
        type: 'beer',
        name: 'Fisherman\u2019s Ale',
        description: 'Fisherman\u2019s Ale is a ' +
        'German-style Kosch Ale that is ' +
        'crisp and refreshing. A ' +
        'style Invented in Cologne, ' +
        'Geramny in the early 20th' +
        ' century. It is an easy ' +
        'drinking beer with a touch' +
        ' of noble hops and a light' +
        ' malt sweetness. The ' +
        'perfect accompaniment' +
        ' to a full day ' +
        'reeling\u2019em in or ' +
        'watching the game.',
        abv: '5',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/I3GDJq\/' +
        'upload_1PJxDC-medium.png',
        genre: 'German Origin Ales',
        otherBeers: 'K\u00f6lsch'
      },
      {
        id: 'fTYdD0',
        type: 'beer',
        name: 'Vulcan',
        description: 'Imbued with the power of the ' +
        'Greek god of fire, Vulcan is an aggressive ' +
        'rye ale made with a boat-load of hops. The' +
        ' big, malty base has a dry, crisp rye ' +
        'character that holds up against ' +
        'the surge of earthy and ' +
        'fruity hop qualities. ' +
        'Hop heads will be in the ' +
        'Heavens with Vulcan.',
        abv: '6.6',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/fTYdD0\/' +
        'upload_rxmA6A-medium.png',
        genre: 'Hybrid\/mixed Beer',
        otherBeers: 'Rye Ale or Lager with or without Yeast'
      },
      {
        id: '7MZb8m',
        type: 'beer',
        name: 'Leffe 9\u00b0',
        description: 'Leffe Intense 9\u00b0 is a ' +
        'strong newcomer in the tradition of ' +
        'abbey beers - splendid as aperitif ' +
        'and brimming with character.',
        abv: '9',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/7MZb8m\/' +
        'upload_DLw0Fq-medium.png',
        genre: 'Belgian And French Origin Ales',
        otherBeers: 'Belgian Pale Strong'
      },
      {
        id: 'lHGjPK',
        type: 'beer',
        name: 'Czech Style Lager',
        description: 'Leffe Intense 9\u00b0 is a' +
        ' strong newcomer in the tradition of' +
        ' abbey beers - ' +
        'splendid as aperitif and brimming with character.',
        abv: '5',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/lHGjPK\/' +
        'upload_edwmSM-medium.png',
        genre: 'International Styles',
        otherBeers: 'International Pilsener'
      },
      {
        id: 'l2PVFuh',
        type: 'beer',
        name: 'Natural Union',
        description: 'Our friend Chase Healey ' +
        'from Prairie Artisan Ales took a ' +
        'break from catfish noodling and ' +
        'playing flyin\u2019 Lincolns ' +
        'to come down to Austin and ' +
        'brew a beer with us. He brought ' +
        'some rosemary from his garden, ' +
        'and we picked some lemon bee-balm ' +
        'from our ranch to add to the wort. ' +
        'From there, we allowed plenty of ' +
        'time for a bunch of weird critters ' +
        'in some oak barrels to do all kinds of ' +
        'interesting things with the beer. ' +
        'Unfiltered, unpasteurized, ' +
        'and 100% bottle-conditioned.',
        abv: '5',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/2PVFuh\/' +
        'upload_y88Df3-medium.png',
        genre: 'Belgian And French Origin Ales',
        otherBeers: 'Saison'
      },
      {
        id: 'l2PVFuh',
        type: 'beer',
        name: 'OMG',
        description: 'Dark strong ale.',
        abv: '5',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/wSkM9L\/' +
        'upload_sDGkhA-medium.png',
        genre: 'North American Origin Ales',
        otherBeers: 'American Barleywine'
      },
      {
        id: 'aXuMYR',
        type: 'beer',
        name: 'It\u2019s Cucumber Thyme!',
        description: 'American Wheat with lots of ' +
        'fresh cucumber and a hint of thyme. ' +
        'Very refreshing and perfect ' +
        'for a sunny day.',
        abv: '5.5',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/aXuMYR\/' +
        'upload_UVdG9X-medium.png',
        genre: 'Belgian And French Origin Ales',
        otherBeers: ''
      },
      {
        id: '7NhZ7P',
        type: 'beer',
        name: 'Snake Juice',
        description: 'Snake Juice is a pale orange colored ' +
        'IPA brewed with Sidama and Yirgacheffe coffee ' +
        'beans from Higher Grounds Trading Company. ' +
        'The aroma is a blend of fruity citrus hops ' +
        'with roasted coffee and subtle chocolate ' +
        'notes. Sweet flavors of java, berries, ' +
        'and orange lead into a complimentary ' +
        'bitterness that lingers with a ' +
        'pleasant mocha-like finish.',
        abv: '4.5',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/7NhZ7P\/' +
        'upload_WZjtcQ-medium.png',
        genre: 'Hybrid\/mixed Beer',
        otherBeers: 'Speciality Beers'
      },
      {
        id: 'gmtrG9',
        type: 'beer',
        name: 'Fear & Trembling (Bourbon)',
        description: 'Fear and Trembling is Hill ' +
        'Farmstead\u2019s first collaboration' +
        ' \u2013 a ' +
        'Baltic Porter brewed with malt that ' +
        'was hand smoked over maple wood by ' +
        'our Danish friend,' +
        ' and former colleague, Anders Kissmeyer. ' +
        'This bottled version was aged ' +
        'in Bourbon barrels. ' +
        'As a student of philosophy and former ' +
        'resident of Copenhagen, it is ' +
        'fitting that our brewer ' +
        'named our first collaboration ' +
        'after Denmark\u2019s great ' +
        'thinker: S\u00f8ren Kierkegaard. ' +
        'All three contemplated absurdity, ' +
        'faith, and salvation while ' +
        'wandering the shores of the ' +
        'Baltic Sea\u2026\r\n\r\n\u201c\u2026' +
        'continue to work out your salvation ' +
        'with fear and ' +
        'trembling\u2026\u201d\r\n\r\n' +
        'Aged in used Sam Adams ' +
        'Utopias barrels.',
        abv: '9.3',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/beer\/gmtrG9\/' +
        'upload_zeGGY0-medium.png',
        genre: 'Other Lager',
        otherBeers: 'Baltic Porter'
      },
      {
        id: 'xG9JyI',
        type: 'brewery',
        name: 'Fordham & Dominion Brewing Company',
        description: 'Based on our shared values and a' +
        'common philosophy of quality brewing, Fordham &' +
        'Dominion joined forces in 2007 and consolidated' +
        'operations in 2009. The First State is now home' +
        'to the Fordham & Dominion Brewing Co., where beer' +
        'lovers from near and far are able to stop by, get' +
        'to know us, and enjoy our handcrafted beer and' +
        'soda. Our roots run deep throughout the Mid-Atlantic' +
        'region and we remain dedicated to our craft.',
        website: 'http:\/\/www.fordhamanddominion.com\/',
        established: '2007',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/brewery\/xG9JyI\/' +
        'upload_mJeTV9-medium.png',
        status: 'verified'
      },
      {
        id: '9c8L2r',
        type: 'brewery',
        name: 'Spearhead Brewing Company',
        description: 'Founded in 2011 by Dimitri van Kampen, ' +
        'Spearhead Brewing Company is a family-run craft brewery' +
        'located in Toronto, Canada. At its heart is the ' +
        'partnership of Dimitri and Martin Villeneuve, a ' +
        'passion for real beer and a dedication to ' +
        'brewing Beer Without BoundariesTM. At Spearhead, ' +
        'we believe in beer\u2019s unlimited potential.' +
        ' We don\u2019t adhere to the limitations set by' +
        ' traditional style definitions. We use ' +
        'unusual ingredients and brewing methods ' +
        'to make all-natural craft beer in small ' +
        'batches that is so distinctive and ' +
        'delicious we hope it cannot be ' +
        'judged by ordinary standards.',
        website: 'http:\/\/spearheadbeer.com\/',
        established: '2011',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/brewery\/9c8L2r\/' +
        'upload_7H2SbJ-medium.png',
        status: 'verified'
      },
      {
        id: 'zGtpGp',
        type: 'brewery',
        name: 'Bottle Rocket',
        description: 'Seward, NE',
        website: 'https:\/\/bottlerocketbrewing.com\/brb\/Home.aspx',
        established: '2015',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/brewery\/zGtpGp\/' +
        'upload_To4lQK-medium.png',
        status: 'verified'
      },
      {
        id: 'fFjFnU',
        type: 'brewery',
        name: 'Railroad City Brewing Company',
        description: 'We are an artisan nanobrewery offering' +
        ' a selection of fine ales, each handcrafted in a ' +
        'small batch. Our products will rotate pretty ' +
        'heavily, but we will always have at least 3-4' +
        ' beers available, and something for most ' +
        'tastes.\r\n\r\nUpon our opening we will be ' +
        'only the second brewery in Blair County and ' +
        'the FIRST brewery in the City of Altoona ' +
        'since the 1970s.\r\n\r\nOur beers will be ' +
        'available at finer establishments in the ' +
        'area and directly from our tasting room' +
        ' where you can sample beers, and purchase ' +
        'growler fills and merchandise. We' +
        ' will begin offering some bottled ' +
        'products in the fall of 2013.',
        website: 'http:\/\/www.railroadcitybrewing.com',
        established: '2013',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/brewery\/fFjFnU\/' +
        'upload_LSjj8G-medium.png',
        status: 'verified'
      },
      {
        id: 'jmV3iD',
        type: 'brewery',
        name: 'White Squirrel Brewery',
        description: 'The White Squirrel Brewery and Taproom' +
        'will be opening in Bowling Green, Kentucky in 2015.',
        website: 'http:\/\/www.whitesquirrelbrewery.com\/',
        established: '2015',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/brewery\/jmV3iD\/' +
        'upload_GkVBpm-medium.png',
        status: 'verified'
      },
      {
        id: 'ERW6Da',
        type: 'brewery',
        name: 'Bluegrass Brewing Company',
        description: 'The original Bluegrass Brewing Company' +
        'opened in 1993 at this location, 3929 Shelbyville ' +
        'Road, near Westport Rd., & Chenoweth, & Breckenridge Lanes. ' +
        'It is the city\u2019s oldest remaining brewpub ' +
        'and was the first to make a significant mark ' +
        'on the national brewpub and microbrewery ' +
        'scene. Louisville\u2019s best beer is' +
        ' made at this location, and large glass' +
        ' windows in the back dining room allow ' +
        'you to witness the brewing operation. ' +
        'The headbrewer is Jerry Gnagy, ' +
        'assisted by Sam Cruz and Cody Mingus.',
        website: 'http:\/\/www.bbcbrew.com\/',
        established: '1993',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/brewery\/ERW6Da\/' +
        'upload_4a6gIP-medium.png',
        status: 'verified'
      },
      {
        id: 'v8SqHO',
        type: 'brewery',
        name: 'Kensington Brewing Company',
        description: 'The Kensington Brewing Company is a ' +
        'small, independently owned and operated craft ' +
        'beer company located in the heart of ' +
        'Kensington Market, Toronto.',
        website: 'http:\/\/www.kensingtonbrewingcompany.com',
        established: '2011',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/brewery\/v8SqHO\/' +
        'upload_Omi2eK-medium.png',
        status: 'verified'
      },
      {
        id: 'adwcVE',
        type: 'brewery',
        name: 'Brauerei Luzern',
        description: 'We brew on a modern, fully automated ' +
        'system. The brewing equipment is it designed to ' +
        'produce the highest quality wort with low ' +
        'energy consumption. On a tour of the ' +
        'brewery we can give you insight into ' +
        'the working processes of our brewery.',
        website: 'http:\/\/brauerei.lu',
        established: '2009',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/brewery\/adwcVE\/' +
        'upload_DsAR7u-medium.png',
        status: 'verified'
      },
      {
        id: 'ygPEjC',
        type: 'brewery',
        name: 'Fourpure Brewing Co.',
        description: 'Fourpure is a London based' +
        'family brewery founded in 2013. Beer ' +
        'is our passion and our travels are what ' +
        'inspire us to brew. Our approach to ' +
        'exceptional brewing is all ' +
        'about attention to detail, ' +
        'not cutting corners and innovating ' +
        'yet staying true to the principles ' +
        'of brewing \u2013 respecting ' +
        'the four core ingredients used ' +
        'to make beer: grain, yeast, hops ' +
        'and water. This was the ' +
        'inspiration for the name Fourpure.',
        website: 'http:\/\/www.fourpure.com\/',
        label: 'https:\/\/s3.amazonaws.com\/brewerydbapi\/' +
        'brewery\/ygPEjC\/' +
        'upload_33m5AI-medium.png',
        status: 'verified'
      },
      {
        id: 'CpYuuR',
        type: 'brewery',
        name: 'Silver Peak Brewery And Restaurant',
        description: 'The Silver Peak Restaurant and Brewery was' +
        'born from a friendship and a dream. We came ' +
        'up with the concept in the late 80?s, about ' +
        'seven years after we met.\r\nWe\u2019d ' +
        'been talking about opening a business together ' +
        'for years. We eventually narrowed the field down ' +
        'to the idea of an upscale, modern-version of the ' +
        'classic brewpub. Then in 1991 the idea ' +
        'became a goal. That goal was to create a ' +
        'unique place in Reno; a restaurant and ' +
        'brewery where the service was as ' +
        'good as the food and the beer was ' +
        'worth coming back for; a place where ' +
        'locals could meet friends after work, ' +
        'or treat their dates and clients ' +
        'to original and delicious dishes.',
        website: 'http:\/\/silverpeakbrewery.com\/',
        established: '1991',
        label: 'https:\/\/s3.amazonaws.com\/' +
        'brewerydbapi\/brewery\/CpYuuR\/' +
        'upload_iyWdfq-medium.png',
        status: 'verified'
      }
    ];

    // the list of indexes you can pick in random beer )
    var beerIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    /* set random beer, pass beers in
     * to a new array, all array to
     * contain 10 beers
     */
    var j = 0;
    while (beerIndex.length > 0) {
      var i = Math.floor(beerIndex.length * Math.random());
      if (i >= beerIndex.length) {
        i--;
      }
      var val = beerIndex.splice(i, 1);
      $scope.beers[j]._order = val[0];
      j++;
    }
    /* set radio button to be beer by default */
    $scope.content = 'beer';

    /* set default sort to name */
    $scope.sortFlag = 'name';

    /* allow sorting */
    $scope.sorting = function(flag) {
      $scope.sortFlag = flag;
    };

    /* clear the search */
    $scope.search = '';

    $scope.clearSearch = function() {
      $scope.search = '';
    };

    /* search by name */
    $scope.search = {
      name: ''
    };
  });

  /* create a filter to remove duplicates
  from ng-repeat. Used to remove duplicate
  beer genres
   */
  app.filter('unique', function() {
    return function(collection, keyname) {
      var output = [];
      var keys = [];

      angular.forEach(collection, function(item) {
        var key = item[keyname];
        if (keys.indexOf(key) === -1) {
          keys.push(key);
          output.push(item);
        }
      });
      return output;
    };
  });
})();
