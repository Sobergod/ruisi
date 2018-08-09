// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/banner2.jpg',
    ],
    avatarUrl: '',
    nickName: '加载中...',
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    showBtn: 1,
    btn: [{
        id: 1,
        title: "个人信息"
      },
      {
        id: 2,
        title: "我的课程"
      },
      {
        id: 3,
        title: "我的活动"
      },
      {
        id: 4,
        title: "我的留言"
      },
      {
        id: 5,
        title: "关于我们"
      }
    ]
  },
  navToDetail: function(e) {
    var id = e.currentTarget.dataset.id;
    switch (id) {
      case 1:
        wx.navigateTo({
          url: '/pages/mine/minedetail/minedetail',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '/pages/mine/minecourse/minecourse',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '/pages/mine/mineactivity/mineactivity',
        })
        break;
      case 4:
        wx.navigateTo({
          url: '/pages/mine/minmsg/minmsg',
        })
        break;
      case 5:
        wx.navigateTo({
          url: '/pages/aboutus/aboutus',
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onGetUserInfo: function(e) {
    wx.setStorageSync("nickName", e.detail.userInfo.nickName);
    wx.setStorageSync("avatarUrl", e.detail.userInfo.avatarUrl);
    this.setUserStorage()
  },
  onLoad: function(options) {
    var au = wx.getStorageSync("avatarUrl"),
      nn = wx.getStorageSync("nickName");
    if (au || nn) {
      this.setUserStorage()
    }
  },
  setUserStorage: function() {
    this.setData({
      avatarUrl: wx.getStorageSync("avatarUrl"),
      nickName: wx.getStorageSync("nickName"),
      showBtn: 0,
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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