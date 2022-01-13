//ページがロードされた時に自動的に実行される関数
function start(){
  //1秒ごとに関数clockを実行
  window.setInterval( clock, 1000);
}
//時刻を表示する関数
function clock(){
  //現在の日時を取得
  var now = new Date(); //現在の日時を得る
  var hh = now.getHours(); //現在の「時」を取得
  var mm = now.getMinutes(); //現在の「分」を取得
  var ss = now.getSeconds(); //現在の「秒」を取得
  var msg = "現在時刻は、"+hh+":"+mm+":"+ss+"です。";
  
  //桁が1桁の場合、前に「0」をつける（三項演算子）
  hh = hh<10? "0"+hh:hh;
  mm = mm<10? "0"+mm:mm;
  ss = ss<10? "0"+ss:ss;
  
  //時刻を表示するpタグをDOMツリーから検索
  let result = document.getElementById("result");
  
  //現在の時刻をpタグに表示
  result.textContent = msg;
}
