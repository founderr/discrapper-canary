"use strict";
t.r(a), t.d(a, {
  default: function() {
    return s
  }
});
var l = t("735250");
t("470079");
var n = t("481060"),
  i = t("689938"),
  r = t("615410");

function s(e) {
  let {
    count: a
  } = e;
  return (0, l.jsxs)("div", {
    className: r.countContainer,
    children: [(0, l.jsx)("div", {
      className: r.dot
    }), (0, l.jsx)(n.Text, {
      variant: "text-xs/medium",
      color: "header-secondary",
      children: i.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
        count: a
      })
    })]
  })
}