"use strict";
n.r(t), n("789020");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("924826"),
  o = n("442837"),
  u = n("518738"),
  d = n("628238"),
  c = n("869765"),
  f = n("592125"),
  E = n("496675"),
  _ = n("998951"),
  m = n("630388"),
  T = n("709054"),
  I = n("900164"),
  p = n("739566"),
  h = n("453687"),
  N = n("25015"),
  S = n("689674"),
  C = n("438075"),
  g = n("963550"),
  A = n("845080"),
  M = n("295790"),
  R = n("145807"),
  v = n("56744"),
  O = n("981631"),
  x = n("373947");
t.default = a.memo(function(e) {
  var t;
  let {
    message: n,
    compact: a = !1,
    className: l,
    onContextMenu: L,
    onClick: D,
    disableInteraction: P = !1,
    hideSimpleEmbedContent: y = !0,
    channel: U,
    isGroupStart: j,
    animateAvatar: b,
    subscribeToComponentDispatch: F,
    renderThreadAccessory: B,
    trackAnnouncementViews: G = !1,
    ...k
  } = e, w = n.isFirstMessageInForumPost(U), H = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), {
    content: V,
    hasSpoilerEmbeds: Y
  } = (0, N.default)(n, {
    hideSimpleEmbedContent: y,
    allowList: w || H,
    allowHeading: w || H,
    allowLinks: !0,
    previewLinkTarget: !0
  }), K = n.type === O.MessageTypes.REPLY ? n.messageReference : void 0, W = (0, o.useStateFromStores)([c.default], () => c.default.getMessageByReference(K)), z = (0, r.useListItem)(n.id), Q = (0, p.default)(n), q = (0, o.useStateFromStores)([f.default], () => n.hasFlag(O.MessageFlags.HAS_THREAD) && f.default.getChannel(T.default.castMessageIdAsChannelId(n.id))), X = (0, u.useRoleIcon)({
    guildId: U.guild_id,
    roleId: Q.iconRoleId
  }), Z = (0, o.useStateFromStores)([E.default], () => E.default.can(O.Permissions.CREATE_INSTANT_INVITE, U)), J = (0, S.default)({
    message: n,
    channel: U,
    enabled: G
  });
  if ((0, I.default)(n, Z)) return null;
  let $ = (0, h.getMessageAriaLabelledBy)(n),
    ee = (0, h.getMessageAriaDescribedBy)(n);
  return (0, s.jsx)(_.default, {
    compact: a,
    className: i()(l, {
      [x.ephemeral]: (0, m.hasFlag)(n.flags, O.MessageFlags.EPHEMERAL),
      [x.disableInteraction]: P
    }),
    disableInteraction: P,
    childrenRepliedMessage: (0, v.default)(n, U, K, W, a),
    childrenExecutedCommand: (0, R.default)(n, U, a),
    childrenHeader: (0, A.default)({
      ...e,
      guildId: U.guild_id,
      author: Q,
      roleIcon: X
    }),
    childrenAccessories: e.hideAccessories ? void 0 : (0, C.renderSimpleAccessories)(e, Y),
    childrenMessageContent: (0, g.default)(e, V),
    childrenSystemMessage: (0, M.default)(e),
    onContextMenu: L,
    onClick: D,
    hasThread: B && null != q && n.hasFlag(O.MessageFlags.HAS_THREAD),
    hasReply: n.type === O.MessageTypes.REPLY,
    "aria-labelledby": $,
    "aria-describedby": ee,
    messageRef: J,
    ...z,
    ...k
  })
})