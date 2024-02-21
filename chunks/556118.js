"use strict";
n.r(t), n.d(t, {
  getElementFromMessage: function() {
    return K
  },
  ThreadStarterChatMessage: function() {
    return Y
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
  m = n("685841"),
  E = n("256572"),
  g = n("393414"),
  S = n("845579"),
  _ = n("42203"),
  A = n("836417"),
  T = n("780571"),
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
  j = n("39331"),
  P = n("68480"),
  b = n("115859"),
  F = n("922177"),
  H = n("789790"),
  U = n("227984"),
  k = n("82080"),
  w = n("535993"),
  G = n("144553"),
  B = n("862451"),
  V = n("894488"),
  W = n("49111"),
  z = n("782340"),
  Z = n("5762");

function K(e, t, n) {
  return e.getElementById((0, N.getMessageDOMId)(t, n))
}

function Y(e) {
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
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(l)), {
    popouts: C,
    setPopout: p
  } = (0, D.default)(s.id, V.DEFAULT_POPOUTS), m = (0, L.default)(s), g = (0, x.getMessageAriaLabelledBy)(s), S = (0, x.getMessageAriaDescribedBy)(s);
  return s.type === W.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === E.ReferencedMessageState.LOADED ? (0, a.jsx)(q, {
    ...e,
    message: h.message,
    groupId: h.message.id
  }) : (0, a.jsx)(T.default, {
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
    childrenSystemMessage: (0, B.default)(e),
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
      channel_id: A
    },
    channel: {
      guild_id: I
    },
    compact: N = !1,
    className: R,
    groupId: P
  } = e, F = m.type === W.MessageTypes.REPLY ? m.messageReference : void 0, {
    onFocus: H,
    ...w
  } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
    isFocused: K,
    handleFocus: Y,
    handleBlur: q
  } = (0, y.useFocusInside)(H), {
    popouts: X,
    selected: J,
    setPopout: Q
  } = (0, D.default)(m.id, V.DEFAULT_POPOUTS), $ = S.InlineEmbedMedia.useSetting(), ee = S.RenderEmbeds.useSetting(), et = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(F)), en = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = m.editedTimestamp) && void 0 !== l ? l : m.timestamp).valueOf()), ea = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = m.editedTimestamp) && void 0 !== o ? o : m.timestamp).valueOf()), {
    handleMouseEnter: es,
    handleMouseLeave: el,
    isHovered: ei
  } = (0, y.useHoveredMessage)(P, m.author.id, J), er = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eo = J || er && K, eu = eo || ei, {
    content: ed,
    hasSpoilerEmbeds: ec
  } = (0, j.default)(m, {
    hideSimpleEmbedContent: $ && ee,
    isInteracting: eu,
    formatInline: !1,
    allowList: en.showListsAndHeaders || ea.showListsAndHeaders,
    allowHeading: en.showListsAndHeaders || ea.showListsAndHeaders,
    allowLinks: en.showMaskedLinks || ea.showMaskedLinks,
    previewLinkTarget: en.showMaskedLinks || ea.showMaskedLinks
  }), ef = (0, O.default)(_, A, er), eh = (0, L.default)(m), eC = (0, x.getMessageAriaLabelledBy)(m, P), ep = (0, x.getMessageAriaDescribedBy)(m), em = (0, k.default)(e, ed, !1), eE = s.useCallback(() => (0, g.transitionToGuild)(I, A, _), [I, A, _]), eg = (0, p.useRoleIcon)({
    guildId: I,
    roleId: eh.iconRoleId
  });
  return (0, a.jsxs)("div", {
    className: Z.quotedChatMessage,
    children: [(0, a.jsx)(c.Clickable, {
      className: Z.jump,
      onClick: eE,
      "aria-label": z.default.Messages.JUMP,
      children: z.default.Messages.JUMP
    }), (0, a.jsx)(T.default, {
      ...w,
      id: C,
      compact: N,
      className: i(R, {
        [Z.message]: !0,
        [Z.cozyMessage]: !N,
        [Z.mentioned]: m.mentioned && !(0, v.default)(m),
        [Z.ephemeral]: (0, M.hasFlag)(m.flags, W.MessageFlags.EPHEMERAL),
        [Z.systemMessage]: (0, v.default)(m),
        [Z.groupStart]: m.id === P || m.type === W.MessageTypes.REPLY,
        [Z.selected]: eo
      }),
      zalgo: !0,
      onKeyDown: ef,
      onFocus: Y,
      onBlur: q,
      childrenRepliedMessage: (0, G.default)(e, Q, X, F, et),
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
      childrenSystemMessage: (0, B.default)(e),
      childrenMessageContent: em,
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
      id: K
    },
    channel: Y,
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
    es = S.InlineEmbedMedia.useSetting(),
    el = S.RenderEmbeds.useSetting(),
    ei = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(et)),
    {
      popouts: er,
      selected: eo,
      setPopout: eu
    } = (0, D.default)(N.id, V.DEFAULT_POPOUTS),
    ed = (0, y.useContextMenuMessage)(N, Y, eu),
    ec = (0, y.useClickMessage)(N, Y),
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
    e_ = (0, d.useStateFromStores)([A.default], () => A.default.isEditing(q, K), [q, K]),
    eA = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
    eT = eo || e_ || eA && em,
    eM = eT || ep,
    eI = (0, d.useStateFromStores)([_.default], () => N.hasFlag(W.MessageFlags.HAS_THREAD) && _.default.getChannel(I.default.castMessageIdAsChannelId(N.id))),
    eN = N.isFirstMessageInForumPost(Y),
    ev = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = N.editedTimestamp) && void 0 !== n ? n : N.timestamp).valueOf()),
    eL = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(Y.guild_id, (null !== (l = N.editedTimestamp) && void 0 !== l ? l : N.timestamp).valueOf()),
    {
      content: eR,
      hasSpoilerEmbeds: ex
    } = (0, j.default)(N, {
      hideSimpleEmbedContent: es && el,
      isInteracting: eM,
      formatInline: !1,
      allowList: eN || ev.showListsAndHeaders || eL.showListsAndHeaders,
      allowHeading: eN || ev.showListsAndHeaders || eL.showListsAndHeaders,
      allowLinks: ev.showMaskedLinks || eL.showMaskedLinks,
      previewLinkTarget: ev.showMaskedLinks || eL.showMaskedLinks
    }),
    ey = (0, O.default)(K, q, eA),
    eO = (0, L.default)(N),
    eD = (0, d.useStateFromStores)([m.default], () => m.default.getPendingReply(q)),
    ej = function(e) {
      let t = s.useRef(e);
      return s.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(Q),
    eP = (0, p.useRoleIcon)({
      guildId: Y.guild_id,
      roleId: eO.iconRoleId
    }),
    eb = (0, x.getMessageAriaLabelledBy)(N, $),
    eF = (0, x.getMessageAriaDescribedBy)(N),
    eH = (0, d.useStateFromStores)([C.default], () => C.default.getMessage(K), [K]),
    eU = (0, P.default)({
      message: N,
      channel: Y
    }),
    ek = null != eH;
  r = N.type === W.MessageTypes.CUSTOM_GIFT ? "" : !e_ && ek ? (0, F.default)(e, eR) : (0, k.default)(e, eR, e_);
  let ew = N.id === $,
    eG = (0, a.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, a.jsx)("li", {
        id: g,
        className: Z.messageListItem,
        "aria-setsize": -1,
        children: (0, a.jsx)(T.default, {
          ...ea,
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
            [Z.groupStart]: !ee && (ew || N.type === W.MessageTypes.REPLY),
            [Z.selected]: eT,
            [Z.replying]: (null == eD ? void 0 : eD.message.id) === N.id,
            [Z.interactionSending]: N.isCommandType() && N.state === W.MessageStates.SENDING,
            [Z.automodMessage]: ek
          }),
          zalgo: !e_,
          childrenRepliedMessage: ee ? void 0 : (0, G.default)(e, eu, er, et, ei),
          childrenExecutedCommand: (0, w.default)(e, eu, er),
          childrenHeader: ee ? void 0 : (0, U.default)({
            messageProps: e,
            setPopout: eu,
            messagePopouts: er,
            replyReference: et,
            author: eO,
            repliedMessage: ei,
            roleIcon: eP
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
          childrenSystemMessage: (0, B.default)(e),
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
  return null != ej ? (0, a.jsx)(R.default, {
    flashKey: ej,
    className: i({
      [Z.backgroundFlash]: !0,
      [Z.groupStart]: !X && N.id === $
    }),
    children: eG
  }, "bg-flash-".concat(g)) : eG
})