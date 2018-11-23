
var host ="www.dlrfzs.cn"
// var host = "127.0.0.1:20000"
var config = {
  // 下面的地址配合云端 Server 工作
  host,

  // 获取数据
  getSscUrl: `https://${host}/api/service/vendor.ssc/`,
  getSsqUrl: `https://${host}/api/service/vendor.ssq/`,
  getAh3Url: `https://${host}/api/service/vendor.ah3/`,
  getJs11Url: `https://${host}/api/service/vendor.js11/`,
  getBjscUrl: `https://${host}/api/service/vendor.bjsc/`,
  // 获取统计数据
  getDetailUrl: `https://${host}/api/service/vendor.detail/`
};

module.exports = config
