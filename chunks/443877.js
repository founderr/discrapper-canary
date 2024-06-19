n.d(t, {
  Z: function() {
    return m
  }
}), n(47120);
var i = n(442837),
  s = n(715903),
  a = n(71619),
  l = n(41776),
  o = n(665906),
  r = n(271383),
  u = n(607744),
  c = n(496675),
  d = n(432376),
  h = n(981631);

function m(e) {
  let t = null == e ? void 0 : e.guild_id,
    n = (0, i.e7)([u.Z], () => null == t || u.Z.canChatInGuild(t), [t]),
    m = (0, i.e7)([l.Z], () => null != t && l.Z.isLurking(t), [t]),
    p = (0, i.e7)([r.ZP], () => null != t && r.ZP.isCurrentUserGuest(t), [t]),
    g = (0, i.e7)([c.Z], () => n && c.Z.can(h.Plq.ADD_REACTIONS, e), [n, e]),
    T = (0, s.ux)(t),
    [, f] = (0, a.AB)(t),
    v = (0, o.$R)(e);
  return null == e ? {
    disableReactionReads: !0,
    disableReactionCreates: !0,
    disableReactionUpdates: !0,
    isLurking: !1,
    isGuest: !1,
    isPendingMember: !1
  } : {
    ...(0, d.Z)({
      channel: e,
      canChat: n,
      renderReactions: !0,
      canAddNewReactions: g,
      isLurking: m,
      isGuest: p,
      communicationDisabled: f,
      isActiveChannelOrUnarchivableThread: v,
      isAutomodQuarantined: T
    }),
    isLurking: m,
    isGuest: p,
    isPendingMember: !1
  }
}