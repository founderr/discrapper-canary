"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("100527"),
  r = s("906732"),
  u = s("252618"),
  o = s("598077"),
  d = s("430824"),
  c = s("693546"),
  E = s("863249"),
  I = s("328977"),
  T = s("208257"),
  f = s("853486"),
  R = s("689938"),
  _ = s("589005");
t.default = function(e) {
  let {
    guildId: t
  } = e, {
    analyticsLocations: s
  } = (0, r.default)(n.default.GUILD_MEMBER_APPLICATION_REVIEW), S = (0, I.useSelectedGuildJoinRequest)({
    guildId: t
  }), {
    user: N
  } = null != S ? S : {}, A = l.useMemo(() => null != N ? new o.default(N) : null, [N]), m = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(t), [t]);
  return (0, u.usePageTitle)({
    subsection: R.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
    location: null == m ? void 0 : m.name
  }), l.useEffect(() => {
    E.default.fetchVerificationForm(t)
  }, [t]), (0, a.jsxs)(r.AnalyticsLocationProvider, {
    value: s,
    children: [(0, a.jsx)("div", {
      className: _.content,
      children: (0, a.jsx)(T.default, {
        guildId: t
      })
    }), null != S && null != m && null != A && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: _.sidebarSeparator
      }), (0, a.jsx)("section", {
        className: _.sidebar,
        children: (0, a.jsx)(f.default, {
          guild: m,
          guildJoinRequest: S,
          guildJoinRequestUser: A,
          onClose: () => c.default.setSelectedGuildJoinRequest(t, null)
        })
      })]
    })]
  })
}