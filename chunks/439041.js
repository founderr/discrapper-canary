var n, s, l, r, o = t(442837),
  i = t(570140);
let c = null,
  u = null;
class d extends(r = o.ZP.Store) {
  get client() {
    return c
  }
  get cashAppPayComponent() {
    return u
  }
}
l = "AdyenStore", (s = "displayName") in(n = d) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l;
let E = new d(i.Z, {
  ADYEN_CREATE_CLIENT_SUCCESS: function(e) {
    let {
      client: a
    } = e;
    c = a
  },
  ADYEN_TEARDOWN_CLIENT: function() {
    c = null
  },
  ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function(e) {
    let {
      component: a
    } = e;
    u = a
  }
});
a.Z = E