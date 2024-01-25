"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("702976");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("193865"),
  u = n("963119"),
  d = n("45476"),
  c = n("467475"),
  f = n("256572"),
  h = n("845579"),
  E = n("42203"),
  m = n("27618"),
  p = n("945330"),
  S = n("780571"),
  g = n("304198"),
  _ = n("568734"),
  N = n("654017"),
  T = n("913491"),
  I = n("574073"),
  C = n("359132"),
  A = n("723931"),
  M = n("39331"),
  v = n("68480"),
  R = n("596368"),
  x = n("227439"),
  L = n("862451"),
  O = n("611792"),
  b = n("554372"),
  y = n("49111"),
  j = n("782340"),
  D = n("555821"),
  F = n("877671"),
  U = l.memo(function e(t) {
    var n, l, s;
    let p;
    let {
      channel: g,
      message: D,
      compact: U = !1,
      className: P,
      onContextMenu: w,
      onClick: G,
      disableInteraction: B = !1,
      hasThread: H,
      treatSpam: V
    } = t, Y = y.MessageTypesWithLazyLoadedReferences.has(D.type) ? D.messageReference : void 0, z = (0, r.useStateFromStores)([f.default], () => f.default.getMessageByReference(Y)), K = (0, r.useStateFromStores)([E.default], () => D.type === y.MessageTypes.THREAD_STARTER_MESSAGE && z.state === f.ReferencedMessageState.LOADED ? E.default.getChannel(z.message.channel_id) : null), W = h.InlineAttachmentMedia.useSetting(), Q = h.InlineEmbedMedia.useSetting(), X = h.RenderEmbeds.useSetting(), q = h.GifAutoPlay.useSetting(), Z = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = D.editedTimestamp) && void 0 !== n ? n : D.timestamp).valueOf()), J = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (l = null == g ? void 0 : g.guild_id) && void 0 !== l ? l : "", (null !== (s = D.editedTimestamp) && void 0 !== s ? s : D.timestamp).valueOf()), $ = (0, c.default)(null == g ? void 0 : g.id), {
      disableReactionCreates: ee
    } = (0, C.default)(g), {
      content: et,
      hasSpoilerEmbeds: en
    } = (0, M.default)(D, {
      hideSimpleEmbedContent: Q && X,
      allowList: Z.showListsAndHeaders || J.showListsAndHeaders,
      allowHeading: Z.showListsAndHeaders || J.showListsAndHeaders,
      allowLinks: Z.showMaskedLinks || J.showMaskedLinks,
      previewLinkTarget: Z.showMaskedLinks || J.showMaskedLinks
    }), ea = (0, I.default)(D), el = (0, r.useStateFromStores)([E.default], () => D.hasFlag(y.MessageFlags.HAS_THREAD) && E.default.getChannel(D.id)), es = D.type === y.MessageTypes.THREAD_STARTER_MESSAGE && z.state === f.ReferencedMessageState.LOADED && null != K, ei = !es && void 0 === p, er = (0, v.default)({
      message: D,
      channel: g,
      enabled: ei
    }), eo = (0, u.useShouldRedactExplicitContent)(g.id, D.author.id), eu = (0, d.useShouldRenderReportFalsePositiveButton)(D.id, "inbox_message");
    return es ? (0, a.jsx)(e, {
      ...t,
      message: z.message,
      channel: K,
      hasThread: !1
    }) : (m.default.isBlocked(D.author.id) ? p = j.default.Messages.BLOCKED_MESSAGE_COUNT : (0, N.isSpam)(D) && V && (p = j.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== p) ? (0, a.jsx)(k, {
      className: P,
      compact: U,
      count: 1,
      collapsedReason: p
    }) : (0, a.jsx)(S.default, {
      compact: U,
      className: i(P, {
        [F.ephemeral]: (0, _.hasFlag)(D.flags, y.MessageFlags.EPHEMERAL),
        [F.disableInteraction]: B,
        [F.groupStart]: t.isGroupStart
      }),
      childrenRepliedMessage: (0, b.default)(D, g, Y, z, U),
      childrenHeader: (0, x.default)({
        ...t,
        author: ea,
        guildId: g.guild_id
      }),
      childrenAccessories: (0, a.jsx)(A.MessageAccessories, {
        channel: g,
        message: D,
        hasSpoilerEmbeds: en,
        compact: U,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        disableReactionReads: !1,
        disableReactionCreates: ee,
        disableReactionUpdates: !1,
        renderThreadAccessory: H,
        renderComponentAccessory: !1,
        inlineAttachmentMedia: W,
        inlineEmbedMedia: Q,
        renderEmbeds: X,
        gifAutoPlay: q,
        showListsAndHeaders: Z.showListsAndHeaders || J.showListsAndHeaders,
        showMaskedLinks: Z.showMaskedLinks || J.showMaskedLinks,
        shouldHideMediaOptions: $,
        shouldRedactExplicitContent: eo,
        shouldRenderCtaButton: eu
      }),
      childrenExecutedCommand: (0, O.default)(D, g, U),
      childrenMessageContent: (0, R.default)(t, et),
      childrenSystemMessage: (0, L.default)(t),
      onContextMenu: w,
      onClick: G,
      hasThread: !1 !== H && null != el && D.hasFlag(y.MessageFlags.HAS_THREAD),
      hasReply: D.type === y.MessageTypes.REPLY,
      isSystemMessage: (0, T.default)(D),
      messageRef: er
    })
  });

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
    childrenMessageContent: (0, a.jsx)(g.default, {
      compact: l,
      className: D.blockedSystemMessage,
      iconNode: (0, a.jsx)(p.default, {
        className: D.blockedIcon
      }),
      children: (0, a.jsx)("div", {
        className: D.blockedMessageText,
        children: s.format({
          count: n
        })
      })
    })
  })
}