// pages/detail_list/detail_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: '',
    list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.arg == "section_1") {
      wx.request({
        url: '',
      })
      this.setData({
        a: '第一章：绪论',
        list: [
          {
            id: 'single',
            question_type: '单选',
            done: 0,
            total: 5,
          },
          {
            id: 'multi',
            question_type: '多选',
            done: 0,
            total: 5,
          },
          {
            id: 'blank',
            question_type: '填空',
            done: 0,
            total: 5,
          },
          {
            id: 'judge',
            question_type: '判断',
            done: 0,
            total: 5,
          },
        ],

      })
    }
    else {
      this.setData({
        a: options.arg,
      })
    }
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