"use strict";
a.r(t), a.d(t, {
  useShouldShowNewOfferBadgeForAprilMarketingMoment: function() {
    return s
  }
});
var n = a("524437"),
  i = a("605236");
let r = (0, a("818083").createExperiment)({
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

function s(e) {
  let t = r.useExperiment({
      location: e
    }).enabled,
    a = (0, i.useIsDismissibleContentDismissed)(n.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE);
  return t && !a
}
t.default = r