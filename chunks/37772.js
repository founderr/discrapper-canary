var r = n(789020);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(25610),
    d = n(703751),
    _ = n(628238),
    E = n(976853),
    f = n(977683),
    h = n(869765),
    p = n(695346),
    m = n(592125),
    I = n(699516),
    T = n(630388),
    g = n(709054),
    S = n(493892),
    A = n(901461),
    v = n(739566),
    N = n(443877),
    O = n(492593),
    R = n(938353),
    C = n(25015),
    y = n(689674),
    b = n(963550),
    L = n(845080),
    D = n(295790),
    M = n(145807),
    P = n(56744),
    U = n(834129),
    w = n(981631),
    x = n(689938),
    G = n(590008),
    k = n(916315);
function B(e) {
    var t;
    let n;
    let { channel: r, message: a, compact: o = !1, className: u, onContextMenu: U, onClick: G, disableInteraction: Z = !1, hasThread: V, treatSpam: H } = e,
        Y = w.OBS.has(a.type) ? a.messageReference : void 0,
        j = (0, l.e7)([h.Z], () => h.Z.getMessageByReference(Y)),
        W = (0, l.e7)([m.Z], () => (a.type === w.uaV.THREAD_STARTER_MESSAGE && j.state === h.Y.LOADED ? m.Z.getChannel(j.message.channel_id) : null)),
        K = p.x4.useSetting(),
        z = p.RS.useSetting(),
        q = p.NA.useSetting(),
        Q = p.QK.useSetting(),
        X = (0, _.A)((null !== (t = a.editedTimestamp) && void 0 !== t ? t : a.timestamp).valueOf()),
        $ = (0, E.Z)(null == r ? void 0 : r.id),
        { disableReactionCreates: J } = (0, N.Z)(r),
        { content: ee, hasSpoilerEmbeds: et } = (0, C.Z)(a, {
            hideSimpleEmbedContent: z && q,
            allowList: X,
            allowHeading: X,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        en = (0, v.ZP)(a),
        er = (0, l.e7)([m.Z], () => a.hasFlag(w.iLy.HAS_THREAD) && m.Z.getChannel(g.default.castMessageIdAsChannelId(a.id))),
        ei = a.type === w.uaV.THREAD_STARTER_MESSAGE && j.state === h.Y.LOADED && null != W,
        ea = !ei && void 0 === n,
        eo = (0, y.Z)({
            message: a,
            channel: r,
            enabled: ea
        }),
        es = (0, c.V)(r.id, a.author.id),
        el = (0, d.r)(a.id),
        eu = (0, f.Z)(a);
    return ei
        ? (0, i.jsx)(B, {
              ...e,
              message: j.message,
              channel: W,
              hasThread: !1
          })
        : (I.Z.isBlockedForMessage(a) ? (n = x.Z.Messages.BLOCKED_MESSAGE_COUNT) : (0, S.DQ)(a) && H && (n = x.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== n)
          ? (0, i.jsx)(F, {
                className: u,
                compact: o,
                count: 1,
                collapsedReason: n
            })
          : (0, i.jsx)(O.Z, {
                compact: o,
                className: s()(u, {
                    [k.ephemeral]: (0, T.yE)(a.flags, w.iLy.EPHEMERAL),
                    [k.disableInteraction]: Z,
                    [k.groupStart]: e.isGroupStart
                }),
                childrenRepliedMessage: (0, P.Z)(a, r, Y, j, o),
                childrenHeader: (0, L.Z)({
                    ...e,
                    author: en,
                    guildId: r.guild_id
                }),
                childrenAccessories: (0, i.jsx)(R.BB, {
                    channel: r,
                    message: a,
                    hasSpoilerEmbeds: et,
                    compact: o,
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
                childrenExecutedCommand: (0, M.Z)(a, r, o),
                childrenMessageContent: (0, b.Z)(e, ee),
                childrenSystemMessage: (0, D.Z)(e),
                onContextMenu: U,
                onClick: G,
                hasThread: !1 !== V && null != er && a.hasFlag(w.iLy.HAS_THREAD),
                hasReply: a.type === w.uaV.REPLY,
                isSystemMessage: (0, A.Z)(a),
                messageRef: eo
            });
}
function F(e) {
    let { className: t, count: n, compact: r, collapsedReason: a } = e;
    return (0, i.jsx)(O.Z, {
        className: t,
        compact: r,
        role: 'group',
        childrenMessageContent: (0, i.jsx)(U.Z, {
            compact: r,
            className: G.blockedSystemMessage,
            iconNode: (0, i.jsx)(u.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: G.blockedIcon
            }),
            children: (0, i.jsx)('div', {
                className: G.blockedMessageText,
                children: a.format({ count: n })
            })
        })
    });
}
t.Z = a.memo(B);
