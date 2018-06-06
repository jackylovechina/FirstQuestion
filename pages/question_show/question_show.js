// pages/question_show/question_show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_l: [
      {
        id: '',
        title: '护理作为一门独立学科，必须首先明确以下哪一项（	）',
        cA: '护理学与社会发展的关系',
        cB: '护理学自身的特点和内在规律',
        cC: '护理学研究对象、任务、学科体系的发展方向',
        cD: '分支学科的产生和应用	',
        answer: 'c',
      },
      {
        id: '',
        title: '一患者以“急性阑尾炎”腹痛入院，护士应给予满足的需要是以下哪一项（	）。。',
        cA: '生理需要',
        cB: '安全需要',
        cC: '爱与归属需要	',
        cD: '尊重需要',
        answer: 'a',
      },
      {
        id: '',
        title: '护士在临床护理工作中对某一护理措施效果进行观察与研究，护士充当的角色是（）。',
        cA: '护理者',
        cB: '管理者',
        cC: '科学研究者',
        cD: '教育者',
        answer: 'c',
      },
      {
        id: '',
        title: '王某，女，30 岁，乳腺癌刚入院，常哭泣，焦虑。以下哪项是首选的护理措施（	）。',
        cA: '注射镇静剂缓解症状',
        cB: '通知主治医生前来诊治',
        cC: '通知家属允许探视，避免焦虑',
        cD: '让患者倾诉其不安，然后给予适当的解释,安慰,疏导',
        answer: 'd',
      },
    ],


  },
  starTap: function (e) {
    //console.log(e)
    if (this.data.question.star) {
      this.setData({
        star_: '/images/star-empty.png',
        question: {
          id: '',
          title: '护士需要帮助人群解决与健康相关的问题，以下哪一项说法不确切（	）。',
          cA: '减轻痛苦',
          cB: '维持健康',
          cC: '保护人类',
          cD: '促进健康',
          answer: 'c',
          star: false,
        },
      });
    } else {
      this.setData({
        star_: '/images/star-full.png',
        question: {
          id: '',
          title: '护士需要帮助人群解决与健康相关的问题，以下哪一项说法不确切（	）。',
          cA: '减轻痛苦',
          cB: '维持健康',
          cC: '保护人类',
          cD: '促进健康',
          answer: 'c',
          star: true,
        },
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options != null) {
      this.setData({
        type: options.type,

      })
    } if (options.type == 'single') {
      this.setData({

        question: {
          id: '',
          title: '护士需要帮助人群解决与健康相关的问题，以下哪一项说法不确切（	）。',
          cA: '减轻痛苦',
          cB: '维持健康',
          cC: '保护人类',
          cD: '促进健康',
          answer: 'c',
          star: true,
        },

      })
      if (this.data.question.star) {
        this.setData({
          star_: '/images/star-full.png',
        })
      } else {
        this.setData({
          star_: '/images/star-empty.png',
        })
      }
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