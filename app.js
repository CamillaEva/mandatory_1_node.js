import express from 'express';

import lektionRouter from './routers/lektionRouter.js';

const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use(lektionRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log('server is running on port ', server.address().port);
});

