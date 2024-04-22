"use strict";
a.r(t);
var n, s, l, i, r = a("442837"),
  o = a("570140"),
  u = a("358085"),
  d = a("998502"),
  c = a("869614"),
  f = a("281083"),
  E = a("672598");
let h = !1,
  _ = !0,
  C = !1;
class m extends(i = r.default.Store) {
  initialize() {
    !(!u.isPlatformEmbedded || __OVERLAY__) && d.default.getGPUDriverVersions().then(e => {
      h = (0, E.default)(e), _ = (0, c.default)(e), C = (0, f.default)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return h
  }
  get canUseHardwareAcceleration() {
    return _
  }
  get problematicGPUDriver() {
    return C
  }
  getState() {
    return {
      GPUDriversOutdated: h,
      canUseHardwareAcceleration: _,
      problematicGPUDriver: C
    }
  }
}
l = "StreamingCapabilitiesStore", (s = "displayName") in(n = m) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = new m(o.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    h = t.GPUDriversOutdated, _ = t.canUseHardwareAcceleration
  }
})