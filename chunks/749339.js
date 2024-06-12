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
  r = n("572004"),
  u = n("689938");

function o(e) {
  return r.SUPPORTS_COPY ? (0, a.jsx)(i.MenuItem, {
    id: "copy-text",
    label: u.default.Messages.COPY_TEXT,
    icon: s.default,
    action: () => {
      e = (0, l.default)(e), (0, r.copy)(e.content)
    }
  }) : null
}