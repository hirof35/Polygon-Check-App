const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// index.html があるディレクトリを静的ファイルとして公開
app.use(express.static(__dirname));

app.get('/', (url, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`サーバーが起動しました: http://localhost:${PORT}`);
});