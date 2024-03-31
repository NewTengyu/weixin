
/** 获取消息 */
export function getChatMessage(){
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'chat',
      success: function (res) {
        resolve(res.data);
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}

/** 获取AI对话令牌 */
export function getAIToken(){
  const tokenUrl = "https://aip.baidubce.com/oauth/2.0/token?client_id=2V7pRUO3CDmykGambwTD7yMc&client_secret=9QAiIClPv1e4YumiSMt3CDlO2AkxWUYp&grant_type=client_credentials";
  return new Promise((resolve, reject) => {
    wx.request({
      url: tokenUrl,
      method: "POST",
      header: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      success:res=>{
        resolve(res.data.access_token);
      },
      fail: function (error) {
        reject(error)
      }
    });
  })
}
/** 获取AI对话回复 */
export function getAIContent(token,content) {
  const payload = {
    "messages": [{
      "role": "user",
      "content": content
    }]
  };
  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token=" + token,
      method: "POST",
      data: payload,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        resolve(res.data);
      },
      fail: function (error) {
        reject(error)
      }
    });
  })

}