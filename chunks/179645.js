"use strict";
a.r(t);
var n, s = a("442837"),
  l = a("570140");

function i(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let r = null;
class o extends(n = s.default.PersistedStore) {
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