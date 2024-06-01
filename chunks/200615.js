"use strict";
l.r(t), l.d(t, {
  SubscribeNow: function() {
    return u
  }
});
var a = l("735250"),
  s = l("470079"),
  r = l("481060"),
  n = l("906732"),
  i = l("963249"),
  o = l("474936"),
  c = l("289604");
let u = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: l
  } = (0, n.default)(), u = s.useRef(null);
  return (0, a.jsx)(r.Clickable, {
    className: c.subscribeNow,
    innerRef: u,
    onClick: () => {
      (0, i.default)({
        subscriptionTier: o.PremiumSubscriptionSKUs.TIER_2,
        analyticsLocations: l,
        returnRef: u
      })
    },
    children: t
  })
}