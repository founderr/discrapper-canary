"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("442837"),
  i = s("201895"),
  l = s("557135"),
  a = s("703656"),
  r = s("592125"),
  u = s("979651"),
  o = s("66999"),
  d = s("981631");

function c(e, t) {
  let s = (0, n.useStateFromStores)([r.default], () => r.default.getChannel(t)),
    {
      needSubscriptionToAccess: c
    } = (0, o.default)(null == s ? void 0 : s.id);
  if (null == s || c) return null;
  let f = s.isGuildVocal(),
    _ = (0, i.default)({
      channel: s
    });
  return {
    navigateToChannel: () => {
      f ? l.default.handleVoiceConnect({
        channel: s,
        connected: u.default.isInChannel(s.id),
        needSubscriptionToAccess: !1,
        routeDirectlyToChannel: !0
      }) : (0, a.transitionTo)(d.Routes.CHANNEL(e, s.id))
    },
    ariaLabel: _
  }
}