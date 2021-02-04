// Drawer Menu
(function($) {
  var $nav = $('#navArea');
  var $btn = $('.toggle_btn');
  var $mask = $('#mask');
  var open = 'open'; // class
  // menu open close
  $btn.on('click', function() {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass(open);
  });
})(jQuery);


//Drop Down
$(function() {
  var $dropdown = $('.js-dropdown');
  var DURATION = 200;

  function fadeOutMenu() {
    $dropdown.removeClass('is-active')
      .next('.js-dropdown-menu')
      .stop()
      .slideUp(DURATION);
  }

  function toggleMenu() {
    var $self = $(this);
    if (!$self.hasClass('is-active')) {
      fadeOutMenu();
    }
    $self.toggleClass('is-active')
      .next('.js-dropdown-menu')
      .stop().slideToggle(DURATION);
  }
  $dropdown.on('click', toggleMenu);
  $(document).on('click touchend', function(event) {
    if (!$(event.target).closest('body').length) {
      fadeOutMenu();
    }
  });
});


// Footer FadeOut
window.onscroll = function() {
  var check = window.pageYOffset;
  var docHeight = $(document).height();
  var dispHeight = $(window).height();
  if (check > docHeight - dispHeight - 500) {
    $('.fadeout').fadeOut(200);
  } else {
    $('.fadeout').fadeIn(500);
  }
};


// Footer Stop
$(window).on("scroll", function() {
  scrollHeight = $(document).height();
  scrollPosition = $(window).height() + $(window).scrollTop();
  footerHeight = $(".copy").innerHeight();
  if ( scrollHeight - scrollPosition  <= footerHeight ) {
    $(".sideFooter").css({
      "display":"block",
      "position":"fixed",
      "bottom": "0",
      "right":"0",
      "background":"#FFF",
      "color":"#256643",
      "width": "13.02%",
    "text-align": "center",
    "padding": "20px 0",
    "font-size": "2.8rem",
    "transition": ".5s",
    "display": "flex",
    "flex-direction": "column",
    });
  } else {
    $(".sideFooter").css({
      "position":"fixed",
      "bottom": "0px",
      "background":"#256643",
      "color":"#FFF"
    });
  }
});