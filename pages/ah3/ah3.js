
const getAh3Url = require('./config').getAh3Url
//timePicker.js
const dateTimePicker = require('../../utils/dateTimePicker.js')
Page({

  data: {
    
  },
  onLoad() {
    var that = this
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
          ah3: res.data
        })
      },
    })
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