//earning slider script
  $(document).ready(function() {
      $(".earning-slider").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '25px',
              arrows: true,
              nextArrow: "<span class='white-right'></span>",
              prevArrow: "<span class='white-left'></span>"
            }
          }
        ]
      });

      $(".companies").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        centerMode: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 1
            },
            breakpoint: 450,
            settings:{
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    });
