"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("887657"),
  s = n("981913"),
  i = n("782340");

function r(e) {
  let {
    channel: t,
    centerButton: n = !1,
    ...r
  } = e, o = n ? s.CenterControlButton : s.default, u = t.isManaged() || !t.isPrivate(), d = u ? i.default.Messages.CONNECT : i.default.Messages.JOIN_CALL;
  return (0, l.jsx)(o, {
    ...r,
    iconComponent: a.default,
    label: d
  })
}