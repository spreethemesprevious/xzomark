(function($) {
  "use strict";

  $(window).on("load", function() {
    $(".loader").addClass("completein", 300);
    setTimeout(function() {
      $(".preloader").addClass("complete");
    }, 10);
  });

  jQuery(document).ready(function($) {
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Contact form ajax
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    var contactSubmit = $("#contact-submit");
    contactSubmit.on("click", function(e) {
      e.preventDefault();
      var name = $("#form-name").val();
      var email = $("#form-email").val();
      var message = $("#form-message").val();
      var form = new Array({
        name: name,
        email: email,
        message: message
      });
      $.ajax({
        type: "POST",
        url: "contact.php",
        data: {
          action: "contact",
          form: form
        }
      }).done(function(data) {
        var conResult = $("#result");
        conResult.html(data);
        $(".contact_form")[0].reset();
      });
    });

    // Password show/hide //
    // add span
    $(".pas_show").append('<span class="ptxt">Show</span>');
    // show/ hide span
    $(document).on("click", ".pas_show .ptxt", function() {
      $(this).text($(this).text() == "Show" ? "Hide" : "Show");
      $(this)
        .prev()
        .attr("type", function(index, attr) {
          return attr == "password" ? "text" : "password";
        });
    });

    // video popup //
    $(".youtube").colorbox({
      iframe: true,
      transition: "elastic",
      innerWidth: 640,
      innerHeight: 409,
      closeButton: false,
      maxWidth: "90%"
    });

    // Tooltip      //
    $('[data-toggle="tooltip"]').tooltip();

    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                  Mega Menu
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    function checkWidth() {
      var windowsize = window.innerWidth;
      if (windowsize < 768) {
        $(".dropdown_content")
          .removeClass("collapse relative")
          .addClass("collapse relative");
      } else {
        $(".dropdown_content")
          .addClass("collapse relative")
          .removeClass("collapse relative");
      }
    }

    checkWidth();
    $(window).resize(checkWidth);

    // Custom dropdown 2
    $(".custom_select").each(function() {
      var classes = $(this).attr("class"),
        name = $(this).attr("name");
      var template = '<div class="' + classes + '">';
      template +=
        '<div class="custom_select_trigger">' +
        $(this).attr("data-value") +
        "</div>";
      template += '<ul class="custom_options">';
      $(this)
        .find("option")
        .each(function() {
          template +=
            '<li class="custom_option ' +
            $(this).attr("class") +
            '" data-value="' +
            $(this).attr("value") +
            '">' +
            $(this).html() +
            "</li>";
        });
      template += "</ul></div>";

      $(this).wrap('<div class="custom_select_wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });

    $(".custom_select_trigger").on("click", function() {
      $("html").one("click", function() {
        $(".custom_select").removeClass("opened");
      });
      $(this)
        .parents(".custom_select")
        .toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom_option").on("click", function() {
      $(this)
        .parents(".custom_select_wrapper")
        .find("#inputservice")
        .val($(this).data("value"));
      $(this)
        .parents(".custom_options")
        .find(".custom_option")
        .removeClass("selection");
      $(this).addClass("selection");
      $(this)
        .parents(".custom_select")
        .removeClass("opened");
      $(this)
        .parents(".custom_select")
        .find(".custom_select_trigger")
        .text($(this).text());
    });
  });

  jQuery(document).ready(function($) {
    // Testimonial Carousel 3
    var mySwiper = new Swiper(".testimonial_area .swiper-container", {
      direction: "horizontal",
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      //  autoplay: {
      //   delay: 1000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    // Client Carousel
    var mySwiper = new Swiper(".client_area .swiper-container", {
      direction: "horizontal",
      slidesPerView: 5,
      // slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      centeredSlides: false,
      //  autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          centeredSlides: false
        },
        992: {
          slidesPerView: 3,
          centeredSlides: false
        },
        768: {
          slidesPerView: 2,
          centeredSlides: false
        },
        480: {
          slidesPerView: 1,
          centeredSlides: false
        }
      }
    });

    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Smooth scrol
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    // $("a").on("click", function(event) {
    //   if (this.hash !== "") {
    //     var hash = this.hash;
    //     $("html, body").animate(
    //       {
    //         scrollTop: $(hash).offset().top
    //       },
    //       1000,
    //       function() {
    //         window.location.hash = hash;
    //       }
    //     );
    //   }
    // });
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Scroll to top
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    function topFunction() {
      $(".scrolltop").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 200);
        return false;
      });
    }
    topFunction();
  });

  $(window).on("scroll", function() {
    /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                      Scroll to top 
        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
      setTimeout(function() {
        $(".scrolltop").addClass("is_scroll");
      }, 200);
    } else {
      setTimeout(function() {
        $(".scrolltop").removeClass("is_scroll");
      }, 200);
    }
  });
})(jQuery);
