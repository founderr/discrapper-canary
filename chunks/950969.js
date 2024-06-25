var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(718528),
  a = n(220444),
  o = n(569471),
  u = n(592125),
  c = n(306680),
  d = n(9156),
  h = n(451478),
  p = n(816779);

function g(e) {
  let t = u.Z.getChannel(e);
  return null != t && null != t.getGuildId() && !(t.isThread() ? o.Z.isMuted(t.id) : d.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, a.d)(t)
}

function m(e) {
  let t = u.Z.getChannel(e);
  if (null == t) return !1;
  let n = t.getGuildId();
  if (null == n) return !1;
  let l = d.ZP.isGuildCollapsed(n),
    i = d.ZP.isChannelMuted(n, t.id);
  return (!l || !i) && c.ZP.getMentionCount(e) > 0
}
t.Z = i.forwardRef(function(e, t) {
  let {
    guildId: n,
    guildChannels: i,
    guildChannelsVersion: a,
    ...o
  } = e, u = (0, r.T)(n, i, a, !1, {
    ignoreRecents: !0
  }), c = (0, s.e7)([h.Z], () => h.Z.isFocused());
  return (0, l.jsx)(p.Z, {
    ref: t,
    ...o,
    isUnread: g,
    isMentioned: m,
    items: u,
    animate: c
  })
})