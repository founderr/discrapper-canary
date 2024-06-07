"use strict";
r.r(t), r.d(t, {
  default: function() {
    return h
  }
});
var a = r("735250"),
  n = r("470079"),
  i = r("120356"),
  l = r.n(i),
  o = r("481060"),
  s = r("931240"),
  c = r("207796"),
  d = r("242320"),
  u = r("277513");

function h() {
  let e = n.useRef(null);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(u.panel, d.panel),
    children: [(0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      onClick: s.resetClanSetup,
      children: "Reset Every Clan Setup State"
    }), (0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      onClick: c.resetClanDiscovery,
      children: "Reset Clan Discovery State"
    })]
  })
}