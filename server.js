const express = require('express');
const app = express();
const port = 3000;

app.get('/api/message', (req, res) => {
  res.json({ message: "مرحباً بك! هذا أول تحديث أوتوماتيكي من جينكنز 🚀" });
});

app.get('/', (req, res) => {
  res.send(`
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>مشروع CI/CD</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
        h1 { color: #333; }
        #msg { color: #007bff; font-weight: bold; font-size: 20px; }
      </style>
    </head>
    <body>
      <h1>مرحباً بك في موقعي!</h1>
      <p id="msg">جاري جلب البيانات من الباك إند...</p>
      <script>
        fetch('/api/message')
          .then(response => response.json())
          .then(data => document.getElementById('msg').innerText = data.message);
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`التطبيق يعمل على البورت ${port}`);
});
