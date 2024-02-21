"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
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
  f = n("985883"),
  h = n("256572"),
  E = n("845579"),
  m = n("42203"),
  p = n("27618"),
  S = n("945330"),
  g = n("780571"),
  N = n("304198"),
  _ = n("568734"),
  T = n("299039"),
  I = n("654017"),
  C = n("913491"),
  A = n("574073"),
  M = n("359132"),
  v = n("723931"),
  x = n("39331"),
  R = n("68480"),
  L = n("596368"),
  O = n("227439"),
  b = n("862451"),
  y = n("611792"),
  j = n("554372"),
  F = n("49111"),
  D = n("782340"),
  U = n("864604"),
  k = n("5762"),
  P = l.memo(function e(t) {
    var n, l, s;
    let S;
    let {
      channel: N,
      message: U,
      compact: P = !1,
      className: G,
      onContextMenu: B,
      onClick: H,
      disableInteraction: V = !1,
      hasThread: Y,
      treatSpam: K
    } = t, z = F.MessageTypesWithLazyLoadedReferences.has(U.type) ? U.messageReference : void 0, Q = (0, r.useStateFromStores)([h.default], () => h.default.getMessageByReference(z)), W = (0, r.useStateFromStores)([m.default], () => U.type === F.MessageTypes.THREAD_STARTER_MESSAGE && Q.state === h.ReferencedMessageState.LOADED ? m.default.getChannel(Q.message.channel_id) : null), X = E.InlineAttachmentMedia.useSetting(), q = E.InlineEmbedMedia.useSetting(), Z = E.RenderEmbeds.useSetting(), J = E.GifAutoPlay.useSetting(), $ = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = U.editedTimestamp) && void 0 !== n ? n : U.timestamp).valueOf()), ee = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (l = null == N ? void 0 : N.guild_id) && void 0 !== l ? l : "", (null !== (s = U.editedTimestamp) && void 0 !== s ? s : U.timestamp).valueOf()), et = (0, c.default)(null == N ? void 0 : N.id), {
      disableReactionCreates: en
    } = (0, M.default)(N), {
      content: ea,
      hasSpoilerEmbeds: el
    } = (0, x.default)(U, {
      hideSimpleEmbedContent: q && Z,
      allowList: $.showListsAndHeaders || ee.showListsAndHeaders,
      allowHeading: $.showListsAndHeaders || ee.showListsAndHeaders,
      allowLinks: $.showMaskedLinks || ee.showMaskedLinks,
      previewLinkTarget: $.showMaskedLinks || ee.showMaskedLinks
    }), es = (0, A.default)(U), ei = (0, r.useStateFromStores)([m.default], () => U.hasFlag(F.MessageFlags.HAS_THREAD) && m.default.getChannel(T.default.castMessageIdAsChannelId(U.id))), er = U.type === F.MessageTypes.THREAD_STARTER_MESSAGE && Q.state === h.ReferencedMessageState.LOADED && null != W, eo = !er && void 0 === S, eu = (0, R.default)({
      message: U,
      channel: N,
      enabled: eo
    }), ed = (0, u.useShouldRedactExplicitContent)(N.id, U.author.id), ec = (0, d.useShouldRenderReportFalsePositiveButton)(U.id, "inbox_message"), ef = (0, f.default)(U);
    return er ? (0, a.jsx)(e, {
      ...t,
      message: Q.message,
      channel: W,
      hasThread: !1
    }) : (p.default.isBlocked(U.author.id) ? S = D.default.Messages.BLOCKED_MESSAGE_COUNT : (0, I.isSpam)(U) && K && (S = D.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== S) ? (0, a.jsx)(w, {
      className: G,
      compact: P,
      count: 1,
      collapsedReason: S
    }) : (0, a.jsx)(g.default, {
      compact: P,
      className: i(G, {
        [k.ephemeral]: (0, _.hasFlag)(U.flags, F.MessageFlags.EPHEMERAL),
        [k.disableInteraction]: V,
        [k.groupStart]: t.isGroupStart
      }),
      childrenRepliedMessage: (0, j.default)(U, N, z, Q, P),
      childrenHeader: (0, O.default)({
        ...t,
        author: es,
        guildId: N.guild_id
      }),
      childrenAccessories: (0, a.jsx)(v.MessageAccessories, {
        channel: N,
        message: U,
        hasSpoilerEmbeds: el,
        compact: P,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        disableReactionReads: !1,
        disableReactionCreates: en,
        disableReactionUpdates: !1,
        renderThreadAccessory: Y,
        renderComponentAccessory: !1,
        inlineAttachmentMedia: X,
        inlineEmbedMedia: q,
        renderEmbeds: Z,
        gifAutoPlay: J,
        poll: ef,
        showListsAndHeaders: $.showListsAndHeaders || ee.showListsAndHeaders,
        showMaskedLinks: $.showMaskedLinks || ee.showMaskedLinks,
        shouldHideMediaOptions: et,
        shouldRedactExplicitContent: ed,
        shouldRenderCtaButton: ec
      }),
      childrenExecutedCommand: (0, y.default)(U, N, P),
      childrenMessageContent: (0, L.default)(t, ea),
      childrenSystemMessage: (0, b.default)(t),
      onContextMenu: B,
      onClick: H,
      hasThread: !1 !== Y && null != ei && U.hasFlag(F.MessageFlags.HAS_THREAD),
      hasReply: U.type === F.MessageTypes.REPLY,
      isSystemMessage: (0, C.default)(U),
      messageRef: eu
    })
  });

function w(e) {
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
    childrenMessageContent: (0, a.jsx)(N.default, {
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