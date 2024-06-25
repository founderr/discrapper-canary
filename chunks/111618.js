var i, a, r, l, o = t(442837),
  u = t(570140);
let s = {};
class c extends(l = o.ZP.Store) {
  getOptions(e) {
    return s[e]
  }
}
r = "SendMessageOptionsStore", (a = "displayName") in(i = c) ? Object.defineProperty(i, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = r, n.Z = new c(u.Z, {
  MESSAGE_CREATE: function(e) {
    let {
      message: n,
      sendMessageOptions: t
    } = e;
    null != t && (s[n.id] = t), null != n.nonce && n.nonce in s && delete s[n.nonce]
  }
})