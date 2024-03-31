// pages/echart/echart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme: 'light',
    option3: {
      title: {
        text: '周运动量'
      },
      legend: {
        left: '50%',
        scroll: 'scroll',
        data:  ['徒手侧平举', '半蹲', '开合跳', '前后交叉小跑']
      },
      xAxis: {
        type: 'category',
        data: ['一', '二', '三', '四', '五', '六', '日'],
        splitLine: {
          show: true
        },
        axisLabel: {
          align: 'center',
        },
        axisLine: {
          show: false
        },

        axisTick: {
          lineStyle: {
            color: '#'
          },
        }
      },
      yAxis: {
        type: 'value',
        position: 'right',
        axisLine: {
          show: false
        },

        axisLabel: {
          formatter: function (value, index) {
            if (value === 0) return 0;
            if (index % 2 == 0) return value + " 个";
          },

          overflow: 'break',
          width: 20
        },
        splitNumber: 4,
      },
      series: [{
          name: '徒手侧平举',

          stack: 'Ad',
          data: [
            [0, 12000],
            [1, 15000],
            [2, 15000],
            [3, 8000],
            [4, 500],
            [5, 11000],
            [6, 13000]
          ],
          type: 'bar',
          barWidth: '50%',
          markLine: {
            silent: true,
            symbol: ['none', 'none'],
            label: {
              formatter: '平均',
            },
            data: [{
              yAxis: 10000,
              lineStyle: {
                type: 'dashed',

                color: '#ccc',
                width: 2
              }
            }]
          },
        },
        {
          name: '半蹲',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [18203, 23489, 29034, 104970, 11744, 30230],
        },
        {
          name: '开合跳',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [19325, 23438, 31000, 121594, 134141, 81807],
        },
        {
          name: '前后交叉小跑',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [{
            value: 19325,
            itemStyle: {
              borderRadius: [5, 5, 0, 0]
            }
          }, 23438, 31000, 121594, 134141, 81807],
        }
      ]
    },
    option4: {
      title: {
        text: '日运动时间'
      },
      legend: {
        left: '50%',
        scroll: 'scroll',
        data:  ['徒手侧平举', '半蹲', '开合跳', '前后交叉小跑']
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: true,
          interval: 5,
        },
        axisLabel: {
          formatter: function (value, index) {
            if (value % 6 == 0) {
              return value + " 时";
            }
          },
          showMaxLabel: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          lineStyle: {
            color: '#'
          },
          interval: 5,
        },
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      },
      yAxis: {
        type: 'value',
        position: 'right',
        axisLine: {
          show: false
        },

        axisLabel: {
          formatter: function (value, index) {
            switch (value) {
              case 0:
                return 0;
              case 30:
                return value + " 分钟";
              case 60:
                return value + " 分钟";
              default:
                return " "
            }
          },
          overflow: 'break',
          width: 20
        },
        interval: 15,
        max: 60,
      },
      series: [{
          name: '徒手侧平举',
          stack: 'Ad',
          data: [
            [0, 12],
            [1, 20],
            [2, 15],
            [3, 8],
            [4, 7],
            [5, 11],
            [6, 13]
          ],
          type: 'bar',
          barWidth: '50%',
        },
        {
          name: '半蹲',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [
            [0, 15],
            [1, 20],
            [2, 15],
            [3, 8],
            [4, 7],
            [5, 11],
            [6, 13]
          ],
        },
        {
          name: '开合跳',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [
            [0, 12],
            [1, 20],
            [2, 15],
            [3, 8],
            [4, 7],
            [5, 11],
            [6, 13]
          ],
        },
        {
          name: '前后交叉小跑',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [{
              value: [0, 12],
              itemStyle: {
                borderRadius: [5, 5, 0, 0]
              }
            },
            [1, 20],
            [2, 15],
            [3, 8],
            [4, 7],
            [5, 11],
            [6, 13]
          ],
        }
      ]
    },
    option : {
      title: {
        text: '运动图'
      },
      legend: {
        data: ['以往', '今日',]
      },
      radar: {
        // shape: 'circle',
        center:['50%', '50%'],
        radius: '50%',
        indicator: [
          { name: '徒手侧平举', max: 6500 },
          { name: '半蹲', max: 16000 },
          { name: '开合跳', max: 30000 },
          { name: '前后交叉小跑', max: 38000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000],
              name: '以往'
            },
            {
              value: [5000, 14000, 28000, 26000],
              name: '今日'
            }
          ]
        }
      ]
    },
    option2 : {
      title: {
        text: '数据统计'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['徒手侧平举', '半蹲', '开合跳', '前后交叉小跑']
      },
      series: [
        {
          name: '综合数据',
          type: 'bar',
          barWidth: '35%',
          itemStyle:{
            borderRadius:[0,50,50,0]
          },
          label: {
            show: true,
            position: 'inside',
            color: '#eee',
            formatter: "{c}"
        },
          data: [100, 100, 100, 100]
        },
       
      ]
    },
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