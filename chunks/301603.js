"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("446674"),
  l = n("629109"),
  u = n("271938"),
  i = n("42887"),
  d = n("49111"),
  r = n("353927");

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.MediaEngineContextTypes.DEFAULT,
    n = (0, a.useStateFromStores)([u.default], () => u.default.getId()),
    s = (0, a.useStateFromStores)([i.default], () => i.default.supports(r.Features.DISABLE_VIDEO) && i.default.isVideoEnabled()),
    o = (0, a.useStateFromStores)([i.default], () => i.default.isLocalVideoDisabled(n, t), [n, t]),
    c = null == e || e === n;
  return [c && (s || o), o, e => {
    let a = e ? d.VideoToggleState.DISABLED : d.VideoToggleState.MANUAL_ENABLED;
    l.default.setDisableLocalVideo(n, a, t)
  }]
}