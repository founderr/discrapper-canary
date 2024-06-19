var i, s = n(442837),
  l = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = null;
class o extends(i = s.ZP.PersistedStore) {
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
a(o, "displayName", "NewUserStore"), a(o, "persistKey", "nuf"), t.Z = new o(l.Z, {
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