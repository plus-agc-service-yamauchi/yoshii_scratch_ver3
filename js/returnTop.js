$(function () {
    var topBtn = $('#topBtn'); // ボタンを指定
    topBtn.hide(); //最初は隠しておく。CSSで隠してもオッケー

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) { // 100px以上スクロールしたら出てくる
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }

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
        "bottom": "0"
      });
      }

    });
  });
