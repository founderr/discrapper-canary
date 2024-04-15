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
  S = n("465670"),
  g = n("998951"),
  _ = n("702346"),
  N = n("630388"),
  I = n("709054"),
  T = n("493892"),
  C = n("901461"),
  A = n("739566"),
  v = n("443877"),
  R = n("938353"),
  x = n("25015"),
  M = n("689674"),
  L = n("963550"),
  b = n("845080"),
  O = n("295790"),
  y = n("145807"),
  j = n("56744"),
  D = n("981631"),
  F = n("689938"),
  P = n("331225"),
  U = n("264558");

function k(e) {
  let {
    className: t,
    count: n,
    compact: l,
    collapsedReason: s
  } = e;
  return (0, a.jsx)(g.default, {
    className: t,
    compact: l,
    role: "group",
    childrenMessageContent: (0, a.jsx)(_.default, {
      compact: l,
      className: P.blockedSystemMessage,
      iconNode: (0, a.jsx)(S.default, {
        className: P.blockedIcon
      }),
      children: (0, a.jsx)("div", {
        className: P.blockedMessageText,
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
    message: S,
    compact: _ = !1,
    className: P,
    onContextMenu: w,
    onClick: G,
    disableInteraction: B = !1,
    hasThread: H,
    treatSpam: V
  } = t, Y = D.MessageTypesWithLazyLoadedReferences.has(S.type) ? S.messageReference : void 0, z = (0, r.useStateFromStores)([h.default], () => h.default.getMessageByReference(Y)), K = (0, r.useStateFromStores)([m.default], () => S.type === D.MessageTypes.THREAD_STARTER_MESSAGE && z.state === h.ReferencedMessageState.LOADED ? m.default.getChannel(z.message.channel_id) : null), W = E.InlineAttachmentMedia.useSetting(), Q = E.InlineEmbedMedia.useSetting(), X = E.RenderEmbeds.useSetting(), q = E.GifAutoPlay.useSetting(), J = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = S.editedTimestamp) && void 0 !== n ? n : S.timestamp).valueOf()), Z = (0, c.default)(null == s ? void 0 : s.id), {
    disableReactionCreates: $
  } = (0, v.default)(s), {
    content: ee,
    hasSpoilerEmbeds: et
  } = (0, x.default)(S, {
    hideSimpleEmbedContent: Q && X,
    allowList: J,
    allowHeading: J,
    allowLinks: !0,
    previewLinkTarget: !0
  }), en = (0, A.default)(S), ea = (0, r.useStateFromStores)([m.default], () => S.hasFlag(D.MessageFlags.HAS_THREAD) && m.default.getChannel(I.default.castMessageIdAsChannelId(S.id))), el = S.type === D.MessageTypes.THREAD_STARTER_MESSAGE && z.state === h.ReferencedMessageState.LOADED && null != K, es = !el && void 0 === l, ei = (0, M.default)({
    message: S,
    channel: s,
    enabled: es
  }), er = (0, o.useShouldRedactExplicitContent)(s.id, S.author.id), eo = (0, u.useShouldRenderReportFalsePositiveButton)(S.id), eu = (0, f.default)(S);
  return el ? (0, a.jsx)(e, {
    ...t,
    message: z.message,
    channel: K,
    hasThread: !1
  }) : (p.default.isBlocked(S.author.id) ? l = F.default.Messages.BLOCKED_MESSAGE_COUNT : (0, T.isSpam)(S) && V && (l = F.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== l) ? (0, a.jsx)(k, {
    className: P,
    compact: _,
    count: 1,
    collapsedReason: l
  }) : (0, a.jsx)(g.default, {
    compact: _,
    className: i()(P, {
      [U.ephemeral]: (0, N.hasFlag)(S.flags, D.MessageFlags.EPHEMERAL),
      [U.disableInteraction]: B,
      [U.groupStart]: t.isGroupStart
    }),
    childrenRepliedMessage: (0, j.default)(S, s, Y, z, _),
    childrenHeader: (0, b.default)({
      ...t,
      author: en,
      guildId: s.guild_id
    }),
    childrenAccessories: (0, a.jsx)(R.MessageAccessories, {
      channel: s,
      message: S,
      hasSpoilerEmbeds: et,
      compact: _,
      canSuppressEmbeds: !1,
      canDeleteAttachments: !1,
      disableReactionReads: !1,
      disableReactionCreates: $,
      disableReactionUpdates: !1,
      renderThreadAccessory: H,
      renderComponentAccessory: !1,
      inlineAttachmentMedia: W,
      inlineEmbedMedia: Q,
      renderEmbeds: X,
      gifAutoPlay: q,
      poll: eu,
      showListsAndHeaders: J,
      showMaskedLinks: J,
      shouldHideMediaOptions: Z,
      shouldRedactExplicitContent: er,
      shouldRenderCtaButton: eo
    }),
    childrenExecutedCommand: (0, y.default)(S, s, _),
    childrenMessageContent: (0, L.default)(t, ee),
    childrenSystemMessage: (0, O.default)(t),
    onContextMenu: w,
    onClick: G,
    hasThread: !1 !== H && null != ea && S.hasFlag(D.MessageFlags.HAS_THREAD),
    hasReply: S.type === D.MessageTypes.REPLY,
    isSystemMessage: (0, C.default)(S),
    messageRef: ei
  })
})