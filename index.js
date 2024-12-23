import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

import setupMiddlewares from './middleware/setup.middleware.js';
import routerMiddlewares from './middleware/router.middleware.js';

setupMiddlewares(app);
routerMiddlewares(app);

const port = process.env.PORT || 3000;

app.use((req, res) => {
    res.status(404).json({ message: "Invalid URL Passed" });
});

app.listen(port, () => console.log(`Server running on ${port}`));
