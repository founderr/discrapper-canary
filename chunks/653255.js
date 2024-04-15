"use strict";
n.r(t);
var l, r, s, a, i = n("442837"),
  u = n("570140"),
  o = n("358085"),
  c = n("998502"),
  d = n("869614"),
  f = n("281083"),
  h = n("672598");
let C = !1,
  v = !0,
  m = !1;
class p extends(a = i.default.Store) {
  initialize() {
    !(!o.isPlatformEmbedded || __OVERLAY__) && c.default.getGPUDriverVersions().then(e => {
      C = (0, h.default)(e), v = (0, d.default)(e), m = (0, f.default)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return C
  }
  get canUseHardwareAcceleration() {
    return v
  }
  get problematicGPUDriver() {
    return m
  }
  getState() {
    return {
      GPUDriversOutdated: C,
      canUseHardwareAcceleration: v,
      problematicGPUDriver: m
    }
  }
}
s = "StreamingCapabilitiesStore", (r = "displayName") in(l = p) ? Object.defineProperty(l, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[r] = s, t.default = new p(u.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    C = t.GPUDriversOutdated, v = t.canUseHardwareAcceleration
  }
})