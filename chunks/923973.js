"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var i = n("392711"),
  r = n.n(i),
  a = n("442837"),
  s = n("131951"),
  o = n("65154");

function l() {
  let {
    enabled: e,
    cameraUnavailable: t
  } = (0, a.useStateFromStoresObject)([s.default], () => {
    var e, t;
    let n = null === (t = null === (e = r()(s.default.getVideoDevices()).values().first()) || void 0 === e ? void 0 : e.disabled) || void 0 === t || t;
    return {
      enabled: s.default.isVideoEnabled(),
      cameraUnavailable: n || !s.default.supports(o.Features.VIDEO)
    }
  });
  return {
    enabled: e,
    cameraUnavailable: t
  }
}