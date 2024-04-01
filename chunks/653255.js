"use strict";
n.r(t);
var a, s, l, i, r = n("442837"),
  o = n("570140"),
  u = n("358085"),
  d = n("998502"),
  c = n("869614"),
  f = n("281083"),
  E = n("672598");
let _ = !1,
  h = !0,
  C = !1;
class S extends(i = r.default.Store) {
  initialize() {
    !(!u.isPlatformEmbedded || __OVERLAY__) && d.default.getGPUDriverVersions().then(e => {
      _ = (0, E.default)(e), h = (0, c.default)(e), C = (0, f.default)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return _
  }
  get canUseHardwareAcceleration() {
    return h
  }
  get problematicGPUDriver() {
    return C
  }
  getState() {
    return {
      GPUDriversOutdated: _,
      canUseHardwareAcceleration: h,
      problematicGPUDriver: C
    }
  }
}
l = "StreamingCapabilitiesStore", (s = "displayName") in(a = S) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.default = new S(o.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    _ = t.GPUDriversOutdated, h = t.canUseHardwareAcceleration
  }
})