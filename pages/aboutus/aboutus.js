// pages/aboutus/aboutus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultImg: '/images/zanwu.png',
    imgUrls: [
      '/images/banner2.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    contactList: [{
      title1: '卫星校区',
      phone: '81909977',
      title2: '长春市亚泰大街8599号卫星路欧亚超市4层',
      img: '/images/weixing.png',
    }, {
      title1: '中海Touch12街校区',
      phone: '85642288',
      title2: '长春市南三环与临河街交汇Touch12街3层',
      img: '/images/zhonghai.png',
    }, {
      title1: '飞跃校区',
      phone: '81958800',
      title2: '长春市高新区飞跃路飞悦经典2399号',
      img: '/images/feiyue.png',
    }, {
      title1: '欧亚新生活校区',
      phone: '88489111',
      title2: '长春市延安大街99号 欧亚新生活购物广场3层',
      img: '/images/xinmin.png',
    }, ],
    content: "瑞思学科英语于2007年进驻中国， 备受孩子和家长的青睐， 目前遍布全球120多个国家和地区， 在中国已开设超过300家瑞思学科英语的教学中心。瑞思学科英语依托霍顿· 米夫林· 哈考特（ HMHG） 集团全球丰富的教育行业经验和优质的产品资源， 采用互动多媒体为教学手段， 旨在为3 - 18 岁的幼儿、 青少年提供纯正美式英语教育。瑞思学科英语全浸入式英语环境， 激发孩子的英语学习兴趣， 系统地用英语学习学科知识， 掌握语言背后的逻辑、 文化、 思维方式， 英语如母语般运用自如。 培养孩子解决实际问题、 团队合作、 演讲演示的能力及创造力。",
    descTitle:"瑞思学科英语"
  },
  call: function(e) {
    var phoneNumber = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phoneNumber,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData();
  },
  getData: function() {
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