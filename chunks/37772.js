var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    u = n(25610),
    c = n(703751),
    d = n(628238),
    _ = n(976853),
    E = n(977683),
    f = n(869765),
    h = n(695346),
    p = n(592125),
    m = n(699516),
    I = n(709054),
    T = n(786761),
    g = n(493892),
    S = n(901461),
    A = n(739566),
    v = n(443877),
    N = n(492593),
    O = n(938353),
    R = n(25015),
    C = n(689674),
    y = n(963550),
    L = n(845080),
    b = n(295790),
    D = n(145807),
    M = n(56744),
    P = n(834129),
    U = n(981631),
    w = n(689938),
    x = n(590008),
    G = n(916315);
function k(e) {
    var t;
    let n;
    let { channel: i, message: a, compact: l = !1, className: P, onContextMenu: x, onClick: F, disableInteraction: Z = !1, hasThread: V, treatSpam: H } = e,
        Y = U.OBS.has(a.type) ? a.messageReference : void 0,
        j = (0, s.e7)([f.Z], () => f.Z.getMessageByReference(Y)),
        W = (0, s.e7)([p.Z], () => (a.type === U.uaV.THREAD_STARTER_MESSAGE && j.state === f.Y.LOADED ? p.Z.getChannel(j.message.channel_id) : null)),
        K = h.x4.useSetting(),
        z = h.RS.useSetting(),
        q = h.NA.useSetting(),
        Q = h.QK.useSetting(),
        X = (0, d.A)((null !== (t = a.editedTimestamp) && void 0 !== t ? t : a.timestamp).valueOf()),
        $ = (0, _.Z)(null == i ? void 0 : i.id),
        { disableReactionCreates: J } = (0, v.Z)(i),
        { content: ee, hasSpoilerEmbeds: et } = (0, R.Z)(a, {
            hideSimpleEmbedContent: z && q,
            allowList: X,
            allowHeading: X,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        en = (0, A.ZP)(a),
        er = (0, s.e7)([p.Z], () => a.hasFlag(U.iLy.HAS_THREAD) && p.Z.getChannel(I.default.castMessageIdAsChannelId(a.id))),
        ei = a.type === U.uaV.THREAD_STARTER_MESSAGE && j.state === f.Y.LOADED && null != W,
        ea = !ei && void 0 === n,
        eo = (0, C.Z)({
            message: a,
            channel: i,
            enabled: ea
        }),
        es = (0, u.V)(i.id, a.author.id),
        el = (0, c.r)(a.id),
        eu = (0, E.Z)(a);
    return ei
        ? (0, r.jsx)(k, {
              ...e,
              message: j.message,
              channel: W,
              hasThread: !1
          })
        : (m.Z.isBlockedForMessage(a) ? (n = w.Z.Messages.BLOCKED_MESSAGE_COUNT) : (0, g.DQ)(a) && H && (n = w.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== n)
          ? (0, r.jsx)(B, {
                className: P,
                compact: l,
                count: 1,
                collapsedReason: n
            })
          : (0, r.jsx)(N.Z, {
                compact: l,
                className: o()(P, {
                    [G.ephemeral]: (0, T.Pv)(a),
                    [G.disableInteraction]: Z,
                    [G.groupStart]: e.isGroupStart
                }),
                childrenRepliedMessage: (0, M.Z)(a, i, Y, j, l),
                childrenHeader: (0, L.Z)({
                    ...e,
                    author: en,
                    guildId: i.guild_id
                }),
                childrenAccessories: (0, r.jsx)(O.BB, {
                    channel: i,
                    message: a,
                    hasSpoilerEmbeds: et,
                    compact: l,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: J,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: V,
                    renderComponentAccessory: !1,
                    inlineAttachmentMedia: K,
                    inlineEmbedMedia: z,
                    renderEmbeds: q,
                    gifAutoPlay: Q,
                    poll: eu,
                    showListsAndHeaders: X,
                    showMaskedLinks: X,
                    shouldHideMediaOptions: $,
                    shouldRedactExplicitContent: es,
                    shouldRenderCtaButton: el,
                    hasInlineForwardButton: !1
                }),
                childrenExecutedCommand: (0, D.Z)(a, i, l),
                childrenMessageContent: (0, y.Z)(e, ee),
                childrenSystemMessage: (0, b.Z)(e),
                onContextMenu: x,
                onClick: F,
                hasThread: !1 !== V && null != er && a.hasFlag(U.iLy.HAS_THREAD),
                hasReply: a.type === U.uaV.REPLY,
                isSystemMessage: (0, S.Z)(a),
                messageRef: eo
            });
}
function B(e) {
    let { className: t, count: n, compact: i, collapsedReason: a } = e;
    return (0, r.jsx)(N.Z, {
        className: t,
        compact: i,
        role: 'group',
        childrenMessageContent: (0, r.jsx)(P.Z, {
            compact: i,
            className: x.blockedSystemMessage,
            iconNode: (0, r.jsx)(l.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: x.blockedIcon
            }),
            children: (0, r.jsx)('div', {
                className: x.blockedMessageText,
                children: a.format({ count: n })
            })
        })
    });
}
t.Z = i.memo(k);
