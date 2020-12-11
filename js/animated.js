$(window).on('load scroll', function(){

    //animatedのclassを持った要素をセレクタに指定
    var elem = $('.animate__animated');

    elem.each(function () {

      //data属性からアニメーション名を取得
      var isAnimate = $(this).data('animate');
      //animated要素に位置を取得
      var elemOffset = $(this).offset().top;
      //現在のスクロールポジションを取得
      var scrollPos = $(window).scrollTop();
      //ウィンドウの高さを取得
      var wh = $(window).height();

      //animated要素がウィンドウ内の中央位置にきたら処理
      if(scrollPos > elemOffset - wh + (wh / 2)){
        $(this).addClass(isAnimate);
      }
    });

  });