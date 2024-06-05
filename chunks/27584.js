"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("442837"),
  a = n("846027"),
  l = n("314897"),
  s = n("131951"),
  u = n("981631"),
  d = n("65154");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
    n = (0, i.useStateFromStores)([l.default], () => l.default.getId()),
    r = (0, i.useStateFromStores)([s.default], () => s.default.supports(d.Features.DISABLE_VIDEO) && s.default.isVideoEnabled()),
    o = (0, i.useStateFromStores)([s.default], () => s.default.isLocalVideoDisabled(n, t), [n, t]),
    T = null == e || e === n;
  return [T && (r || o), o, e => {
    let i = e ? u.VideoToggleState.DISABLED : u.VideoToggleState.MANUAL_ENABLED;
    a.default.setDisableLocalVideo(n, i, t)
  }]
}