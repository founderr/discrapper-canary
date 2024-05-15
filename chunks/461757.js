"use strict";
t.r(n), t.d(n, {
  default: function() {
    return i
  }
});
var a = t("735250");
t("470079");
var u = t("852229"),
  o = t("481060"),
  l = t("109764"),
  s = t("689938");

function i(e, n, t) {
  return null != e ? (0, l.default)(e, t, n) : (0, a.jsx)(o.MenuItem, {
    id: "channel-copy-link",
    label: s.default.Messages.COPY_LINK,
    action: () => {
      (0, u.copy)(null != n ? n : "")
    }
  })
}