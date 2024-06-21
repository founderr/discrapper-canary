n(789020);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(25610),
  u = n(703751),
  d = n(628238),
  E = n(976853),
  _ = n(977683),
  I = n(869765),
  T = n(695346),
  N = n(592125),
  m = n(699516),
  h = n(702346),
  C = n(630388),
  S = n(709054),
  A = n(493892),
  p = n(901461),
  g = n(739566),
  f = n(443877),
  O = n(492593),
  R = n(938353),
  M = n(25015),
  x = n(689674),
  v = n(963550),
  L = n(845080),
  Z = n(295790),
  P = n(145807),
  D = n(56744),
  j = n(981631),
  U = n(689938),
  y = n(429759),
  b = n(105461);

function B(e) {
  let {
    className: t,
    count: n,
    compact: i,
    collapsedReason: l
  } = e;
  return (0, s.jsx)(O.Z, {
    className: t,
    compact: i,
    role: "group",
    childrenMessageContent: (0, s.jsx)(h.Z, {
      compact: i,
      className: y.blockedSystemMessage,
      iconNode: (0, s.jsx)(o.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: y.blockedIcon
      }),
      children: (0, s.jsx)("div", {
        className: y.blockedMessageText,
        children: l.format({
          count: n
        })
      })
    })
  })
}
t.Z = i.memo(function e(t) {
  var n;
  let i;
  let {
    channel: l,
    message: o,
    compact: h = !1,
    className: y,
    onContextMenu: k,
    onClick: G,
    disableInteraction: F = !1,
    hasThread: V,
    treatSpam: w
  } = t, H = j.OBS.has(o.type) ? o.messageReference : void 0, Y = (0, r.e7)([I.Z], () => I.Z.getMessageByReference(H)), K = (0, r.e7)([N.Z], () => o.type === j.uaV.THREAD_STARTER_MESSAGE && Y.state === I.Y.LOADED ? N.Z.getChannel(Y.message.channel_id) : null), W = T.x4.useSetting(), z = T.RS.useSetting(), Q = T.NA.useSetting(), X = T.QK.useSetting(), q = (0, d.A)((null !== (n = o.editedTimestamp) && void 0 !== n ? n : o.timestamp).valueOf()), J = (0, E.Z)(null == l ? void 0 : l.id), {
    disableReactionCreates: $
  } = (0, f.Z)(l), {
    content: ee,
    hasSpoilerEmbeds: et
  } = (0, M.Z)(o, {
    hideSimpleEmbedContent: z && Q,
    allowList: q,
    allowHeading: q,
    allowLinks: !0,
    previewLinkTarget: !0
  }), en = (0, g.ZP)(o), es = (0, r.e7)([N.Z], () => o.hasFlag(j.iLy.HAS_THREAD) && N.Z.getChannel(S.default.castMessageIdAsChannelId(o.id))), ei = o.type === j.uaV.THREAD_STARTER_MESSAGE && Y.state === I.Y.LOADED && null != K, el = !ei && void 0 === i, ea = (0, x.Z)({
    message: o,
    channel: l,
    enabled: el
  }), er = (0, c.V)(l.id, o.author.id), eo = (0, u.r)(o.id), ec = (0, _.Z)(o);
  return ei ? (0, s.jsx)(e, {
    ...t,
    message: Y.message,
    channel: K,
    hasThread: !1
  }) : (m.Z.isBlockedForMessage(o) ? i = U.Z.Messages.BLOCKED_MESSAGE_COUNT : (0, A.DQ)(o) && w && (i = U.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== i) ? (0, s.jsx)(B, {
    className: y,
    compact: h,
    count: 1,
    collapsedReason: i
  }) : (0, s.jsx)(O.Z, {
    compact: h,
    className: a()(y, {
      [b.ephemeral]: (0, C.yE)(o.flags, j.iLy.EPHEMERAL),
      [b.disableInteraction]: F,
      [b.groupStart]: t.isGroupStart
    }),
    childrenRepliedMessage: (0, D.Z)(o, l, H, Y, h),
    childrenHeader: (0, L.Z)({
      ...t,
      author: en,
      guildId: l.guild_id
    }),
    childrenAccessories: (0, s.jsx)(R.BB, {
      channel: l,
      message: o,
      hasSpoilerEmbeds: et,
      compact: h,
      canSuppressEmbeds: !1,
      canDeleteAttachments: !1,
      disableReactionReads: !1,
      disableReactionCreates: $,
      disableReactionUpdates: !1,
      renderThreadAccessory: V,
      renderComponentAccessory: !1,
      inlineAttachmentMedia: W,
      inlineEmbedMedia: z,
      renderEmbeds: Q,
      gifAutoPlay: X,
      poll: ec,
      showListsAndHeaders: q,
      showMaskedLinks: q,
      shouldHideMediaOptions: J,
      shouldRedactExplicitContent: er,
      shouldRenderCtaButton: eo,
      hasInlineForwardButton: !1
    }),
    childrenExecutedCommand: (0, P.Z)(o, l, h),
    childrenMessageContent: (0, v.Z)(t, ee),
    childrenSystemMessage: (0, Z.Z)(t),
    onContextMenu: k,
    onClick: G,
    hasThread: !1 !== V && null != es && o.hasFlag(j.iLy.HAS_THREAD),
    hasReply: o.type === j.uaV.REPLY,
    isSystemMessage: (0, p.Z)(o),
    messageRef: ea
  })
})