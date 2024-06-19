n.d(t, {
  Z: function() {
    return c
  }
}), n(47120), n(724458);
var l = n(442837),
  i = n(592125),
  s = n(496675),
  r = n(306680),
  a = n(9156),
  o = n(709054),
  u = n(231338);

function c(e) {
  return (0, l.cj)([i.Z, r.ZP, a.ZP, s.Z], () => {
    let t = o.default.keys(e);
    return t.reduce((e, t) => {
      let n = i.Z.getChannel(t),
        l = null == n ? void 0 : n.isGuildVocal();
      return e.badge = e.badge + r.ZP.getMentionCount(t), e.unread = e.unread || !l && s.Z.can(u.Pl.VIEW_CHANNEL, n) && r.ZP.hasUnread(t) && !a.ZP.isChannelMuted(null == n ? void 0 : n.getGuildId(), t), e
    }, {
      badge: 0,
      unread: !1
    })
  })
}