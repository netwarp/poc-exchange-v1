import Surreal from 'surrealdb.js'
const db = new Surreal('http://127.0.0.1:8000/rpc');
await db.signin({
    user: 'root',
    pass: 'root',
});

await db.use('test', 'test');

export default db

