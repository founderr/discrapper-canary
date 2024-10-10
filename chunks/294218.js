var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(91192),
    o = n(442837),
    c = n(518738),
    d = n(628238),
    u = n(869765),
    _ = n(592125),
    E = n(496675),
    I = n(709054),
    m = n(786761),
    T = n(900164),
    N = n(739566),
    h = n(492593),
    C = n(453687),
    f = n(25015),
    p = n(689674),
    g = n(438075),
    A = n(963550),
    S = n(845080),
    M = n(295790),
    O = n(145807),
    x = n(56744),
    R = n(981631),
    v = n(916315);
t.Z = a.memo(function (e) {
    var t, n;
    let { message: a, compact: s = !1, className: L, onContextMenu: Z, onClick: P, hideSimpleEmbedContent: b = !0, channel: D, isGroupStart: j, animateAvatar: U, subscribeToComponentDispatch: y, renderThreadAccessory: B, trackAnnouncementViews: k = !1, ...G } = e,
        F = a.type === R.uaV.POLL_RESULT || (null !== (t = e.disableInteraction) && void 0 !== t && t),
        w = a.isFirstMessageInForumPost(D),
        V = (0, d.A)((null !== (n = a.editedTimestamp) && void 0 !== n ? n : a.timestamp).valueOf()),
        { content: H, hasSpoilerEmbeds: Y } = (0, f.Z)(a, {
            hideSimpleEmbedContent: b,
            allowList: w || V,
            allowHeading: w || V,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        W = a.type === R.uaV.REPLY ? a.messageReference : void 0,
        K = (0, o.e7)([u.Z], () => u.Z.getMessageByReference(W)),
        z = (0, r.JA)(a.id),
        X = (0, N.ZP)(a),
        Q = (0, o.e7)([_.Z], () => a.hasFlag(R.iLy.HAS_THREAD) && _.Z.getChannel(I.default.castMessageIdAsChannelId(a.id))),
        J = (0, c.p9)({
            guildId: D.guild_id,
            roleId: X.iconRoleId
        }),
        q = (0, o.e7)([E.Z], () => E.Z.can(R.Plq.CREATE_INSTANT_INVITE, D)),
        $ = (0, p.Z)({
            message: a,
            channel: D,
            enabled: k
        });
    if ((0, T.Z)(a, q)) return null;
    let ee = (0, C.iG)(a),
        et = (0, C.Gx)(a);
    return (0, i.jsx)(h.Z, {
        compact: s,
        className: l()(L, {
            [v.ephemeral]: (0, m.Pv)(a),
            [v.disableInteraction]: F
        }),
        disableInteraction: F,
        childrenRepliedMessage: (0, x.Z)(a, D, W, K, s),
        childrenExecutedCommand: (0, O.Z)(a, D, s),
        childrenHeader: (0, S.Z)({
            ...e,
            guildId: D.guild_id,
            author: X,
            roleIcon: J
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, g.Q)(e, Y),
        childrenMessageContent: (0, A.Z)(e, H),
        childrenSystemMessage: (0, M.Z)({
            ...e,
            disableInteraction: F
        }),
        onContextMenu: Z,
        onClick: P,
        hasThread: B && null != Q && a.hasFlag(R.iLy.HAS_THREAD),
        hasReply: a.type === R.uaV.REPLY,
        'aria-labelledby': ee,
        'aria-describedby': et,
        messageRef: $,
        ...z,
        ...G
    });
});
