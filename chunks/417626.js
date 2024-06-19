var s, i, l, a, r = n(442837),
  o = n(570140);
let c = !1;
class u extends(a = r.ZP.Store) {
  get blockedByProxy() {
    return c
  }
}
l = "ProxyBlockStore", (i = "displayName") in(s = u) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new u(o.Z, {
  PROXY_BLOCKED_REQUEST: function(e) {
    c = !0
  }
})