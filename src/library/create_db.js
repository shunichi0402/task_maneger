const DB = require('./database');

class CreateDB{
    constructor(db){
        this.db = db;
    }
    
    create(){
        if(!this.db) this.db = DB.init();
        this.db.serialize(() => {
            this.db.run('drop table if exists kadai');
        
            // SUBJECT_TABLE
            this.db.run(
                `create table if not exists SUBJECT_TABLE(
                    ID INTEGER PRIMARY KEY,
                    NAME TEXT NOT NULL
                );`
            );
        
            // TASK_TABLE
            this.db.run(
                `create table if not exists TASK_TABLE(
                    ID INTEGER PRIMARY KEY,
                    NAME TEXT NOT NULL,
                    FILING_DATE TEXT,
                    FILING_TIME TEXT,
                    ALLDAY_FLAG INTEGER,
                    SUBJECT INTEGER,
                    REMARKS TEXT,
                    FOREIGN KEY (SUBJECT) REFERENCES SUBJECT_TABLE(ID)
                );`
            );
        
            // FILE_TABLE
            this.db.run(
                `create table if not exists FILE_TABLE(
                    TASK INTEGER,
                    NAME TEXT NOT NULL,
                    FOREIGN KEY (TASK) REFERENCES TASK_TABLE(ID),
                    PRIMARY KEY(TASK, NAME)
                );`
            );
        
        });

        this.db.close();
        this.db = null;
    }
    
    deleteDB(flag = false){
        if(flag){
            if(!this.db)this.db = DB.init();

            this.db.run(
                `DROP TABLE IF EXISTS TASK_TABLE;`
            );
            this.db.run(
                `DROP TABLE IF EXISTS SUBJECT_TABLE;`
            );
            this.db.run(
                `DROP TABLE IF EXISTS FILE_TABLE;`
            );
            
            this.db.close();
            this.db = null;
        }
    }
}

// # Create Database
// (new CreateDB()).create();

// # Delete Databse
// (new CreateDB()).deleteDB(true);

module.exports = CreateDB;