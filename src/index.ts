const PORT = 3000;
import express from 'express';
import { json } from 'body-parser';
const app = express()
app.use(json())
app.listen(PORT, () => `server running on http://localhost:${PORT}`)