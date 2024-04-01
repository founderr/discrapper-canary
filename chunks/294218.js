"use strict";
n.r(t), n("789020");
var s = n("735250"),
  l = n("470079"),
  a = n("803997"),
  i = n.n(a),
  r = n("924826"),
  o = n("442837"),
  u = n("518738"),
  d = n("628238"),
  c = n("869765"),
  E = n("592125"),
  f = n("496675"),
  _ = n("998951"),
  T = n("630388"),
  I = n("709054"),
  m = n("900164"),
  N = n("739566"),
  p = n("453687"),
  S = n("25015"),
  C = n("689674"),
  A = n("438075"),
  h = n("963550"),
  g = n("845080"),
  M = n("295790"),
  O = n("145807"),
  R = n("56744"),
  v = n("981631"),
  L = n("264558");
t.default = l.memo(function(e) {
  var t;
  let {
    message: n,
    compact: l = !1,
    className: a,
    onContextMenu: P,
    onClick: D,
    disableInteraction: x = !1,
    hideSimpleEmbedContent: y = !0,
    channel: U,
    isGroupStart: j,
    animateAvatar: b,
    subscribeToComponentDispatch: G,
    renderThreadAccessory: B,
    trackAnnouncementViews: k = !1,
    ...F
  } = e, w = n.isFirstMessageInForumPost(U), H = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), {
    content: V,
    hasSpoilerEmbeds: Y
  } = (0, S.default)(n, {
    hideSimpleEmbedContent: y,
    allowList: w || H,
    allowHeading: w || H,
    allowLinks: !0,
    previewLinkTarget: !0
  }), K = n.type === v.MessageTypes.REPLY ? n.messageReference : void 0, W = (0, o.useStateFromStores)([c.default], () => c.default.getMessageByReference(K)), z = (0, r.useListItem)(n.id), Q = (0, N.default)(n), q = (0, o.useStateFromStores)([E.default], () => n.hasFlag(v.MessageFlags.HAS_THREAD) && E.default.getChannel(I.default.castMessageIdAsChannelId(n.id))), J = (0, u.useRoleIcon)({
    guildId: U.guild_id,
    roleId: Q.iconRoleId
  }), Z = (0, o.useStateFromStores)([f.default], () => f.default.can(v.Permissions.CREATE_INSTANT_INVITE, U)), X = (0, C.default)({
    message: n,
    channel: U,
    enabled: k
  });
  if ((0, m.default)(n, Z)) return null;
  let $ = (0, p.getMessageAriaLabelledBy)(n),
    ee = (0, p.getMessageAriaDescribedBy)(n);
  return (0, s.jsx)(_.default, {
    compact: l,
    className: i()(a, {
      [L.ephemeral]: (0, T.hasFlag)(n.flags, v.MessageFlags.EPHEMERAL),
      [L.disableInteraction]: x
    }),
    disableInteraction: x,
    childrenRepliedMessage: (0, R.default)(n, U, K, W, l),
    childrenExecutedCommand: (0, O.default)(n, U, l),
    childrenHeader: (0, g.default)({
      ...e,
      guildId: U.guild_id,
      author: Q,
      roleIcon: J
    }),
    childrenAccessories: e.hideAccessories ? void 0 : (0, A.renderSimpleAccessories)(e, Y),
    childrenMessageContent: (0, h.default)(e, V),
    childrenSystemMessage: (0, M.default)(e),
    onContextMenu: P,
    onClick: D,
    hasThread: B && null != q && n.hasFlag(v.MessageFlags.HAS_THREAD),
    hasReply: n.type === v.MessageTypes.REPLY,
    "aria-labelledby": $,
    "aria-describedby": ee,
    messageRef: X,
    ...z,
    ...F
  })
})