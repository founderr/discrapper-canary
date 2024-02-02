"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var a = l("446674"),
  n = l("913144"),
  s = l("773336"),
  r = l("50885"),
  i = l("288207"),
  u = l("439792"),
  o = l("709496");
let d = !1,
  c = !0,
  f = !1;
class m extends a.default.Store {
  initialize() {
    !(!s.isPlatformEmbedded || __OVERLAY__) && r.default.getGPUDriverVersions().then(e => {
      d = (0, o.default)(e), c = (0, i.default)(e), f = (0, u.default)(e), this.emitChange()
    })
  }
  get GPUDriversOutdated() {
    return d
  }
  get canUseHardwareAcceleration() {
    return c
  }
  get problematicGPUDriver() {
    return f
  }
  getState() {
    return {
      GPUDriversOutdated: d,
      canUseHardwareAcceleration: c,
      problematicGPUDriver: f
    }
  }
}
m.displayName = "StreamingCapabilitiesStore";
var S = new m(n.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      streamingCapabilitiesStoreState: t
    } = e;
    d = t.GPUDriversOutdated, c = t.canUseHardwareAcceleration
  }
})