// server.js
const next = require('next');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const pokeApiPath = '/poke-api';
const apiPaths = {
    [pokeApiPath]: {
        target: 'https://pokeapi.co/api/v2',
        pathRewrite: {
            [`^${pokeApiPath}`]: '/',
        },
        changeOrigin: true,
    },
};

app.prepare().then(() => {
    const server = express(); // back 서버에서의 const app = express()

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(pokeApiPath, createProxyMiddleware(apiPaths[pokeApiPath]));

    server.get('*', (req, res) => {
        // 모든 get 요청 처리
        return handle(req, res); // next의 get 요청 처리기
    });

    server.listen(port, () => {
        console.log(`next running on port ${port}`);
    });
});
