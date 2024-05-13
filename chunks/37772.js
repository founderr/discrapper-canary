"use strict";
n.r(t), n("789020");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("25610"),
  u = n("703751"),
  d = n("628238"),
  c = n("976853"),
  f = n("977683"),
  h = n("869765"),
  E = n("695346"),
  m = n("592125"),
  p = n("699516"),
  g = n("465670"),
  S = n("998951"),
  N = n("702346"),
  _ = n("630388"),
  T = n("709054"),
  I = n("493892"),
  C = n("901461"),
  A = n("739566"),
  v = n("443877"),
  M = n("938353"),
  R = n("25015"),
  x = n("689674"),
  L = n("963550"),
  O = n("845080"),
  b = n("295790"),
  y = n("145807"),
  j = n("56744"),
  F = n("981631"),
  D = n("689938"),
  U = n("268283"),
  P = n("373947");

function k(e) {
  let {
    className: t,
    count: n,
    compact: l,
    collapsedReason: s
  } = e;
  return (0, a.jsx)(S.default, {
    className: t,
    compact: l,
    role: "group",
    childrenMessageContent: (0, a.jsx)(N.default, {
      compact: l,
      className: U.blockedSystemMessage,
      iconNode: (0, a.jsx)(g.default, {
        className: U.blockedIcon
      }),
      children: (0, a.jsx)("div", {
        className: U.blockedMessageText,
        children: s.format({
          count: n
        })
      })
    })
  })
}
t.default = l.memo(function e(t) {
  var n;
  let l;
  let {
    channel: s,
    message: g,
    compact: N = !1,
    className: U,
    onContextMenu: w,
    onClick: G,
    disableInteraction: B = !1,
    hasThread: H,
    treatSpam: V
  } = t, Y = F.MessageTypesWithLazyLoadedReferences.has(g.type) ? g.messageReference : void 0, z = (0, r.useStateFromStores)([h.default], () => h.default.getMessageByReference(Y)), K = (0, r.useStateFromStores)([m.default], () => g.type === F.MessageTypes.THREAD_STARTER_MESSAGE && z.state === h.ReferencedMessageState.LOADED ? m.default.getChannel(z.message.channel_id) : null), Q = E.InlineAttachmentMedia.useSetting(), W = E.InlineEmbedMedia.useSetting(), X = E.RenderEmbeds.useSetting(), q = E.GifAutoPlay.useSetting(), J = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = g.editedTimestamp) && void 0 !== n ? n : g.timestamp).valueOf()), Z = (0, c.default)(null == s ? void 0 : s.id), {
    disableReactionCreates: $
  } = (0, v.default)(s), {
    content: ee,
    hasSpoilerEmbeds: et
  } = (0, R.default)(g, {
    hideSimpleEmbedContent: W && X,
    allowList: J,
    allowHeading: J,
    allowLinks: !0,
    previewLinkTarget: !0
  }), en = (0, A.default)(g), ea = (0, r.useStateFromStores)([m.default], () => g.hasFlag(F.MessageFlags.HAS_THREAD) && m.default.getChannel(T.default.castMessageIdAsChannelId(g.id))), el = g.type === F.MessageTypes.THREAD_STARTER_MESSAGE && z.state === h.ReferencedMessageState.LOADED && null != K, es = !el && void 0 === l, ei = (0, x.default)({
    message: g,
    channel: s,
    enabled: es
  }), er = (0, o.useShouldRedactExplicitContent)(s.id, g.author.id), eo = (0, u.useShouldRenderReportFalsePositiveButton)(g.id), eu = (0, f.default)(g);
  return el ? (0, a.jsx)(e, {
    ...t,
    message: z.message,
    channel: K,
    hasThread: !1
  }) : (p.default.isBlocked(g.author.id) ? l = D.default.Messages.BLOCKED_MESSAGE_COUNT : (0, I.isSpam)(g) && V && (l = D.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== l) ? (0, a.jsx)(k, {
    className: U,
    compact: N,
    count: 1,
    collapsedReason: l
  }) : (0, a.jsx)(S.default, {
    compact: N,
    className: i()(U, {
      [P.ephemeral]: (0, _.hasFlag)(g.flags, F.MessageFlags.EPHEMERAL),
      [P.disableInteraction]: B,
      [P.groupStart]: t.isGroupStart
    }),
    childrenRepliedMessage: (0, j.default)(g, s, Y, z, N),
    childrenHeader: (0, O.default)({
      ...t,
      author: en,
      guildId: s.guild_id
    }),
    childrenAccessories: (0, a.jsx)(M.MessageAccessories, {
      channel: s,
      message: g,
      hasSpoilerEmbeds: et,
      compact: N,
      canSuppressEmbeds: !1,
      canDeleteAttachments: !1,
      disableReactionReads: !1,
      disableReactionCreates: $,
      disableReactionUpdates: !1,
      renderThreadAccessory: H,
      renderComponentAccessory: !1,
      inlineAttachmentMedia: Q,
      inlineEmbedMedia: W,
      renderEmbeds: X,
      gifAutoPlay: q,
      poll: eu,
      showListsAndHeaders: J,
      showMaskedLinks: J,
      shouldHideMediaOptions: Z,
      shouldRedactExplicitContent: er,
      shouldRenderCtaButton: eo
    }),
    childrenExecutedCommand: (0, y.default)(g, s, N),
    childrenMessageContent: (0, L.default)(t, ee),
    childrenSystemMessage: (0, b.default)(t),
    onContextMenu: w,
    onClick: G,
    hasThread: !1 !== H && null != ea && g.hasFlag(F.MessageFlags.HAS_THREAD),
    hasReply: g.type === F.MessageTypes.REPLY,
    isSystemMessage: (0, C.default)(g),
    messageRef: ei
  })
})