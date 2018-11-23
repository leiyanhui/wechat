var host = "www.dlrfzs.cn";
// var host = "127.0.0.1:20000"
var config = {

  // 下面的地址配合云端 Server 工作
  host,

  // 获取数据
  getJs11Url: `https://${host}/api/service/vendor.js11/`,
  
};

module.exports = config
