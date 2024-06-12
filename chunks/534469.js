"use strict";
n.r(t), n.d(t, {
  ThreadStarterChatMessage: function() {
    return X
  },
  getElementFromMessage: function() {
    return Z
  }
}), n("789020");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("924826"),
  d = n("442837"),
  c = n("481060"),
  f = n("607070"),
  h = n("223606"),
  m = n("518738"),
  p = n("628238"),
  E = n("807092"),
  g = n("869765"),
  C = n("703656"),
  S = n("695346"),
  _ = n("592125"),
  T = n("906467"),
  I = n("323873"),
  A = n("998951"),
  v = n("630388"),
  x = n("709054"),
  N = n("534091"),
  M = n("901461"),
  y = n("739566"),
  R = n("233715"),
  L = n("453687"),
  O = n("348238"),
  j = n("62072"),
  P = n("38267"),
  D = n("25015"),
  b = n("689674"),
  U = n("438075"),
  F = n("764893"),
  w = n("481363"),
  k = n("900902"),
  H = n("252032"),
  G = n("737243"),
  B = n("614584"),
  V = n("295790"),
  W = n("959517"),
  Y = n("981631"),
  z = n("689938"),
  K = n("373947");

function Z(e, t, n) {
  return e.getElementById((0, N.getMessageDOMId)(t, n))
}

