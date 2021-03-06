// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: [{
      id: "1",
      img: "/images/img1.png",
      title: "学英语",
    }, {
      id: "2",
      img: "/images/img2.png",
      title: "学英语",
    }, {
      id: "3",
      img: "/images/img3.png",
      title: "6-12岁英语课程",
    }, {
      id: "4",
      img: "/images/img4.png",
      title: "3-5岁英语课程",
    }],
  },
  navToCourseListTap: function (e) {
    var id = e.currentTarget.dataset.id,
      title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/coursedetail/coursedetail?id=' + id,
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