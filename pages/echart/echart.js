// pages/echart/echart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theme: 'light',
    option: {
      title: {
        text: '周运动量'
      },
      legend: {
        left: '50%',
        type: 'scroll',
        data:  ['徒手侧平举', '开合跳', '前后交叉小跑', '半蹲']
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
            [0, 12],
            [1, 15],
            [2, 15],
            [3, 8],
            [4, 15],
            [5, 11],
            [6, 10]
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
          name: '前后交叉小跑',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [2, 34, 34, 9, 11, 30, 20],
        },
        {
          name: '开合跳',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [25, 38, 32, 12, 34, 7, 20],
        },
        {
          name: '半蹲',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [
          //   {
          //   value: 19,
          //   itemStyle: {
          //     borderRadius: [5, 5, 0, 0]
          //   }
          // }
          19, 18, 13, 12, 13, 18, 20],
        }
      ]
    },
    option2: {
      title: {
        text: '日运动时间'
      },
      legend: {
        orient: 'horizontal',
        width: '40%',
        left: '50%',
        type: 'scroll',
        data:  ['徒手侧平举', '开合跳', '前后交叉小跑', '半蹲']
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
            [10, 12],
            [11, 20],
            [12, 15],
            [13, 8],
            [14, 7],
            [15, 11],
            [16, 13]
          ],
          type: 'bar',
          barWidth: '50%',
        },
        {
          name: '前后交叉小跑',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [
            [10, 15],
            [11, 0],
            [12, 5],
            [13, 8],
            [14, 7],
            [15, 11],
            [16, 13]
          ],
        },
        {
          name: '开合跳',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [
            [10, 12],
            [11, 0],
            [12, 5],
            [13, 8],
            [14, 7],
            [15, 11],
            [16, 13]
          ],
        },
        {
          name: '半蹲',
          type: 'bar',
          barWidth: '50%',
          stack: 'Ad',
          data: [
            [9, 12],
            [11, 20],
            [12, 15],
            [13, 8],
            [14, 7],
            [15, 11],
            [16, 13]
          ],
        }
      ]
    },
    option3 : {
      title: {
        text: '运动图'
      },
      legend: {
        left: '50%',
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
    option4 : {
      title: {
        text: '数据统计'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        left: '50%'
      },
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