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
  N = n("568734"),
  _ = n("654017"),
  T = n("913491"),
  I = n("574073"),
  C = n("359132"),
  A = n("723931"),
  M = n("39331"),
  v = n("68480"),
  x = n("596368"),
  R = n("227439"),
  L = n("862451"),
  O = n("611792"),
  b = n("554372"),
  y = n("49111"),
  j = n("782340"),
  F = n("555821"),
  D = n("877671"),
  U = l.memo(function e(t) {
    var n, l, s;
    let p;
    let {
      channel: g,
      message: F,
      compact: U = !1,
      className: P,
      onContextMenu: w,
      onClick: G,
      disableInteraction: H = !1,
      hasThread: B,
      treatSpam: V
    } = t, Y = y.MessageTypesWithLazyLoadedReferences.has(F.type) ? F.messageReference : void 0, z = (0, r.useStateFromStores)([f.default], () => f.default.getMessageByReference(Y)), K = (0, r.useStateFromStores)([E.default], () => F.type === y.MessageTypes.THREAD_STARTER_MESSAGE && z.state === f.ReferencedMessageState.LOADED ? E.default.getChannel(z.message.channel_id) : null), Q = h.InlineAttachmentMedia.useSetting(), W = h.InlineEmbedMedia.useSetting(), X = h.RenderEmbeds.useSetting(), q = h.GifAutoPlay.useSetting(), Z = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = F.editedTimestamp) && void 0 !== n ? n : F.timestamp).valueOf()), J = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (l = null == g ? void 0 : g.guild_id) && void 0 !== l ? l : "", (null !== (s = F.editedTimestamp) && void 0 !== s ? s : F.timestamp).valueOf()), $ = (0, c.default)(null == g ? void 0 : g.id), {
      disableReactionCreates: ee
    } = (0, C.default)(g), {
      content: et,
      hasSpoilerEmbeds: en
    } = (0, M.default)(F, {
      hideSimpleEmbedContent: W && X,
      allowList: Z.showListsAndHeaders || J.showListsAndHeaders,
      allowHeading: Z.showListsAndHeaders || J.showListsAndHeaders,
      allowLinks: Z.showMaskedLinks || J.showMaskedLinks,
      previewLinkTarget: Z.showMaskedLinks || J.showMaskedLinks
    }), ea = (0, I.default)(F), el = (0, r.useStateFromStores)([E.default], () => F.hasFlag(y.MessageFlags.HAS_THREAD) && E.default.getChannel(F.id)), es = F.type === y.MessageTypes.THREAD_STARTER_MESSAGE && z.state === f.ReferencedMessageState.LOADED && null != K, ei = !es && void 0 === p, er = (0, v.default)({
      message: F,
      channel: g,
      enabled: ei
    }), eo = (0, u.useShouldRedactExplicitContent)(g.id, F.author.id), eu = (0, d.useShouldRenderReportFalsePositiveButton)(F.id, "inbox_message");
    return es ? (0, a.jsx)(e, {
      ...t,
      message: z.message,
      channel: K,
      hasThread: !1
    }) : (m.default.isBlocked(F.author.id) ? p = j.default.Messages.BLOCKED_MESSAGE_COUNT : (0, _.isSpam)(F) && V && (p = j.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== p) ? (0, a.jsx)(k, {
      className: P,
      compact: U,
      count: 1,
      collapsedReason: p
    }) : (0, a.jsx)(S.default, {
      compact: U,
      className: i(P, {
        [D.ephemeral]: (0, N.hasFlag)(F.flags, y.MessageFlags.EPHEMERAL),
        [D.disableInteraction]: H,
        [D.groupStart]: t.isGroupStart
      }),
      childrenRepliedMessage: (0, b.default)(F, g, Y, z, U),
      childrenHeader: (0, R.default)({
        ...t,
        author: ea,
        guildId: g.guild_id
      }),
      childrenAccessories: (0, a.jsx)(A.MessageAccessories, {
        channel: g,
        message: F,
        hasSpoilerEmbeds: en,
        compact: U,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        disableReactionReads: !1,
        disableReactionCreates: ee,
        disableReactionUpdates: !1,
        renderThreadAccessory: B,
        renderComponentAccessory: !1,
        inlineAttachmentMedia: Q,
        inlineEmbedMedia: W,
        renderEmbeds: X,
        gifAutoPlay: q,
        showListsAndHeaders: Z.showListsAndHeaders || J.showListsAndHeaders,
        showMaskedLinks: Z.showMaskedLinks || J.showMaskedLinks,
        shouldHideMediaOptions: $,
        shouldRedactExplicitContent: eo,
        shouldRenderCtaButton: eu
      }),
      childrenExecutedCommand: (0, O.default)(F, g, U),
      childrenMessageContent: (0, x.default)(t, et),
      childrenSystemMessage: (0, L.default)(t),
      onContextMenu: w,
      onClick: G,
      hasThread: !1 !== B && null != el && F.hasFlag(y.MessageFlags.HAS_THREAD),
      hasReply: F.type === y.MessageTypes.REPLY,
      isSystemMessage: (0, T.default)(F),
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
      className: F.blockedSystemMessage,
      iconNode: (0, a.jsx)(p.default, {
        className: F.blockedIcon
      }),
      children: (0, a.jsx)("div", {
        className: F.blockedMessageText,
        children: s.format({
          count: n
        })
      })
    })
  })
}