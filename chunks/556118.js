"use strict";
n.r(t), n.d(t, {
  getElementFromMessage: function() {
    return Z
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
  m = n("685841"),
  E = n("256572"),
  g = n("393414"),
  S = n("845579"),
  _ = n("42203"),
  A = n("836417"),
  T = n("780571"),
  M = n("568734"),
  I = n("154864"),
  N = n("913491"),
  v = n("574073"),
  L = n("738352"),
  x = n("865343"),
  R = n("380986"),
  y = n("85470"),
  O = n("969706"),
  D = n("39331"),
  j = n("68480"),
  P = n("115859"),
  b = n("922177"),
  H = n("789790"),
  F = n("227984"),
  U = n("82080"),
  k = n("535993"),
  w = n("144553"),
  B = n("862451"),
  G = n("894488"),
  V = n("49111"),
  W = n("782340"),
  z = n("5762");

function Z(e, t, n) {
  return e.getElementById((0, I.getMessageDOMId)(t, n))
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
  o(s.type === V.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let {
    ...f
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(l)), {
    popouts: C,
    setPopout: p
  } = (0, O.default)(s.id, G.DEFAULT_POPOUTS), m = (0, v.default)(s), g = (0, x.getMessageAriaLabelledBy)(s), S = (0, x.getMessageAriaDescribedBy)(s);
  return s.type === V.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === E.ReferencedMessageState.LOADED ? (0, a.jsx)(Y, {
    ...e,
    message: h.message,
    groupId: h.message.id
  }) : (0, a.jsx)(T.default, {
    ...f,
    id: n,
    compact: r,
    className: i(c, {
      [z.message]: !0,
      [z.cozyMessage]: !r,
      [z.systemMessage]: !0,
      [z.groupStart]: !0
    }),
    childrenHeader: (0, F.default)({
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

function Y(e) {
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
    compact: L = !1,
    className: j,
    groupId: b
  } = e, H = m.type === V.MessageTypes.REPLY ? m.messageReference : void 0, {
    onFocus: k,
    ...Z
  } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
    isFocused: K,
    handleFocus: Y,
    handleBlur: X
  } = (0, R.useFocusInside)(k), {
    popouts: q,
    selected: J,
    setPopout: Q
  } = (0, O.default)(m.id, G.DEFAULT_POPOUTS), $ = S.InlineEmbedMedia.useSetting(), ee = S.RenderEmbeds.useSetting(), et = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(H)), en = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = m.editedTimestamp) && void 0 !== l ? l : m.timestamp).valueOf()), ea = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = m.editedTimestamp) && void 0 !== o ? o : m.timestamp).valueOf()), {
    handleMouseEnter: es,
    handleMouseLeave: el,
    isHovered: ei
  } = (0, R.useHoveredMessage)(b, m.author.id, J), er = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eo = J || er && K, eu = eo || ei, {
    content: ed,
    hasSpoilerEmbeds: ec
  } = (0, D.default)(m, {
    hideSimpleEmbedContent: $ && ee,
    isInteracting: eu,
    formatInline: !1,
    allowList: en.showListsAndHeaders || ea.showListsAndHeaders,
    allowHeading: en.showListsAndHeaders || ea.showListsAndHeaders,
    allowLinks: en.showMaskedLinks || ea.showMaskedLinks,
    previewLinkTarget: en.showMaskedLinks || ea.showMaskedLinks
  }), ef = (0, y.default)(_, A, er), eh = (0, v.default)(m), eC = (0, x.getMessageAriaLabelledBy)(m, b), ep = (0, x.getMessageAriaDescribedBy)(m), em = (0, U.default)(e, ed, !1), eE = s.useCallback(() => (0, g.transitionToGuild)(I, A, _), [I, A, _]), eg = (0, p.useRoleIcon)({
    guildId: I,
    roleId: eh.iconRoleId
  });
  return (0, a.jsxs)("div", {
    className: z.quotedChatMessage,
    children: [(0, a.jsx)(c.Clickable, {
      className: z.jump,
      onClick: eE,
      "aria-label": W.default.Messages.JUMP,
      children: W.default.Messages.JUMP
    }), (0, a.jsx)(T.default, {
      ...Z,
      id: C,
      compact: L,
      className: i(j, {
        [z.message]: !0,
        [z.cozyMessage]: !L,
        [z.mentioned]: m.mentioned && !(0, N.default)(m),
        [z.ephemeral]: (0, M.hasFlag)(m.flags, V.MessageFlags.EPHEMERAL),
        [z.systemMessage]: (0, N.default)(m),
        [z.groupStart]: m.id === b || m.type === V.MessageTypes.REPLY,
        [z.selected]: eo
      }),
      zalgo: !0,
      onKeyDown: ef,
      onFocus: Y,
      onBlur: X,
      childrenRepliedMessage: (0, w.default)(e, Q, q, H, et),
      childrenHeader: (0, F.default)({
        messageProps: e,
        setPopout: Q,
        messagePopouts: q,
        replyReference: H,
        author: eh,
        repliedMessage: et,
        roleIcon: eg
      }),
      childrenAccessories: (0, P.default)({
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
    message: I,
    message: {
      id: Z
    },
    channel: K,
    channel: {
      id: Y
    },
    compact: X = !1,
    className: q,
    flashKey: J,
    groupId: Q,
    renderContentOnly: $
  } = e;
  o(I.type !== V.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let ee = V.MessageTypesWithLazyLoadedReferences.has(I.type) ? I.messageReference : void 0,
    {
      onFocus: et,
      ...en
    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
    ea = S.InlineEmbedMedia.useSetting(),
    es = S.RenderEmbeds.useSetting(),
    el = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(ee)),
    {
      popouts: ei,
      selected: er,
      setPopout: eo
    } = (0, O.default)(I.id, G.DEFAULT_POPOUTS),
    eu = (0, R.useContextMenuMessage)(I, K, eo),
    ed = (0, R.useClickMessage)(I, K),
    {
      handleMouseEnter: ec,
      handleMouseLeave: ef,
      hasHovered: eh,
      isHovered: eC
    } = (0, R.useHoveredMessage)(Q, I.author.id, er),
    {
      isFocused: ep,
      hasFocused: em,
      handleFocus: eE,
      handleBlur: eg
    } = (0, R.useFocusInside)(et),
    eS = (0, d.useStateFromStores)([A.default], () => A.default.isEditing(Y, Z), [Y, Z]),
    e_ = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
    eA = er || eS || e_ && ep,
    eT = eA || eC,
    eM = (0, d.useStateFromStores)([_.default], () => I.hasFlag(V.MessageFlags.HAS_THREAD) && _.default.getChannel(I.id)),
    eI = I.isFirstMessageInForumPost(K),
    eN = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = I.editedTimestamp) && void 0 !== n ? n : I.timestamp).valueOf()),
    ev = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(K.guild_id, (null !== (l = I.editedTimestamp) && void 0 !== l ? l : I.timestamp).valueOf()),
    {
      content: eL,
      hasSpoilerEmbeds: ex
    } = (0, D.default)(I, {
      hideSimpleEmbedContent: ea && es,
      isInteracting: eT,
      formatInline: !1,
      allowList: eI || eN.showListsAndHeaders || ev.showListsAndHeaders,
      allowHeading: eI || eN.showListsAndHeaders || ev.showListsAndHeaders,
      allowLinks: eN.showMaskedLinks || ev.showMaskedLinks,
      previewLinkTarget: eN.showMaskedLinks || ev.showMaskedLinks
    }),
    eR = (0, y.default)(Z, Y, e_),
    ey = (0, v.default)(I),
    eO = (0, d.useStateFromStores)([m.default], () => m.default.getPendingReply(Y)),
    eD = function(e) {
      let t = s.useRef(e);
      return s.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(J),
    ej = (0, p.useRoleIcon)({
      guildId: K.guild_id,
      roleId: ey.iconRoleId
    }),
    eP = (0, x.getMessageAriaLabelledBy)(I, Q),
    eb = (0, x.getMessageAriaDescribedBy)(I),
    eH = (0, d.useStateFromStores)([C.default], () => C.default.getMessage(Z), [Z]),
    eF = (0, j.default)({
      message: I,
      channel: K
    }),
    eU = null != eH;
  r = I.type === V.MessageTypes.CUSTOM_GIFT ? "" : !eS && eU ? (0, b.default)(e, eL) : (0, U.default)(e, eL, eS);
  let ek = I.id === Q,
    ew = (0, a.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, a.jsx)("li", {
        id: g,
        className: z.messageListItem,
        "aria-setsize": -1,
        children: (0, a.jsx)(T.default, {
          ...en,
          "aria-setsize": -1,
          "aria-roledescription": W.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": eP,
          "aria-describedby": eb,
          onFocus: eE,
          onBlur: eg,
          onContextMenu: eu,
          onKeyDown: eR,
          onClick: ed,
          compact: X,
          contentOnly: $,
          className: i(q, {
            [z.message]: !0,
            [z.cozyMessage]: !X,
            [z.mentioned]: I.mentioned && !(0, N.default)(I),
            [z.ephemeral]: (0, M.hasFlag)(I.flags, V.MessageFlags.EPHEMERAL),
            [z.systemMessage]: (0, N.default)(I),
            [z.groupStart]: !$ && (ek || I.type === V.MessageTypes.REPLY),
            [z.selected]: eA,
            [z.replying]: (null == eO ? void 0 : eO.message.id) === I.id,
            [z.interactionSending]: I.isCommandType() && I.state === V.MessageStates.SENDING,
            [z.automodMessage]: eU
          }),
          zalgo: !eS,
          childrenRepliedMessage: $ ? void 0 : (0, w.default)(e, eo, ei, ee, el),
          childrenExecutedCommand: (0, k.default)(e, eo, ei),
          childrenHeader: $ ? void 0 : (0, F.default)({
            messageProps: e,
            setPopout: eo,
            messagePopouts: ei,
            replyReference: ee,
            author: ey,
            repliedMessage: el,
            roleIcon: ej
          }),
          childrenAccessories: (0, P.default)({
            channelMessageProps: e,
            hasSpoilerEmbeds: ex,
            handleContextMenu: eu,
            isInteracting: eT,
            isAutomodBlockedMessage: eU
          }),
          childrenButtons: eh || em ? (0, H.default)({
            buttonProps: e,
            setPopout: eo,
            messagePopouts: ei,
            isFocused: eC || ep
          }) : void 0,
          childrenSystemMessage: (0, B.default)(e),
          childrenMessageContent: r,
          onMouseMove: ec,
          onMouseLeave: ef,
          hasThread: !$ && I.hasFlag(V.MessageFlags.HAS_THREAD) && null != eM,
          isSystemMessage: (0, N.default)(I),
          hasReply: I.type === V.MessageTypes.REPLY,
          messageRef: eF
        })
      })
    });
  return null != eD ? (0, a.jsx)(L.default, {
    flashKey: eD,
    className: i({
      [z.backgroundFlash]: !0,
      [z.groupStart]: !X && I.id === Q
    }),
    children: ew
  }, "bg-flash-".concat(g)) : ew
})