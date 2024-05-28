"use strict";
a.r(t), a.d(t, {
  SubscribeNow: function() {
    return u
  }
});
var s = a("735250"),
  r = a("470079"),
  n = a("481060"),
  l = a("906732"),
  o = a("963249"),
  i = a("474936"),
  c = a("289604");
let u = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: a
  } = (0, l.default)(), u = r.useRef(null);
  return (0, s.jsx)(n.Clickable, {
    className: c.subscribeNow,
    innerRef: u,
    onClick: () => {
      (0, o.default)({
        subscriptionTier: i.PremiumSubscriptionSKUs.TIER_2,
        analyticsLocations: a,
        returnRef: u
      })
    },
    children: t
  })
}