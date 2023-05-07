const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // リクエストパラメータを取得する
  const urlParams = new URLSearchParams(req.url.slice(req.url.indexOf('?') + 1));
  const arg1 = urlParams.get('arg1');
  const arg2 = urlParams.get('arg2');

  // book.jsonに書き込む
  const data = { [arg1]: arg2 };
  fs.writeFileSync('book.json', JSON.stringify(data));

  // 必要なレスポンスを返す
  res.writeHead(200, { 'Content-Type': 'text/HTML' });
  res.end(`<html lang="ja"><head><meta charset="utf-8"><body>OK<BR>書き込んだ内容：${JSON.stringify(data)}</body></head></html>`);
});

server.listen(8083, () => {
  console.log('http://100.95.130.24:8083 で書き換え命令を待機中...');
});
