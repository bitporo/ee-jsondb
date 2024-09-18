const fs = require('fs');
const mkdirp = require('mkdirp');
/**
 * 创建文件夹
 */
exports.mkdir = function(filepath, opt = {}) {
  mkdirp.sync(filepath, opt);
  return
}

/**
 * 修改文件权限
 */
exports.chmodPath = function(path, mode) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      const curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        this.chmodPath(curPath, mode); // 递归删除文件夹
      } else {
        fs.chmodSync(curPath, mode);
      }
    });
    fs.chmodSync(path, mode);
  }
};