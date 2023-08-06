import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

import apiWebSocket from './pages/api/websocket';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req: any, res: any) => {
        const parsedUrl = parse(req.url!, true);
        const { pathname } = parsedUrl;

        if (pathname === '/api/websocket') {
            apiWebSocket(req, res);
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen(3000, (err?: any) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});

