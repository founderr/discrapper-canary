"use strict";
n.r(t), n.d(t, {
  LoginHandoffSource: function() {
    return a
  },
  getLoginHandoffSourceFromRedirectTo: function() {
    return o
  }
});
var s, a, i = n("754688"),
  l = n("981631"),
  r = n("176505");

function o(e) {
  let t = decodeURIComponent(e),
    n = (0, i.tryParseChannelPath)(t);
  return null != n && n.channelId === r.StaticChannelRoute.ROLE_SUBSCRIPTIONS ? "role_subscription" : t === l.Routes.SETTINGS(l.UserSettingsSections.SUBSCRIPTIONS, "role-subscriptions") ? "role_subscription_setting" : void 0
}(s = a || (a = {})).ROLE_SUBSCRIPTION = "role_subscription", s.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"