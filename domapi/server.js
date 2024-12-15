const http = require('node:http');

// Helper function to generate HTML content dynamically
function generateHTML(title, bodyContent) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body>
  ${bodyContent}
</body>
</html>`;
}

// Port 설정
const PORT = 3050;

// 서버 생성
const server = http.createServer((req, res) => {
  // GET 요청 처리
  if (req.method === 'GET') {
    if (req.url === '/') {
      const bodyContent = `
        <div id="root">
          <form action="/form" method="post">
            <input type="submit" value="move">
          </form>
          <a href="/a">move to a link</a>
        </div>`;
      const html = generateHTML('Home', bodyContent);
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.end(html);
    } else if (req.url === '/a') {
      const bodyContent = '<p>링크 눌러서 이동</p>';
      const html = generateHTML('aTag', bodyContent);
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.end(html);
    }
  }

  // POST 요청 처리
  if (req.method === 'POST') {
    if (req.url === '/form') {
      const bodyContent = '<p>move 버튼 눌러서 이동</p>';
      const html = generateHTML('formTag', bodyContent);
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
      res.end(html);
    }
  }
});

// 서버 리스닝 시작
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
