// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgId: 1, //帖子id
    msgList: [{
      id: 1, //评论id
      userImg: "/images/icon/icon5.png",
      msg: [{
        reId: 1,
        msgType: 1,
        name: '评论人',
        zanCount: 999, //赞数
        isZan: 1, //是否赞过 1赞过 0没赞过
        msgContent: "首次留言首次留言",
      }, {
        reId: 2, //回复id
        msgType: 2, //后台回复
        name: "后台回复",
        isZan: 0,
        zanCount: 999, //赞数
        msgContent: "后台回复后台回复后台回复后台回复"
      }, {
        reId: 3, //回复id
        msgType: 1, //楼主留言
        name: '评论人',
        isZan: 1,
        zanCount: 99, //赞数
        msgContent: "追加留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容"
      }, ]
    }, {
      id: 2, //评论id
      userImg: "/images/icon/icon5.png",
      msg: [{
        reId: 1,
        msgType: 1,
        name: '评论人',
        zanCount: 999, //赞数
        isZan: 1, //是否赞过 1赞过 0没赞过
        msgContent: "首次留言首次留言",
      }, {
        reId: 2, //回复id
        msgType: 2, //后台回复
        name: "后台回复",
        isZan: 0,
        zanCount: 999, //赞数
        msgContent: "后台回复后台回复后台回复后台回复"
      }, {
        reId: 3, //回复id
        msgType: 1, //楼主留言
        name: '评论人',
        isZan: 1,
        zanCount: 99, //赞数
        msgContent: "追加留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容"
      }, ]
    }, ]
  },
  zanTap: function(e) {
    var id = e.currentTarget.dataset.id, //主贴id
      isZan = e.currentTarget.dataset.isZan,
      reId = e.currentTarget.dataset.reid,
      msgList = this.data.msgList; //回帖id;
    for (let j = 0; j < msgList.length; j++) {
      if (msgList[j].id == id) {
        for (let i = 0; i < msgList[j].msg.length; i++) {
          if (reId == msgList[j].msg[i].reId) {
            var iszan = 'msgList[' + j + '].msg[' + i + '].isZan';
            if (msgList[j].msg[i].isZan) {
              this.setData({
                [iszan]: 0
              })
            } else {
              this.setData({
                [iszan]: 1
              })
            }
          }
        }
      }

    }

  },
  writeMsgTap: function(e) {
    var msgId = e.currentTarget.dataset.msgid, //主贴id
      reId = e.currentTarget.dataset.reid; //回帖id
    wx.navigateTo({
      url: '/pages/writemessage/writemessage?msgId=' + msgId + '&reId=' + reId,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var msgId = options.msgId;
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