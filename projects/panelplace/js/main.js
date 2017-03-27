//earning slider script
  $(document).ready(function() {

    //slider
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
      $(".testimonial-slider").slick({
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
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 450,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
      //end slider

      // header scroll script

      var $w = $(window);

      // back to top button
      $(".backToTop").click(function(){
        $('body, html').animate({scrollTop: 0}, 500);
      });

      // display header on load when scroll greater than regform
      displayHeader($(this).scrollTop());

      // display header on scroll
      $w.scroll(function(){
        var scrollTop = $w.scrollTop();
        displayHeader(scrollTop);
      });

      // sign up button click
      $(".headerSignUpBtn").click(function(){
        var regFormY = $(".regForm").offset().top -160;
        $('body, html').animate({scrollTop: regFormY}, 500);
      });

    });


    function displayHeader(scrollObj){
      var scrollTop = scrollObj;
      var $header = $(".header");
      var $regForm = $(".regForm");
      var regFormY = $regForm.offset().top,
          regFormHeight = $regForm.height();


      var ShouldDisplayHeader = scrollTop > (regFormY + regFormHeight);
      // console.log(regFormY+":"+scrollTop);
      if(ShouldDisplayHeader === true){
        $(".header").addClass("active-show");
      }
      else{
        $(".header").removeClass("active-show");
      }

      var setHeadertoTop = scrollTop > 80;
      if(setHeadertoTop === true){
        $header.addClass("hide-header");
      }
      else{
        $header.removeClass("hide-header");
      }
