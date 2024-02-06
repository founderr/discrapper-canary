"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("446674"),
  a = n("629109"),
  i = n("271938"),
  l = n("42887"),
  r = n("49111"),
  d = n("353927");

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
    n = (0, u.useStateFromStores)([i.default], () => i.default.getId()),
    o = (0, u.useStateFromStores)([l.default], () => l.default.supports(d.Features.DISABLE_VIDEO) && l.default.isVideoEnabled()),
    s = (0, u.useStateFromStores)([l.default], () => l.default.isLocalVideoDisabled(n, t), [n, t]),
    c = null == e || e === n;
  return [c && (o || s), s, e => {
    let u = e ? r.VideoToggleState.DISABLED : r.VideoToggleState.MANUAL_ENABLED;
    a.default.setDisableLocalVideo(n, u, t)
  }]
}