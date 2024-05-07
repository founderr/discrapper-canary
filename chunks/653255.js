"use strict";
n.r(t);
var a, s, i, l, r = n("442837"),
  o = n("570140"),
  u = n("358085"),
  d = n("998502"),
  c = n("869614"),
  f = n("281083"),
  E = n("672598");
let h = !1,
  _ = !0,
  C = !1;
class m extends(l = r.default.Store) {
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
i = "StreamingCapabilitiesStore", (s = "displayName") in(a = m) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new m(o.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    h = t.GPUDriversOutdated, _ = t.canUseHardwareAcceleration
  }
})