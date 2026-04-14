[English](https://github.com/tangpanqing/aorm) | [简体中文](https://github.com/tangpanqing/aorm/blob/next/README_zh.md)

# Aorm
Aorm is a GoLang library for operate database.

Give a ⭐ if this project helped you!
## 🌟 Feature
- [x] Support Operate Database Using Struct(Object)
- [x] Support MySQL,MSSQL,Postgres,Sqlite3 Database
- [x] Support Null Value When Query Or Exec
- [x] Support Auto Migrate
- [X] Support SQL Builder
## 🌟 Preview
```go
    //Define Person struct
    type Person struct {
        Id         null.Int    `aorm:"primary;auto_increment" json:"id"`
        Name       null.String `aorm:"size:100;not null;comment:名字" json:"name"`
        Sex        null.Bool   `aorm:"index;comment:性别" json:"sex"`
        Age        null.Int    `aorm:"index;comment:年龄" json:"age"`
        Type       null.Int    `aorm:"index;comment:类型" json:"type"`
        CreateTime null.Time   `aorm:"comment:创建时间" json:"createTime"`
        Money      null.Float  `aorm:"comment:金额" json:"money"`
        Test       null.Float  `aorm:"type:double;comment:测试" json:"test"`
    }
	
    //Define Article struct
    type Article struct {
        Id          null.Int    `aorm:"primary;auto_increment" json:"id"`
        Type        null.Int    `aorm:"index;comment:类型" json:"type"`
        PersonId    null.Int    `aorm:"comment:人员Id" json:"personId"`
        ArticleBody null.String `aorm:"type:text;comment:文章内容" json:"articleBody"`
    }

    //Instantiation the struct
    var person = Person{}
    var article = Article{}
	
    //Store the struct object
    aorm.Store(&person, &article)
	
    //Content Mysql
    db, _ := aorm.Open(driver.Mysql, "root:root@tcp(localhost:3306)/database_name?charset=utf8mb4&parseTime=True&loc=Local")

    //Auto Migrate
    aorm.Migrator(db).AutoMigrate(&person, &article)
	
    //Insert a Person
    personId, _ := aorm.Db(db).Insert(&Person{
        Name:       null.StringFrom("Alice"),
        Sex:        null.BoolFrom(true),
        Age:        null.IntFrom(18),
        Type:       null.IntFrom(0),
        CreateTime: null.TimeFrom(time.Now()),
        Money:      null.FloatFrom(1),
        Test:       null.FloatFrom(2),
    })
    
    //Insert a Article
    articleId, _ := aorm.Db(db).Insert(&Article{
        Type:        null.IntFrom(0),
        PersonId:    null.IntFrom(personId),
        ArticleBody: null.StringFrom("文章内容"),
    })
    
    //GetOne
    var personItem Person
    err := aorm.Db(db).Table(&person).WhereEq(&person.Id, personId).OrderBy(&person.Id, builder.Desc).GetOne(&personItem)
    if err != nil {
        fmt.Println(err.Error())
    }
    
    //Join
    var list2 []ArticleVO
    aorm.
        Db(db).
        Table(&article).
        LeftJoin(&person, []builder.JoinCondition{
            builder.GenJoinCondition(&person.Id, builder.RawEq, &article.PersonId),
        }).
        SelectAll(&article).SelectAs(&person.Name, &articleVO.PersonName).
        WhereEq(&article.Id, articleId).
        GetMany(&list2)
    
    //Join With Alias
    var list3 []ArticleVO
    aorm.
        Db(db).
        Table(&article, "o").
        LeftJoin(&person, []builder.JoinCondition{
            builder.GenJoinCondition(&person.Id, builder.RawEq, &article.PersonId, "o"),
        }, "p").
        Select("*", "o").SelectAs(&person.Name, &articleVO.PersonName, "p").
        WhereEq(&article.Id, articleId, "o").
        GetMany(&list3)
```
## 🌟 Usage
- [Import](#import)
  - [Mysql](#mysql)
  - [Sqlite](#sqlite)
  - [MSSQL](#mssql)
  - [Postgres](#postgres)
- [Define data struct](#define-data-struct)
- [Store data struct](#store-data-struct)
- [Connect database](#connect-database)   
- [Migrate](#migrate)
- [Basic CRUD](#basic-crud)   
  - [Insert one record](#insert-one-record)
  - [Insert many record](#insert-many-record)
  - [Get one record](#get-one-record)
  - [Get many record](#get-many-record)
  - [Update record](#update-record)
  - [Delete record](#delete-record)
- [Advanced Query](#advanced-query)
  - [Table](#table)
  - [Select](#select)
  - [Where](#where)
  - [Where Operate](#where-operate)
  - [Join](#join)
  - [GroupBy](#groupBy)
  - [Having](#having)
  - [OrderBy](#orderBy)
  - [Limit and Page](#limit-and-page)
  - [Lock](#lock)
  - [Increment](#increment)
  - [Decrement](#decrement)
  - [Value](#value)
  - [Pluck](#pluck)
  - [Exists](#exists)
- [Aggregation Function](#aggregation-function)
  - [Count](#count)
  - [Sum](#sum)
  - [AVG](#avg)
  - [Min](#min)
  - [Max](#max)
- [RawSql](#rawSql)
- [Transaction](#transaction)
- [Truncate](#truncate)

### Import
```go
    import (
        _ "github.com/go-sql-driver/mysql" 
        "github.com/tangpanqing/aorm"
    )
```

`github.com/tangpanqing/aorm` wrapper of the sql operate, make it easy for use    

`github.com/go-sql-driver/mysql` mysql driver package, if you use other database, change it

you can download them like this

```shell
go get -u github.com/tangpanqing/aorm
```

#### Mysql
if you use `Mysql` database, you could use this driver `github.com/go-sql-driver/mysql`
```shell
go get -u github.com/go-sql-driver/mysql
```

#### Sqlite
if you use `Sqlite` database, you could use this driver `github.com/mattn/go-sqlite3`
```shell
go get -u github.com/mattn/go-sqlite3
```

#### Mssql
if you use `Mssql` database, you could use this driver `github.com/denisenkom/go-mssqldb`
```shell
go get -u github.com/denisenkom/go-mssqldb
```

#### Postgres
if you use `Postgres` database, you could use this driver `github.com/lib/pq`
```shell
go get -u github.com/lib/pq
```

### Define data struct
you should define data struct before operate database, like this
```go
    type Person struct {
        Id         null.Int    `aorm:"primary;auto_increment" json:"id"`
        Name       null.String `aorm:"size:100;not null;comment:名字" json:"name"`
        Sex        null.Bool   `aorm:"index;comment:性别" json:"sex"`
        Age        null.Int    `aorm:"index;comment:年龄" json:"age"`
        Type       null.Int    `aorm:"index;comment:类型" json:"type"`
        CreateTime null.Time   `aorm:"comment:创建时间" json:"createTime"`
        Money      null.Float  `aorm:"comment:金额" json:"money"`
        Test       null.Float  `aorm:"type:double;comment:测试" json:"test"`
    }

    //modify the default table name
    func (p *Person) TableName() string {
        return "erp_person"
    }

    //you can add this func to modify the table info
    func (p *Person) TableOpinion() map[string]string {
        return map[string]string{
          "ENGINE":  "InnoDB",
          "COMMENT": "人员表",
        }
    }
```
first, notice that like `null.Int`, `null.String`, `null.Bool`, `null.Float`, `null.Time`, which is a struct that wrapper of the `sql.NUll*` struct    

second, notice that like `aorm:` tag, this will be used when migrate data struct to database, some info you need know 

| key name       | key value | info                            | example            |
|----------------|-----------|---------------------------------|--------------------|
| column         | string    | reset column name               | column:person_type |
| primary        | none      | set a primary column            | primary            |
| unique         | none      | set a unique column             | unique             |
| index          | none      | set a index column              | index              |
| auto_increment | none      | set a column auto increment     | auto_increment     |
| not null       | none      | set a column allow null or not  | not null           |
| type           | string    | set a column's data type        | type:double        |
| size           | int       | set a column's length or size   | size:100           |
| comment        | string    | set a column's comment          | comment:名字         |
| default        | string    | set a column's default value    | default:2          |

### Store data struct
you should store data struct before operate database, like this
```go
    var person = Person{}

    aorm.Store(&person)
```
by `Store` function, the basic info of `Person` struct will be store, like table name, column name, this info could be use in some query operate     

### Connect database
by `aorm.Open` function, you can connect the database, and then you should ping test  
```go
    //replace this database param
    username := "root"
    password := "root"
    hostname := "localhost"
    port := "3306"
    dbname := "database_name"
    
    //connect
    db, err := aorm.Open(driver.Mysql, username+":"+password+"@tcp("+hostname+":"+port+")/"+dbname+"?charset=utf8mb4&parseTime=True&loc=Local")
    if err != nil {
        panic(err)
    }
    defer db.Close()
	
    //Set Max Open Conns
    db.SetMaxOpenConns(5)
    //Set Debug Mode
    db.SetDebugMode(false)
```
if you use other database, please use diff dns, for example
```go
//if content sqlite3 database
sqlite3Content, sqlite3Err := aorm.Open(driver.Sqlite3, "test.db")

//if content postgres database
psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", "localhost", 5432, "postgres", "root", "postgres")
postgresContent, postgresErr := aorm.Open(driver.Postgres, psqlInfo)

//if content mssql database
mssqlInfo := fmt.Sprintf("server=%s;database=%s;user id=%s;password=%s;port=%d;encrypt=disable", "localhost", "database_name", "sa", "root", 1433)
mssqlContent, mssqlErr := aorm.Open(driver.Mssql, mssqlInfo)
```

### Migrate
by `AutoMigrate` function, the table name will be `person`, underline style string with the struct name
```go
    aorm.Migrator(db).AutoMigrate(&person, &article, &student)
```
by `Migrate` function, You can also use other table name
```go
    aorm.Migrator(db).Migrate("person_1", &Person{})
```
by `ShowCreateTable` function, You can get the create table sql
```go
    showCreate := aorm.Migrator(db).ShowCreateTable("person")
    fmt.Println(showCreate)
```
like this
```sql
    CREATE TABLE `person` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL COMMENT '名字',
        `sex` tinyint DEFAULT NULL COMMENT '性别',
        `age` int DEFAULT NULL COMMENT '年龄',
        `type` int DEFAULT NULL COMMENT '类型',
        `create_time` datetime DEFAULT NULL COMMENT '创建时间',
        `money` float DEFAULT NULL COMMENT '金额',
        `article_body` text COLLATE utf8mb4_general_ci COMMENT '文章内容',
        `test` double DEFAULT NULL COMMENT '测试',
        PRIMARY KEY (`id`),
        KEY `idx_person_sex` (`sex`),
        KEY `idx_person_age` (`age`),
        KEY `idx_person_type` (`type`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='人员表'
```

### Basic CRUD

#### Insert one record
by `Insert` function, you can insert one record from data struct
```go
    id, errInsert := aorm.Db(db).Insert(&Person{
        Name:       null.StringFrom("Alice"),
        Sex:        null.BoolFrom(false),
        Age:        null.IntFrom(18),
        Type:       null.IntFrom(0),
        CreateTime: null.TimeFrom(time.Now()),
        Money:      null.FloatFrom(100.15987654321),
        Test:       null.FloatFrom(200.15987654321987654321),
    })
    if errInsert != nil {
        fmt.Println(errInsert)
    }
    fmt.Println(id)
```
then get the sql and params like this
```sql
    INSERT INTO person (name,sex,age,type,create_time,money,test) VALUES (?,?,?,?,?,?,?)
    Alice false 18 0 2022-12-07 10:10:26.1450773 +0800 CST m=+0.031808801 100.15987654321 200.15987654321987
```

#### Insert many record
use `InsertBatch` function, you can insert many record from data slice
```go
    var batch []*Person
    batch = append(batch, &Person{
        Name:       null.StringFrom("Alice"),
        Sex:        null.BoolFrom(false),
        Age:        null.IntFrom(18),
        Type:       null.IntFrom(0),
        CreateTime: null.TimeFrom(time.Now()),
        Money:      null.FloatFrom(100.15987654321),
        Test:       null.FloatFrom(200.15987654321987654321),
    })
    
    batch = append(batch, &Person{
        Name:       null.StringFrom("Bob"),
        Sex:        null.BoolFrom(true),
        Age:        null.IntFrom(18),
        Type:       null.IntFrom(0),
        CreateTime: null.TimeFrom(time.Now()),
        Money:      null.FloatFrom(100.15987654321),
        Test:       null.FloatFrom(200.15987654321987654321),
    })
    
    count, errInsertBatch := aorm.Db(db).InsertBatch(&batch)
    if errInsertBatch != nil {
        fmt.Println(errInsertBatch)
    }
    fmt.Println(count)
```
then get the sql and params like this
```sql
    INSERT INTO person (name,sex,age,type,create_time,money,test) VALUES (?,?,?,?,?,?,?),(?,?,?,?,?,?,?)
    Alice false 18 0 2022-12-16 15:28:49.3907587 +0800 CST m=+0.022987201 100.15987654321 200.15987654321987 Bob true 18 0 2022-12-16 15:28:49.3907587 +0800 CST m=+0.022987201 100.15987654321 200.15987654321987
```

#### Get one record
by `GetOne` function, you can get one record
```go
    var personItem Person
    errFind := aorm.Db(db).Table(&person).OrderBy(&person.Id, builder.Desc).WhereEq(&person.Id, id).GetOne(&personItem)
    if errFind != nil {
        fmt.Println(errFind)
    }
    fmt.Println(person)
```
then get the sql and params like this
```sql
    SELECT * FROM person WHERE person.id = ? Limit ?,?
    1 0 1
```

#### Get many record
by `GetMany` function, you can get many record
```go
    var list []Person
    errSelect := aorm.Db(db).Table(&person).WhereEq(&person.Type, 0).GetMany(&list)
    if errSelect != nil {
        fmt.Println(errSelect)
    }
    for i := 0; i < len(list); i++ {
        fmt.Println(list[i])
    }
```
then get the sql and params like this
```sql
    SELECT * FROM person WHERE person.type = ?
    0
```

#### Update record
by `Update` function, you can update record
```go
    countUpdate, errUpdate := aorm.Db(db).WhereEq(&person.Id, id).Update(&Person{Name: null.StringFrom("Bob")})
    if errUpdate != nil {
        fmt.Println(errUpdate)
    }
    fmt.Println(countUpdate)
```
then get the sql and params like this
```sql
    UPDATE person SET name=? WHERE id = ?
    Bob 1
```

#### Delete record
by `Delete` function, you can delete record
```go
    countDelete, errDelete := aorm.Db(db).Table(&person).WhereEq(&person.Id, id).Delete()
    if errDelete != nil {
        fmt.Println(errDelete)
    }
    fmt.Println(countDelete)
```
then get the sql and params like this
```sql
    DELETE FROM person WHERE person.id = ?
    1
```

### Advanced Query
#### Table
by `Table` function, you can set table name easy
```go
    _, err := aorm.Db(db).Table("person_1").Insert(&Person{Name: null.StringFrom("Cherry")})
    if err != nil {
        panic(db.DriverName() + " testTable " + "found err:" + err.Error())
    }
    
    _, err2 := aorm.Db(db).Table(&person).Insert(&Person{Name: null.StringFrom("Cherry")})
    if err2 != nil {
        panic(db.DriverName() + " testTable " + "found err:" + err2.Error())
    }
```
then get the sql and params like this
```sql
    INSERT INTO person_1 (name) VALUES (?)
    Cherry

    INSERT INTO person (name) VALUES (?)
    Cherry 
```
#### Select
by `Select` function, you can select field name easy
```go
    var listByFiled []Person
    aorm.Db(db).Table(&person).Select(&person.Name).Select(&person.Age).WhereEq(&person.Age, 18).GetMany(&listByFiled)
```
then get the sql and params like this
```sql
    SELECT person.name,person.age FROM person WHERE person.age = ?
    18
```
#### Where
```go
    var listByWhere []Person
    err := aorm.Db(db).Table(&person).WhereArr([]builder.WhereItem{
        builder.GenWhereItem(&person.Type, builder.Eq, 0),
        builder.GenWhereItem(&person.Age, builder.In, []int{18, 20}),
        builder.GenWhereItem(&person.Money, builder.Between, []float64{100.1, 200.9}),
        builder.GenWhereItem(&person.Money, builder.Eq, 100.15),
        builder.GenWhereItem(&person.Name, builder.Like, []string{"%", "li", "%"}),
    }).GetMany(&listByWhere)
    if err != nil {
        panic(db.DriverName() + "testWhere" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT * FROM person WHERE person.type = ? AND person.age IN (?,?) AND person.money BETWEEN (?) AND (?) AND CONCAT(person.money,'') = ? AND person.name LIKE concat('%',?,'%')
    0 18 20 100.1 200.9 100.15 li
```
#### Where Operate
there are some other operates you should know

| Opt Name           | Same As      |
|--------------------|--------------|
| builder.Eq         | =            |
| builder.Ne         | !=           |
| builder.Gt         | \>           |
| builder.Ge         | \>=          |
| builder.Lt         | \<           |
| builder.Le         | \<=          |
| builder.In         | In           |
| builder.NotIn      | Not In       |
| builder.Like       | LIKE         |
| builder.NotLike    | Not Like     |
| builder.Between    | Between      |
| builder.NotBetween | Not Between  |

#### JOIN
by `LeftJoin` function
```go
    var list2 []ArticleVO
    err := aorm.Db(db).
        Table(&article).
        LeftJoin(
            &person,
            []builder.JoinCondition{
                builder.GenJoinCondition(&person.Id, builder.RawEq, &article.PersonId),
            },
        ).
        SelectAll(&article).
        SelectAs(&person.Name, &articleVO.PersonName).
        WhereEq(&article.Type, 0).
        WhereIn(&person.Age, []int{18, 20}).
        GetMany(&list2)
    if err != nil {
        panic(db.DriverName() + " testWhere " + "found err " + err.Error())
    }
```
then get the sql and params like this
```sql
    SELECT article.*,person.name as person_name FROM article LEFT JOIN person ON person.id=article.person_id WHERE article.type = ? AND article.age IN (?,?)
    0 18 20
```
some other join function like this `RightJoin`, `Join`
#### GroupBy
```go
    type PersonAge struct {
        Age         null.Int
        AgeCount    null.Int
    }
	
	var personAge = PersonAge{}
	aorm.Store(&personAge)

    var personAgeItem PersonAge
    err := aorm.Db(db).
            Table(&person).
            Select(&person.Age).
            SelectCount(&person.Age, &personAge.AgeCount).
            GroupBy(&person.Age).
            WhereEq(&person.Type, 0).
            
            OrderBy(&person.Age, builder.Desc).
            GetOne(&personAgeItem)
    if err != nil {
        panic(db.DriverName() + "testGroupBy" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT person.age,count(person.age) as age_count FROM person WHERE person.type = ? GROUP BY person.age Limit ?,?
    0 0 1
```
#### Having
```go
    var listByHaving []PersonAge

    err := aorm.Db(db).
            Table(&person).
            Select(&person.Age).
            SelectCount(&person.Age, &personAge.AgeCount).
            GroupBy(&person.Age).
            WhereEq(&person.Type, 0).
            OrderBy(&person.Age, builder.Desc).
            HavingGt(&personAge.AgeCount, 4).
            GetMany(&listByHaving)
    if err != nil {
        panic(db.DriverName() + " testHaving " + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT person.age,count(person.age) as age_count FROM person WHERE person.type = ? GROUP BY person.age Having age_count > ?
    0 4
```
#### OrderBy
```go
    var listByOrder []Person
    err := aorm.Db(db).
            Table(&person).
            WhereEq(&person.Type, 0).
            OrderBy(&person.Age, builder.Desc).
            GetMany(&listByOrder)
    if err != nil {
        panic(db.DriverName() + "testOrderBy" + "found err")
    }
    
    var listByOrder2 []Person
    err2 := aorm.Db(db).
            Table(&person, "o").
            WhereEq(&person.Type, 0, "o").
            OrderBy(&person.Age, builder.Desc, "o").
            GetMany(&listByOrder2)
    if err2 != nil {
        panic(db.DriverName() + "testOrderBy" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT * FROM person WHERE person.type = ? Order BY person.age DESC
    0
    
    SELECT * FROM person o WHERE o.type = ? Order BY o.age DESC
    0 
```
#### Limit and Page
```go
    var list3 []Person
    err1 := aorm.Db(db).
            Table(&person).
            WhereEq(&person.Type, 0).
            Limit(50, 10).
            
            OrderBy(&person.Id, builder.Desc).
            GetMany(&list3)
    if err1 != nil {
        panic(db.DriverName() + "testLimit" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT * FROM person WHERE person.type = ? Order BY person.id DESC Limit ?,?
    0 50 10
```
```go
    var list4 []Person
    err := aorm.Db(db).
            
            Table(&person).
            WhereEq(&person.Type, 0).
            Page(3, 10).
            OrderBy(&person.Id, builder.Desc).
            GetMany(&list4)
    if err != nil {
        panic(db.DriverName() + "testPage" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT * FROM person WHERE person.type = ? Order BY person.id Limit ?,?
    0 20 10
```
#### Lock
by `Lock` function, you can lock the query
```go
    var itemByLock Person
    err := aorm.Db(db).
            
            LockForUpdate(true).
            Table(&person).
            WhereEq(&person.Id, id).
            
            OrderBy(&person.Id, builder.Desc).
            GetOne(&itemByLock)
    if err != nil {
        panic(db.DriverName() + "testLock" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT * FROM person WHERE person.id = ? Order BY person.id Limit ?,?  FOR UPDATE
    2 0 1
```

#### Increment
```go
    _, err := aorm.Db(db).Table(&person).WhereEq(&person.Id, id).Increment(&person.Age, 1)
    if err != nil {
        panic(db.DriverName() + " testIncrement " + "found err:" + err.Error())
    }
```
then get the sql and params like this
```sql
    UPDATE person SET age=age+? WHERE id = ?
    1 2
```

#### Decrement
```go
    _, err := aorm.Db(db).Table(&person).WhereEq(&person.Id, id).Decrement(&person.Age, 2)
    if err != nil {
        panic(db.DriverName() + "testDecrement" + "found err")
    }
```
then get the sql and params like this
```sql
    UPDATE person SET age=age-? WHERE id = ?
    2 2
```

#### Value
```go
    var name string
    errName := aorm.Db(db).Table(&person).OrderBy(&person.Id, builder.Desc).WhereEq(&person.Id, id).Value(&person.Name, &name)
    if errName != nil {
        panic(db.DriverName() + "testValue" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT person.name FROM person WHERE person.id = ? Order BY person.id Limit ?,?
    2 0 1
```
then print the value `Alice`

#### Pluck
```go
    var nameList []string
    errNameList := aorm.Db(db).Table(&person).OrderBy(&person.Id, builder.Desc).WhereEq(&person.Type, 0).Limit(0, 3).Pluck(&person.Name, &nameList)
    if errNameList != nil {
        panic(db.DriverName() + "testPluck" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT person.name FROM person WHERE person.type = ? Order BY person.id Limit ?,?
    0 0 5
```

#### Exists
```go
    exists, err := aorm.Db(db).Table(&person).WhereEq(&person.Id, id).OrderBy(&person.Id, builder.Desc).Exists()
    if err != nil {
        panic(db.DriverName() + " testExists " + "found err:" + err.Error())
    }
    return exists
```
then get the sql and params like this
```sql
    SELECT 1 as c FROM person WHERE person.id = ? Order BY person.id Limit ?,? 
    36 0 1
```
ps, you could use `DoesntExists` func if you want to know the record is not exists

### Aggregation Function
#### Count
```go
    _, err := aorm.Db(db).Table(&person).WhereEq(&person.Age, 18).Count("*")
    if err != nil {
        panic(db.DriverName() + "testCount" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT count(*) as c FROM person WHERE person.age = ?
    18
```
 
#### Sum
```go
    _, err := aorm.Db(db).Table(&person).WhereEq(&person.Age, 18).Sum(&person.Age)
    if err != nil {
        panic(db.DriverName() + "testSum" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT sum(person.age) as c FROM person WHERE person.age = ?
    18
```
 
#### Avg
```go
    _, err := aorm.Db(db).Table(&person).WhereEq(&person.Age, 18).Avg(&person.Age)
    if err != nil {
        panic(db.DriverName() + "testAvg" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT avg(person.age) as c FROM person WHERE person.age = ?
    18
```

#### min
```go
    _, err := aorm.Db(db).Table(&person).WhereEq(&person.Age, 18).Min(&person.Age)
    if err != nil {
        panic(db.DriverName() + "testMin" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT min(person.age) as c FROM person WHERE person.age = ?
    18
```



#### Max
```go
    _, err := aorm.Db(db).Table(&person).WhereEq(&person.Age, 18).Max(&person.Age)
    if err != nil {
        panic(db.DriverName() + "testMax" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT max(person.age) as c FROM person WHERE person.age = ?
    18
```
 
### RawSql
```go
    var list []Person
    err1 := aorm.Db(db).RawSql("SELECT * FROM person WHERE id=? AND type=?", id2, 0).GetMany(&list)
    if err1 != nil {
        panic(err1)
    }
    fmt.Println(list)
    
    _, err := aorm.Db(db).RawSql("UPDATE person SET name = ? WHERE id=?", "Bob2", id2).Exec()
    if err != nil {
        panic(db.DriverName() + "testRawSql" + "found err")
    }
```
then get the sql and params like this
```sql
    SELECT * FROM person WHERE id=? AND type=?
    9 0

    UPDATE person SET name = ? WHERE id=?
    Bob2 9
```

### Transaction
```go
    tx, _ := db.Begin()
    
    id, errInsert := aorm.Db(tx).Insert(&Person{
        Name: null.StringFrom("Alice"),
    })
    
    if errInsert != nil {
        tx.Rollback()
        panic(db.DriverName() + " testTransaction " + "found err:" + errInsert.Error())
        return
    }
    
    _, errCount := aorm.Db(tx).Table(&person).WhereEq(&person.Id, id).Count("*")
    if errCount != nil {
        tx.Rollback()
        panic(db.DriverName() + "testTransaction" + "found err")
        return
    }
    
    var personItem Person
    errPerson := aorm.Db(tx).Table(&person).WhereEq(&person.Id, id).OrderBy(&person.Id, builder.Desc).GetOne(&personItem)
    if errPerson != nil {
        tx.Rollback()
        panic(db.DriverName() + "testTransaction" + "found err")
        return
    }
    
    _, errUpdate := aorm.Db(tx).Where(&Person{
        Id: null.IntFrom(id),
    }).Update(&Person{
        Name: null.StringFrom("Bob"),
    })
    
    if errUpdate != nil {
        tx.Rollback()
        panic(db.DriverName() + "testTransaction" + "found err")
        return
    }
    
    tx.Commit()
```
then get the sql and params like this
```sql
    INSERT INTO person (name) VALUES (?)
    Alice
                              
    SELECT Count(*) AS c FROM person  WHERE person.id = ?
    6
    
    SELECT * FROM person  WHERE person.id = ? ORDER BY person.id DESC Limit ?,? 
    6 0 1
                                              
    UPDATE person SET name=? WHERE id = ?
    Bob 6
```

### Truncate
```go
    _, err := aorm.Db(db).Table(&person).Truncate()
    if err != nil {
        panic(db.DriverName() + " testTruncate " + "found err")
    }
```
then get the sql and params like this
```sql
    TRUNCATE TABLE person
```

## Benchmark
https://github.com/tangpanqing/orm-benchmark

## Author

👤 **tangpanqing**

* Twitter: [@tangpanqing](https://twitter.com/tangpanqing)
* Github: [@tangpanqing](https://github.com/tangpanqing)
* Wechat: tangpanqing    
  ![wechat](./wechat.jpg)
## Show Your Support
Give a ⭐ if this project helped you!