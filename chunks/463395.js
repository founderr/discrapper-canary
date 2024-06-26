"use strict";
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(433517),
  c = n(570140),
  d = n(65154);
let E = "CertifiedDeviceStore",
  I = {},
  T = {},
  h = 0;

function f(e, t, n) {
  let i = T[e];
  return null != i ? n(i) : t
}

function S(e, t) {
  let n = I[e];
  null != n && n.forEach(e => delete T[e.id]), I[e] = t, t.forEach(e => T[e.id] = e)
}
class N extends(o = u.ZP.Store) {
  initialize() {
    let e = _.K.get(E);
    null != e && l().forEach(e, (e, t) => {
      e.forEach(e => {
        "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1)
      }), S(t, e)
    })
  }
  isCertified(e) {
    return null != T[e]
  }
  getCertifiedDevice(e) {
    return T[e]
  }
  getCertifiedDeviceName(e, t) {
    let n = this.getCertifiedDevice(e);
    return null != n ? "".concat(n.vendor.name, " ").concat(n.model.name) : t
  }
  getCertifiedDeviceByType(e) {
    return l().find(T, t => t.type === e)
  }
  isHardwareMute(e) {
    return f(e, !1, e => e.type === d.h7.AUDIO_INPUT && e.hardwareMute)
  }
  hasEchoCancellation(e) {
    return f(e, !1, e => e.type === d.h7.AUDIO_INPUT && e.echoCancellation)
  }
  hasNoiseSuppression(e) {
    return f(e, !1, e => e.type === d.h7.AUDIO_INPUT && e.noiseSuppression)
  }
  hasAutomaticGainControl(e) {
    return f(e, !1, e => e.type === d.h7.AUDIO_INPUT && e.automaticGainControl)
  }
  getVendor(e) {
    return f(e, null, e => e.vendor)
  }
  getModel(e) {
    return f(e, null, e => e.model)
  }
  getRevision() {
    return h
  }
}
s = "CertifiedDeviceStore", (r = "displayName") in(i = N) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new N(c.Z, {
  CERTIFIED_DEVICES_SET: function(e) {
    let {
      applicationId: t,
      devices: n
    } = e;
    S(t, n), _.K.set(E, I), h++
  }
})