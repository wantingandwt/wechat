const app = getApp()

Page({
  onLoad: function () {
    this.setData({
      namejson: app.globalData.namejson
    })
  }
})