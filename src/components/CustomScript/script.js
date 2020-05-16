(function iamStrict() {
  "use strict";

  $(document).ready(function () {

    /* Scroll to Top Button Start */
    // https://codepen.io/karencho/pen/KIgur
    var topBottomButton = $(".top_bottom_button");

    $(window).scroll(function () {

      var topPosition = $(this).scrollTop(); // scrollTop is a jquery function

      if (topPosition > 100) {
        $(topBottomButton).css({
          "opacity": "1",
        })

      } else {
        $(topBottomButton).css({
          "opacity": "0",
        })
      }
    });

    $(topBottomButton).on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;

    });
    /* Scroll to Top Button End */


    // Navigation Background Change on Scrolling
    $(window).scroll(function () {
      $('.header_menu').toggleClass('scrolled', $(this).scrollTop() > 800
      );
    });


    /* Bootstrap Video Modal Start */

    var $videoSrc;
    $('.video_play_button').click(function () {
      $videoSrc = $(this).data("src");
    });

    console.log($videoSrc);

    $('#myVideoModal').on('shown.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#myVideoModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc);
    })

    /* Bootstrap Video Modal Start */

  });

})();