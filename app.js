//app.js
import { getChatMessage,getAIToken } from "/services/chat.js"
// import * as ec from './echarts.min';
// const comp = requirePlugin('echarts');

// 设置自行引入的 echarts 依赖库
// comp.echarts = ec;

App({
  onLaunch: function() {
    let that = this;
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'lebu-t05b2',
        traceUser: true,
      })
    }
    // wx.cloud.callFunction({
    //   name:'getopenid',
    //   complete:res=>{
    //     //记录openid
    //     this.globalData.openid = res.result.openid;
    //   }
    // })
    // wx.showShareMenu({
    //   withShareTicket: true,
    //   menus: ['shareAppMessage', 'shareTimeline']
    // })
    // 登录
    wx.login({success: res => {}})
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              
            }
          })
        }
      }
    })
    getAIToken().then((token) => {
      that.globalData.aiToken = token
    }).catch(error => {
      console.log(error); // 处理或打印错误
      that.globalData.aiToken = null
    })

    getChatMessage().then((message) => {
      that.globalData.chatMessage = message
    }).catch(error => {
      wx.setStorage({
        key: "chat",
        data: []
      })
      that.globalData.chatMessage = []
    })
  },
  
  globalData: {
    userInfo: null,
    openid: null,
    aiToken: null,
    chatMessage: null
  }
})