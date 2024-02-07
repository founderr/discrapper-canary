"use strict";
n.r(t), n.d(t, {
  AssetMap: function() {
    return l
  }
});
class l {
  async loadRemoteImage(e) {
    let t = "string" == typeof e ? e : e.name,
      n = "string" == typeof e ? e : e.url,
      l = new Image;
    l.src = n, l.crossOrigin = "anonymous", await l.decode(), this.assets[t] = l
  }
  get(e) {
    return this.assets[e]
  }
  has(e) {
    return null != this.assets[e]
  }
  constructor() {
    this.assets = {}
  }
}