n(789020);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(91192),
  o = n(442837),
  c = n(518738),
  d = n(628238),
  u = n(869765),
  _ = n(592125),
  E = n(496675),
  I = n(998951),
  m = n(630388),
  T = n(709054),
  h = n(900164),
  N = n(739566),
  f = n(453687),
  p = n(25015),
  C = n(689674),
  g = n(438075),
  S = n(963550),
  A = n(845080),
  R = n(295790),
  x = n(145807),
  O = n(56744),
  M = n(981631),
  v = n(105461);
t.Z = a.memo(function(e) {
  var t;
  let {
    message: n,
    compact: a = !1,
    className: s,
    onContextMenu: L,
    onClick: Z,
    disableInteraction: P = !1,
    hideSimpleEmbedContent: b = !0,
    channel: D,
    isGroupStart: j,
    animateAvatar: U,
    subscribeToComponentDispatch: y,
    renderThreadAccessory: B,
    trackAnnouncementViews: k = !1,
    ...G
  } = e, F = n.isFirstMessageInForumPost(D), w = (0, d.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), {
    content: V,
    hasSpoilerEmbeds: H
  } = (0, p.Z)(n, {
    hideSimpleEmbedContent: b,
    allowList: F || w,
    allowHeading: F || w,
    allowLinks: !0,
    previewLinkTarget: !0
  }), Y = n.type === M.uaV.REPLY ? n.messageReference : void 0, W = (0, o.e7)([u.Z], () => u.Z.getMessageByReference(Y)), z = (0, r.JA)(n.id), K = (0, N.ZP)(n), Q = (0, o.e7)([_.Z], () => n.hasFlag(M.iLy.HAS_THREAD) && _.Z.getChannel(T.default.castMessageIdAsChannelId(n.id))), q = (0, c.p9)({
    guildId: D.guild_id,
    roleId: K.iconRoleId
  }), X = (0, o.e7)([E.Z], () => E.Z.can(M.Plq.CREATE_INSTANT_INVITE, D)), J = (0, C.Z)({
    message: n,
    channel: D,
    enabled: k
  });
  if ((0, h.Z)(n, X)) return null;
  let $ = (0, f.iG)(n),
    ee = (0, f.Gx)(n);
  return (0, i.jsx)(I.Z, {
    compact: a,
    className: l()(s, {
      [v.ephemeral]: (0, m.yE)(n.flags, M.iLy.EPHEMERAL),
      [v.disableInteraction]: P
    }),
    disableInteraction: P,
    childrenRepliedMessage: (0, O.Z)(n, D, Y, W, a),
    childrenExecutedCommand: (0, x.Z)(n, D, a),
    childrenHeader: (0, A.Z)({
      ...e,
      guildId: D.guild_id,
      author: K,
      roleIcon: q
    }),
    childrenAccessories: e.hideAccessories ? void 0 : (0, g.Q)(e, H),
    childrenMessageContent: (0, S.Z)(e, V),
    childrenSystemMessage: (0, R.Z)(e),
    onContextMenu: L,
    onClick: Z,
    hasThread: B && null != Q && n.hasFlag(M.iLy.HAS_THREAD),
    hasReply: n.type === M.uaV.REPLY,
    "aria-labelledby": $,
    "aria-describedby": ee,
    messageRef: J,
    ...z,
    ...G
  })
})