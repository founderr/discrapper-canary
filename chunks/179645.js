var s, i = n(442837),
  r = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = null;
class o extends(s = i.ZP.PersistedStore) {
  initialize(e) {
    var t;
    l = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : null
  }
  getType() {
    return l
  }
  getState() {
    return {
      type: l
    }
  }
}
a(o, "displayName", "NewUserStore"), a(o, "persistKey", "nuf"), t.Z = new o(r.Z, {
  NUF_NEW_USER: function(e) {
    let {
      newUserType: t
    } = e;
    l = t
  },
  NUF_COMPLETE: function() {
    l = null
  }
})