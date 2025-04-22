// backend/src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001; // バックエンドサーバーのポート番号

app.use(cors()); // CORSミドルウェアを使用
app.use(express.json()); // JSONリクエストボディをパース

// テスト用APIエンドポイント
app.get('/api/hello', (req: Request, res: Response) => {
res.json({ message: 'Hello from Backend!' });
});

console.log('サーバーの起動準備中...');
app.listen(port, () => {
console.log(`Backend server listening at http://localhost:${port}`);
});
