"use strict";
s.d(t, {
  F: function() {
    return u
  }
});
var n = s(735250),
  r = s(470079),
  a = s(481060),
  i = s(906732),
  l = s(963249),
  o = s(474936),
  c = s(799381);
let u = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: s
  } = (0, i.ZP)(), u = r.useRef(null);
  return (0, n.jsx)(a.Clickable, {
    className: c.subscribeNow,
    innerRef: u,
    onClick: () => {
      (0, l.Z)({
        subscriptionTier: o.Si.TIER_2,
        analyticsLocations: s,
        returnRef: u
      })
    },
    children: t
  })
}