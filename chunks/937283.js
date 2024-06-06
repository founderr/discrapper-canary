"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("100527"),
  d = n("906732"),
  o = n("613464"),
  r = n("6025"),
  u = n("433355"),
  c = n("430824"),
  f = n("981631"),
  E = n("94234");

function _(e) {
  let {
    guildId: t
  } = e, n = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
    analyticsLocations: _
  } = (0, d.default)(i.default.MEMBER_SAFETY_PAGE), h = (0, s.useStateFromStores)([u.default], () => u.default.getGuildSidebarState(t), [t]), I = l.useCallback(() => {
    r.default.closeGuildSidebar(t)
  }, [t]);
  return null != n && null != h && null != h ? (0, a.jsx)(d.AnalyticsLocationProvider, {
    value: _,
    children: (0, a.jsx)("div", {
      className: E.__invalid_sidebarContainer,
      style: {
        width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
      },
      children: (0, a.jsx)(o.default, {
        userId: h.details.userId,
        guildId: h.details.guildId,
        onClose: I
      })
    })
  }) : null
}