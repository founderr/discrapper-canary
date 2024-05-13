"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var a = l("735250");
l("470079");
var n = l("442837"),
  u = l("481060"),
  d = l("655922"),
  s = l("158776"),
  r = l("981631"),
  i = l("689938");

function o(e) {
  let t = (0, n.useStateFromStores)([s.default], () => (0, d.default)(s.default.findActivity(e, e => e.type === r.ActivityTypes.STREAMING)), [e]);
  return null == t ? null : (0, a.jsx)(u.MenuItem, {
    id: "watch-stream",
    label: i.default.Messages.WATCH_STREAM,
    action: () => window.open(t, "_blank")
  })
}