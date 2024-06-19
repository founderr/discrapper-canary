n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(239091),
  r = n(246364),
  a = n(937111),
  o = n(914010),
  u = n(451478),
  c = n(325257),
  d = n(674552),
  h = n(981631);

function g(e, t) {
  (0, s.jW)(e, async () => {
    let {
      default: e
    } = await n.e("6368").then(n.bind(n, 987999));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}

function p(e) {
  let {
    guildNode: t
  } = e, n = t.id, s = (0, i.e7)([a.Z], () => a.Z.getRequest(n)), p = (0, i.e7)([a.Z], () => a.Z.getJoinRequestGuild(n), [n]), m = (0, i.e7)([u.Z], () => u.Z.isFocused()), C = (0, i.e7)([o.Z], () => o.Z.getGuildId());
  return null == p ? null : (0, l.jsx)(c.Z, {
    guildNode: t,
    guild: p,
    animatable: m,
    draggable: !1,
    selected: n === C,
    preloadOnClick: !1,
    contextMenu: g,
    lowerBadge: (null == s ? void 0 : s.applicationStatus) === r.wB.REJECTED ? (0, d.jt)({
      guildJoinRequestStatus: s.applicationStatus
    }) : void 0,
    route: h.Z5c.GUILD_MEMBER_VERIFICATION(n)
  })
}