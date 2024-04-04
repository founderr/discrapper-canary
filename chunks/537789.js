"use strict";
a.r(e), a.d(e, {
  BirthdayActivitiesRouteGuard: function() {
    return H
  }
});
var C = a("735250"),
  t = a("613828"),
  s = a("442837"),
  l = a("594174"),
  i = a("348600"),
  n = a("981631");

function H(L) {
  let {
    children: e
  } = L, a = (0, s.useStateFromStores)([l.default], () => l.default.getCurrentUser()), {
    enabled: H
  } = i.BirthdayActivitiesExperiment.useExperiment({
    location: "1f3236_1"
  }, {
    autoTrackExposure: !0
  });
  return null == a ? null : H ? (0, C.jsx)(C.Fragment, {
    children: e
  }) : (0, C.jsx)(t.Redirect, {
    to: n.Routes.ME
  })
}