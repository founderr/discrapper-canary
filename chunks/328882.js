"use strict";
n.r(t), n.d(t, {
  useShouldShowNewOfferBadgeForAprilMarketingMoment: function() {
    return i
  }
});
var a = n("524437"),
  r = n("605236");
let s = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-04_april_marketing_moment_experiment",
  label: "2024 April Marketing Moment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Show announcement modal and badge",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  let t = s.useExperiment({
      location: e
    }).enabled,
    n = (0, r.useIsDismissibleContentDismissed)(a.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE);
  return t && !n
}
t.default = s