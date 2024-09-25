n(789020);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(91192),
    o = n(442837),
    c = n(518738),
    u = n(628238),
    d = n(869765),
    _ = n(592125),
    E = n(496675),
    I = n(630388),
    m = n(709054),
    T = n(900164),
    h = n(739566),
    N = n(492593),
    f = n(453687),
    C = n(25015),
    p = n(689674),
    g = n(438075),
    A = n(963550),
    S = n(845080),
    x = n(295790),
    R = n(145807),
    O = n(56744),
    M = n(981631),
    v = n(916315);
t.Z = s.memo(function (e) {
    var t, n;
    let { message: s, compact: a = !1, className: L, onContextMenu: Z, onClick: P, hideSimpleEmbedContent: b = !0, channel: D, isGroupStart: j, animateAvatar: U, subscribeToComponentDispatch: y, renderThreadAccessory: B, trackAnnouncementViews: k = !1, ...F } = e,
        G = s.type === M.uaV.POLL_RESULT || (null !== (t = e.disableInteraction) && void 0 !== t && t),
        w = s.isFirstMessageInForumPost(D),
        V = (0, u.A)((null !== (n = s.editedTimestamp) && void 0 !== n ? n : s.timestamp).valueOf()),
        { content: H, hasSpoilerEmbeds: Y } = (0, C.Z)(s, {
            hideSimpleEmbedContent: b,
            allowList: w || V,
            allowHeading: w || V,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        W = s.type === M.uaV.REPLY ? s.messageReference : void 0,
        K = (0, o.e7)([d.Z], () => d.Z.getMessageByReference(W)),
        z = (0, l.JA)(s.id),
        Q = (0, h.ZP)(s),
        q = (0, o.e7)([_.Z], () => s.hasFlag(M.iLy.HAS_THREAD) && _.Z.getChannel(m.default.castMessageIdAsChannelId(s.id))),
        X = (0, c.p9)({
            guildId: D.guild_id,
            roleId: Q.iconRoleId
        }),
        J = (0, o.e7)([E.Z], () => E.Z.can(M.Plq.CREATE_INSTANT_INVITE, D)),
        $ = (0, p.Z)({
            message: s,
            channel: D,
            enabled: k
        });
    if ((0, T.Z)(s, J)) return null;
    let ee = (0, f.iG)(s),
        et = (0, f.Gx)(s);
    return (0, i.jsx)(N.Z, {
        compact: a,
        className: r()(L, {
            [v.ephemeral]: (0, I.yE)(s.flags, M.iLy.EPHEMERAL),
            [v.disableInteraction]: G
        }),
        disableInteraction: G,
        childrenRepliedMessage: (0, O.Z)(s, D, W, K, a),
        childrenExecutedCommand: (0, R.Z)(s, D, a),
        childrenHeader: (0, S.Z)({
            ...e,
            guildId: D.guild_id,
            author: Q,
            roleIcon: X
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, g.Q)(e, Y),
        childrenMessageContent: (0, A.Z)(e, H),
        childrenSystemMessage: (0, x.Z)({
            ...e,
            disableInteraction: G
        }),
        onContextMenu: Z,
        onClick: P,
        hasThread: B && null != q && s.hasFlag(M.iLy.HAS_THREAD),
        hasReply: s.type === M.uaV.REPLY,
        'aria-labelledby': ee,
        'aria-describedby': et,
        messageRef: $,
        ...z,
        ...F
    });
});
