"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var s = l("735250");
l("470079");
var a = l("481060"),
  n = l("981631");

function r() {
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e("38047").then(l.bind(l, "975863"));
    return t => (0, s.jsx)(e, {
      ...t,
      source: {
        page: n.AnalyticsPages.USER_SETTINGS,
        section: n.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
        object: n.AnalyticsObjects.BUTTON_CTA,
        type: n.AnalyticsObjectTypes.BUY
      }
    })
  })
}