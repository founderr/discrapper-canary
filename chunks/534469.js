n.d(t, {
    AP: function () {
        return K;
    },
    Ru: function () {
        return q;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    h = n(607070),
    m = n(223606),
    p = n(518738),
    f = n(628238),
    g = n(807092),
    C = n(869765),
    x = n(703656),
    v = n(695346),
    _ = n(592125),
    I = n(906467),
    E = n(323873),
    b = n(709054),
    S = n(786761),
    Z = n(534091),
    T = n(901461),
    N = n(739566),
    j = n(233715),
    A = n(492593),
    y = n(453687),
    P = n(348238),
    M = n(62072),
    R = n(38267),
    L = n(25015),
    k = n(689674),
    O = n(438075),
    w = n(764893),
    D = n(481363),
    U = n(900902),
    B = n(252032),
    H = n(737243),
    F = n(614584),
    G = n(295790),
    V = n(959517),
    z = n(981631),
    W = n(388032),
    Y = n(916315);
function K(e, t, n) {
    return e.getElementById((0, Z.p)(t, n));
}
function q(e) {
    var t;
    let {
        id: n,
        message: l,
        message: { messageReference: r },
        compact: s = !1,
        className: d
    } = e;
    o()(l.type === z.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
    let { ...h } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        m = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(r)),
        { popouts: p, setPopout: f } = (0, R.Z)(l.id, V.d$),
        g = (0, N.ZP)(l),
        x = (0, y.iG)(l),
        v = (0, y.Gx)(l);
    return l.type === z.uaV.THREAD_STARTER_MESSAGE && null != m && m.state === C.Y.LOADED
        ? (0, i.jsx)(X, {
              ...e,
              viewingChannelId: l.channel_id,
              message: m.message,
              groupId: m.message.id
          })
        : (0, i.jsx)(A.Z, {
              ...h,
              id: n,
              compact: s,
              className: a()(d, {
                  [Y.message]: !0,
                  [Y.cozyMessage]: !s,
                  [Y.systemMessage]: !0,
                  [Y.groupStart]: !0
              }),
              childrenHeader: (0, U.Z)({
                  messageProps: e,
                  setPopout: f,
                  messagePopouts: p,
                  replyReference: r,
                  author: g
              }),
              childrenSystemMessage: (0, G.Z)(e),
              childrenMessageContent: null,
              'aria-labelledby': x,
              'aria-describedby': v,
              hasThread: !1
          });
}
function X(e) {
    var t, n;
    let {
            id: r,
            message: s,
            message: { id: o, channel_id: m },
            channel: { guild_id: g },
            compact: _ = !1,
            className: I,
            groupId: E,
            viewingChannelId: b
        } = e,
        Z = s.type === z.uaV.REPLY ? s.messageReference : void 0,
        { onFocus: j, ...k } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        { isFocused: w, handleFocus: D, handleBlur: H } = (0, P.bb)(j),
        { popouts: K, selected: q, setPopout: X } = (0, R.Z)(s.id, V.d$),
        J = v.RS.useSetting(),
        Q = v.NA.useSetting(),
        $ = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(Z)),
        ee = (0, f.A)((null !== (n = s.editedTimestamp) && void 0 !== n ? n : s.timestamp).valueOf()),
        { handleMouseEnter: et, handleMouseLeave: en, isHovered: ei } = (0, P.tn)(E, s.author.id, q),
        el = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        er = q || (el && w),
        ea = er || ei,
        { content: es, hasSpoilerEmbeds: eo } = (0, L.Z)(s, {
            hideSimpleEmbedContent: J && Q,
            isInteracting: ea,
            formatInline: !1,
            allowList: ee,
            allowHeading: ee,
            allowLinks: !0,
            previewLinkTarget: !0,
            viewingChannelId: b
        }),
        ec = (0, M.Z)(o, m, el),
        eu = (0, N.ZP)(s),
        ed = (0, y.iG)(s, E),
        eh = (0, y.Gx)(s),
        em = (0, B.Z)(e, es, !1),
        ep = l.useCallback(() => (0, x.XU)(g, m, o), [g, m, o]),
        ef = (0, p.p9)({
            guildId: g,
            roleId: eu.iconRoleId
        });
    return (0, i.jsxs)('div', {
        className: Y.quotedChatMessage,
        children: [
            (0, i.jsx)(d.Clickable, {
                className: Y.jump,
                onClick: ep,
                'aria-label': W.intl.string(W.t.k5WiPT),
                children: W.intl.string(W.t.k5WiPT)
            }),
            (0, i.jsx)(A.Z, {
                ...k,
                id: r,
                compact: _,
                className: a()(I, {
                    [Y.message]: !0,
                    [Y.cozyMessage]: !_,
                    [Y.mentioned]: s.mentioned,
                    [Y.ephemeral]: (0, S.Pv)(s),
                    [Y.systemMessage]: (0, T.Z)(s),
                    [Y.groupStart]: s.id === E || s.type === z.uaV.REPLY,
                    [Y.selected]: er
                }),
                zalgo: !0,
                onKeyDown: ec,
                onFocus: D,
                onBlur: H,
                childrenRepliedMessage:
                    s.type === z.uaV.REPLY &&
                    (0, F.Z)({
                        ...e,
                        setPopout: X,
                        referencedUsernameProfile: K.referencedUsernameProfile,
                        referencedAvatarProfile: K.referencedAvatarProfile,
                        replyReference: Z,
                        replyMessage: $,
                        isReplySpineClickable: !0
                    }),
                childrenHeader: (0, U.Z)({
                    messageProps: e,
                    setPopout: X,
                    messagePopouts: K,
                    replyReference: Z,
                    author: eu,
                    repliedMessage: $,
                    roleIcon: ef
                }),
                childrenAccessories: (0, O.Z)({
                    channelMessageProps: e,
                    hasSpoilerEmbeds: eo,
                    isInteracting: ea,
                    renderThreadAccessory: !1,
                    renderComponentAccessory: !1,
                    renderSuppressEmbeds: !1
                }),
                childrenSystemMessage: (0, G.Z)(e),
                childrenMessageContent: em,
                onMouseMove: et,
                onMouseLeave: en,
                'aria-labelledby': ed,
                'aria-describedby': eh,
                hasThread: !1
            })
        ]
    });
}
t.ZP = l.memo(function (e) {
    var t, n;
    let r;
    let {
        id: s,
        message: x,
        message: { id: Z },
        channel: K,
        channel: { id: q },
        compact: X = !1,
        className: J,
        flashKey: Q,
        groupId: $,
        renderContentOnly: ee
    } = e;
    o()(x.type !== z.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
    let et = z.OBS.has(x.type) ? x.messageReference : void 0,
        { onFocus: en, ...ei } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
        el = v.RS.useSetting(),
        er = v.NA.useSetting(),
        ea = (0, u.e7)([C.Z], () => C.Z.getMessageByReference(et)),
        { popouts: es, selected: eo, setPopout: ec } = (0, R.Z)(x.id, V.d$),
        eu = (0, P.qo)(x, K, ec),
        ed = (0, P.Go)(x, K),
        { handleMouseEnter: eh, handleMouseLeave: em, hasHovered: ep, isHovered: ef } = (0, P.tn)($, x.author.id, eo),
        { isFocused: eg, hasFocused: eC, handleFocus: ex, handleBlur: ev } = (0, P.bb)(en),
        e_ = (0, u.e7)([E.Z], () => E.Z.isEditing(q, Z), [q, Z]),
        eI = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        eE = eo || e_ || (eI && eg),
        eb = eE || ef,
        eS = (0, u.e7)([_.Z], () => x.hasFlag(z.iLy.HAS_THREAD) && _.Z.getChannel(b.default.castMessageIdAsChannelId(x.id))),
        eZ = x.isFirstMessageInForumPost(K),
        eT = (0, f.A)((null !== (n = x.editedTimestamp) && void 0 !== n ? n : x.timestamp).valueOf()),
        eN = (0, u.e7)([I.Z], () => I.Z.isDeveloper),
        { content: ej, hasSpoilerEmbeds: eA } = (0, L.Z)(x, {
            hideSimpleEmbedContent: el && er,
            isInteracting: eb,
            formatInline: !1,
            allowList: eZ || eT,
            allowHeading: eZ || eT,
            allowLinks: !0,
            allowDevLinks: eN,
            previewLinkTarget: !0
        }),
        ey = (0, M.Z)(Z, q, eI),
        eP = (0, N.ZP)(x),
        eM = (0, u.e7)([g.Z], () => g.Z.getPendingReply(q)),
        eR = (function (e) {
            let t = l.useRef(e);
            return l.useEffect(() => void (t.current = null != e ? e : t.current)), null != e ? e : t.current;
        })(Q),
        eL = (0, p.p9)({
            guildId: K.guild_id,
            roleId: eP.iconRoleId
        }),
        ek = (0, y.iG)(x, $),
        eO = (0, y.Gx)(x),
        ew = (0, u.e7)([m.Z], () => m.Z.getMessage(Z), [Z]),
        eD = (0, k.Z)({
            message: x,
            channel: K
        }),
        eU = null != ew;
    r = x.type === z.uaV.CUSTOM_GIFT ? '' : !e_ && eU ? (0, w.Z)(e, ej) : (0, B.Z)(e, ej, e_);
    let eB = x.id === $,
        eH = (0, i.jsx)(d.FocusRing, {
            offset: {
                left: 4,
                right: 4
            },
            children: (0, i.jsx)('li', {
                id: s,
                className: Y.messageListItem,
                'aria-setsize': -1,
                children: (0, i.jsx)(A.Z, {
                    ...ei,
                    'aria-setsize': -1,
                    'aria-roledescription': W.intl.string(W.t.BAB0yM),
                    'aria-labelledby': ek,
                    'aria-describedby': eO,
                    onFocus: ex,
                    onBlur: ev,
                    onContextMenu: eu,
                    onKeyDown: ey,
                    onClick: ed,
                    compact: X,
                    contentOnly: ee,
                    className: a()(J, {
                        [Y.message]: !0,
                        [Y.cozyMessage]: !X,
                        [Y.mentioned]: x.mentioned,
                        [Y.ephemeral]: (0, S.Pv)(x),
                        [Y.nitroMessage]: x.type === z.uaV.NITRO_NOTIFICATION,
                        [Y.systemMessage]: (0, T.Z)(x),
                        [Y.groupStart]: !ee && (eB || x.type === z.uaV.REPLY),
                        [Y.selected]: eE,
                        [Y.replying]: (null == eM ? void 0 : eM.message.id) === x.id,
                        [Y.interactionSending]: x.isCommandType() && x.state === z.yb.SENDING,
                        [Y.automodMessage]: eU
                    }),
                    zalgo: !e_,
                    childrenRepliedMessage:
                        ee || x.type !== z.uaV.REPLY
                            ? void 0
                            : (0, F.Z)({
                                  ...e,
                                  setPopout: ec,
                                  referencedUsernameProfile: es.referencedUsernameProfile,
                                  referencedAvatarProfile: es.referencedAvatarProfile,
                                  replyReference: et,
                                  replyMessage: ea,
                                  isReplySpineClickable: !0
                              }),
                    childrenExecutedCommand: (0, H.Z)(e, ec, es),
                    childrenHeader: ee
                        ? void 0
                        : (0, U.Z)({
                              messageProps: e,
                              setPopout: ec,
                              messagePopouts: es,
                              replyReference: et,
                              author: eP,
                              repliedMessage: ea,
                              roleIcon: eL
                          }),
                    childrenAccessories: (0, O.Z)({
                        channelMessageProps: e,
                        hasSpoilerEmbeds: eA,
                        handleContextMenu: eu,
                        isInteracting: eb,
                        isAutomodBlockedMessage: eU
                    }),
                    childrenButtons:
                        ep || eC
                            ? (0, D.Z)({
                                  buttonProps: e,
                                  setPopout: ec,
                                  messagePopouts: es,
                                  isFocused: ef || eg
                              })
                            : void 0,
                    childrenSystemMessage: (0, G.Z)(e),
                    childrenMessageContent: r,
                    onMouseMove: eh,
                    onMouseLeave: em,
                    hasThread: !ee && x.hasFlag(z.iLy.HAS_THREAD) && null != eS,
                    isSystemMessage: (0, T.Z)(x),
                    hasReply: x.type === z.uaV.REPLY,
                    messageRef: eD
                })
            })
        });
    return null != eR
        ? (0, i.jsx)(
              j.Z,
              {
                  flashKey: eR,
                  className: a()({
                      [Y.backgroundFlash]: !0,
                      [Y.groupStart]: !X && x.id === $
                  }),
                  children: eH
              },
              'bg-flash-'.concat(s)
          )
        : eH;
});
