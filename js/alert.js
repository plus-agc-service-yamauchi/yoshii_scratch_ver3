  /* IE判定関数を定義しておく */
  function isIE() {
    let userAgent = window.navigator.userAgent.toLowerCase();
    if ( userAgent.indexOf( 'msie' ) !== -1 || userAgent.indexOf( 'trident' ) !== -1 ) {
        return true;
    }
    return false;
  }

  /* DOM構造読み込み完了後にアラート表示のHTMLを挿入 */
  document.addEventListener("DOMContentLoaded", function () {
    if ( isIE() ) {
      let footer = document.getElementById('footer');  //アラート表示を挿入する場所
      let ieDiv = document.createElement('div');      //div要素の生成
      ieDiv.classList.add('ie_alert');                //クラス名付与

      ieDiv.innerHTML = `<span>Internet Explorer、ダメ絶対！</span>
      <p>あなたが使用している <b>Internet Explorer</b> というブラウザはとても古いものです。
      <br>言ってしまえば、百害あって一利なしの老害です。<br>
      世界中で、多くのWEB制作者があなたの <b>Internet Explorer</b> のせいで苦悩しています。<br><br>
      どうか、<b>最新のモダンブラウザ（EdgeやFirefox、Google Chrome）</b>をお使いください。</p>
      <a href="https://www.google.co.jp/chrome/index.html">Google Chromeをダウンロード</a>`;

      footer.appendChild( ieDiv );    //HTMLの追加
    }
  });
