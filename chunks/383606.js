"use strict";
n.r(t), n.d(t, {
  trackModViewOpened: function() {
    return u
  }
}), n("884691");
var l = n("812204"),
  a = n("716241"),
  s = n("599110"),
  i = n("789150"),
  r = n("49111");

function u(e, t, n) {
  let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.default.MEMBER_SAFETY_PAGE,
    o = {
      guild_id: e,
      target_user_id: t,
      subpanel_name: i.ModViewPanelNameMap[n],
      location: u,
      ...(0, a.collectGuildAnalyticsMetadata)(e)
    };
  return s.default.track(r.AnalyticEvents.GUILD_MOD_VIEW_OPENED, o)
}