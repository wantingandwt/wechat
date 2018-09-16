//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    namejson: [
      {
        "nameId": "1",
        "name": "苏州平江路",
        "nameUrl": "../img/indexlist.jpg",
        "nameTime":"2016-12-02",
        "nameBody":"平江路是苏州的一条历史老街，是一条沿河的小路，其河名为平江河。平江路历史街区是苏州古城迄今为止保存最为完整的一个区域，堪称古城缩影。对照南宋《平江图 [1]  》及明末《苏州府城内水道总图》，平江路基本延续了唐宋以来的城坊格局，并至今保持着活力。"
      },
      {
        "nameId": "2",
        "name": "北京天安门",
        "nameUrl": "../img/indexlist2.jpg",
        "nameTime": "2017-08-12",
        "nameBody":"天安门，坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米，以杰出的建筑艺术和特殊的政治地位为世人所瞩目。"
      },
      {
        "nameId": "3",
        "name": "北京园博园",
        "nameUrl": "../img/indexlist3.jpg",
        "nameTime": "2017-1-02",
        "nameBody": "北京园博园为第九届中国国际园林博览会的举办地，位于北京西南部丰台区境内永定河畔绿色生态发展带一线，总面积267公顷，东临永定河新右堤，西至鹰山公园，南起梅市口路，北至莲石西路，依托永定河道，与卢沟桥遥相呼应，历史文化氛围浓郁，地形多变，山水相依，颇具特色。园博园即园林花卉博览会公园。"
      },
      {
        "nameId": "4",
        "name": "北京天坛",
        "nameUrl": "../img/indexlist4.jpg",
        "nameTime": "2018-1-02",
        "nameBody": "天坛，在北京市南部，东城区永定门内大街东侧。占地约273万平方米。天坛始建于明永乐十八年（1420年），清乾隆、光绪时曾重修改建。为明、清两代帝王祭祀皇天、祈五谷丰登之场所。天坛是圜丘、祈谷两坛的总称，有坛墙两重，形成内外坛，坛墙南方北圆，象征天圆地方。主要建筑在内坛，圜丘坛在南、祈谷坛在北，二坛同在一条南北轴线上，中间有墙相隔。圜丘坛内主要建筑有圜丘坛、皇穹宇等等，祈谷坛内主要建筑有祈年殿、皇乾殿、祈年门等。"
      },
      {
        "nameId": "5",
        "name": "北京798艺术街区",
        "nameUrl": "../img/indexlist5.jpg",
        "nameTime": "2017-2-12",
        "nameBody": "798艺术区（ArtDist）位于北京朝阳区酒仙桥街道大山子地区，故又称大山子艺术区（英文简称DAD－Dashanzi Art District），原为原国营798厂等电子工业的老厂区所在地。如今798已经引起了国内外媒体和大众的广泛关注，成为了北京都市文化的新地标。"
      },
      {
        "nameId": "6",
        "name": "北京鸟巢与水立方",
        "nameUrl": "../img/indexlist6.jpg",
        "nameTime": "2017-12-02",
        "nameBody": "国家体育场（鸟巢）位于北京奥林匹克公园中心区南部，为2008年北京奥运会的主体育场。工程总占地面积21公顷，场内观众坐席约为91000个。举行了奥运会、残奥会开闭幕式、田径比赛及足球比赛决赛。奥运会后成为北京市民参与体育活动及享受体育娱乐的大型专业场所，并成为地标性的体育建筑和奥运遗产。国家游泳中心又称“水立方”(Water Cube)位于北京奥林匹克公园内，是北京为2008年夏季奥运会修建的主游泳馆，也是2008年北京奥运会标志性建筑物之一。"
      },
    ],
  }
})