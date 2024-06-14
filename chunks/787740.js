"use strict";
s.r(n), s.d(n, {
  default: function() {
    return i
  }
});
var t = s("735250");
s("470079");
var r = s("481060"),
  a = s("688465"),
  l = s("689938");

function i(e) {
  let {
    className: n
  } = e;
  return (0, t.jsx)(r.Tooltip, {
    text: l.default.Messages.BROADCASTING_BETA_TOOLTIP_TEXT,
    children: e => (0, t.jsx)(a.default, {
      ...e,
      className: n
    })
  })
}