n.d(t, {
  AP: function() {
    return K
  },
  Ru: function() {
    return q
  }
}), n(789020);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(91192),
  u = n(442837),
  d = n(481060),
  h = n(607070),
  m = n(223606),
  p = n(518738),
  E = n(628238),
  g = n(807092),
  f = n(869765),
  C = n(703656),
  _ = n(695346),
  I = n(592125),
  x = n(906467),
  T = n(323873),
  N = n(998951),
  Z = n(630388),
  S = n(709054),
  v = n(534091),
  A = n(901461),
  M = n(739566),
  R = n(233715),
  j = n(453687),
  L = n(348238),
  O = n(62072),
  P = n(38267),
  b = n(25015),
  y = n(689674),
  D = n(438075),
  U = n(764893),
  k = n(481363),
  w = n(900902),
  H = n(252032),
  B = n(737243),
  G = n(614584),
  V = n(295790),
  F = n(959517),
  z = n(981631),
  W = n(689938),
  Y = n(105461);

function K(e, t, n) {
  return e.getElementById((0, v.p)(t, n))
}

function q(e) {
  var t;
  let {
    id: n,
    message: i,
    message: {
      messageReference: s
    },
    compact: r = !1,
    className: d
  } = e;
  o()(i.type === z.uaV.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let {
    ...h
  } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ""), m = (0, u.e7)([f.Z], () => f.Z.getMessageByReference(s)), {
    popouts: p,
    setPopout: E
  } = (0, P.Z)(i.id, F.d$), g = (0, M.ZP)(i), C = (0, j.iG)(i), _ = (0, j.Gx)(i);
  return i.type === z.uaV.THREAD_STARTER_MESSAGE && null != m && m.state === f.Y.LOADED ? (0, l.jsx)(X, {
    ...e,
    viewingChannelId: i.channel_id,
    message: m.message,
    groupId: m.message.id
  }) : (0, l.jsx)(N.Z, {
    ...h,
    id: n,
    compact: r,
    className: a()(d, {
      [Y.message]: !0,
      [Y.cozyMessage]: !r,
      [Y.systemMessage]: !0,
      [Y.groupStart]: !0
    }),
    childrenHeader: (0, w.Z)({
      messageProps: e,
      setPopout: E,
      messagePopouts: p,
      replyReference: s,
      author: g
    }),
    childrenSystemMessage: (0, V.Z)(e),
    childrenMessageContent: null,
    "aria-labelledby": C,
    "aria-describedby": _,
    hasThread: !1
  })
}

