n(789020);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(91192),
  o = n(442837),
  c = n(518738),
  u = n(628238),
  d = n(869765),
  _ = n(592125),
  E = n(496675),
  I = n(630388),
  m = n(709054),
  T = n(900164),
  h = n(739566),
  N = n(492593),
  f = n(453687),
  C = n(25015),
  p = n(689674),
  g = n(438075),
  S = n(963550),
  A = n(845080),
  M = n(295790),
  R = n(145807),
  O = n(56744),
  x = n(981631),
  v = n(848509);
t.Z = a.memo(function(e) {
  var t, n;
  let {
message: a,
compact: s = !1,
className: Z,
onContextMenu: L,
onClick: P,
hideSimpleEmbedContent: D = !0,
channel: b,
isGroupStart: j,
animateAvatar: U,
subscribeToComponentDispatch: y,
renderThreadAccessory: B,
trackAnnouncementViews: k = !1,
...G
  } = e, F = a.type === x.uaV.POLL_RESULT || null !== (t = e.disableInteraction) && void 0 !== t && t, w = a.isFirstMessageInForumPost(b), V = (0, u.A)((null !== (n = a.editedTimestamp) && void 0 !== n ? n : a.timestamp).valueOf()), {
content: H,
hasSpoilerEmbeds: Y
  } = (0, C.Z)(a, {
hideSimpleEmbedContent: D,
allowList: w || V,
allowHeading: w || V,
allowLinks: !0,
previewLinkTarget: !0
  }), W = a.type === x.uaV.REPLY ? a.messageReference : void 0, K = (0, o.e7)([d.Z], () => d.Z.getMessageByReference(W)), z = (0, l.JA)(a.id), Q = (0, h.ZP)(a), q = (0, o.e7)([_.Z], () => a.hasFlag(x.iLy.HAS_THREAD) && _.Z.getChannel(m.default.castMessageIdAsChannelId(a.id))), X = (0, c.p9)({
guildId: b.guild_id,
roleId: Q.iconRoleId
  }), J = (0, o.e7)([E.Z], () => E.Z.can(x.Plq.CREATE_INSTANT_INVITE, b)), $ = (0, p.Z)({
message: a,
channel: b,
enabled: k
  });
  if ((0, T.Z)(a, J))
return null;
  let ee = (0, f.iG)(a),
et = (0, f.Gx)(a);
  return (0, i.jsx)(N.Z, {
compact: s,
className: r()(Z, {
  [v.ephemeral]: (0, I.yE)(a.flags, x.iLy.EPHEMERAL),
  [v.disableInteraction]: F
}),
disableInteraction: F,
childrenRepliedMessage: (0, O.Z)(a, b, W, K, s),
childrenExecutedCommand: (0, R.Z)(a, b, s),
childrenHeader: (0, A.Z)({
  ...e,
  guildId: b.guild_id,
  author: Q,
  roleIcon: X
}),
childrenAccessories: e.hideAccessories ? void 0 : (0, g.Q)(e, Y),
childrenMessageContent: (0, S.Z)(e, H),
childrenSystemMessage: (0, M.Z)({
  ...e,
  disableInteraction: F
}),
onContextMenu: L,
onClick: P,
hasThread: B && null != q && a.hasFlag(x.iLy.HAS_THREAD),
hasReply: a.type === x.uaV.REPLY,
'aria-labelledby': ee,
'aria-describedby': et,
messageRef: $,
...z,
...G
  });
});