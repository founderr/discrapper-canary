"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("102053"),
  a = n("689988"),
  l = n("718517"),
  s = n("303217"),
  r = n("352266");
let o = 4 * l.default.Millis.HOUR;
class u extends a.default {
  _initialize() {
    setTimeout(() => i.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => r.default.getBlockedDomainList()), 1e3), setTimeout(() => (0, s.fetchBlockedDomainList)(), 10 * l.default.Millis.SECOND), this.intervalID = setInterval(s.fetchBlockedDomainList, o)
  }
  _terminate() {
    clearInterval(this.intervalID)
  }
}
var d = new u