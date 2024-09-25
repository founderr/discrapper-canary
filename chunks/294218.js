var r = n(789020);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(91192),
    u = n(442837),
    c = n(518738),
    d = n(628238),
    _ = n(869765),
    E = n(592125),
    f = n(496675),
    h = n(630388),
    p = n(709054),
    m = n(900164),
    I = n(739566),
    T = n(492593),
    g = n(453687),
    S = n(25015),
    A = n(689674),
    v = n(438075),
    N = n(963550),
    O = n(845080),
    R = n(295790),
    C = n(145807),
    y = n(56744),
    b = n(981631),
    L = n(916315);
function D(e) {
    var t, n;
    let { message: r, compact: a = !1, className: o, onContextMenu: D, onClick: M, hideSimpleEmbedContent: P = !0, channel: U, isGroupStart: w, animateAvatar: x, subscribeToComponentDispatch: G, renderThreadAccessory: k, trackAnnouncementViews: B = !1, ...F } = e,
        Z = r.type === b.uaV.POLL_RESULT || (null !== (t = e.disableInteraction) && void 0 !== t && t),
        V = r.isFirstMessageInForumPost(U),
        H = (0, d.A)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()),
        { content: Y, hasSpoilerEmbeds: j } = (0, S.Z)(r, {
            hideSimpleEmbedContent: P,
            allowList: V || H,
            allowHeading: V || H,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        W = r.type === b.uaV.REPLY ? r.messageReference : void 0,
        K = (0, u.e7)([_.Z], () => _.Z.getMessageByReference(W)),
        z = (0, l.JA)(r.id),
        q = (0, I.ZP)(r),
        Q = (0, u.e7)([E.Z], () => r.hasFlag(b.iLy.HAS_THREAD) && E.Z.getChannel(p.default.castMessageIdAsChannelId(r.id))),
        X = (0, c.p9)({
            guildId: U.guild_id,
            roleId: q.iconRoleId
        }),
        $ = (0, u.e7)([f.Z], () => f.Z.can(b.Plq.CREATE_INSTANT_INVITE, U)),
        J = (0, A.Z)({
            message: r,
            channel: U,
            enabled: B
        });
    if ((0, m.Z)(r, $)) return null;
    let ee = (0, g.iG)(r),
        et = (0, g.Gx)(r);
    return (0, i.jsx)(T.Z, {
        compact: a,
        className: s()(o, {
            [L.ephemeral]: (0, h.yE)(r.flags, b.iLy.EPHEMERAL),
            [L.disableInteraction]: Z
        }),
        disableInteraction: Z,
        childrenRepliedMessage: (0, y.Z)(r, U, W, K, a),
        childrenExecutedCommand: (0, C.Z)(r, U, a),
        childrenHeader: (0, O.Z)({
            ...e,
            guildId: U.guild_id,
            author: q,
            roleIcon: X
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, v.Q)(e, j),
        childrenMessageContent: (0, N.Z)(e, Y),
        childrenSystemMessage: (0, R.Z)({
            ...e,
            disableInteraction: Z
        }),
        onContextMenu: D,
        onClick: M,
        hasThread: k && null != Q && r.hasFlag(b.iLy.HAS_THREAD),
        hasReply: r.type === b.uaV.REPLY,
        'aria-labelledby': ee,
        'aria-describedby': et,
        messageRef: J,
        ...z,
        ...F
    });
}
t.Z = a.memo(D);
