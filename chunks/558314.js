var s, i, l, a, r = n(442837),
  o = n(570140);
let c = {
  matureAgree: !1
};
class u extends(a = r.ZP.Store) {
  get didMatureAgree() {
    return c.matureAgree
  }
}
l = "ApplicationStoreSettingsStore", (i = "displayName") in(s = u) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new u(o.Z, {
  APPLICATION_STORE_MATURE_AGREE: function() {
    c.matureAgree = !0
  }
})