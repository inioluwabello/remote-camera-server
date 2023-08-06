import server from './websocket'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log('here')
    server.listen(3002, () => {
        console.log(`WebSocket running on port ${3002}`);
    });
    res.status(200).json({ name: 'John Doe' })
}