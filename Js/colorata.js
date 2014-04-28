$(document).ready(function(){
    $(".mappa").gmap3({ 
      map:{
        options:{ 
            zoom: 100,
            center: [0,0]
        }
      },
      kmllayer:{
        options:{
          url: "http://facebookexercise.altervista.org/nuovo.kml",
          opts:{
            suppressInfoWindows: true
          }
        }
      }
    });
});
