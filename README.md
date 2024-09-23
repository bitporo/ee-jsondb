# ee-jsondb
ee-jsondb is a lightweight json database, it`s extracting and rebuild from egg-electron project

#### Installation
`npm i ee-jsondb`
#### Usage

```javascript
const Storage = require('ee-jsondb');
```
### API List
### connection(database)

- database [String] - database json file name

If no this database will auto create

### jsondatabse
```javascript
const jdb = Storage.connection('demo');
```
#### jdb.setItem()
```javascript
jdb.setItem('test_key', {name:'xiaoming'})
```
#### jdb.getItem()
```javascript
jdb.getItem('test_key')
```
#### jdb.db
jsondb object instance
```javascript
db.defaults({posts: [], user: {}, count: 0})
  .write();
 
db.get('posts')
  .push({id: 1, title: 'jsondb is awesome'})
  .write()
 
db.set('user.name', 'typicode')
  .write()
 
db.update('count', n => n + 1)
  .write()

The result data：
{
  "posts": [
    {
      "id": 1,
      "title": "jsondb is awesome"
    }
  ],
  "user": {
    "name": "typicode"
  },
  "count": 1
}
```

- You can use lodash math, example: _.get() or _.find()：
```javascript
db.get('users')
  .find({sex: 'male'})
  .value()
```

- query
only use .value() or .write() then excute. You can use lodash math

```javascript
db.has('users')
  .value()
```
```javascript
db.set('users', [])
  .write()
```
```javascript
db.get('users')
  .filter({sex: 'male'})
  .sortBy('age')
  .take(5)
  .value()
```
```javascript
db.get('users')
  .map('name')
  .value()
```
```javascript
db.get('users')
  .size()
  .value()
```
```javascript
db.get('users[0].name')
  .value()
```
```javascript
db.get('users')
  .find({name: 'Tom'})
  .assign({name: 'Tim'})
  .write()
```
```javascript
db.unset('users.name')
  .write()
```
```javascript
db.get('users')
  .cloneDeep()
  .value()
```
