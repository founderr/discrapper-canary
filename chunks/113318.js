"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("442837"),
  a = n("201895"),
  s = n("557135"),
  l = n("703656"),
  r = n("592125"),
  u = n("979651"),
  o = n("66999"),
  d = n("981631");

function c(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(t)),
    {
      needSubscriptionToAccess: c
    } = (0, o.default)(null == n ? void 0 : n.id);
  if (null == n || c) return null;
  let f = n.isGuildVocal(),
    E = (0, a.default)({
      channel: n
    });
  return {
    navigateToChannel: () => {
      f ? s.default.handleVoiceConnect({
        channel: n,
        connected: u.default.isInChannel(n.id),
        needSubscriptionToAccess: !1,
        routeDirectlyToChannel: !0
      }) : (0, l.transitionTo)(d.Routes.CHANNEL(e, n.id))
    },
    ariaLabel: E
  }
}