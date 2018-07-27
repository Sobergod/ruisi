//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/banner1.png',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    menu: [{
      title: "品牌介绍",
      img: "/images/icon/icon_pinpai.png",
      navUrl: 1,
    }, {
      title: "课程预约",
      img: "/images/icon/icon_yuyue.png",
      navUrl: 2,
    }, {
      title: "活动报名",
      img: "/images/icon/icon_baoming.png",
      navUrl: 3,
    }, {
      title: "视频展示",
      img: "/images/icon/icon_shipin.png",
      navUrl: 4,
    }],
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
    activeList: [{
      id: "3",
      img: "/images/img3.png",
      title: "瑞思夏令营活动",
    }, {
      id: "4",
      img: "/images/img4.png",
      title: "瑞思周年庆活动",
    }],
    questionList: [{
        id: '1',
        img: '/images/img5.png',
        title: '问题问题问题?',
      },
      {
        id: '2',
        img: '/images/img5.png',
        title: '问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题?',
      }, {
        id: '2',
        img: '/images/img5.png',
        title: '问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题?',
      },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理
  navToMenuItemTap: function(e) {
    var url = e.currentTarget.dataset.url;
    switch (url) {
      case 1:
        wx.navigateTo({
          url: '/pages/aboutus/aboutus',
        })
        break;
      case 2:
        wx.switchTab({
          url: '/pages/yuyuecourse/yuyuecourse',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '/pages/yuyueactivity/yuyueactivity',
        })
        break;
      case 4:
        wx.navigateTo({
          url: '/pages/video/video',
        })
        break;
    }
  },
  navToCourseListTap: function(e) {
    var id = e.currentTarget.dataset.id,
      title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '',
    })
  },
  navToActiveListTap: function(e) {
    var id = e.currentTarget.dataset.id,
      title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '',
    })
  },
  moreTap: function(e) {
    var id = e.currentTarget.dataset.id
    if (id == 1) {
      // 课程
      wx.navigateTo({
        url: '/pages/course/course',
      })
    } else if (id == 2) {
      // 活动
      wx.navigateTo({
        url: '/pages/activity/activity',
      })
    } else if (id == 3) {
      // 视频
      wx.navigateTo({
        url: '/pages/video/video',
      })
    } else if (id == 4) {
      // 互动
      wx.navigateTo({
        url: '/pages/interaction/interaction',
      })
    }
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})