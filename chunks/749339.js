"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("39154"),
  s = n("757206"),
  u = n("572004"),
  r = n("689938");

function o(e) {
  return u.SUPPORTS_COPY ? (0, a.jsx)(i.MenuItem, {
    id: "copy-text",
    label: r.default.Messages.COPY_TEXT,
    icon: s.default,
    action: () => {
      e = (0, l.default)(e), (0, u.copy)(e.content)
    }
  }) : null
}