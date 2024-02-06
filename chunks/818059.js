"use strict";
t.r(n), t.d(n, {
  default: function() {
    return s
  }
});
var l = t("37983");
t("884691");
var i = t("281071"),
  u = t("77078"),
  o = t("458574"),
  c = t("782340");

function s(e, n, t) {
  return null != e ? (0, o.default)(e, t, n) : (0, l.jsx)(u.MenuItem, {
    id: "channel-copy-link",
    label: c.default.Messages.COPY_LINK,
    action: () => {
      (0, i.copy)(null != n ? n : "")
    }
  })
}