"use strict";
i.r(t), i.d(t, {
  useShouldShowNewOfferBadgeForAprilMarketingMoment: function() {
    return a
  }
});
var n = i("524437"),
  r = i("605236");
let s = (0, i("818083").createExperiment)({
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

function a(e) {
  let t = s.useExperiment({
      location: e
    }).enabled,
    i = (0, r.useIsDismissibleContentDismissed)(n.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE);
  return t && !i
}
t.default = s