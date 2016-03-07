var opts = {
    lines: 10, // The number of lines to draw
    length: 7, // The length of each line
    width: 4, // The line thickness
    radius: 10, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    color: '#ffffff', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 25, // Top position relative to parent in px
    left: 25 // Left position relative to parent in px
};

var target = document.getElementById('foo');
var spinner = new Spinner(opts).spin(target);

jQuery(document).ready(function($) {
  $(".search").focus(function(){
     $(this).parent().parent().addClass("border");
  });

  $(".search").focusout(function(){
     $(this).parent().parent().removeClass("border");
  });

  $('.search').keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault();
    }
  });
});

Vue.transition('weather', {
  enterClass: 'flipInX',
});

Vue.transition('statistic', {
  enterClass: 'bounceInUp',
});

new Vue({
  el: '#app',
  data: {
    lng: null,
    lat: null,

    ready: false,

    location: {
      continent: 'Continent',
      state: 'State',
      region: 'Region',
      city: 'City',
    },

    time: null,

    date: {
      weekday: 'Monday',
      month: 'Jan',
      day: '1',
      time: '13:37',
      sunset: null,
      sunrise: null,
    },

    text: {
      pre: '',
      color: '',
      post: '',
    },

    weather: {
      current: 0,
      min: 1,
      max: 4,
      clouds: 0,
      thunderstorm: false,
      drizzle: false,
      rain: false,
      heavy_rain: false,
      snow: false,
      id: -1,
      img: 'sonne',

    }

  },

  methods: {
    getText: function () {
      var temp = this.weather.current;

      this.printData();

      var rain = this.weather.rain;
      var clouds = this.weather.clouds;

      var ret = {
        pre: '',
        color: '',
        post: '',
      }

      if(!rain){
        switch (true) {
          case temp <= 0:
            var rand = Math.floor((Math.random() * 4) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Damn its so fucking ";
                ret.color = "cold.";
                break;
              case rand == 2:
                ret.pre = "Winter is ";
                ret.color = "coming.";
                break;
              case rand == 3:
                ret.pre = "Freezing ";
                ret.color = "cold  ";
                ret.post = "like a fucking fridge.";
                break;
              case rand == 4:
                ret.pre = "Fucking ";
                ret.color = "ice age. ";
                ret.post = "";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;
          case temp > 0 && temp < 10:
            var rand = Math.floor((Math.random() * 4) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Colder than a ";
                ret.color = "penguins ";
                ret.post = "chuff";
                break;
              case rand == 2:
                ret.pre = "Meeehh. . . Just stay in ";
                ret.color = "bed.";
                ret.post = "";
                break;
              case rand == 3:
                ret.pre = "Global";
                ret.color = " warming ";
                ret.post = "my ass.";
                break;
              case rand == 4:
                ret.pre = "Go home ";
                ret.color = "winter.";
                ret.post = "";
                break;
              default:
                ret.pre ="Error";
                ret.post = "";
                break;
            }

            break;
          case temp >= 10 && temp < 15:
            var rand = Math.floor((Math.random() * 4) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Stil damn ";
                ret.color = "cold ";
                ret.post = "outside.";
                break;
              case rand == 2:
                ret.pre = "I'd go in ";
                ret.color = "shortys ";
                ret.post = "already. ";
                break;
              case rand == 3:
                ret.pre = "To warm for snow, to cold for fucking ";
                ret.color = "anything else.";
                break;
              case rand == 4:
                ret.pre = "Do not go out with your ";
                ret.color = "converse. ";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;
          case temp >= 15 && temp < 20:
            var rand = Math.floor((Math.random() * 5) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Hm, not that cold ";
                ret.color = "anymore. ";
                break;
              case rand == 2:
                ret.pre = "No, its too damn cold for  ";
                ret.color = "swimming. ";
                break;
              case rand == 3:
                ret.pre = "You're still able to just stay ";
                ret.color = "at home.";
                break;
              case rand == 4:
                ret.pre = "I'd take your ";
                ret.color = "converse. ";
                break;
              case rand == 5:
                ret.pre = "Fucking organ donor are back on street";
                ret.color = "again. ";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;
          case temp >= 20 && temp < 28:
            var rand = Math.floor((Math.random() * 5) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Maybe ";
                ret.color = " global warming ";
                ret.post = " turns out to be true.";
                break;
              case rand == 2:
                ret.pre = "You could go to school ";
                ret.color = "half naked. ";
                break;
              case rand == 3:
                ret.pre = "Maybe ";
                ret.color = " global warming ";
                ret.post = " turns out to be true.";
                break;
              case rand == 4:
                ret.pre = "Love is in the ";
                ret.color = "air. ";
                break;
              case rand == 5:
                ret.pre = "Girls start wearing less. Get the ";
                ret.color = "fuck out. ";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;
          case temp >= 28:
            // ITS LIKE A FUCKING OVEN
            // ITS TOO DAMN HOT
            // LIEK A FUCKING SWEATBOX
            var rand = Math.floor((Math.random() * 5) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Its like a fucking ";
                ret.color = "oven ";
                break;
              case rand == 2:
                ret.pre = "Its too damn ";
                ret.color = "hot. ";
                break;
              case rand == 3:
                ret.pre = "Like a fucking ";
                ret.color = "sweatbox.";
                break;
              case rand == 4:
                ret.pre = "Too hot to go ";
                ret.color = "outside. ";
                break;
              case rand == 5:
                ret.pre = "Its like a fucking ";
                ret.color = "oven.";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;
          default:
            ret.pre =  "Not supposed to happen";
        }
      }

      //Wind TO DO

      // Rain more to come
      if(rain){

        var rand = Math.floor((Math.random() * 4) + 1);

        switch (true) {
          case rand == 1:
            ret.pre = "Get your fucking ";
            ret.color = "umbrella.";
            break;
          case rand == 2:
            ret.pre = "Its fucking ";
            ret.color = "raining ";
            ret.post = "outside.";
            break;
          case rand == 3:
            ret.pre = "Meeehh... Just stay in ";
            ret.color = "bed.";
            break;
          case rand == 4:
            ret.pre = "Meeh... Just stay in ";
            ret.color = "bed.";
            break;
          default:
            ret.pre ="";
            ret.color ="";
            break;
        }


      }

      this.text.pre = ret.pre;
      this.text.color = ret.color;
      this.text.post = ret.post;

    },

    getLatLng: function () {

      navigator.geolocation.getCurrentPosition(
        function(position){
          this.ready = false;
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          this.getLocation();
          this.getTime();
          this.getTemp();
        }.bind(this),
        function(){
          // wenn Positionsbestimmung einen Fehler erzeugt hat (z.B. weil Sie vom User ablehnt wurde).
          alert('Die Position konnte nicht ermittelt werden, bitte überprüfen Sie Ihre Brwosereinstellungen!');
        }
      );

    },

    getLocation: function () {
      $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.lat + ',' + this.lng, function(results) {
        var arrAddress = results.results[0].address_components;
        var itemRegion='';
        var itemLocality='';
        var itemCountry='';


        // iterate through address_component array
        $.each(arrAddress, function (i, address_component) {
            if (address_component.types[0] == "locality"){
                itemLocality = address_component.long_name;
            }

            if (address_component.types[0] == "country"){
                itemCountry = address_component.long_name;
            }

            if (address_component.types[0] == "administrative_area_level_1"){
                itemRegion = address_component.long_name;
            }
        });

        this.location.city = itemLocality;
        this.location.region = itemRegion;
        this.location.state = itemCountry;

        if(!itemLocality){
          this.location.city = itemRegion;
        }


			}.bind(this));
    },

    getTime: function () {

      var ArrayTage = new Array("Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag");
      var ArrayMonate = new Array("JAN","FEB","MAR","APR","MAI","JUN","JUL", "AUG", "SEP", "OKT", "NOV", "DEZ");

      $.getJSON('http://api.geonames.org/timezoneJSON?lat=' + this.lat + '1&lng=' + this.lng + '&username=autjojo', function(results) {
        var str = results.time;
        var split1 = str.split(" ");
        var split2 = split1[0].split('-');

        var monat = split2[1].replace(/^(0+)/g, '') -1;
        var tag = split2[2].replace(/^(0+)/g, '');

        var date = new Date();
        date.setDate(tag);

        var wochentag = date.getDay();

        var sunsetUS = results.sunset.split(' ');
        var sunriseUS = results.sunrise.split(' ');
        var sunset = sunsetUS[1];
        var sunrise = sunriseUS[1];

        this.date.time = split1[1];
        this.date.month = ArrayMonate[monat];
        this.date.day = tag;
        this.date.weekday = ArrayTage[wochentag];

        this.date.sunset = sunset;
        this.date.sunrise = sunrise;

      }.bind(this));
    },

    getTemp: function () {
      $.ajax({
        type: "GET",
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&lon=' + this.lng + '&mode=xml&APPID=a70390a56e504a6e42fbec688616f573',
        dataType: "xml",
        success: function(xml) {
          this.weather.current = Math.round($(xml).find('temperature').attr('value')-273,15);
          this.weather.min = Math.round($(xml).find('temperature').attr('min')-273,15);
          this.weather.max = Math.round($(xml).find('temperature').attr('max')-273,15);

          this.weather.clouds = $(xml).find('clouds').attr('value');
          var id = $(xml).find('weather').attr('number');
          this.weather.id = id;
          this.weather.img = "";

          this.reset();

          if(id >= 200 && id <= 300){
            this.weather.thunderstorm = true;
            this.weather.img = "light_thunderstorm";

            if(id > 212){
              this.weather.img = "heavy_thunderstorm";
            }
          }

          if(id >= 300 && id <= 400){
            this.weather.drizzle = true;
            this.weather.img = "light_drizzle";

            if(id >= 312){
              this.weather.img = "heavy_drizzle";
            }
          }

          if(id >= 500 && id <= 600){
            this.weather.rain = true;
            this.weather.img = "rain";

            if(id >= 302){
              this.weather.heavy_rain = true;
              this.weather.img = "heavy_rain";
            }
          }

          if(id >= 600 && id <= 700){
            this.weather.snow = true;
            this.weather.img = "snow";
          }

          if(id >= 800 && id <= 804){
            this.weather.img = "few_clouds";
            if(id >= 803){
              this.weather.img = "clouds";
              if(id == 804){
                this.weather.img = "many_clouds";
              }
            }
          }

          if(id == 800){
            this.weather.img = "sun";
          }

          if(id == -1){
            this.weather.img = "sun";
          }

          this.getText();

          this.ready = true;

          this.printData();

        }.bind(this)
      });
    },


    printData: function (){
      console.log("Current Temp: " + this.weather.current);
      console.log("Min Temp: " + this.weather.min);
      console.log("Max Temp: " + this.weather.max);
      console.log("ID: " + this.weather.id);
      console.log("Regen: " + this.weather.rain);
      console.log("Snow: " + this.weather.snow);
      console.log("Thunderstorm: " + this.weather.thunderstorm);
      console.log("Wolken: " + this.weather.clouds);
      console.log("Bild: " + this.weather.img);


      console.log("// - - - - - - - - - - - - - - - //");
      console.log("Weekday: " + this.date.weekday);
      console.log("Month: " + this.date.month);
      console.log("Time: " + this.date.time);
      console.log("Sonnenaufgang: " + this.date.sunrise);
      console.log("Sonnenuntergang: " + this.date.sunset);
    },

    searchLocation: function (){
      var searchInput = $(".search").val();

      this.ready = false;

      $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + searchInput, function(results) {
        this.lat = results.results[0].geometry.location.lat;
        this.lng = results.results[0].geometry.location.lng;

        this.getLocation();
        this.getTime();
        this.getTemp();
			}.bind(this));
    },

    reset: function () {
      this.weather.clouds = 0;
      this.weather.thunderstorm = false;
      this.weather.drizzle = false;
      this.weather.rain = false;
      this.weather.heavy_rain = false;
      this.weather.snow = false;
      this.weather.id = -1;
      this.weather.img = '';
    },
  },

	ready: function (){
    var spinner = new Spinner(opts).spin(target);
    this.getLatLng();

	},

})


