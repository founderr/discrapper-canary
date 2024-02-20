"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var r = n("985622"),
  s = n("356553"),
  i = n("981913"),
  l = n("782340");

function o(e) {
  let {
    isSelfStream: t,
    centerButton: n = !1,
    ...o
  } = e, u = n ? i.CenterControlButton : i.default;
  return (0, a.jsx)(u, {
    label: t ? l.default.Messages.STOP_STREAMING : l.default.Messages.STOP_WATCHING,
    iconComponent: t ? r.default : s.default,
    isActive: !0,
    ...o
  })
}