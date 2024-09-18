const assert = require('assert');
const _ = require('lodash');
const DB = {};

// jsondb 要么每次new对象，要么所有地方都用同一个实例，否则会出现数据无法刷新的情况
// 仅支持jsondb
DB.connection = function (database) {
  if (_.isEmpty(database)) {
    assert(database, `db name ${database} Cannot be empty`);
  }
  const JsondbStorage = require('./jsondbStorage');
  return new JsondbStorage(database);
}

module.exports = DB;