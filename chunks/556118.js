"use strict";
n.r(t), n.d(t, {
  getElementFromMessage: function() {
    return Y
  },
  ThreadStarterChatMessage: function() {
    return K
  },
  default: function() {
    return X
  }
}), n("702976");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("974667"),
  d = n("446674"),
  c = n("77078"),
  f = n("206230"),
  h = n("193865"),
  C = n("619259"),
  p = n("405645"),
  m = n("685841"),
  E = n("256572"),
  g = n("393414"),
  S = n("845579"),
  _ = n("42203"),
  T = n("836417"),
  A = n("780571"),
  M = n("568734"),
  I = n("299039"),
  N = n("154864"),
  v = n("913491"),
  L = n("574073"),
  R = n("738352"),
  x = n("865343"),
  y = n("380986"),
  O = n("85470"),
  D = n("969706"),
  P = n("39331"),
  j = n("68480"),
  b = n("115859"),
  F = n("922177"),
  H = n("789790"),
  U = n("227984"),
  k = n("82080"),
  B = n("535993"),
  w = n("144553"),
  G = n("862451"),
  V = n("894488"),
  W = n("49111"),
  z = n("782340"),
  Z = n("5762");

function Y(e, t, n) {
  return e.getElementById((0, N.getMessageDOMId)(t, n))
}

