// pages/writemessage/writemessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgTitle: "这是帖子标题",
    msgType: 1,//帖子类型首次评论为1 回帖为2
  },
  bindFormSubmit: function(e) {
    var msgType = checkMsg
    console.log(e.detail.value.textarea)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    this.checkMsg(options);
  },
  // 判断是回复评论还是首次评论
  checkMsg: function(option) {
    if (option.reId) {
      // 回复
      this.setData({
        msgType:2,
      })
    } else {
      // 初次
      this.setData({
        msgType: 1,
      })
    }
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