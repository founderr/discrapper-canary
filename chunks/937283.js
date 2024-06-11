"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("100527"),
  d = n("906732"),
  o = n("613464"),
  u = n("6025"),
  r = n("433355"),
  c = n("430824"),
  E = n("981631"),
  _ = n("94234");

function f(e) {
  let {
    guildId: t
  } = e, n = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
    analyticsLocations: f
  } = (0, d.default)(i.default.MEMBER_SAFETY_PAGE), I = (0, s.useStateFromStores)([r.default], () => r.default.getGuildSidebarState(t), [t]), S = a.useCallback(() => {
    u.default.closeGuildSidebar(t)
  }, [t]);
  return null != n && null != I && null != I ? (0, l.jsx)(d.AnalyticsLocationProvider, {
    value: f,
    children: (0, l.jsx)("div", {
      className: _.__invalid_sidebarContainer,
      style: {
        width: E.DEFAULT_CHAT_SIDEBAR_WIDTH
      },
      children: (0, l.jsx)(o.default, {
        userId: I.details.userId,
        guildId: I.details.guildId,
        onClose: S
      })
    })
  }) : null
}