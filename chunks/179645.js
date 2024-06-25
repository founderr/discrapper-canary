var s, r = n(442837),
  i = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = null;
class o extends(s = r.ZP.PersistedStore) {
  initialize(e) {
    var t;
    a = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : null
  }
  getType() {
    return a
  }
  getState() {
    return {
      type: a
    }
  }
}
l(o, "displayName", "NewUserStore"), l(o, "persistKey", "nuf"), t.Z = new o(i.Z, {
  NUF_NEW_USER: function(e) {
    let {
      newUserType: t
    } = e;
    a = t
  },
  NUF_COMPLETE: function() {
    a = null
  }
})