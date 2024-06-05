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
  F = n("56744"),
  D = n("981631"),
  j = n("689938"),
  U = n("268283"),
  P = n("373947");

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
      className: U.blockedSystemMessage,
      iconNode: (0, a.jsx)(S.default, {
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
    message: S,
    compact: _ = !1,
    className: U,
    onContextMenu: w,
    onClick: G,
    disableInteraction: B = !1,
    hasThread: H,
    treatSpam: V
  } = t, Y = D.MessageTypesWithLazyLoadedReferences.has(S.type) ? S.messageReference : void 0, K = (0, r.useStateFromStores)([h.default], () => h.default.getMessageByReference(Y)), z = (0, r.useStateFromStores)([m.default], () => S.type === D.MessageTypes.THREAD_STARTER_MESSAGE && K.state === h.ReferencedMessageState.LOADED ? m.default.getChannel(K.message.channel_id) : null), Q = E.InlineAttachmentMedia.useSetting(), W = E.InlineEmbedMedia.useSetting(), X = E.RenderEmbeds.useSetting(), q = E.GifAutoPlay.useSetting(), Z = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = S.editedTimestamp) && void 0 !== n ? n : S.timestamp).valueOf()), J = (0, c.default)(null == s ? void 0 : s.id), {
    disableReactionCreates: $
  } = (0, v.default)(s), {
    content: ee,
    hasSpoilerEmbeds: et
  } = (0, R.default)(S, {
    hideSimpleEmbedContent: W && X,
    allowList: Z,
    allowHeading: Z,
    allowLinks: !0,
    previewLinkTarget: !0
  }), en = (0, A.default)(S), ea = (0, r.useStateFromStores)([m.default], () => S.hasFlag(D.MessageFlags.HAS_THREAD) && m.default.getChannel(T.default.castMessageIdAsChannelId(S.id))), el = S.type === D.MessageTypes.THREAD_STARTER_MESSAGE && K.state === h.ReferencedMessageState.LOADED && null != z, es = !el && void 0 === l, ei = (0, x.default)({
    message: S,
    channel: s,
    enabled: es
  }), er = (0, o.useShouldRedactExplicitContent)(s.id, S.author.id), eo = (0, u.useShouldRenderReportFalsePositiveButton)(S.id), eu = (0, f.default)(S);
  return el ? (0, a.jsx)(e, {
    ...t,
    message: K.message,
    channel: z,
    hasThread: !1
  }) : (p.default.isBlocked(S.author.id) ? l = j.default.Messages.BLOCKED_MESSAGE_COUNT : (0, I.isSpam)(S) && V && (l = j.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== l) ? (0, a.jsx)(k, {
    className: U,
    compact: _,
    count: 1,
    collapsedReason: l
  }) : (0, a.jsx)(g.default, {
    compact: _,
    className: i()(U, {
      [P.ephemeral]: (0, N.hasFlag)(S.flags, D.MessageFlags.EPHEMERAL),
      [P.disableInteraction]: B,
      [P.groupStart]: t.isGroupStart
    }),
    childrenRepliedMessage: (0, F.default)(S, s, Y, K, _),
    childrenHeader: (0, O.default)({
      ...t,
      author: en,
      guildId: s.guild_id
    }),
    childrenAccessories: (0, a.jsx)(M.MessageAccessories, {
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
      inlineAttachmentMedia: Q,
      inlineEmbedMedia: W,
      renderEmbeds: X,
      gifAutoPlay: q,
      poll: eu,
      showListsAndHeaders: Z,
      showMaskedLinks: Z,
      shouldHideMediaOptions: J,
      shouldRedactExplicitContent: er,
      shouldRenderCtaButton: eo,
      hasInlineForwardButton: !1
    }),
    childrenExecutedCommand: (0, y.default)(S, s, _),
    childrenMessageContent: (0, L.default)(t, ee),
    childrenSystemMessage: (0, b.default)(t),
    onContextMenu: w,
    onClick: G,
    hasThread: !1 !== H && null != ea && S.hasFlag(D.MessageFlags.HAS_THREAD),
    hasReply: S.type === D.MessageTypes.REPLY,
    isSystemMessage: (0, C.default)(S),
    messageRef: ei
  })
})