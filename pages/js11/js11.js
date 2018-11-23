
const getJs11Url = require('./config').getJs11Url
//timePicker.js
const dateTimePicker = require('../../utils/dateTimePicker.js')
Page({

  data: {
    
  },
  onLoad() {
    var that = this
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
          js11: res.data
        })
      },
    })
  },
  
 
  onReady: function () {
    
  },

  onShow: function () {
    
  },

  onHide: function () {
    
  },

  onUnload: function () {
    
  },

 
  onPullDownRefresh: function () {
    
  },


  onReachBottom: function () {
    
  },

  
  onShareAppMessage: function () {
    
  }
})