"use strict";
n.r(e), n.d(e, {
  TrackedCardDetails: function() {
    return u
  }
});
var i = n("735250"),
  r = n("470079"),
  l = n("512100"),
  a = n("906732"),
  s = n("626135"),
  o = n("981631");

function u(t) {
  let {
    appId: e,
    skuId: n,
    ...u
  } = t, {
    analyticsLocations: d
  } = (0, a.default)();
  return r.useEffect(() => {
    s.default.track(o.AnalyticEvents.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
      application_id: e,
      sku_id: n,
      location_stack: d
    })
  }, [d, e, n]), (0, i.jsx)(l.CardDetails, {
    ...u
  })
}