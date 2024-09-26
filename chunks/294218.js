var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(442837),
    u = n(518738),
    c = n(628238),
    d = n(869765),
    _ = n(592125),
    E = n(496675),
    f = n(709054),
    h = n(786761),
    p = n(900164),
    m = n(739566),
    I = n(492593),
    T = n(453687),
    g = n(25015),
    S = n(689674),
    A = n(438075),
    v = n(963550),
    N = n(845080),
    O = n(295790),
    R = n(145807),
    C = n(56744),
    y = n(981631),
    L = n(916315);
function b(e) {
    var t, n;
    let { message: i, compact: a = !1, className: b, onContextMenu: D, onClick: M, hideSimpleEmbedContent: P = !0, channel: U, isGroupStart: w, animateAvatar: x, subscribeToComponentDispatch: G, renderThreadAccessory: k, trackAnnouncementViews: B = !1, ...F } = e,
        Z = i.type === y.uaV.POLL_RESULT || (null !== (t = e.disableInteraction) && void 0 !== t && t),
        V = i.isFirstMessageInForumPost(U),
        H = (0, c.A)((null !== (n = i.editedTimestamp) && void 0 !== n ? n : i.timestamp).valueOf()),
        { content: Y, hasSpoilerEmbeds: j } = (0, g.Z)(i, {
            hideSimpleEmbedContent: P,
            allowList: V || H,
            allowHeading: V || H,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        W = i.type === y.uaV.REPLY ? i.messageReference : void 0,
        K = (0, l.e7)([d.Z], () => d.Z.getMessageByReference(W)),
        z = (0, s.JA)(i.id),
        q = (0, m.ZP)(i),
        Q = (0, l.e7)([_.Z], () => i.hasFlag(y.iLy.HAS_THREAD) && _.Z.getChannel(f.default.castMessageIdAsChannelId(i.id))),
        X = (0, u.p9)({
            guildId: U.guild_id,
            roleId: q.iconRoleId
        }),
        $ = (0, l.e7)([E.Z], () => E.Z.can(y.Plq.CREATE_INSTANT_INVITE, U)),
        J = (0, S.Z)({
            message: i,
            channel: U,
            enabled: B
        });
    if ((0, p.Z)(i, $)) return null;
    let ee = (0, T.iG)(i),
        et = (0, T.Gx)(i);
    return (0, r.jsx)(I.Z, {
        compact: a,
        className: o()(b, {
            [L.ephemeral]: (0, h.Pv)(i),
            [L.disableInteraction]: Z
        }),
        disableInteraction: Z,
        childrenRepliedMessage: (0, C.Z)(i, U, W, K, a),
        childrenExecutedCommand: (0, R.Z)(i, U, a),
        childrenHeader: (0, N.Z)({
            ...e,
            guildId: U.guild_id,
            author: q,
            roleIcon: X
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, A.Q)(e, j),
        childrenMessageContent: (0, v.Z)(e, Y),
        childrenSystemMessage: (0, O.Z)({
            ...e,
            disableInteraction: Z
        }),
        onContextMenu: D,
        onClick: M,
        hasThread: k && null != Q && i.hasFlag(y.iLy.HAS_THREAD),
        hasReply: i.type === y.uaV.REPLY,
        'aria-labelledby': ee,
        'aria-describedby': et,
        messageRef: J,
        ...z,
        ...F
    });
}
t.Z = i.memo(b);
