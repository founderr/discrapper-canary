"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("970606"),
  o = n("693546"),
  u = n("826581"),
  d = n("246364"),
  c = n("98493"),
  f = n("703656"),
  h = n("669405"),
  m = n("434479"),
  C = n("981631"),
  p = n("176505"),
  g = n("689938");

function E(e) {
  let {
    guild: t,
    selected: n
  } = e, E = (0, s.useStateFromStores)([u.default], () => u.default.getSubmittedGuildJoinRequestTotal(t.id)), S = null != E ? E : 0;
  return a.useEffect(() => {
    o.default.fetchGuildJoinRequests({
      guildId: t.id,
      status: d.GuildJoinRequestApplicationStatuses.SUBMITTED,
      limit: c.MEMBER_APPLICATION_FETCH_LIMIT
    })
  }, [t.id]), (0, l.jsx)(m.BasicChannelRow, {
    id: "application-review-".concat(t.id),
    renderIcon: e => (0, l.jsx)(h.default, {
      className: e,
      width: 24,
      height: 24
    }),
    text: g.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
    selected: n,
    onClick: () => {
      (0, r.trackClanApplicationNavigation)({
        guildId: t.id,
        source: C.AnalyticsSections.CHANNEL_LIST,
        tab: p.StaticChannelRoute.MEMBER_APPLICATIONS
      }), (0, f.transitionTo)(C.Routes.CHANNEL(t.id, p.StaticChannelRoute.MEMBER_APPLICATIONS))
    },
    trailing: S > 0 ? (0, l.jsx)(i.NumberBadge, {
      count: S
    }) : null
  })
}