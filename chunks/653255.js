"use strict";
r.r(t);
var n, i, l, u, a = r("442837"),
  o = r("570140"),
  f = r("358085"),
  c = r("998502"),
  s = r("869614"),
  d = r("281083"),
  v = r("672598");
let m = !1,
  p = !0,
  b = !1;
class g extends(u = a.default.Store) {
  initialize() {
    !(!f.isPlatformEmbedded || __OVERLAY__) && c.default.getGPUDriverVersions().then(e => {
      m = (0, v.default)(e), p = (0, s.default)(e), b = (0, d.default)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return m
  }
  get canUseHardwareAcceleration() {
    return p
  }
  get problematicGPUDriver() {
    return b
  }
  getState() {
    return {
      GPUDriversOutdated: m,
      canUseHardwareAcceleration: p,
      problematicGPUDriver: b
    }
  }
}
l = "StreamingCapabilitiesStore", (i = "displayName") in(n = g) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, t.default = new g(o.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    m = t.GPUDriversOutdated, p = t.canUseHardwareAcceleration
  }
})