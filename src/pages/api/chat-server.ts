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
    server.listen(process.env.PORT, () => {
        console.log(`WebSocket running on port ${process.env.PORT}`);
    });
    res.status(200).json({ name: 'John Doe' })
}