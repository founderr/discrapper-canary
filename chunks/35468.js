"use strict";
let r;
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("424973"), r = n("788235").default;
let i = [],
  o = !1;
var l = {
  ...r,
  awaitOnline: () => new Promise(e => {
    if (r.isOnline()) return e();
    {
      if (i.push(e), o) return;
      o = !0;
      let t = () => {
        i.forEach(e => e()), i.length = 0, o = !1, r.removeOnlineCallback(t)
      };
      r.addOnlineCallback(t)
    }
  })
}