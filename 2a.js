// 1、引入 http 模組 (Node.js 內建，用於建立 web 伺服器)
const http = require('http');

// 2、建立一個 HTTP 伺服器
// createServer() 接收一個回呼函式，當每次有客戶端發出請求時都會執行這個函式
const server = http.createServer(function (request, response) {
  const url = request.url;  // 取得使用者請求的網址路徑
  console.log(url);         // 在伺服器端輸出目前請求的 URL
  var answer = '';          // 定義回應內容的變數

  // 根據不同的 URL 使用 switch 判斷要回傳的內容
  switch (url) {
    case '/': // 若訪問根目錄
      answer = 'index.html輸出部分';
      break;
    case '/calculator': // 若訪問 /calculator
      answer = 'index2.html輸出部分';
      break;
    default: // 其他未定義路徑時
      answer = 'error.html輸出部分';
      break;
  }

  // 設定回應標頭，表示回傳內容為純文字格式，並使用 UTF-8 編碼避免亂碼
  response.setHeader('Content-Type', 'text/plain;charset=utf-8');

  // 回傳內容 (將上方設定的 answer 輸出給瀏覽器)
  response.end(answer);
});

// 3、設定伺服器監聽在本機 port 9999
// 啟動後可在瀏覽器輸入 http://127.0.0.1:9999 進行訪問
server.listen(9999, function () {
  console.log("伺服器啟動成功，訪問：http://127.0.0.1:9999");
});
