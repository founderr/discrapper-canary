"use strict";
r.r(t), r.d(t, {
  default: function() {
    return h
  }
});
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("481060"),
  c = r("931240"),
  s = r("207796"),
  d = r("242320"),
  u = r("277513");

function h() {
  let e = i.useRef(null);
  return (0, a.jsxs)("div", {
    ref: e,
    className: n()(u.panel, d.panel),
    children: [(0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      onClick: c.resetClanSetup,
      children: "Reset Every Clan Setup State"
    }), (0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      onClick: s.resetClanDiscovery,
      children: "Reset Clan Discovery State"
    })]
  })
}