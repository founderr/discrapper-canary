n.d(t, {
  Z: function() {
    return f
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(481060),
  a = n(970606),
  o = n(693546),
  u = n(826581),
  c = n(246364),
  d = n(98493),
  h = n(703656),
  g = n(669405),
  p = n(434479),
  m = n(981631),
  C = n(176505),
  E = n(689938);

function f(e) {
  let {
    guild: t,
    selected: n
  } = e, f = (0, s.e7)([u.Z], () => u.Z.getSubmittedGuildJoinRequestTotal(t.id)), _ = null != f ? f : 0;
  return i.useEffect(() => {
    o.Z.fetchGuildJoinRequests({
      guildId: t.id,
      status: c.wB.SUBMITTED,
      limit: d.p
    })
  }, [t.id]), (0, l.jsx)(p.m, {
    id: "application-review-".concat(t.id),
    renderIcon: e => (0, l.jsx)(g.Z, {
      className: e,
      width: 24,
      height: 24
    }),
    text: E.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
    selected: n,
    onClick: () => {
      (0, a.Q2)({
        guildId: t.id,
        source: m.jXE.CHANNEL_LIST,
        tab: C.oC.MEMBER_APPLICATIONS
      }), (0, h.uL)(m.Z5c.CHANNEL(t.id, C.oC.MEMBER_APPLICATIONS))
    },
    trailing: _ > 0 ? (0, l.jsx)(r.NumberBadge, {
      count: _
    }) : null
  })
}