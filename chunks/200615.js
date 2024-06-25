"use strict";
n.d(t, {
  F: function() {
    return d
  }
});
var r = n(735250),
  a = n(470079),
  i = n(481060),
  o = n(906732),
  s = n(963249),
  c = n(474936),
  l = n(799381);
let d = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: n
  } = (0, o.ZP)(), d = a.useRef(null);
  return (0, r.jsx)(i.Clickable, {
    className: l.subscribeNow,
    innerRef: d,
    onClick: () => {
      (0, s.Z)({
        subscriptionTier: c.Si.TIER_2,
        analyticsLocations: n,
        returnRef: d
      })
    },
    children: t
  })
}