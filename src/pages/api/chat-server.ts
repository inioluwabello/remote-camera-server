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
    server.listen(8080, () => {
        console.log('WebSocket running on port 8080');
    });
    res.status(200).json({ name: 'John Doe' })
}