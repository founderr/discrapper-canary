var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(518738),
    u = n(628238),
    d = n(869765),
    m = n(592125),
    f = n(496675),
    h = n(709054),
    p = n(786761),
    g = n(900164),
    _ = n(739566),
    C = n(492593),
    E = n(453687),
    I = n(25015),
    x = n(689674),
    v = n(438075),
    N = n(963550),
    T = n(845080),
    S = n(295790),
    b = n(145807),
    A = n(56744),
    j = n(981631),
    Z = n(916315);
t.Z = r.memo(function (e) {
    var t, n;
    let { message: r, compact: l = !1, className: R, onContextMenu: P, onClick: y, hideSimpleEmbedContent: L = !0, channel: O, isGroupStart: M, animateAvatar: k, subscribeToComponentDispatch: D, renderThreadAccessory: B, trackAnnouncementViews: w = !1, ...U } = e,
        F = r.type === j.uaV.POLL_RESULT || (null !== (t = e.disableInteraction) && void 0 !== t && t),
        G = r.isFirstMessageInForumPost(O),
        V = (0, u.A)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()),
        { content: H, hasSpoilerEmbeds: z } = (0, I.Z)(r, {
            hideSimpleEmbedContent: L,
            allowList: G || V,
            allowHeading: G || V,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        W = r.type === j.uaV.REPLY ? r.messageReference : void 0,
        K = (0, s.e7)([d.Z], () => d.Z.getMessageByReference(W)),
        Y = (0, o.JA)(r.id),
        X = (0, _.ZP)(r),
        Q = (0, s.e7)([m.Z], () => r.hasFlag(j.iLy.HAS_THREAD) && m.Z.getChannel(h.default.castMessageIdAsChannelId(r.id))),
        q = (0, c.p9)({
            guildId: O.guild_id,
            roleId: X.iconRoleId
        }),
        J = (0, s.e7)([f.Z], () => f.Z.can(j.Plq.CREATE_INSTANT_INVITE, O)),
        $ = (0, x.Z)({
            message: r,
            channel: O,
            enabled: w
        });
    if ((0, g.Z)(r, J)) return null;
    let ee = (0, E.iG)(r),
        et = (0, E.Gx)(r);
    return (0, i.jsx)(C.Z, {
        compact: l,
        className: a()(R, {
            [Z.ephemeral]: (0, p.Pv)(r),
            [Z.disableInteraction]: F
        }),
        disableInteraction: F,
        childrenRepliedMessage: (0, A.Z)(r, O, W, K, l),
        childrenExecutedCommand: (0, b.Z)(r, O, l),
        childrenHeader: (0, T.Z)({
            ...e,
            guildId: O.guild_id,
            author: X,
            roleIcon: q
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, v.Q)(e, z),
        childrenMessageContent: (0, N.Z)(e, H),
        childrenSystemMessage: (0, S.Z)({
            ...e,
            disableInteraction: F
        }),
        onContextMenu: P,
        onClick: y,
        hasThread: B && null != Q && r.hasFlag(j.iLy.HAS_THREAD),
        hasReply: r.type === j.uaV.REPLY,
        'aria-labelledby': ee,
        'aria-describedby': et,
        messageRef: $,
        ...Y,
        ...U
    });
});
