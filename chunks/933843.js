"use strict";
n.d(t, {
  F4: function() {
    return c
  },
  mc: function() {
    return E
  },
  vw: function() {
    return d
  }
});
var i = n(594174),
  r = n(111361),
  s = n(736871),
  o = n(114064),
  a = n(1163),
  l = n(474936),
  u = n(37113);

function _() {
  let e = i.default.getCurrentUser();
  return null != e && !(0, r.I5)(e, l.p9.TIER_1)
}
let c = () => {
    let {
      inPerksDemosExperiment: e
    } = s.Z.getCurrentConfig({
      location: "shouldFetchPerksDemos"
    }, {
      autoTrackExposure: !1
    }), {
      enabled: t
    } = a.Z.getCurrentConfig({
      location: "shouldFetchPerksDemos"
    }, {
      autoTrackExposure: !1
    });
    return _() && o.Z.shouldFetch() && e && t
  },
  d = e => _() && o.Z.shouldActivate(e),
  E = (e, t) => e === u.LY.RESOLUTION_720 && t !== u.ws.FPS_60