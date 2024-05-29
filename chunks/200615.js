"use strict";
a.r(t), a.d(t, {
  SubscribeNow: function() {
    return u
  }
});
var l = a("735250"),
  s = a("470079"),
  r = a("481060"),
  n = a("906732"),
  i = a("963249"),
  o = a("474936"),
  c = a("289604");
let u = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: a
  } = (0, n.default)(), u = s.useRef(null);
  return (0, l.jsx)(r.Clickable, {
    className: c.subscribeNow,
    innerRef: u,
    onClick: () => {
      (0, i.default)({
        subscriptionTier: o.PremiumSubscriptionSKUs.TIER_2,
        analyticsLocations: a,
        returnRef: u
      })
    },
    children: t
  })
}