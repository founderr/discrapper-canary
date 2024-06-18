"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(689938),
  o = n(12050);

function a() {
  return (0, i.jsx)(r.Tooltip, {
    text: s.Z.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP,
    children: e => (0, i.jsx)("div", {
      className: o.badge,
      ...e,
      children: (0, i.jsx)(r.BellZIcon, {
        color: "currentColor",
        size: "custom",
        width: "1rem",
        height: "1rem"
      })
    })
  })
}