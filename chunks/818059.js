"use strict";
t.r(n), t.d(n, {
  default: function() {
    return a
  }
});
var l = t("37983");
t("884691");
var u = t("281071"),
  i = t("77078"),
  o = t("458574"),
  c = t("782340");

function a(e, n, t) {
  return null != e ? (0, o.default)(e, t, n) : (0, l.jsx)(i.MenuItem, {
    id: "channel-copy-link",
    label: c.default.Messages.COPY_LINK,
    action: () => {
      (0, u.copy)(null != n ? n : "")
    }
  })
}