"use strict";
n.r(t);
var a, s = n("442837"),
  l = n("570140");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = null;
class o extends(a = s.default.PersistedStore) {
  initialize(e) {
    var t;
    r = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : null
  }
  getType() {
    return r
  }
  getState() {
    return {
      type: r
    }
  }
}
i(o, "displayName", "NewUserStore"), i(o, "persistKey", "nuf"), t.default = new o(l.default, {
  NUF_NEW_USER: function(e) {
    let {
      newUserType: t
    } = e;
    r = t
  },
  NUF_COMPLETE: function() {
    r = null
  }
})