
import { WebSocketServer, WebSocket } from 'ws';
import AsyncConnection from './AsyncConnection';
import WebSocketTransport from './AsyncConnection/WebSocketTransport';

export default async function serverTest() {
    console.log('Server starting')
    const wss = new WebSocketServer({port: 8081});

    wss.on('connection', async (ws: WebSocket) => {
        console.log('Socket connected');

        const exposeMethods = {
            hello: async (name: string) => {
        
                await connector.call.shout('yo')
        
                return `Well howdy there ${name}`
            }
        }

        type RemoteMethods = {shout: (string: string) => string};

        const transport = new WebSocketTransport<RemoteMethods>(ws as any);//WS websockets are slightly different to 'real' websockets in their type definitions, just enough to upset TS
        const connector = new AsyncConnection<RemoteMethods>(transport, exposeMethods);

        await connector.isReady;

        console.log('Connector ready');
    });
}