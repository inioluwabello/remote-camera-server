


// import { NextApiRequest, NextApiResponse } from 'next';
// import WebSocket, { Server as WebSocketServer } from 'ws';
// import { v4 as uuidv4 } from 'uuid';

// const wss = new WebSocket.Server({ noServer: true });
// const clients = new Map<string, WebSocket>();

// wss.on('connection', (ws: WebSocket) => {
//   const clientId = uuidv4();
//   clients.set(clientId, ws);

//   ws.on('message', (message: string) => {
//     // Handle incoming messages from the mobile app (Expo)
//     console.log('Received message:', message);

//     // Send the message back to the mobile app (Echo)
//     ws.send(message);
//   });

//   ws.on('close', () => {
//     clients.delete(clientId);
//   });
// });

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (!res.socket.server.wss) {
//     res.status(500).end();
//     return;
//   }

//   res.socket.server.wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
//     res.socket.server.wss.emit('connection', ws, req);
//   });
// }
