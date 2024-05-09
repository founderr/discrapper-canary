"use strict";
t.r(L), t.d(L, {
  BirthdayActivitiesRouteGuard: function() {
    return r
  }
});
var a = t("735250"),
  C = t("613828"),
  s = t("442837"),
  i = t("594174"),
  l = t("348600"),
  n = t("981631");

function r(e) {
  let {
    children: L
  } = e, t = (0, s.useStateFromStores)([i.default], () => i.default.getCurrentUser()), {
    enabled: r
  } = l.BirthdayActivitiesExperiment.useExperiment({
    location: "1f3236_1"
  }, {
    autoTrackExposure: !0
  });
  return null == t ? null : r ? (0, a.jsx)(a.Fragment, {
    children: L
  }) : (0, a.jsx)(C.Redirect, {
    to: n.Routes.ME
  })
}