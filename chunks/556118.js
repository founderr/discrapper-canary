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
var a = n("37983"),
  s = n("884691"),
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
  E = n("685841"),
  m = n("256572"),
  g = n("393414"),
  _ = n("845579"),
  S = n("42203"),
  T = n("836417"),
  A = n("780571"),
  M = n("568734"),
  I = n("299039"),
  N = n("154864"),
  v = n("913491"),
  L = n("574073"),
  R = n("738352"),
  y = n("865343"),
  x = n("380986"),
  O = n("85470"),
  D = n("969706"),
  P = n("39331"),
  j = n("68480"),
  b = n("115859"),
  F = n("922177"),
  H = n("789790"),
  U = n("227984"),
  k = n("82080"),
  w = n("535993"),
  B = n("144553"),
  G = n("862451"),
  V = n("894488"),
  W = n("49111"),
  Z = n("782340"),
  z = n("5762");

function Y(e, t, n) {
  return e.getElementById((0, N.getMessageDOMId)(t, n))
}

function K(e) {
  var t;
  let {
    id: n,
    message: s,
    message: {
      messageReference: l
    },
    compact: r = !1,
    className: c
  } = e;
  o(s.type === W.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let {
    ...f
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([m.default], () => m.default.getMessageByReference(l)), {
    popouts: C,
    setPopout: p
  } = (0, D.default)(s.id, V.DEFAULT_POPOUTS), E = (0, L.default)(s), g = (0, y.getMessageAriaLabelledBy)(s), _ = (0, y.getMessageAriaDescribedBy)(s);
  return s.type === W.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === m.ReferencedMessageState.LOADED ? (0, a.jsx)(q, {
    ...e,
    message: h.message,
    groupId: h.message.id
  }) : (0, a.jsx)(A.default, {
    ...f,
    id: n,
    compact: r,
    className: i(c, {
      [z.message]: !0,
      [z.cozyMessage]: !r,
      [z.systemMessage]: !0,
      [z.groupStart]: !0
    }),
    childrenHeader: (0, U.default)({
      messageProps: e,
      setPopout: p,
      messagePopouts: C,
      replyReference: l,
      author: E
    }),
    childrenSystemMessage: (0, G.default)(e),
    childrenMessageContent: null,
    "aria-labelledby": g,
    "aria-describedby": _,
    hasThread: !1
  })
}

function q(e) {
  var t, n, l, r, o;
  let {
    id: C,
    message: E,
    message: {
      id: S,
      channel_id: T
    },
    channel: {
      guild_id: I
    },
    compact: N = !1,
    className: R,
    groupId: j
  } = e, F = E.type === W.MessageTypes.REPLY ? E.messageReference : void 0, {
    onFocus: H,
    ...w
  } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
    isFocused: Y,
    handleFocus: K,
    handleBlur: q
  } = (0, x.useFocusInside)(H), {
    popouts: X,
    selected: J,
    setPopout: Q
  } = (0, D.default)(E.id, V.DEFAULT_POPOUTS), $ = _.InlineEmbedMedia.useSetting(), ee = _.RenderEmbeds.useSetting(), et = (0, d.useStateFromStores)([m.default], () => m.default.getMessageByReference(F)), en = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = E.editedTimestamp) && void 0 !== l ? l : E.timestamp).valueOf()), ea = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = E.editedTimestamp) && void 0 !== o ? o : E.timestamp).valueOf()), {
    handleMouseEnter: es,
    handleMouseLeave: el,
    isHovered: ei
  } = (0, x.useHoveredMessage)(j, E.author.id, J), er = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eo = J || er && Y, eu = eo || ei, {
    content: ed,
    hasSpoilerEmbeds: ec
  } = (0, P.default)(E, {
    hideSimpleEmbedContent: $ && ee,
    isInteracting: eu,
    formatInline: !1,
    allowList: en.showListsAndHeaders || ea.showListsAndHeaders,
    allowHeading: en.showListsAndHeaders || ea.showListsAndHeaders,
    allowLinks: en.showMaskedLinks || ea.showMaskedLinks,
    previewLinkTarget: en.showMaskedLinks || ea.showMaskedLinks
  }), ef = (0, O.default)(S, T, er), eh = (0, L.default)(E), eC = (0, y.getMessageAriaLabelledBy)(E, j), ep = (0, y.getMessageAriaDescribedBy)(E), eE = (0, k.default)(e, ed, !1), em = s.useCallback(() => (0, g.transitionToGuild)(I, T, S), [I, T, S]), eg = (0, p.useRoleIcon)({
    guildId: I,
    roleId: eh.iconRoleId
  });
  return (0, a.jsxs)("div", {
    className: z.quotedChatMessage,
    children: [(0, a.jsx)(c.Clickable, {
      className: z.jump,
      onClick: em,
      "aria-label": Z.default.Messages.JUMP,
      children: Z.default.Messages.JUMP
    }), (0, a.jsx)(A.default, {
      ...w,
      id: C,
      compact: N,
      className: i(R, {
        [z.message]: !0,
        [z.cozyMessage]: !N,
        [z.mentioned]: E.mentioned && !(0, v.default)(E),
        [z.ephemeral]: (0, M.hasFlag)(E.flags, W.MessageFlags.EPHEMERAL),
        [z.systemMessage]: (0, v.default)(E),
        [z.groupStart]: E.id === j || E.type === W.MessageTypes.REPLY,
        [z.selected]: eo
      }),
      zalgo: !0,
      onKeyDown: ef,
      onFocus: K,
      onBlur: q,
      childrenRepliedMessage: (0, B.default)(e, Q, X, F, et),
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
      childrenMessageContent: eE,
      onMouseMove: es,
      onMouseLeave: el,
      "aria-labelledby": eC,
      "aria-describedby": ep,
      hasThread: !1
    })]
  })
}
var X = s.memo(function(e) {
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
      ...ea
    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
    es = _.InlineEmbedMedia.useSetting(),
    el = _.RenderEmbeds.useSetting(),
    ei = (0, d.useStateFromStores)([m.default], () => m.default.getMessageByReference(et)),
    {
      popouts: er,
      selected: eo,
      setPopout: eu
    } = (0, D.default)(N.id, V.DEFAULT_POPOUTS),
    ed = (0, x.useContextMenuMessage)(N, K, eu),
    ec = (0, x.useClickMessage)(N, K),
    {
      handleMouseEnter: ef,
      handleMouseLeave: eh,
      hasHovered: eC,
      isHovered: ep
    } = (0, x.useHoveredMessage)($, N.author.id, eo),
    {
      isFocused: eE,
      hasFocused: em,
      handleFocus: eg,
      handleBlur: e_
    } = (0, x.useFocusInside)(en),
    eS = (0, d.useStateFromStores)([T.default], () => T.default.isEditing(q, Y), [q, Y]),
    eT = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
    eA = eo || eS || eT && eE,
    eM = eA || ep,
    eI = (0, d.useStateFromStores)([S.default], () => N.hasFlag(W.MessageFlags.HAS_THREAD) && S.default.getChannel(I.default.castMessageIdAsChannelId(N.id))),
    eN = N.isFirstMessageInForumPost(K),
    ev = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = N.editedTimestamp) && void 0 !== n ? n : N.timestamp).valueOf()),
    eL = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(K.guild_id, (null !== (l = N.editedTimestamp) && void 0 !== l ? l : N.timestamp).valueOf()),
    {
      content: eR,
      hasSpoilerEmbeds: ey
    } = (0, P.default)(N, {
      hideSimpleEmbedContent: es && el,
      isInteracting: eM,
      formatInline: !1,
      allowList: eN || ev.showListsAndHeaders || eL.showListsAndHeaders,
      allowHeading: eN || ev.showListsAndHeaders || eL.showListsAndHeaders,
      allowLinks: ev.showMaskedLinks || eL.showMaskedLinks,
      previewLinkTarget: ev.showMaskedLinks || eL.showMaskedLinks
    }),
    ex = (0, O.default)(Y, q, eT),
    eO = (0, L.default)(N),
    eD = (0, d.useStateFromStores)([E.default], () => E.default.getPendingReply(q)),
    eP = function(e) {
      let t = s.useRef(e);
      return s.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(Q),
    ej = (0, p.useRoleIcon)({
      guildId: K.guild_id,
      roleId: eO.iconRoleId
    }),
    eb = (0, y.getMessageAriaLabelledBy)(N, $),
    eF = (0, y.getMessageAriaDescribedBy)(N),
    eH = (0, d.useStateFromStores)([C.default], () => C.default.getMessage(Y), [Y]),
    eU = (0, j.default)({
      message: N,
      channel: K
    }),
    ek = null != eH;
  r = N.type === W.MessageTypes.CUSTOM_GIFT ? "" : !eS && ek ? (0, F.default)(e, eR) : (0, k.default)(e, eR, eS);
  let ew = N.id === $,
    eB = (0, a.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, a.jsx)("li", {
        id: g,
        className: z.messageListItem,
        "aria-setsize": -1,
        children: (0, a.jsx)(A.default, {
          ...ea,
          "aria-setsize": -1,
          "aria-roledescription": Z.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": eb,
          "aria-describedby": eF,
          onFocus: eg,
          onBlur: e_,
          onContextMenu: ed,
          onKeyDown: ex,
          onClick: ec,
          compact: X,
          contentOnly: ee,
          className: i(J, {
            [z.message]: !0,
            [z.cozyMessage]: !X,
            [z.mentioned]: N.mentioned && !(0, v.default)(N),
            [z.ephemeral]: (0, M.hasFlag)(N.flags, W.MessageFlags.EPHEMERAL),
            [z.systemMessage]: (0, v.default)(N),
            [z.groupStart]: !ee && (ew || N.type === W.MessageTypes.REPLY),
            [z.selected]: eA,
            [z.replying]: (null == eD ? void 0 : eD.message.id) === N.id,
            [z.interactionSending]: N.isCommandType() && N.state === W.MessageStates.SENDING,
            [z.automodMessage]: ek
          }),
          zalgo: !eS,
          childrenRepliedMessage: ee ? void 0 : (0, B.default)(e, eu, er, et, ei),
          childrenExecutedCommand: (0, w.default)(e, eu, er),
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
            hasSpoilerEmbeds: ey,
            handleContextMenu: ed,
            isInteracting: eM,
            isAutomodBlockedMessage: ek
          }),
          childrenButtons: eC || em ? (0, H.default)({
            buttonProps: e,
            setPopout: eu,
            messagePopouts: er,
            isFocused: ep || eE
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
  return null != eP ? (0, a.jsx)(R.default, {
    flashKey: eP,
    className: i({
      [z.backgroundFlash]: !0,
      [z.groupStart]: !X && N.id === $
    }),
    children: eB
  }, "bg-flash-".concat(g)) : eB
})