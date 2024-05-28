"use strict";
n.r(t);
var a, s, l, i, r = n("442837"),
  o = n("570140"),
  u = n("358085"),
  d = n("998502"),
  c = n("869614"),
  f = n("281083"),
  E = n("672598");
let C = !1,
  h = !0,
  _ = !1;
class S extends(i = r.default.Store) {
  initialize() {
    !(!u.isPlatformEmbedded || __OVERLAY__) && d.default.getGPUDriverVersions().then(e => {
      C = (0, E.default)(e), h = (0, c.default)(e), _ = (0, f.default)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return C
  }
  get canUseHardwareAcceleration() {
    return h
  }
  get problematicGPUDriver() {
    return _
  }
  getState() {
    return {
      GPUDriversOutdated: C,
      canUseHardwareAcceleration: h,
      problematicGPUDriver: _
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
    C = t.GPUDriversOutdated, h = t.canUseHardwareAcceleration
  }
})