n(789020);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(91192),
  o = n(442837),
  c = n(518738),
  u = n(628238),
  d = n(869765),
  E = n(592125),
  _ = n(496675),
  I = n(998951),
  T = n(630388),
  N = n(709054),
  m = n(900164),
  h = n(739566),
  C = n(453687),
  S = n(25015),
  A = n(689674),
  p = n(438075),
  g = n(963550),
  f = n(845080),
  O = n(295790),
  R = n(145807),
  M = n(56744),
  x = n(981631),
  v = n(105461);
t.Z = i.memo(function(e) {
  var t;
  let {
    message: n,
    compact: i = !1,
    className: l,
    onContextMenu: L,
    onClick: Z,
    disableInteraction: P = !1,
    hideSimpleEmbedContent: D = !0,
    channel: j,
    isGroupStart: U,
    animateAvatar: b,
    subscribeToComponentDispatch: y,
    renderThreadAccessory: B,
    trackAnnouncementViews: k = !1,
    ...G
  } = e, F = n.isFirstMessageInForumPost(j), w = (0, u.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), {
    content: V,
    hasSpoilerEmbeds: H
  } = (0, S.Z)(n, {
    hideSimpleEmbedContent: D,
    allowList: F || w,
    allowHeading: F || w,
    allowLinks: !0,
    previewLinkTarget: !0
  }), Y = n.type === x.uaV.REPLY ? n.messageReference : void 0, K = (0, o.e7)([d.Z], () => d.Z.getMessageByReference(Y)), W = (0, r.JA)(n.id), z = (0, h.ZP)(n), Q = (0, o.e7)([E.Z], () => n.hasFlag(x.iLy.HAS_THREAD) && E.Z.getChannel(N.default.castMessageIdAsChannelId(n.id))), q = (0, c.p9)({
    guildId: j.guild_id,
    roleId: z.iconRoleId
  }), X = (0, o.e7)([_.Z], () => _.Z.can(x.Plq.CREATE_INSTANT_INVITE, j)), J = (0, A.Z)({
    message: n,
    channel: j,
    enabled: k
  });
  if ((0, m.Z)(n, X)) return null;
  let $ = (0, C.iG)(n),
    ee = (0, C.Gx)(n);
  return (0, s.jsx)(I.Z, {
    compact: i,
    className: a()(l, {
      [v.ephemeral]: (0, T.yE)(n.flags, x.iLy.EPHEMERAL),
      [v.disableInteraction]: P
    }),
    disableInteraction: P,
    childrenRepliedMessage: (0, M.Z)(n, j, Y, K, i),
    childrenExecutedCommand: (0, R.Z)(n, j, i),
    childrenHeader: (0, f.Z)({
      ...e,
      guildId: j.guild_id,
      author: z,
      roleIcon: q
    }),
    childrenAccessories: e.hideAccessories ? void 0 : (0, p.Q)(e, H),
    childrenMessageContent: (0, g.Z)(e, V),
    childrenSystemMessage: (0, O.Z)(e),
    onContextMenu: L,
    onClick: Z,
    hasThread: B && null != Q && n.hasFlag(x.iLy.HAS_THREAD),
    hasReply: n.type === x.uaV.REPLY,
    "aria-labelledby": $,
    "aria-describedby": ee,
    messageRef: J,
    ...W,
    ...G
  })
})