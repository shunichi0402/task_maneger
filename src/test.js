const DB = require('./library/database');
const db = DB.init();

console.log(db.run(''));
db.close();