function X(e) {
  var t;
  let {
    id: n,
    message: l,
    message: {
      messageReference: s
    },
    compact: r = !1,
    className: c
  } = e;
  o()(l.type === Y.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let {
    ...f
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([g.default], () => g.default.getMessageByReference(s)), {
    popouts: m,
    setPopout: p
  } = (0, P.default)(l.id, W.DEFAULT_POPOUTS), E = (0, y.default)(l), C = (0, L.getMessageAriaLabelledBy)(l), S = (0, L.getMessageAriaDescribedBy)(l);
  return l.type === Y.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === g.ReferencedMessageState.LOADED ? (0, a.jsx)(q, {
    ...e,
    viewingChannelId: l.channel_id,
    message: h.message,
    groupId: h.message.id
  }) : (0, a.jsx)(A.default, {
    ...f,
    id: n,
    compact: r,
    className: i()(c, {
      [K.message]: !0,
      [K.cozyMessage]: !r,
      [K.systemMessage]: !0,
      [K.groupStart]: !0
    }),
    childrenHeader: (0, k.default)({
      messageProps: e,
      setPopout: p,
      messagePopouts: m,
      replyReference: s,
      author: E
    }),
    childrenSystemMessage: (0, V.default)(e),
    childrenMessageContent: null,
    "aria-labelledby": C,
    "aria-describedby": S,
    hasThread: !1
  })
}

function q(e) {
  var t, n;
  let {
    id: s,
    message: r,
    message: {
      id: o,
      channel_id: h
    },
    channel: {
      guild_id: E
    },
    compact: _ = !1,
    className: T,
    groupId: I,
    viewingChannelId: x
  } = e, N = r.type === Y.MessageTypes.REPLY ? r.messageReference : void 0, {
    onFocus: R,
    ...b
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), {
    isFocused: F,
    handleFocus: w,
    handleBlur: G
  } = (0, O.useFocusInside)(R), {
    popouts: Z,
    selected: X,
    setPopout: q
  } = (0, P.default)(r.id, W.DEFAULT_POPOUTS), J = S.InlineEmbedMedia.useSetting(), Q = S.RenderEmbeds.useSetting(), $ = (0, d.useStateFromStores)([g.default], () => g.default.getMessageByReference(N)), ee = (0, p.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()), {
    handleMouseEnter: et,
    handleMouseLeave: en,
    isHovered: ea
  } = (0, O.useHoveredMessage)(I, r.author.id, X), el = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), es = X || el && F, ei = es || ea, {
    content: er,
    hasSpoilerEmbeds: eo
  } = (0, D.default)(r, {
    hideSimpleEmbedContent: J && Q,
    isInteracting: ei,
    formatInline: !1,
    allowList: ee,
    allowHeading: ee,
    allowLinks: !0,
    previewLinkTarget: !0,
    viewingChannelId: x
  }), eu = (0, j.default)(o, h, el), ed = (0, y.default)(r), ec = (0, L.getMessageAriaLabelledBy)(r, I), ef = (0, L.getMessageAriaDescribedBy)(r), eh = (0, H.default)(e, er, !1), em = l.useCallback(() => (0, C.transitionToGuild)(E, h, o), [E, h, o]), ep = (0, m.useRoleIcon)({
    guildId: E,
    roleId: ed.iconRoleId
  });
  return (0, a.jsxs)("div", {
    className: K.quotedChatMessage,
    children: [(0, a.jsx)(c.Clickable, {
      className: K.jump,
      onClick: em,
      "aria-label": z.default.Messages.JUMP,
      children: z.default.Messages.JUMP
    }), (0, a.jsx)(A.default, {
      ...b,
      id: s,
      compact: _,
      className: i()(T, {
        [K.message]: !0,
        [K.cozyMessage]: !_,
        [K.mentioned]: r.mentioned,
        [K.ephemeral]: (0, v.hasFlag)(r.flags, Y.MessageFlags.EPHEMERAL),
        [K.systemMessage]: (0, M.default)(r),
        [K.groupStart]: r.id === I || r.type === Y.MessageTypes.REPLY,
        [K.selected]: es
      }),
      zalgo: !0,
      onKeyDown: eu,
      onFocus: w,
      onBlur: G,
      childrenRepliedMessage: (0, B.default)(e, q, Z, N, $),
      childrenHeader: (0, k.default)({
        messageProps: e,
        setPopout: q,
        messagePopouts: Z,
        replyReference: N,
        author: ed,
        repliedMessage: $,
        roleIcon: ep
      }),
      childrenAccessories: (0, U.default)({
        channelMessageProps: e,
        hasSpoilerEmbeds: eo,
        isInteracting: ei,
        renderThreadAccessory: !1,
        renderComponentAccessory: !1,
        renderSuppressEmbeds: !1
      }),
      childrenSystemMessage: (0, V.default)(e),
      childrenMessageContent: eh,
      onMouseMove: et,
      onMouseLeave: en,
      "aria-labelledby": ec,
      "aria-describedby": ef,
      hasThread: !1
    })]
  })
}
t.default = l.memo(function(e) {
  var t, n;
  let s;
  let {
    id: r,
    message: C,
    message: {
      id: N
    },
    channel: Z,
    channel: {
      id: X
    },
    compact: q = !1,
    className: J,
    flashKey: Q,
    groupId: $,
    renderContentOnly: ee
  } = e;
  o()(C.type !== Y.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let et = Y.MessageTypesWithLazyLoadedReferences.has(C.type) ? C.messageReference : void 0,
    {
      onFocus: en,
      ...ea
    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
    el = S.InlineEmbedMedia.useSetting(),
    es = S.RenderEmbeds.useSetting(),
    ei = (0, d.useStateFromStores)([g.default], () => g.default.getMessageByReference(et)),
    {
      popouts: er,
      selected: eo,
      setPopout: eu
    } = (0, P.default)(C.id, W.DEFAULT_POPOUTS),
    ed = (0, O.useContextMenuMessage)(C, Z, eu),
    ec = (0, O.useClickMessage)(C, Z),
    {
      handleMouseEnter: ef,
      handleMouseLeave: eh,
      hasHovered: em,
      isHovered: ep
    } = (0, O.useHoveredMessage)($, C.author.id, eo),
    {
      isFocused: eE,
      hasFocused: eg,
      handleFocus: eC,
      handleBlur: eS
    } = (0, O.useFocusInside)(en),
    e_ = (0, d.useStateFromStores)([I.default], () => I.default.isEditing(X, N), [X, N]),
    eT = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
    eI = eo || e_ || eT && eE,
    eA = eI || ep,
    ev = (0, d.useStateFromStores)([_.default], () => C.hasFlag(Y.MessageFlags.HAS_THREAD) && _.default.getChannel(x.default.castMessageIdAsChannelId(C.id))),
    ex = C.isFirstMessageInForumPost(Z),
    eN = (0, p.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = C.editedTimestamp) && void 0 !== n ? n : C.timestamp).valueOf()),
    eM = (0, d.useStateFromStores)([T.default], () => T.default.isDeveloper),
    {
      content: ey,
      hasSpoilerEmbeds: eR
    } = (0, D.default)(C, {
      hideSimpleEmbedContent: el && es,
      isInteracting: eA,
      formatInline: !1,
      allowList: ex || eN,
      allowHeading: ex || eN,
      allowLinks: !0,
      allowDevLinks: eM,
      previewLinkTarget: !0
    }),
    eL = (0, j.default)(N, X, eT),
    eO = (0, y.default)(C),
    ej = (0, d.useStateFromStores)([E.default], () => E.default.getPendingReply(X)),
    eP = function(e) {
      let t = l.useRef(e);
      return l.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(Q),
    eD = (0, m.useRoleIcon)({
      guildId: Z.guild_id,
      roleId: eO.iconRoleId
    }),
    eb = (0, L.getMessageAriaLabelledBy)(C, $),
    eU = (0, L.getMessageAriaDescribedBy)(C),
    eF = (0, d.useStateFromStores)([h.default], () => h.default.getMessage(N), [N]),
    ew = (0, b.default)({
      message: C,
      channel: Z
    }),
    ek = null != eF;
  s = C.type === Y.MessageTypes.CUSTOM_GIFT ? "" : !e_ && ek ? (0, F.default)(e, ey) : (0, H.default)(e, ey, e_);
  let eH = C.id === $,
    eG = (0, a.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, a.jsx)("li", {
        id: r,
        className: K.messageListItem,
        "aria-setsize": -1,
        children: (0, a.jsx)(A.default, {
          ...ea,
          "aria-setsize": -1,
          "aria-roledescription": z.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": eb,
          "aria-describedby": eU,
          onFocus: eC,
          onBlur: eS,
          onContextMenu: ed,
          onKeyDown: eL,
          onClick: ec,
          compact: q,
          contentOnly: ee,
          className: i()(J, {
            [K.message]: !0,
            [K.cozyMessage]: !q,
            [K.mentioned]: C.mentioned,
            [K.ephemeral]: (0, v.hasFlag)(C.flags, Y.MessageFlags.EPHEMERAL),
            [K.nitroMessage]: C.type === Y.MessageTypes.NITRO_NOTIFICATION,
            [K.systemMessage]: (0, M.default)(C),
            [K.groupStart]: !ee && (eH || C.type === Y.MessageTypes.REPLY),
            [K.selected]: eI,
            [K.replying]: (null == ej ? void 0 : ej.message.id) === C.id,
            [K.interactionSending]: C.isCommandType() && C.state === Y.MessageStates.SENDING,
            [K.automodMessage]: ek
          }),
          zalgo: !e_,
          childrenRepliedMessage: ee ? void 0 : (0, B.default)(e, eu, er, et, ei),
          childrenExecutedCommand: (0, G.default)(e, eu, er),
          childrenHeader: ee ? void 0 : (0, k.default)({
            messageProps: e,
            setPopout: eu,
            messagePopouts: er,
            replyReference: et,
            author: eO,
            repliedMessage: ei,
            roleIcon: eD
          }),
          childrenAccessories: (0, U.default)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eR,
            handleContextMenu: ed,
            isInteracting: eA,
            isAutomodBlockedMessage: ek
          }),
          childrenButtons: em || eg ? (0, w.default)({
            buttonProps: e,
            setPopout: eu,
            messagePopouts: er,
            isFocused: ep || eE
          }) : void 0,
          childrenSystemMessage: (0, V.default)(e),
          childrenMessageContent: s,
          onMouseMove: ef,
          onMouseLeave: eh,
          hasThread: !ee && C.hasFlag(Y.MessageFlags.HAS_THREAD) && null != ev,
          isSystemMessage: (0, M.default)(C),
          hasReply: C.type === Y.MessageTypes.REPLY,
          messageRef: ew
        })
      })
    });
  return null != eP ? (0, a.jsx)(R.default, {
    flashKey: eP,
    className: i()({
      [K.backgroundFlash]: !0,
      [K.groupStart]: !q && C.id === $
    }),
    children: eG
  }, "bg-flash-".concat(r)) : eG
})