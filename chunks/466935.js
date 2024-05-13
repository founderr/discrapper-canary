"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("970606"),
  r = n("693546"),
  o = n("826581"),
  u = n("246364"),
  d = n("98493"),
  c = n("703656"),
  f = n("669405"),
  h = n("26290"),
  p = n("434479"),
  m = n("981631"),
  C = n("176505"),
  g = n("689938");

function E(e) {
  let {
    guild: t,
    selected: n
  } = e, E = (0, s.useStateFromStores)([o.default], () => o.default.getSubmittedGuildJoinRequestTotal(t.id)), _ = null != E ? E : 0;
  return a.useEffect(() => {
    r.default.fetchGuildJoinRequests({
      guildId: t.id,
      status: u.GuildJoinRequestApplicationStatuses.SUBMITTED,
      limit: d.MEMBER_APPLICATION_FETCH_LIMIT
    })
  }, [t.id]), (0, l.jsx)(p.BasicChannelRow, {
    id: "application-review-".concat(t.id),
    renderIcon: e => (0, l.jsx)(f.default, {
      className: e,
      width: 24,
      height: 24
    }),
    text: g.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
    selected: n,
    onClick: () => {
      (0, i.trackClanApplicationNavigation)({
        guildId: t.id,
        source: m.AnalyticsSections.CHANNEL_LIST,
        tab: C.StaticChannelRoute.MEMBER_APPLICATIONS
      }), (0, c.transitionTo)(m.Routes.CHANNEL(t.id, C.StaticChannelRoute.MEMBER_APPLICATIONS))
    },
    trailing: _ > 0 ? (0, l.jsx)(h.NumberBadge, {
      count: _
    }) : null
  })
}