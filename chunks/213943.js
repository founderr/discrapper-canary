"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("561288"),
  s = n("945330"),
  i = n("981913"),
  r = n("782340");

function u(e) {
  let {
    channel: t,
    ...n
  } = e;
  return (0, l.jsx)(i.CenterControlButton, {
    ...n,
    iconComponent: s.default,
    label: r.default.Messages.DISMISS,
    onClick: () => a.default.stopRinging(t.id)
  })
}