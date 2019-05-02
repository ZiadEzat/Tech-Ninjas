
$(document).ready(function(){
    $('.slideshow').slick({
        adaptiveHeight: true,
        arrows: true,
        
    });

    $('.galleryslide').slick({
    adaptiveHeight:true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }

            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            
        ]
    });

   
  });

  var map;
  function initMap() {       
     map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 29.957375, lng: 31.094112},  
         zoom: 15
         });
         var marker = new google.maps.Marker({
            position: {lat: 29.957, lng: 31.094},
            map: map
          });
          marker.setMap(map);
       }


 