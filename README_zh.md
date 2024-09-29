# ee-jsondb

#### 简介
ee-jsondb是从egg-electron/ee-core项目提取的一个小型json数据库，经过本项目重新构建可以不依赖ee-core单独使用

#### 安装
`npm i ee-jsondb`  

#### 使用
```javascript
const Storage = require('ee-jsondb');
```
### API列表
### connection(database)

- database [String] - 数据库名

连接数据库，如果没有则创建。

### json数据库
```javascript
const jdb = Storage.connection('demo');
```
#### jdb.setItem()
创建一个存储的 key/value 对
```javascript
jdb.setItem('test_key', {name:'xiaoming'})
```
#### jdb.getItem()
获取存储的key值
```javascript
jdb.getItem('test_key')
```
#### jdb.db
实例化后的jsondb对象
```javascript
# 添加对象和数据
db.defaults({posts: [], user: {}, count: 0})
  .write();
 
db.get('posts')
  .push({id: 1, title: 'jsondb is awesome'})
  .write()
 
db.set('user.name', 'typicode')
  .write()
 
db.update('count', n => n + 1)
  .write()

运行程序会在项目中添加db.json文件，里面存储了添加的数据：
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

- 可以使用任何lodash强大的函数，比如: _.get() 和 _.find()，并且可以串联地使用：
```javascript
db.get('users')
  .find({sex: 'male'})
  .value()
```

- 查询

可以直接使用lodash的函数进行查询。需要注意的是有些操作可能会导致原数据被修改，为了避免这种误操作，需要使用 .cloneDeep()，操作都是惰性的，只有调用 .value()或 .write()后才会正式执行。
检查users是是否存在
```javascript
db.has('users')
  .value()
```

- 设置users
```javascript
db.set('users', [])
  .write()
```

- 排序、选择
```javascript
db.get('users')
  .filter({sex: 'male'})
  .sortBy('age')
  .take(5)
  .value()
```

- 获取特定字段
```javascript
db.get('users')
  .map('name')
  .value()
```

- 获取数量
```javascript
db.get('users')
  .size()
  .value()
```

- 获取特定信息
```javascript
db.get('users[0].name')
  .value()
```

- 更新信息
```javascript
db.get('users')
  .find({name: 'Tom'})
  .assign({name: 'Tim'})
  .write()
```

- 移除属性
```javascript
db.unset('users.name)
  .write()
```

- 深拷贝
```javascript
db.get('users')
  .cloneDeep()
  .value()
```

