const sqlite3 = require('sqlite3');
const databaseConfig = require('../config/database.conf');

class SQLite{

    static init(){
        const db = new sqlite3.Database(databaseConfig.fileName);
        db.run('PRAGMA foreign_keys = ON');
        return db;
    }

    static close(db){
        db.close();
    }

    static insertTask(){

    }

    static insertSubject(){

    }

    static insertFile(){
        
    }

}

module.exports = SQLite;