"use strict";
s.r(t), s.d(t, {
  SubscribeNow: function() {
    return c
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  r = s("906732"),
  i = s("963249"),
  o = s("474936"),
  u = s("289604");
let c = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: s
  } = (0, r.default)(), c = l.useRef(null);
  return (0, a.jsx)(n.Clickable, {
    className: u.subscribeNow,
    innerRef: c,
    onClick: () => {
      (0, i.default)({
        subscriptionTier: o.PremiumSubscriptionSKUs.TIER_2,
        analyticsLocations: s,
        returnRef: c
      })
    },
    children: t
  })
}