var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(481060),
  a = n(746916),
  o = n(965638),
  u = n(905423),
  c = n(486472),
  d = n(888369),
  h = n(430824),
  g = n(451478),
  p = n(61634),
  m = n(325257),
  C = n(849249);
t.Z = i.memo(function(e) {
  let {
    guildNode: t,
    lowerBadge: n
  } = e, E = t.id, f = (0, s.e7)([h.Z], () => h.Z.getGuild(E)), _ = (0, a.E)(E), I = (0, s.e7)([g.Z], () => g.Z.isFocused()), N = (0, s.e7)([c.Z], () => c.Z.isUnavailable(E)), Z = (0, u.Z)(e => e.guildId), S = (0, p.Z)(E), {
    badge: x,
    unread: T
  } = (0, s.cj)([d.default], () => ({
    badge: d.default.getMentionCount(E),
    unread: d.default.hasUnread(E)
  })), L = (0, o.Ij)(f) && 0 === x, v = i.useMemo(() => null != n ? n : L ? (0, l.jsx)("div", {
    className: C.pauseBackground,
    children: (0, l.jsx)(r.PauseIcon, {
      size: "custom",
      color: "currentColor",
      className: C.pause,
      width: 10,
      height: 10
    })
  }) : null, [n, L]);
  return (0, l.jsx)(m.Z, {
    ...e,
    guild: f,
    unavailable: N,
    animatable: I,
    selected: Z === E,
    badge: x,
    lowerBadge: v,
    unread: T,
    mediaState: S,
    guildJoinRequestStatus: _
  })
})