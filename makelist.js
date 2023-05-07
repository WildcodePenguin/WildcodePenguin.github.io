const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // ファイルの一覧を取得
  const files = fs.readdirSync('./');
  const json = JSON.stringify(files);

  // files.jsonを書き換える
  fs.writeFileSync('files.json', json);

  // 必要なレスポンスを返す
  res.writeHead(200, { 'Content-Type': 'text/HTML' });
  res.end('<html lang="ja"><head><meta charset="utf-8"><body>OK<BR>書き込んだ内容：'+json+'</body></head></html>');
});

server.listen(8082, () => {
  console.log('http://100.95.130.24:8082 で書き換え命令を待機中...');
});
