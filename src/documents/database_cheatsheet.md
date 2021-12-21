# Sqlite3 チートシート
Sqlite3のチートシート
```
https://www.dbonline.jp/sqlite/
```
## CREATE
```
CREARE TABLE IFnNOT EXISTS テーブル名(
    カラム名1  型  制約設定,
    カラム名2  型  制約設定,
    ...
)
```

|型|説明|
| :---:   | --- |
| NULL    | nullが入る |
| INTEGER | 符号付き正数 |
| TEXT    | 文字列、UTF-8かUTF-16で保存される。 |
| REAL    | 浮動小数点数、DOUBLEやFLOAT |
| BLOB    | Binary Large OBject。入力データをそのまま格納|

|制約条件|説明|
|:---:|---|
|primary key|主キー設定<br>intに指定するとすでにあるデータ+1となる。|
|unique|データが重複する場合、データを挿入しない|
|not null|nullを許容しない|
|defailt 値|データ挿入がない場合のデフォルト値を挿入|
|check(条件式)|値のチェックを行う|
|autoincrement|自動で値が入力される<br>INTEGER PRIMARY KEY AUTOINCREMENT<br>とすると削除されたものも含め一意な値となる|
|FOREIGN KEY|外部キー<br>FOREIGN KEY (指定カラム) REFERENCES テーブル(カラム)|

確認方法
``` 
.schema
```