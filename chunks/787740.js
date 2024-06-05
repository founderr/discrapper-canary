"use strict";
n.r(s), n.d(s, {
  default: function() {
    return i
  }
});
var t = n("735250");
n("470079");
var a = n("481060"),
  r = n("688465"),
  l = n("689938");

function i(e) {
  let {
    className: s
  } = e;
  return (0, t.jsx)(a.Tooltip, {
    text: l.default.Messages.BROADCASTING_BETA_TOOLTIP_TEXT,
    children: e => (0, t.jsx)(r.default, {
      ...e,
      className: s
    })
  })
}