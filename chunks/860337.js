"use strict";
t.r(r), t.d(r, {
  default: function() {
    return u
  }
});
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("481060"),
  c = t("931240"),
  s = t("696310"),
  d = t("893048");

function u() {
  let e = i.useRef(null);
  return (0, a.jsx)("div", {
    ref: e,
    className: n()(d.panel, s.panel),
    children: (0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      onClick: c.resetClanSetup,
      children: "Reset Every Clan Setup State"
    })
  })
}