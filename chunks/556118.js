"use strict";
n.r(t), n.d(t, {
  getElementFromMessage: function() {
    return z
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
  S = n("845579"),
  _ = n("42203"),
  T = n("836417"),
  A = n("780571"),
  M = n("568734"),
  N = n("154864"),
  I = n("913491"),
  v = n("574073"),
  L = n("738352"),
  R = n("865343"),
  x = n("380986"),
  y = n("85470"),
  O = n("969706"),
  D = n("39331"),
  P = n("68480"),
  j = n("115859"),
  b = n("922177"),
  H = n("789790"),
  F = n("227984"),
  U = n("82080"),
  k = n("535993"),
  w = n("144553"),
  G = n("862451"),
  B = n("894488"),
  V = n("49111"),
  W = n("782340"),
  Z = n("5762");

function z(e, t, n) {
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
  o(s.type === V.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let {
    ...f
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([m.default], () => m.default.getMessageByReference(l)), {
    popouts: C,
    setPopout: p
  } = (0, O.default)(s.id, B.DEFAULT_POPOUTS), E = (0, v.default)(s), g = (0, R.getMessageAriaLabelledBy)(s), S = (0, R.getMessageAriaDescribedBy)(s);
  return s.type === V.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === m.ReferencedMessageState.LOADED ? (0, a.jsx)(Y, {
    ...e,
    message: h.message,
    groupId: h.message.id
  }) : (0, a.jsx)(A.default, {
    ...f,
    id: n,
    compact: r,
    className: i(c, {
      [Z.message]: !0,
      [Z.cozyMessage]: !r,
      [Z.systemMessage]: !0,
      [Z.groupStart]: !0
    }),
    childrenHeader: (0, F.default)({
      messageProps: e,
      setPopout: p,
      messagePopouts: C,
      replyReference: l,
      author: E
    }),
    childrenSystemMessage: (0, G.default)(e),
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
    message: E,
    message: {
      id: _,
      channel_id: T
    },
    channel: {
      guild_id: N
    },
    compact: L = !1,
    className: P,
    groupId: b
  } = e, H = E.type === V.MessageTypes.REPLY ? E.messageReference : void 0, {
    onFocus: k,
    ...z
  } = (0, u.useListItem)(null !== (n = e.id) && void 0 !== n ? n : ""), {
    isFocused: K,
    handleFocus: Y,
    handleBlur: X
  } = (0, x.useFocusInside)(k), {
    popouts: q,
    selected: J,
    setPopout: Q
  } = (0, O.default)(E.id, B.DEFAULT_POPOUTS), $ = S.InlineEmbedMedia.useSetting(), ee = S.RenderEmbeds.useSetting(), et = (0, d.useStateFromStores)([m.default], () => m.default.getMessageByReference(H)), en = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (l = E.editedTimestamp) && void 0 !== l ? l : E.timestamp).valueOf()), ea = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(null !== (r = null === (t = e.channel) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : "", (null !== (o = E.editedTimestamp) && void 0 !== o ? o : E.timestamp).valueOf()), {
    handleMouseEnter: es,
    handleMouseLeave: el,
    isHovered: ei
  } = (0, x.useHoveredMessage)(b, E.author.id, J), er = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), eo = J || er && K, eu = eo || ei, {
    content: ed,
    hasSpoilerEmbeds: ec
  } = (0, D.default)(E, {
    hideSimpleEmbedContent: $ && ee,
    isInteracting: eu,
    formatInline: !1,
    allowList: en.showListsAndHeaders || ea.showListsAndHeaders,
    allowHeading: en.showListsAndHeaders || ea.showListsAndHeaders,
    allowLinks: en.showMaskedLinks || ea.showMaskedLinks,
    previewLinkTarget: en.showMaskedLinks || ea.showMaskedLinks
  }), ef = (0, y.default)(_, T, er), eh = (0, v.default)(E), eC = (0, R.getMessageAriaLabelledBy)(E, b), ep = (0, R.getMessageAriaDescribedBy)(E), eE = (0, U.default)(e, ed, !1), em = s.useCallback(() => (0, g.transitionToGuild)(N, T, _), [N, T, _]), eg = (0, p.useRoleIcon)({
    guildId: N,
    roleId: eh.iconRoleId
  });
  return (0, a.jsxs)("div", {
    className: Z.quotedChatMessage,
    children: [(0, a.jsx)(c.Clickable, {
      className: Z.jump,
      onClick: em,
      "aria-label": W.default.Messages.JUMP,
      children: W.default.Messages.JUMP
    }), (0, a.jsx)(A.default, {
      ...z,
      id: C,
      compact: L,
      className: i(P, {
        [Z.message]: !0,
        [Z.cozyMessage]: !L,
        [Z.mentioned]: E.mentioned && !(0, I.default)(E),
        [Z.ephemeral]: (0, M.hasFlag)(E.flags, V.MessageFlags.EPHEMERAL),
        [Z.systemMessage]: (0, I.default)(E),
        [Z.groupStart]: E.id === b || E.type === V.MessageTypes.REPLY,
        [Z.selected]: eo
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
      childrenAccessories: (0, j.default)({
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
      id: z
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
  o(N.type !== V.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let ee = V.MessageTypesWithLazyLoadedReferences.has(N.type) ? N.messageReference : void 0,
    {
      onFocus: et,
      ...en
    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
    ea = S.InlineEmbedMedia.useSetting(),
    es = S.RenderEmbeds.useSetting(),
    el = (0, d.useStateFromStores)([m.default], () => m.default.getMessageByReference(ee)),
    {
      popouts: ei,
      selected: er,
      setPopout: eo
    } = (0, O.default)(N.id, B.DEFAULT_POPOUTS),
    eu = (0, x.useContextMenuMessage)(N, K, eo),
    ed = (0, x.useClickMessage)(N, K),
    {
      handleMouseEnter: ec,
      handleMouseLeave: ef,
      hasHovered: eh,
      isHovered: eC
    } = (0, x.useHoveredMessage)(Q, N.author.id, er),
    {
      isFocused: ep,
      hasFocused: eE,
      handleFocus: em,
      handleBlur: eg
    } = (0, x.useFocusInside)(et),
    eS = (0, d.useStateFromStores)([T.default], () => T.default.isEditing(Y, z), [Y, z]),
    e_ = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
    eT = er || eS || e_ && ep,
    eA = eT || eC,
    eM = (0, d.useStateFromStores)([_.default], () => N.hasFlag(V.MessageFlags.HAS_THREAD) && _.default.getChannel(N.id)),
    eN = N.isFirstMessageInForumPost(K),
    eI = (0, h.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = N.editedTimestamp) && void 0 !== n ? n : N.timestamp).valueOf()),
    ev = (0, h.useShowImprovedMarkdownGuildExperimentConfig)(K.guild_id, (null !== (l = N.editedTimestamp) && void 0 !== l ? l : N.timestamp).valueOf()),
    {
      content: eL,
      hasSpoilerEmbeds: eR
    } = (0, D.default)(N, {
      hideSimpleEmbedContent: ea && es,
      isInteracting: eA,
      formatInline: !1,
      allowList: eN || eI.showListsAndHeaders || ev.showListsAndHeaders,
      allowHeading: eN || eI.showListsAndHeaders || ev.showListsAndHeaders,
      allowLinks: eI.showMaskedLinks || ev.showMaskedLinks,
      previewLinkTarget: eI.showMaskedLinks || ev.showMaskedLinks
    }),
    ex = (0, y.default)(z, Y, e_),
    ey = (0, v.default)(N),
    eO = (0, d.useStateFromStores)([E.default], () => E.default.getPendingReply(Y)),
    eD = function(e) {
      let t = s.useRef(e);
      return s.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(J),
    eP = (0, p.useRoleIcon)({
      guildId: K.guild_id,
      roleId: ey.iconRoleId
    }),
    ej = (0, R.getMessageAriaLabelledBy)(N, Q),
    eb = (0, R.getMessageAriaDescribedBy)(N),
    eH = (0, d.useStateFromStores)([C.default], () => C.default.getMessage(z), [z]),
    eF = (0, P.default)({
      message: N,
      channel: K
    }),
    eU = null != eH;
  r = N.type === V.MessageTypes.CUSTOM_GIFT ? "" : !eS && eU ? (0, b.default)(e, eL) : (0, U.default)(e, eL, eS);
  let ek = N.id === Q,
    ew = (0, a.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, a.jsx)("li", {
        id: g,
        className: Z.messageListItem,
        "aria-setsize": -1,
        children: (0, a.jsx)(A.default, {
          ...en,
          "aria-setsize": -1,
          "aria-roledescription": W.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": ej,
          "aria-describedby": eb,
          onFocus: em,
          onBlur: eg,
          onContextMenu: eu,
          onKeyDown: ex,
          onClick: ed,
          compact: X,
          contentOnly: $,
          className: i(q, {
            [Z.message]: !0,
            [Z.cozyMessage]: !X,
            [Z.mentioned]: N.mentioned && !(0, I.default)(N),
            [Z.ephemeral]: (0, M.hasFlag)(N.flags, V.MessageFlags.EPHEMERAL),
            [Z.systemMessage]: (0, I.default)(N),
            [Z.groupStart]: !$ && (ek || N.type === V.MessageTypes.REPLY),
            [Z.selected]: eT,
            [Z.replying]: (null == eO ? void 0 : eO.message.id) === N.id,
            [Z.interactionSending]: N.isCommandType() && N.state === V.MessageStates.SENDING,
            [Z.automodMessage]: eU
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
            roleIcon: eP
          }),
          childrenAccessories: (0, j.default)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eR,
            handleContextMenu: eu,
            isInteracting: eA,
            isAutomodBlockedMessage: eU
          }),
          childrenButtons: eh || eE ? (0, H.default)({
            buttonProps: e,
            setPopout: eo,
            messagePopouts: ei,
            isFocused: eC || ep
          }) : void 0,
          childrenSystemMessage: (0, G.default)(e),
          childrenMessageContent: r,
          onMouseMove: ec,
          onMouseLeave: ef,
          hasThread: !$ && N.hasFlag(V.MessageFlags.HAS_THREAD) && null != eM,
          isSystemMessage: (0, I.default)(N),
          hasReply: N.type === V.MessageTypes.REPLY,
          messageRef: eF
        })
      })
    });
  return null != eD ? (0, a.jsx)(L.default, {
    flashKey: eD,
    className: i({
      [Z.backgroundFlash]: !0,
      [Z.groupStart]: !X && N.id === Q
    }),
    children: ew
  }, "bg-flash-".concat(g)) : ew
})