function X(e) {
  var t, n;
  let {
    id: s,
    message: r,
    message: {
      id: o,
      channel_id: m
    },
    channel: {
      guild_id: g
    },
    compact: I = !1,
    className: x,
    groupId: T,
    viewingChannelId: S
  } = e, v = r.type === z.uaV.REPLY ? r.messageReference : void 0, {
    onFocus: R,
    ...y
  } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ""), {
    isFocused: U,
    handleFocus: k,
    handleBlur: B
  } = (0, L.bb)(R), {
    popouts: K,
    selected: q,
    setPopout: X
  } = (0, P.Z)(r.id, F.d$), Q = _.RS.useSetting(), J = _.NA.useSetting(), $ = (0, u.e7)([f.Z], () => f.Z.getMessageByReference(v)), ee = (0, E.A)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()), {
    handleMouseEnter: et,
    handleMouseLeave: en,
    isHovered: el
  } = (0, L.tn)(T, r.author.id, q), ei = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled), es = q || ei && U, ea = es || el, {
    content: er,
    hasSpoilerEmbeds: eo
  } = (0, b.Z)(r, {
    hideSimpleEmbedContent: Q && J,
    isInteracting: ea,
    formatInline: !1,
    allowList: ee,
    allowHeading: ee,
    allowLinks: !0,
    previewLinkTarget: !0,
    viewingChannelId: S
  }), ec = (0, O.Z)(o, m, ei), eu = (0, M.ZP)(r), ed = (0, j.iG)(r, T), eh = (0, j.Gx)(r), em = (0, H.Z)(e, er, !1), ep = i.useCallback(() => (0, C.XU)(g, m, o), [g, m, o]), eE = (0, p.p9)({
    guildId: g,
    roleId: eu.iconRoleId
  });
  return (0, l.jsxs)("div", {
    className: Y.quotedChatMessage,
    children: [(0, l.jsx)(d.Clickable, {
      className: Y.jump,
      onClick: ep,
      "aria-label": W.Z.Messages.JUMP,
      children: W.Z.Messages.JUMP
    }), (0, l.jsx)(N.Z, {
      ...y,
      id: s,
      compact: I,
      className: a()(x, {
        [Y.message]: !0,
        [Y.cozyMessage]: !I,
        [Y.mentioned]: r.mentioned,
        [Y.ephemeral]: (0, Z.yE)(r.flags, z.iLy.EPHEMERAL),
        [Y.systemMessage]: (0, A.Z)(r),
        [Y.groupStart]: r.id === T || r.type === z.uaV.REPLY,
        [Y.selected]: es
      }),
      zalgo: !0,
      onKeyDown: ec,
      onFocus: k,
      onBlur: B,
      childrenRepliedMessage: (0, G.Z)(e, X, K, v, $),
      childrenHeader: (0, w.Z)({
        messageProps: e,
        setPopout: X,
        messagePopouts: K,
        replyReference: v,
        author: eu,
        repliedMessage: $,
        roleIcon: eE
      }),
      childrenAccessories: (0, D.Z)({
        channelMessageProps: e,
        hasSpoilerEmbeds: eo,
        isInteracting: ea,
        renderThreadAccessory: !1,
        renderComponentAccessory: !1,
        renderSuppressEmbeds: !1
      }),
      childrenSystemMessage: (0, V.Z)(e),
      childrenMessageContent: em,
      onMouseMove: et,
      onMouseLeave: en,
      "aria-labelledby": ed,
      "aria-describedby": eh,
      hasThread: !1
    })]
  })
}
t.ZP = i.memo(function(e) {
  var t, n;
  let s;
  let {
    id: r,
    message: C,
    message: {
      id: v
    },
    channel: K,
    channel: {
      id: q
    },
    compact: X = !1,
    className: Q,
    flashKey: J,
    groupId: $,
    renderContentOnly: ee
  } = e;
  o()(C.type !== z.uaV.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let et = z.OBS.has(C.type) ? C.messageReference : void 0,
    {
      onFocus: en,
      ...el
    } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ""),
    ei = _.RS.useSetting(),
    es = _.NA.useSetting(),
    ea = (0, u.e7)([f.Z], () => f.Z.getMessageByReference(et)),
    {
      popouts: er,
      selected: eo,
      setPopout: ec
    } = (0, P.Z)(C.id, F.d$),
    eu = (0, L.qo)(C, K, ec),
    ed = (0, L.Go)(C, K),
    {
      handleMouseEnter: eh,
      handleMouseLeave: em,
      hasHovered: ep,
      isHovered: eE
    } = (0, L.tn)($, C.author.id, eo),
    {
      isFocused: eg,
      hasFocused: ef,
      handleFocus: eC,
      handleBlur: e_
    } = (0, L.bb)(en),
    eI = (0, u.e7)([T.Z], () => T.Z.isEditing(q, v), [q, v]),
    ex = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
    eT = eo || eI || ex && eg,
    eN = eT || eE,
    eZ = (0, u.e7)([I.Z], () => C.hasFlag(z.iLy.HAS_THREAD) && I.Z.getChannel(S.default.castMessageIdAsChannelId(C.id))),
    eS = C.isFirstMessageInForumPost(K),
    ev = (0, E.A)((null !== (n = C.editedTimestamp) && void 0 !== n ? n : C.timestamp).valueOf()),
    eA = (0, u.e7)([x.Z], () => x.Z.isDeveloper),
    {
      content: eM,
      hasSpoilerEmbeds: eR
    } = (0, b.Z)(C, {
      hideSimpleEmbedContent: ei && es,
      isInteracting: eN,
      formatInline: !1,
      allowList: eS || ev,
      allowHeading: eS || ev,
      allowLinks: !0,
      allowDevLinks: eA,
      previewLinkTarget: !0
    }),
    ej = (0, O.Z)(v, q, ex),
    eL = (0, M.ZP)(C),
    eO = (0, u.e7)([g.Z], () => g.Z.getPendingReply(q)),
    eP = function(e) {
      let t = i.useRef(e);
      return i.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(J),
    eb = (0, p.p9)({
      guildId: K.guild_id,
      roleId: eL.iconRoleId
    }),
    ey = (0, j.iG)(C, $),
    eD = (0, j.Gx)(C),
    eU = (0, u.e7)([m.Z], () => m.Z.getMessage(v), [v]),
    ek = (0, y.Z)({
      message: C,
      channel: K
    }),
    ew = null != eU;
  s = C.type === z.uaV.CUSTOM_GIFT ? "" : !eI && ew ? (0, U.Z)(e, eM) : (0, H.Z)(e, eM, eI);
  let eH = C.id === $,
    eB = (0, l.jsx)(d.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, l.jsx)("li", {
        id: r,
        className: Y.messageListItem,
        "aria-setsize": -1,
        children: (0, l.jsx)(N.Z, {
          ...el,
          "aria-setsize": -1,
          "aria-roledescription": W.Z.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": ey,
          "aria-describedby": eD,
          onFocus: eC,
          onBlur: e_,
          onContextMenu: eu,
          onKeyDown: ej,
          onClick: ed,
          compact: X,
          contentOnly: ee,
          className: a()(Q, {
            [Y.message]: !0,
            [Y.cozyMessage]: !X,
            [Y.mentioned]: C.mentioned,
            [Y.ephemeral]: (0, Z.yE)(C.flags, z.iLy.EPHEMERAL),
            [Y.nitroMessage]: C.type === z.uaV.NITRO_NOTIFICATION,
            [Y.systemMessage]: (0, A.Z)(C),
            [Y.groupStart]: !ee && (eH || C.type === z.uaV.REPLY),
            [Y.selected]: eT,
            [Y.replying]: (null == eO ? void 0 : eO.message.id) === C.id,
            [Y.interactionSending]: C.isCommandType() && C.state === z.yb.SENDING,
            [Y.automodMessage]: ew
          }),
          zalgo: !eI,
          childrenRepliedMessage: ee ? void 0 : (0, G.Z)(e, ec, er, et, ea),
          childrenExecutedCommand: (0, B.Z)(e, ec, er),
          childrenHeader: ee ? void 0 : (0, w.Z)({
            messageProps: e,
            setPopout: ec,
            messagePopouts: er,
            replyReference: et,
            author: eL,
            repliedMessage: ea,
            roleIcon: eb
          }),
          childrenAccessories: (0, D.Z)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eR,
            handleContextMenu: eu,
            isInteracting: eN,
            isAutomodBlockedMessage: ew
          }),
          childrenButtons: ep || ef ? (0, k.Z)({
            buttonProps: e,
            setPopout: ec,
            messagePopouts: er,
            isFocused: eE || eg
          }) : void 0,
          childrenSystemMessage: (0, V.Z)(e),
          childrenMessageContent: s,
          onMouseMove: eh,
          onMouseLeave: em,
          hasThread: !ee && C.hasFlag(z.iLy.HAS_THREAD) && null != eZ,
          isSystemMessage: (0, A.Z)(C),
          hasReply: C.type === z.uaV.REPLY,
          messageRef: ek
        })
      })
    });
  return null != eP ? (0, l.jsx)(R.Z, {
    flashKey: eP,
    className: a()({
      [Y.backgroundFlash]: !0,
      [Y.groupStart]: !X && C.id === $
    }),
    children: eB
  }, "bg-flash-".concat(r)) : eB
})