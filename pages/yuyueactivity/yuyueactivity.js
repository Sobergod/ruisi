// pages/yuyueactivity/yuyueactivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultImg: '/images/zanwu.png',
    imgUrls: [
      '/images/center/center.png',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    title: "加载中..",
    bathIndex:0,
    activitIndex:0,
    bath: ['选择年龄','3岁', '4岁', '5岁', '6岁', '7岁'],
    activity: ['选择活动','春季开学季活动', '瑞思小达人'],
  },
  bindDateChange: function(e) {
    this.setData({
      bathIndex: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    this.setData({
      activitIndex: e.detail.value
    })
  },

  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.request({
      url: '',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})