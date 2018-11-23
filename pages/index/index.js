//index.js
//获取应用实例
// import {
//   getSellers
// } from '../../utils/apis'
const getSscUrl = require('./config').getSscUrl
const getDetailUrl = require('./config').getDetailUrl
const getSsqUrl = require('./config').getSsqUrl
const getAh3Url = require('./config').getAh3Url
const getJs11Url = require('./config').getJs11Url
const getBjscUrl = require('./config').getBjscUrl


//timePicker.js
const dictToQueryStr = require('../../utils/dictToQueryStr.js')


function countdown(that) {
  var second = that.data.second
  if (second == 0) {
    that.setData({
      second: "60秒倒计时结束"
    });
    return;
  }
  var time = setTimeout(function () {
    that.setData({
      second: second - 1
    });
    countdown(that);
  }
    , 1000)
}

Page({
  data: {
    category: [
      {
        "category_id": "1",
        "title": "全国",
      },
      {
        "category_id": "2",
        "title": "地方",
      },
      {
        "category_id": "3",
        "title": "高频",
      },
      {
        "category_id": "4",
        "title": "我的定制",
      }
    ],
    page: 0,
    hasMore: true,
    loading: false,
    motto: null,
    list: [],
    title: null,
    content: null,
    searchValue: null,
    ssc: {},
    ssq: {},
    ah3:{},
    js11:{},
    bjsc:{},
    src:'../../../images/icro/right.png',
    second: 60

  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: getSscUrl,
      data: {
      },
      header: {
        'content-type': 'application/json', 
      },
      success: function (res) {
        console.log(res);
        that.setData({
          ssc: res.data[0]
        })
      },
    })

    wx.request({
      url: getSsqUrl,
      data: {
      },
      header: {
        'content-type': 'application/json', 
      },
      success: function (res) {
        console.log(res);
        that.setData({
          ssq: res.data[0]
        })
      },
    })

    wx.request({
      url: getAh3Url,
      data: {
      },
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        console.log(res);
        that.setData({
          ah3: res.data[0]
        })
      },
    })


    wx.request({
      url: getJs11Url,
      data: {
      },
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        console.log(res);
        that.setData({
          js11: res.data[0]
        })
      },
    })

    wx.request({
      url: getBjscUrl,
      data: {
      },
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        console.log(res);
        that.setData({
          bjsc: res.data[0]
        })
      },
    })
  },

  initAddress() {
    var that = this
    this.invalidateData()
    getApp().getCurrentAddress(function (address) {
      if (address.addr_id) {
        address['title'] = `${address.addr} ${address.detail}`
      }
      that.setData({
        currentAddress: address
      })
      that.loadData()
    })
  },

  onShareAppMessage() {
    return {
      title: '首页',
      path: '/pages/index/index'
    }
  }
})
