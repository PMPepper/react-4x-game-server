
import Turn from 'node-turn';

// import Server from './classes/server';
import serverTest from './server-test';


//TURN server
const turnServer = new Turn({
    debugLevel: 'TRACE',
  // set options
//   authMech: 'long-term',
//   credentials: {
//     username: "password"
//   }
});

turnServer.start();


//const gameServer:Server = new Server();

//console.log('Hello world');
serverTest();


// {
//   "name": "react4x-game2-server",
//   "version": "1.0.0",
//   "description": "",
//   "main": "dist/index.js",
//   "type": "module",
//   "scripts": {
//     "start": "tsc && node --experimental-specifier-resolution=node dist/index.js",
//     "ts": "tsc",
//     "js": "node --experimental-specifier-resolution=node dist/index.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "@types/ws": "^8.5.3",
//     "node-turn": "^0.0.6",
//     "ws": "^8.8.1"
//   },
//   "devDependencies": {
//     "serialize-error": "^11.0.0",
//     "typescript": "^5.0.4"
//   }
// }
