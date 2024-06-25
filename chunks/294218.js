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
  m = n(709054),
  N = n(900164),
  h = n(739566),
  C = n(453687),
  S = n(25015),
  A = n(689674),
  g = n(438075),
  p = n(963550),
  f = n(845080),
  R = n(295790),
  O = n(145807),
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
  } = e, F = n.isFirstMessageInForumPost(j), V = (0, u.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), {
    content: w,
    hasSpoilerEmbeds: H
  } = (0, S.Z)(n, {
    hideSimpleEmbedContent: D,
    allowList: F || V,
    allowHeading: F || V,
    allowLinks: !0,
    previewLinkTarget: !0
  }), Y = n.type === x.uaV.REPLY ? n.messageReference : void 0, W = (0, o.e7)([d.Z], () => d.Z.getMessageByReference(Y)), z = (0, r.JA)(n.id), K = (0, h.ZP)(n), Q = (0, o.e7)([E.Z], () => n.hasFlag(x.iLy.HAS_THREAD) && E.Z.getChannel(m.default.castMessageIdAsChannelId(n.id))), X = (0, c.p9)({
    guildId: j.guild_id,
    roleId: K.iconRoleId
  }), q = (0, o.e7)([_.Z], () => _.Z.can(x.Plq.CREATE_INSTANT_INVITE, j)), J = (0, A.Z)({
    message: n,
    channel: j,
    enabled: k
  });
  if ((0, N.Z)(n, q)) return null;
  let $ = (0, C.iG)(n),
    ee = (0, C.Gx)(n);
  return (0, s.jsx)(I.Z, {
    compact: i,
    className: a()(l, {
      [v.ephemeral]: (0, T.yE)(n.flags, x.iLy.EPHEMERAL),
      [v.disableInteraction]: P
    }),
    disableInteraction: P,
    childrenRepliedMessage: (0, M.Z)(n, j, Y, W, i),
    childrenExecutedCommand: (0, O.Z)(n, j, i),
    childrenHeader: (0, f.Z)({
      ...e,
      guildId: j.guild_id,
      author: K,
      roleIcon: X
    }),
    childrenAccessories: e.hideAccessories ? void 0 : (0, g.Q)(e, H),
    childrenMessageContent: (0, p.Z)(e, w),
    childrenSystemMessage: (0, R.Z)(e),
    onContextMenu: L,
    onClick: Z,
    hasThread: B && null != Q && n.hasFlag(x.iLy.HAS_THREAD),
    hasReply: n.type === x.uaV.REPLY,
    "aria-labelledby": $,
    "aria-describedby": ee,
    messageRef: J,
    ...z,
    ...G
  })
})