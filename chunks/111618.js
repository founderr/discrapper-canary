var i, s, a, r, l = n(442837),
  o = n(570140);
let c = {};
class u extends(r = l.ZP.Store) {
  getOptions(e) {
return c[e];
  }
}
a = 'SendMessageOptionsStore', (s = 'displayName') in(i = u) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new u(o.Z, {
  MESSAGE_CREATE: function(e) {
let {
  message: t,
  sendMessageOptions: n
} = e;
null != n && (c[t.id] = n), null != t.nonce && t.nonce in c && delete c[t.nonce];
  }
});