"use strict";
s.r(t), s.d(t, {
  SubscribeNow: function() {
    return u
  }
});
var a = s("735250"),
  l = s("470079"),
  r = s("481060"),
  n = s("906732"),
  i = s("963249"),
  o = s("474936"),
  c = s("289604");
let u = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: s
  } = (0, n.default)(), u = l.useRef(null);
  return (0, a.jsx)(r.Clickable, {
    className: c.subscribeNow,
    innerRef: u,
    onClick: () => {
      (0, i.default)({
        subscriptionTier: o.PremiumSubscriptionSKUs.TIER_2,
        analyticsLocations: s,
        returnRef: u
      })
    },
    children: t
  })
}