var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(91192),
    o = n(442837),
    c = n(518738),
    u = n(628238),
    d = n(869765),
    _ = n(592125),
    E = n(496675),
    I = n(709054),
    m = n(786761),
    T = n(900164),
    f = n(739566),
    h = n(492593),
    N = n(453687),
    p = n(25015),
    C = n(689674),
    g = n(438075),
    S = n(963550),
    A = n(845080),
    x = n(295790),
    R = n(145807),
    v = n(56744),
    O = n(981631),
    M = n(916315);
t.Z = a.memo(function (e) {
    var t, n;
    let { message: a, compact: s = !1, className: L, onContextMenu: Z, onClick: b, hideSimpleEmbedContent: P = !0, channel: D, isGroupStart: j, animateAvatar: U, subscribeToComponentDispatch: y, renderThreadAccessory: B, trackAnnouncementViews: k = !1, ...G } = e,
        F = a.type === O.uaV.POLL_RESULT || (null !== (t = e.disableInteraction) && void 0 !== t && t),
        w = a.isFirstMessageInForumPost(D),
        V = (0, u.A)((null !== (n = a.editedTimestamp) && void 0 !== n ? n : a.timestamp).valueOf()),
        { content: H, hasSpoilerEmbeds: Y } = (0, p.Z)(a, {
            hideSimpleEmbedContent: P,
            allowList: w || V,
            allowHeading: w || V,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        W = a.type === O.uaV.REPLY ? a.messageReference : void 0,
        z = (0, o.e7)([d.Z], () => d.Z.getMessageByReference(W)),
        K = (0, l.JA)(a.id),
        X = (0, f.ZP)(a),
        Q = (0, o.e7)([_.Z], () => a.hasFlag(O.iLy.HAS_THREAD) && _.Z.getChannel(I.default.castMessageIdAsChannelId(a.id))),
        q = (0, c.p9)({
            guildId: D.guild_id,
            roleId: X.iconRoleId
        }),
        J = (0, o.e7)([E.Z], () => E.Z.can(O.Plq.CREATE_INSTANT_INVITE, D)),
        $ = (0, C.Z)({
            message: a,
            channel: D,
            enabled: k
        });
    if ((0, T.Z)(a, J)) return null;
    let ee = (0, N.iG)(a),
        et = (0, N.Gx)(a);
    return (0, i.jsx)(h.Z, {
        compact: s,
        className: r()(L, {
            [M.ephemeral]: (0, m.Pv)(a),
            [M.disableInteraction]: F
        }),
        disableInteraction: F,
        childrenRepliedMessage: (0, v.Z)(a, D, W, z, s),
        childrenExecutedCommand: (0, R.Z)(a, D, s),
        childrenHeader: (0, A.Z)({
            ...e,
            guildId: D.guild_id,
            author: X,
            roleIcon: q
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, g.Q)(e, Y),
        childrenMessageContent: (0, S.Z)(e, H),
        childrenSystemMessage: (0, x.Z)({
            ...e,
            disableInteraction: F
        }),
        onContextMenu: Z,
        onClick: b,
        hasThread: B && null != Q && a.hasFlag(O.iLy.HAS_THREAD),
        hasReply: a.type === O.uaV.REPLY,
        'aria-labelledby': ee,
        'aria-describedby': et,
        messageRef: $,
        ...K,
        ...G
    });
});
