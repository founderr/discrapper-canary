"use strict";
E.r(_), E.d(_, {
  default: function() {
    return T
  }
});
var t = E("102053"),
  o = E("689988"),
  n = E("718517"),
  a = E("303217"),
  i = E("352266");
let r = 4 * n.default.Millis.HOUR;
class I extends o.default {
  _initialize() {
    setTimeout(() => t.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => i.default.getBlockedDomainList()), 1e3), setTimeout(() => (0, a.fetchBlockedDomainList)(), 10 * n.default.Millis.SECOND), this.intervalID = setInterval(a.fetchBlockedDomainList, r)
  }
  _terminate() {
    clearInterval(this.intervalID)
  }
}
var T = new I