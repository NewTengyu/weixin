// pages/chat/index.js
import { getAIContent } from "../../services/chat.js"


// 模拟聊天数据
const mockData = [{
  userId: 1,
  name: 'Sean',
  avatar: '/static/chat/avatar.png',
  messages: [{
      messageId: 1,
      from: 1,
      content: '那明天准时见哦😊',
      time: 1690646400000,
      read: true
    },
    {
      messageId: 2,
      from: 0,
      content: '好的，我会记得的',
      time: 1690646400000,
      read: true
    },
    {
      messageId: 3,
      from: 1,
      content: '在吗？',
      time: Date.now() - 3600000,
      read: false
    },
    {
      messageId: 4,
      from: 1,
      content: '有个问题想咨询一下，关于TDesign组件库如何更好地使用',
      time: Date.now() - 3600000,
      read: false
    },
  ]
}]

Page({
  /** 页面的初始数据 */
  data: {
    myAvatar: '/icon/avatar.png',   // 自己的头像
    userId: 1,         // 对方userId
    avatar: '/icon/avatar.png',           // 对方头像
    name: 'Chat老师',             // 对方昵称
    messages: [],         // 消息列表 { messageId, from, content, time, read }
    input: '',            // 输入框内容
    anchor: '',           // 消息列表滚动到 id 与之相同的元素的位置
    keyboardHeight: 0,     // 键盘当前高度(px)
  },

  /** 生命周期函数--监听页面加载 */
  onLoad() {
    // 加载 mockdata
    this.checkDataReady('chatMessage');
    this.checkDataReady('aiToken');
    const messages = getApp().globalData.chatMessage
    this.setData({ messages: [...messages] })
    wx.nextTick(this.scrollToBottom)
  },
    
  checkDataReady(dataName) {
      let that = this;
      if (!getApp().globalData[dataName]) {
          // 显示加载提示
          wx.showLoading({
              title: '数据加载中...',
          })
        
          // 检查 globalData 中的数据是否已经准备好，如果没准备好，每秒检查一次
          let checkDataTimer = setInterval(function() {
              if (getApp().globalData[dataName]) {
                  clearInterval(checkDataTimer)  // 清除定时器
                
                  // that.setData({
                  //     yourDataKey: getApp().globalData.yourDataKey   // 更新页面数据
                  // })
                
                  // 关闭加载提示
                  wx.hideLoading(); 
              }
          }, 1000);  // 每秒检查一次
      } else {
        // 如果数据已经准备好，直接更新页面数据
        // that.setData({
        //     yourDataKey: getApp().globalData.yourDataKey
        // })
      }
  },

  /** 生命周期函数--监听页面初次渲染完成 */
  onReady() {},

  /** 生命周期函数--监听页面显示 */
  onShow() {},

  /** 生命周期函数--监听页面隐藏 */
  onHide() {},

  /** 生命周期函数--监听页面卸载 */
  onUnload() {
    //
  },

  /** 页面相关事件处理函数--监听用户下拉动作 */
  onPullDownRefresh() {},

  /** 页面上拉触底事件的处理函数 */
  onReachBottom() {},

  /** 用户点击右上角分享 */
  onShareAppMessage() {},

  /** 处理唤起键盘事件 */
  handleKeyboardHeightChange(event) {
    const { height } = event.detail
    if (!height)
      return
    this.setData({ keyboardHeight: height })
    wx.nextTick(this.scrollToBottom)
  },

  /** 处理收起键盘事件 */
  handleBlur() {
    this.setData({ keyboardHeight: 0 })
  },

  /** 处理输入事件 */
  handleInput(event) {
    this.setData({ input: event.detail.value })
  },

  /** 发送消息 */
  sendMessage() {
    const { userId, messages, input: content } = this.data
    if (!content)
      return
    let messageCount = messages.length + 1
    const message = { messageId: messageCount++, from: 0, content, time: Date.now(), read: true }
    messages.push(message)
    this.setData({ input: '', messages })
    wx.nextTick(this.scrollToBottom)
    // 回复消息
    getAIContent(getApp().globalData.aiToken,content).then(aidata => {
      let aiContent = aidata.result
      if (aidata.error_code) {
        aiContent = '不好意思我们出现了问题，努力解决中......'
      }
      const message = {
        messageId: messageCount++,
        from: 1,
        content: aiContent,
        time: Date.now(),
        read: false
      }
      messages.push(message)
      wx.setStorage({
        key: "chat",
        data: messages
      })
      this.setData({ input: '', messages })
      wx.nextTick(this.scrollToBottom)
    }).catch(error => {
      console.log(error); // 处理或打印错误
    });
    
  },
  
  /** 消息列表滚动到底部 */
  scrollToBottom() {
    this.setData({ anchor: 'bottom' })
  }
})