n(789020);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(442837),
    o = n(481060),
    c = n(25610),
    u = n(703751),
    d = n(628238),
    _ = n(976853),
    E = n(977683),
    I = n(869765),
    m = n(695346),
    T = n(592125),
    h = n(699516),
    N = n(630388),
    f = n(709054),
    C = n(493892),
    p = n(901461),
    g = n(739566),
    A = n(443877),
    S = n(492593),
    x = n(938353),
    R = n(25015),
    O = n(689674),
    M = n(963550),
    v = n(845080),
    L = n(295790),
    Z = n(145807),
    P = n(56744),
    b = n(834129),
    D = n(981631),
    j = n(689938),
    U = n(590008),
    y = n(916315);
function B(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(S.Z, {
        className: t,
        compact: s,
        role: 'group',
        childrenMessageContent: (0, i.jsx)(b.Z, {
            compact: s,
            className: U.blockedSystemMessage,
            iconNode: (0, i.jsx)(o.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: U.blockedIcon
            }),
            children: (0, i.jsx)('div', {
                className: U.blockedMessageText,
                children: a.format({ count: n })
            })
        })
    });
}
t.Z = s.memo(function e(t) {
    var n;
    let s;
    let { channel: a, message: o, compact: b = !1, className: U, onContextMenu: k, onClick: F, disableInteraction: G = !1, hasThread: w, treatSpam: V } = t,
        H = D.OBS.has(o.type) ? o.messageReference : void 0,
        Y = (0, l.e7)([I.Z], () => I.Z.getMessageByReference(H)),
        W = (0, l.e7)([T.Z], () => (o.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === I.Y.LOADED ? T.Z.getChannel(Y.message.channel_id) : null)),
        K = m.x4.useSetting(),
        z = m.RS.useSetting(),
        Q = m.NA.useSetting(),
        q = m.QK.useSetting(),
        X = (0, d.A)((null !== (n = o.editedTimestamp) && void 0 !== n ? n : o.timestamp).valueOf()),
        J = (0, _.Z)(null == a ? void 0 : a.id),
        { disableReactionCreates: $ } = (0, A.Z)(a),
        { content: ee, hasSpoilerEmbeds: et } = (0, R.Z)(o, {
            hideSimpleEmbedContent: z && Q,
            allowList: X,
            allowHeading: X,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        en = (0, g.ZP)(o),
        ei = (0, l.e7)([T.Z], () => o.hasFlag(D.iLy.HAS_THREAD) && T.Z.getChannel(f.default.castMessageIdAsChannelId(o.id))),
        es = o.type === D.uaV.THREAD_STARTER_MESSAGE && Y.state === I.Y.LOADED && null != W,
        ea = !es && void 0 === s,
        er = (0, O.Z)({
            message: o,
            channel: a,
            enabled: ea
        }),
        el = (0, c.V)(a.id, o.author.id),
        eo = (0, u.r)(o.id),
        ec = (0, E.Z)(o);
    return es
        ? (0, i.jsx)(e, {
              ...t,
              message: Y.message,
              channel: W,
              hasThread: !1
          })
        : (h.Z.isBlockedForMessage(o) ? (s = j.Z.Messages.BLOCKED_MESSAGE_COUNT) : (0, C.DQ)(o) && V && (s = j.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== s)
          ? (0, i.jsx)(B, {
                className: U,
                compact: b,
                count: 1,
                collapsedReason: s
            })
          : (0, i.jsx)(S.Z, {
                compact: b,
                className: r()(U, {
                    [y.ephemeral]: (0, N.yE)(o.flags, D.iLy.EPHEMERAL),
                    [y.disableInteraction]: G,
                    [y.groupStart]: t.isGroupStart
                }),
                childrenRepliedMessage: (0, P.Z)(o, a, H, Y, b),
                childrenHeader: (0, v.Z)({
                    ...t,
                    author: en,
                    guildId: a.guild_id
                }),
                childrenAccessories: (0, i.jsx)(x.BB, {
                    channel: a,
                    message: o,
                    hasSpoilerEmbeds: et,
                    compact: b,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: $,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: w,
                    renderComponentAccessory: !1,
                    inlineAttachmentMedia: K,
                    inlineEmbedMedia: z,
                    renderEmbeds: Q,
                    gifAutoPlay: q,
                    poll: ec,
                    showListsAndHeaders: X,
                    showMaskedLinks: X,
                    shouldHideMediaOptions: J,
                    shouldRedactExplicitContent: el,
                    shouldRenderCtaButton: eo,
                    hasInlineForwardButton: !1
                }),
                childrenExecutedCommand: (0, Z.Z)(o, a, b),
                childrenMessageContent: (0, M.Z)(t, ee),
                childrenSystemMessage: (0, L.Z)(t),
                onContextMenu: k,
                onClick: F,
                hasThread: !1 !== w && null != ei && o.hasFlag(D.iLy.HAS_THREAD),
                hasReply: o.type === D.uaV.REPLY,
                isSystemMessage: (0, p.Z)(o),
                messageRef: er
            });
});
