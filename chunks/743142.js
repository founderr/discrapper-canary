n.d(t, {
  F: function() {
    return s
  },
  L: function() {
    return l
  }
});
var r, s, i = n(754688),
  a = n(981631),
  o = n(176505);

function l(e) {
  let t = decodeURIComponent(e),
    n = (0, i.Qj)(t);
  return null != n && n.channelId === o.oC.ROLE_SUBSCRIPTIONS ? "role_subscription" : t === a.Z5c.SETTINGS(a.oAB.SUBSCRIPTIONS, "role-subscriptions") ? "role_subscription_setting" : void 0
}(r = s || (s = {})).ROLE_SUBSCRIPTION = "role_subscription", r.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"