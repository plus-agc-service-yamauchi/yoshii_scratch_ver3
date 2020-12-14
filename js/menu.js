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
$(function () {
  var topBtn = $('.logo'); // ボタンを指定

  $(window).on("scroll", function () {

    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight(); // ここでフッターの高さを取得
    if ( scrollHeight - scrollPosition  <= footHeight ) { // フッター付近まで来たら
      topBtn.css({
        "position":"absolute",
        "bottom": footHeight + 0 // フッターの65px上で止まる
      });
    } else { // それ以外は画面下から20pxの位置に固定
      topBtn.css({
        "position":"fixed",
        "width":"30%",
      "display":"flex",
      "top": "50%",
      "justify-content":"center",
    });
    }

  });
});