function K(e) {
  var t;
  let {
    id: n,
    message: a,
    message: {
      messageReference: l
    },
    compact: r = !1,
    className: c
  } = e;
  o(a.type === W.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let {
    ...f
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(l)), {
    popouts: C,
    setPopout: p
  } = (0, D.default)(a.id, V.DEFAULT_POPOUTS), m = (0, L.default)(a), g = (0, x.getMessageAriaLabelledBy)(a), S = (0, x.getMessageAriaDescribedBy)(a);
  return a.type === W.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === E.ReferencedMessageState.LOADED ? (0, s.jsx)(q, {
    ...e,
    message: h.message,
    groupId: h.message.id
  }) : (0, s.jsx)(A.default, {
    ...f,
    id: n,
    compact: r,
    className: i(c, {
      [Z.message]: !0,
      [Z.cozyMessage]: !r,
      [Z.systemMessage]: !0,
      [Z.groupStart]: !0
    }),
    childrenHeader: (0, U.default)({
      messageProps: e,
      setPopout: p,
      messagePopouts: C,
      replyReference: l,
      author: m
    }),
    childrenSystemMessage: (0, G.default)(e),
    childrenMessageContent: null,
    "aria-labelledby": g,
    "aria-describedby": S,
    hasThread: !1
  })
}

function q(e) {
  var t, n, l, r, o;
  let {
    id: C,
    message: m,
    message: {
      id: _,
      channel_id: T
    },
    channel: {
      guild_id: I
    },
    compact: N = !1,
    className: R,
    groupId: j
  } = e, F = m.type === W.MessageTypes.REPLY ? m.messageReference : void 0, {
    onFocus: H,
    ...B
  } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
    isFocused: Y,
    handleFocus: K,
    handleBlur: q
  } = (0, y.useFocusInside)(H), {
    popouts: X,
    selected: J,
    setPopout: Q
  } = (0, D.default)(m.id, V.DEFAULT_POPOUTS), $ = S.InlineEmbedMedia.useSetting(), ee = S.RenderEmbeds.useSetting(), et = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(F)), en = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = m.editedTimestamp) && void 0 !== l ? l : m.timestamp).valueOf()), es = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = m.editedTimestamp) && void 0 !== o ? o : m.timestamp).valueOf()), {
    handleMouseEnter: ea,
    handleMouseLeave: el,
    isHovered: ei
  } = (0, y.useHoveredMessage)(j, m.author.id, J), er = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eo = J || er && Y, eu = eo || ei, {
    content: ed,
    hasSpoilerEmbeds: ec
  } = (0, P.default)(m, {
    hideSimpleEmbedContent: $ && ee,
    isInteracting: eu,
    formatInline: !1,
    allowList: en.showListsAndHeaders || es.showListsAndHeaders,
    allowHeading: en.showListsAndHeaders || es.showListsAndHeaders,
    allowLinks: en.showMaskedLinks || es.showMaskedLinks,
    previewLinkTarget: en.showMaskedLinks || es.showMaskedLinks
  }), ef = (0, O.default)(_, T, er), eh = (0, L.default)(m), eC = (0, x.getMessageAriaLabelledBy)(m, j), ep = (0, x.getMessageAriaDescribedBy)(m), em = (0, k.default)(e, ed, !1), eE = a.useCallback(() => (0, g.transitionToGuild)(I, T, _), [I, T, _]), eg = (0, p.useRoleIcon)({
    guildId: I,
    roleId: eh.iconRoleId
  });
  return (0, s.jsxs)("div", {
    className: Z.quotedChatMessage,
    children: [(0, s.jsx)(c.Clickable, {
      className: Z.jump,
      onClick: eE,
      "aria-label": z.default.Messages.JUMP,
      children: z.default.Messages.JUMP
    }), (0, s.jsx)(A.default, {
      ...B,
      id: C,
      compact: N,
      className: i(R, {
        [Z.message]: !0,
        [Z.cozyMessage]: !N,
        [Z.mentioned]: m.mentioned && !(0, v.default)(m),
        [Z.ephemeral]: (0, M.hasFlag)(m.flags, W.MessageFlags.EPHEMERAL),
        [Z.systemMessage]: (0, v.default)(m),
        [Z.groupStart]: m.id === j || m.type === W.MessageTypes.REPLY,
        [Z.selected]: eo
      }),
      zalgo: !0,
      onKeyDown: ef,
      onFocus: K,
      onBlur: q,
      childrenRepliedMessage: (0, w.default)(e, Q, X, F, et),
      childrenHeader: (0, U.default)({
        messageProps: e,
        setPopout: Q,
        messagePopouts: X,
        replyReference: F,
        author: eh,
        repliedMessage: et,
        roleIcon: eg
      }),
      childrenAccessories: (0, b.default)({
        channelMessageProps: e,
        hasSpoilerEmbeds: ec,
        isInteracting: eu,
        renderThreadAccessory: !1,
        renderComponentAccessory: !1,
        renderSuppressEmbeds: !1
      }),
      childrenSystemMessage: (0, G.default)(e),
      childrenMessageContent: em,
      onMouseMove: ea,
      onMouseLeave: el,
      "aria-labelledby": eC,
      "aria-describedby": ep,
      hasThread: !1
    })]
  })
}
var X = a.memo(function(e) {
  var t, n, l;
  let r;
  let {
    id: g,
    message: N,
    message: {
      id: Y
    },
    channel: K,
    channel: {
      id: q
    },
    compact: X = !1,
    className: J,
    flashKey: Q,
    groupId: $,
    renderContentOnly: ee
  } = e;
  o(N.type !== W.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let et = W.MessageTypesWithLazyLoadedReferences.has(N.type) ? N.messageReference : void 0,
    {
      onFocus: en,
      ...es
    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
    ea = S.InlineEmbedMedia.useSetting(),
    el = S.RenderEmbeds.useSetting(),
    ei = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(et)),
    {
      popouts: er,
      selected: eo,
      setPopout: eu
    } = (0, D.default)(N.id, V.DEFAULT_POPOUTS),
    ed = (0, y.useContextMenuMessage)(N, K, eu),
    ec = (0, y.useClickMessage)(N, K),
    {
      handleMouseEnter: ef,
      handleMouseLeave: eh,
      hasHovered: eC,
      isHovered: ep
    } = (0, y.useHoveredMessage)($, N.author.id, eo),
    {
      isFocused: em,
      hasFocused: eE,
      handleFocus: eg,
      handleBlur: eS
    } = (0, y.useFocusInside)(en),
    e_ = (0, d.useStateFromStores)([T.default], () => T.default.isEditing(q, Y), [q, Y]),
    eT = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
    eA = eo || e_ || eT && em,
    eM = eA || ep,
    eI = (0, d.useStateFromStores)([_.default], () => N.hasFlag(W.MessageFlags.HAS_THREAD) && _.default.getChannel(I.default.castMessageIdAsChannelId(N.id))),
    eN = N.isFirstMessageInForumPost(K),
    ev = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = N.editedTimestamp) && void 0 !== n ? n : N.timestamp).valueOf()),
    eL = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(K.guild_id, (null !== (l = N.editedTimestamp) && void 0 !== l ? l : N.timestamp).valueOf()),
    {
      content: eR,
      hasSpoilerEmbeds: ex
    } = (0, P.default)(N, {
      hideSimpleEmbedContent: ea && el,
      isInteracting: eM,
      formatInline: !1,
      allowList: eN || ev.showListsAndHeaders || eL.showListsAndHeaders,
      allowHeading: eN || ev.showListsAndHeaders || eL.showListsAndHeaders,
      allowLinks: ev.showMaskedLinks || eL.showMaskedLinks,
      previewLinkTarget: ev.showMaskedLinks || eL.showMaskedLinks
    }),
    ey = (0, O.default)(Y, q, eT),
    eO = (0, L.default)(N),
    eD = (0, d.useStateFromStores)([m.default], () => m.default.getPendingReply(q)),
    eP = function(e) {
      let t = a.useRef(e);
      return a.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(Q),
    ej = (0, p.useRoleIcon)({
      guildId: K.guild_id,
      roleId: eO.iconRoleId
    }),
    eb = (0, x.getMessageAriaLabelledBy)(N, $),
    eF = (0, x.getMessageAriaDescribedBy)(N),
    eH = (0, d.useStateFromStores)([C.default], () => C.default.getMessage(Y), [Y]),
    eU = (0, j.default)({
      message: N,
      channel: K
    }),
    ek = null != eH;
  r = N.type === W.MessageTypes.CUSTOM_GIFT ? "" : !e_ && ek ? (0, F.default)(e, eR) : (0, k.default)(e, eR, e_);
  let eB = N.id === $,
    ew = (0, s.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, s.jsx)("li", {
        id: g,
        className: Z.messageListItem,
        "aria-setsize": -1,
        children: (0, s.jsx)(A.default, {
          ...es,
          "aria-setsize": -1,
          "aria-roledescription": z.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": eb,
          "aria-describedby": eF,
          onFocus: eg,
          onBlur: eS,
          onContextMenu: ed,
          onKeyDown: ey,
          onClick: ec,
          compact: X,
          contentOnly: ee,
          className: i(J, {
            [Z.message]: !0,
            [Z.cozyMessage]: !X,
            [Z.mentioned]: N.mentioned && !(0, v.default)(N),
            [Z.ephemeral]: (0, M.hasFlag)(N.flags, W.MessageFlags.EPHEMERAL),
            [Z.systemMessage]: (0, v.default)(N),
            [Z.groupStart]: !ee && (eB || N.type === W.MessageTypes.REPLY),
            [Z.selected]: eA,
            [Z.replying]: (null == eD ? void 0 : eD.message.id) === N.id,
            [Z.interactionSending]: N.isCommandType() && N.state === W.MessageStates.SENDING,
            [Z.automodMessage]: ek
          }),
          zalgo: !e_,
          childrenRepliedMessage: ee ? void 0 : (0, w.default)(e, eu, er, et, ei),
          childrenExecutedCommand: (0, B.default)(e, eu, er),
          childrenHeader: ee ? void 0 : (0, U.default)({
            messageProps: e,
            setPopout: eu,
            messagePopouts: er,
            replyReference: et,
            author: eO,
            repliedMessage: ei,
            roleIcon: ej
          }),
          childrenAccessories: (0, b.default)({
            channelMessageProps: e,
            hasSpoilerEmbeds: ex,
            handleContextMenu: ed,
            isInteracting: eM,
            isAutomodBlockedMessage: ek
          }),
          childrenButtons: eC || eE ? (0, H.default)({
            buttonProps: e,
            setPopout: eu,
            messagePopouts: er,
            isFocused: ep || em
          }) : void 0,
          childrenSystemMessage: (0, G.default)(e),
          childrenMessageContent: r,
          onMouseMove: ef,
          onMouseLeave: eh,
          hasThread: !ee && N.hasFlag(W.MessageFlags.HAS_THREAD) && null != eI,
          isSystemMessage: (0, v.default)(N),
          hasReply: N.type === W.MessageTypes.REPLY,
          messageRef: eU
        })
      })
    });
  return null != eP ? (0, s.jsx)(R.default, {
    flashKey: eP,
    className: i({
      [Z.backgroundFlash]: !0,
      [Z.groupStart]: !X && N.id === $
    }),
    children: ew
  }, "bg-flash-".concat(g)) : ew
})