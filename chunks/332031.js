"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
});
var a = i("735250");
i("470079");
var n = i("442837"),
  l = i("481060"),
  d = i("655922"),
  u = i("158776"),
  s = i("981631"),
  o = i("689938");

function r(e) {
  let t = (0, n.useStateFromStores)([u.default], () => (0, d.default)(u.default.findActivity(e, e => e.type === s.ActivityTypes.STREAMING)), [e]);
  return null == t ? null : (0, a.jsx)(l.MenuItem, {
    id: "watch-stream",
    label: o.default.Messages.WATCH_STREAM,
    action: () => window.open(t, "_blank")
  })
}