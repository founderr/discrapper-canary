"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var i = n("689988"),
  a = n("49671"),
  l = n("102985");
let s = !1;

function r() {
  var e;
  let t = null === a.default || void 0 === a.default ? void 0 : null === (e = a.default.window) || void 0 === e ? void 0 : e.setContentProtection;
  if (null == t) return;
  let n = l.default.enableContentProtection;
  n !== s && (t(n), s = n)
}
class o extends i.default {
  constructor() {
    r(), super(), this.stores = new Map().set(l.default, r)
  }
}
var u = new o