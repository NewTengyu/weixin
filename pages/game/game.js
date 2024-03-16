import delay from '../../services/delay';

// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boss: "boss",
    health: 100,
    // animation: null,
    animationData: {},
  },
  tapAttack: function (e) {
    // 创建一个动画实例
    let animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
    })
    // 将实例保存在 this 动画开始前，先做位移操作
    // this.animation = animation
    animation.translateX(10).step()
    // 输出动画队列。经过上面两步，队列里有一个动作了
    this.setData({
      animationData: animation.export()
    })

    delay(100).then(() => {
      // 开始一个新的动画
      animation.translateX(0).step()
      this.setData({
        animationData: animation.export()
      })
    }); // 100毫秒后开始执行新的动画

    // this.animation.translateX(10).step()
    // // 输出动画队列。经过上面两步，队列里有一个动作了
    // this.setData({
    //   animationData: this.animation.export()
    // })


    // // 开始一个新的动画
    // this.animation.translateX(-10).step()
    // this.setData({
    //   animationData: this.animation.export()
    // })

    var damage = e.currentTarget.dataset.damage;
    if (this.data.health - damage > 0) {
      this.setData({
        health: this.data.health - damage
      });
    } else {
      this.setData({
        health: 0
      });
    }
    // 实现boss受击动画
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

    // 创建一个动画实例
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
    })
    // 将实例保存在 this 动画开始前，先做位移操作
    this.animation = animation
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})