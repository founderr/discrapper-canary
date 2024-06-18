"use strict";
var r, o, i, s, l = t(442837),
  c = t(570140),
  u = t(358085),
  a = t(998502),
  d = t(869614),
  I = t(281083),
  f = t(672598);
let m = !1,
  h = !0,
  N = !1;
class v extends(s = l.ZP.Store) {
  initialize() {
    !(!u.isPlatformEmbedded || __OVERLAY__) && a.ZP.getGPUDriverVersions().then(e => {
      m = (0, f.Z)(e), h = (0, d.Z)(e), N = (0, I.Z)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return m
  }
  get canUseHardwareAcceleration() {
    return h
  }
  get problematicGPUDriver() {
    return N
  }
  getState() {
    return {
      GPUDriversOutdated: m,
      canUseHardwareAcceleration: h,
      problematicGPUDriver: N
    }
  }
}
i = "StreamingCapabilitiesStore", (o = "displayName") in(r = v) ? Object.defineProperty(r, o, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = i, n.Z = new v(c.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: n
    } = e;
    m = n.GPUDriversOutdated, h = n.canUseHardwareAcceleration
  }
})