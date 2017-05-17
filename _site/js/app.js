var myApp = angular.module("myApp", [])

myApp.config( function( ) {
    'use strict';
  })

myApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])


myApp.controller("MovieController", function($scope, $http,$window) {
    var movieArray = [
      "Pulp Fiction",
      "Fight Club",
      "The Shawshank Redemption",
      "The Dark Knight",
      "Inglourious Basterds",
      "Inception",
      "The Matrix",
      "The Empire Strikes Back",
      "The Lord of the Rings: The Fellowship of the Ring",
      "Toy Story",
      "The Big Lebowski",
      "Django Unchained",
      "The Lord of the Rings: The Return of the King",
      "The Departed",
      "Memento",
      "The Godfather",
      "Reservoir Dogs",
      "Saving Private Ryan",
      "Forrest Gump",
      "Monty Python and the Holy Grail",
      "Seen",
      "Back to the Future",
      "GoodFellas",
      "The Prestige",
      "Shaun of the Dead",
      "Alien",
      "The Silence of the Lambs",
      "The Lord of the Rings: The Two Towers",
      "Spirited Away",
      "The Good, the Bad and the Ugly",
      "Eternal Sunshine of the Spotless Mind",
      "Raiders of the Lost Ark",
      "A Space Odyssey",
      "Dr. Strangelove",
      "Blade Runner",
      "The Lion King",
      "One Flew Over the Cuckoo's Nest",
      "There Will Be Blood",
      "The Shining",
      "The Truman Show",
      "A Clockwork Orange",
      "Star Wars",
      "District 9",
      "Up",
      "Office Space",
      "12 Angry Men",
      "Pan's Labyrinth",
      "The Usual Suspects",
      "Jurassic Park",
      "V for Vendetta",
      "The Princess Bride",
      "No Country for Old Men",
      "Full Metal Jacket",
      "Schindler's List",
      "Good Will Hunting",
      "Children of Men",
      "Kill Bill: Vol. 1",
      "WALL·E",
      "American History X",
      "Die Hard",
      "Drive",
      "Moon",
      "Groundhog Day",
      "Batman Begins",
      "Fargo",
      "The Incredibles",
      "O Brother, Where Art Thou",
      "Gladiator",
      "Airplane",
      "Apocalypse Now",
      "American Beauty",
      "Terminator 2: Judgment Day",
      "Léon",
      "Toy Story 3",
      "Snatch",
      "American Psycho",
      "The Social Network",
      "Oldboy",
      "Ferris Bueller's Day Off",
      "Princess Mononoke",
      "In Bruges",
      "Donnie Darko",
      "Casablanca",
      "City of God",
      "Psycho",
      "The Fifth Element",
      "Seven Samurai",
      "Taxi Driver",
      "Monsters, Inc.",
      "28 Days Later",
      "Requiem for a Dream",
      "The Godfather: Part II",
      "Hot Fuzz",
      "Trainspotting",
      "Amélie",
      "Twelve Monkeys",
      "Aliens",
      "The Dark Knight Rises",
      "Kiss Kiss Bang Bang",
      "Lost in Translation",
      "Chinatown",
      "The Royal Tennenbaums",
      "Rear Window",
      "Jaws",
      "Ocean's Eleven",
      "Howl's Moving Castle",
      "The Green Mile",
      "Black Swan",
      "Citizen Kane",
      "Moonrise Kingdom",
      "Looper",
      "The Thing",
      "The Breakfast Club",
      "The Cabin in the Woods",
      "L.A. Confidential",
      "Scott Pilgrim vs. the World",
      "Finding Nemo",
      "Boogie Nights",
      "Superbad",
      "Sin City",
      "Fear and Loathing in Las Vegas",
      "Indiana Jones and the Last Crusade",
      "Gattaca",
      "To Kill a Mockingbird",
      "Lawrence of Arabia",
      "Being John Malkovich",
      "The Pianist",
      "Annie Hall",
      "Anchorman: The Legend of Ron Burgundy",
      "Argo",
      "Raging Bull",
      "Vertigo",
      "Little Miss Sunshine",
      "The Avengers",
      "Butch Cassidy and the Sundance Kid",
      "Dazed and Confused",
      "500 Days of Summer",
      "Willy Wonka & the Chocolate Factory",
      "Unforgiven",
      "Fantastic Mr. Fox",
      "Brazil",
      "The Iron Giant",
      "Akira",
      "The Terminator",
      "Ghost Busters",
      "This Is Spinal Tap",
      "Gran Torino",
      "Adaptation.",
      "A Fistful of Dollars",
      "Stand by Me",
      "Apollo 13",
      "Blazing Saddles",
      "Amadeus",
      "Kick-Ass",
      "Rushmore",
      "Life of Brian",
      "Almost Famous",
      "Network",
      "Mulholland Drive",
      "Star Trek",
      "It's a Wonderful Life",
      "Singin' in the Rain",
      "The Graduate",
      "Cool Hand Luke",
      "The Nightmare Before Christmas",
      "Metropolis",
      "Casino Royale",
      "Zodiac",
      "Crouching Tiger, Hidden Dragon",
      "E.T.",
      "The Blues Brothers",
      "Hotel Rwanda",
      "Zoolander",
      "Heat",
      "The Seventh Seal",
      "Kill Bill: Vol. 2",
      "Synecdoche, New York",
      "Stranger Than Fiction",
      "Double Indemnity",
      "On the Waterfront",
      "Predator",
      "Lucky Number Slevin",
      "Catch Me If You Can",
      "Dredd",
      "Battle Royale",
      "RoboCop",
      "How to Train Your Dragon",
      "Dog Day Afternoon",
      "Planet of the Apes",
      "Nausicaä of the Valley of the Wind",
      "Master and Commander: The Far Side of the World",
      "Paths of Glory",
      "Brokeback Mountain",
      "The Hobbit: An Unexpected Journey",
      "The Wizard of Oz",
      "Close Encounters of the Third Kind",
      "The Wrestler",
      "The Jerk",
      "Slumdog Millionaire",
      "Silver Linings Playbook",
      "Glengarry Glen Ross",
      "Sunset Boulevard",
      "Return of the Jedi",
      "Ran",
      "Collateral",
      "Let the Right One In",
      "The Sting",
      "Tucker and Dale Vs. Evil",
      "Some Like It Hot",
      "Shutter Island",
      "The Maltese Falcon",
      "The Treasure of the Sierra Madre",
      "Sunshine",
      "Punch-Drunk Love",
      "Magnolia",
      "Thank You for Smoking",
      "Ghost in the Shell",
      "Barry Lyndon",
      "Ikiru",
      "The Hurt Locker",
      "Dawn of the Dead"
    ];
    
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      
      return array;
    }
    
    $scope.movieArray = shuffle(movieArray);
    $scope.randomMovie = $scope.movieArray;

    var movieCounter = 0;
    $scope.updateRandomMovie = function(movie){
      $scope.search = movieArray[movieCounter++ % movieArray.length];
    };

    $scope.hero = 'last';
    
    // set the input value, as the input is
    // initially set, set loading to false
    $scope.loading = false;
    $scope.search = "";
    
    // set the checkboxes to be checked
    $scope.movieOptions = {
      poster: true,
      info: true,
      related: true,
      rating: true,
      cast: true,
      awards: true,
      extras: true
    };

    $scope.$watch("search", function(movie) {
      fetch();
      $scope.hero = movie.Title;
    });
    
    // click on related item, pass to input
    $scope.updateSelectedItem = function(movie) {
      $scope.search = movie.Title;
    };
    
    $scope.loading = function() {
      $scope.loading = true;
    };
    
    $scope.notLoading = function() {
      $scope.loading = false;
    };
    
    function fetch() {
      $http
        .get("https://www.omdbapi.com/?t=" + $scope.search + "&plot=full")
        .then(function(response) {
          $scope.details = response.data;
        });
      
      $http
        .get("https://www.omdbapi.com/?s=" + $scope.search)
        .then(function(response) {
          var theSrchResults = response.data["Search"];
          angular.forEach(theSrchResults, function(obj) {
            // loop through each movie, and pull the details using the IMDB ID
            $http
              .get(
                "https://www.omdbapi.com/?i=" +
                obj.imdbID +
                "&plot=full&r=json&tomatoes=true"
              )
              .then(function(response) {
                // extend the details to the parent
                obj.details = response.data;
              });
          });
          $scope.movieResults = theSrchResults;
        });
      
      $http
        .get ("https://www.omdbapi.com/?s=" + $scope.hero + "&type=movie")
        
        .then(function(response) {
          var theSrchResults = response.data["Search"];
          angular.forEach(theSrchResults, function(obj) {
            // loop through each movie, and pull the details using the IMDB ID
            $http
              .get(
                "https://www.omdbapi.com/?i=" + obj.imdbID + "&plot=full&r=json"
              )
              .then(function(response) {
                // extend the details to the parent
                obj.details = response.data;
              });
          });
          $scope.heroResults = theSrchResults;
          console.log($scope.heroResults);
        });
    }
    
    // click on related item, pass to input //
    $scope.update = function(movie) {
      $scope.search = movie.Title;
    };
    
    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    };


  })

myApp.directive('hideBroken', function() {
    return {
      restrict: 'A',
      multiElement: true,
      link: function(scope, element, attrs) {
        attrs.$observe('ngSrc', function (value) {
          // fix where ngSrc doesn't update when blank
          if (!value || value.length == 0) {
            element.attr('src', value);
          }
          element.css("display", "none");
        });
        element.bind('load', function() {
          element.css("display", "");
        });
      }
    };
  })