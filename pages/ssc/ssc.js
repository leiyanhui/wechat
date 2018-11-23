const getSscUrl = require('./config').getSscUrl

//timePicker.js
const dictToQueryStr = require('../../utils/dictToQueryStr.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: getSscUrl,//给函数传递服务器地址参数
      data: {
      },//给服务器传递数据，本次请求不需要数据，可以不填
      header: {
        'content-type': 'application/json', // 默认值，返回的数据设置为json数组格式
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        that.setData({
          ssc: res.data
        })//通过setData方法把返回的数据复制给本页面定义的list数组
      },
    })
    // wx.request({
    //   url: getDetailUrl,//给函数传递服务器地址参数
    //   // data: {
    //   // },//给服务器传递数据，本次请求不需要数据，可以不填
    //   header: {
    //     'content-type': 'application/json', // 默认值，返回的数据设置为json数组格式
    //   },
    //   success: function (res) {
    //     console.log(res);//打印出返回的数据
    //     that.setData({
    //       reports: res.data.reports
    //     })//通过setData方法把返回的数据复制给本页面定义的list数组
    //   },
    // })
  },
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });
  },
  expectValueInput: function (e) {
    var value = e.detail.value;
    var that = this
    that.setData({
      'filter.expect': value
    })
    console.info('expect', that.data.filter)
    wx.request({
      url: getReportUrl + '?' + dictToQueryStr.transition(that.data.filter),//给函数传递服务器地址参数
      data: {
      },//给服务器传递数据，本次请求不需要数据，可以不填
      header: {
        'content-type': 'application/json', // 默认值，返回的数据设置为json数组格式
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        that.setData({
          list: res.data.reports
        });//通过setData方法把返回的数据复制给本页面定义的list数组
      }
    })
  },
  openTimeValueInput: function (e) {
    var value = e.detail.value;
    var that = this
    that.setData({
      'filter.open_time': value
    })
    console.info('open_time', that.data.filter)
    wx.request({
      url: getReportUrl + '?' + dictToQueryStr.transition(that.data.filter),//给函数传递服务器地址参数
      data: {
      },//给服务器传递数据，本次请求不需要数据，可以不填
      header: {
        'content-type': 'application/json', // 默认值，返回的数据设置为json数组格式
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        that.setData({
          list: res.data.reports
        });//通过setData方法把返回的数据复制给本页面定义的list数组
      }
    })
  },
  openCodeValueInput: function (e) {
    var value = e.detail.value;
    var that = this
    that.setData({
      'filter.open_code': value
    })
    wx.request({
      url: getReportUrl + '?' + dictToQueryStr.transition(that.data.filter),//给函数传递服务器地址参数
      data: {
      },//给服务器传递数据，本次请求不需要数据，可以不填
      header: {
        'content-type': 'application/json', // 默认值，返回的数据设置为json数组格式
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        that.setData({
          list: res.data.reports
        });//通过setData方法把返回的数据复制给本页面定义的list数组
      }
    })
  },
  commentValueInput: function (e) {
    var value = e.detail.value;
    var that = this
    that.setData({
      'filter.comment': value
    })
    wx.request({
      url: getReportUrl + '?' + dictToQueryStr.transition(that.data.filter),//给函数传递服务器地址参数
      data: {
      },//给服务器传递数据，本次请求不需要数据，可以不填
      header: {
        'content-type': 'application/json', // 默认值，返回的数据设置为json数组格式
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        that.setData({
          list: res.data.reports
        });//通过setData方法把返回的数据复制给本页面定义的list数组
      }
    })
  },
  issueValueInput: function (e) {
    var value = e.detail.value;
    var that = this
    that.setData({
      'filter.issue': value
    })
    wx.request({
      url: getReportUrl + '?' + dictToQueryStr.transition(that.data.filter),//给函数传递服务器地址参数
      data: {
      },//给服务器传递数据，本次请求不需要数据，可以不填
      header: {
        'content-type': 'application/json', // 默认值，返回的数据设置为json数组格式
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        that.setData({
          list: res.data.reports
        });//通过setData方法把返回的数据复制给本页面定义的list数组
      }
    })
  },
  countTimeValueInput: function (e) {
    var value = e.detail.value;
    var that = this
    that.setData({
      'filter.count_time': value
    })
    wx.request({
      url: getReportUrl + '?' + dictToQueryStr.transition(that.data.filter),//给函数传递服务器地址参数
      data: {
      },//给服务器传递数据，本次请求不需要数据，可以不填
      header: {
        'content-type': 'application/json', // 默认值，返回的数据设置为json数组格式
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        that.setData({
          list: res.data.reports
        });//通过setData方法把返回的数据复制给本页面定义的list数组
      }
    })
  },
  sou: function () {
    var that = this
    wx.request({
      url: getReportUrl + '?' + 'count_time=' + dictToQueryStr.transition(that.data.filter),//给函数传递服务器地址参数
      data: {
      },//给服务器传递数据，本次请求不需要数据，可以不填
      header: {
        'content-type': 'application/json', // 默认值，返回的数据设置为json数组格式
      },
      success: function (res) {
        console.log(res);//打印出返回的数据
        that.setData({
          list: res.data.reports
        })//通过setData方法把返回的数据复制给本页面定义的list数组
      },
    })
  },
  title: function (e) {
    this.data.title = e.detail.value;
  },
  content: function (e) {
    this.data.content = e.detail.value
  },
  add: function () {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})