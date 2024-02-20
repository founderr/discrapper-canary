"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  s = n("49111");

function l() {
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("920067").then(n.bind(n, "920067"));
    return t => (0, r.jsx)(e, {
      ...t,
      source: {
        page: s.AnalyticsPages.USER_SETTINGS,
        section: s.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
        object: s.AnalyticsObjects.BUTTON_CTA,
        type: s.AnalyticsObjectTypes.BUY
      }
    })
  })
}