t.r(e);
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(239091),
    a = t(883385),
    o = t(108843),
    d = t(911969),
    c = t(947440),
    s = t(100527),
    f = t(441061),
    _ = t(167675),
    E = t(737013),
    p = t(607783),
    g = t(299206),
    h = t(976192),
    A = t(819403),
    m = t(286694),
    M = t(592125),
    I = t(777658),
    Z = t(858488),
    T = t(185457),
    v = t(933409),
    b = t(570870),
    C = t(389052),
    S = t(24311),
    x = t(332576),
    N = t(158508),
    y = t(710631),
    O = t(297047),
    P = t(88966),
    U = t(712301),
    j = t(991307),
    D = t(37258),
    R = t(931617),
    k = t(700994),
    G = t(332031),
    L = t(981631),
    w = t(388032);
e.default = (0, o.Z)(
    (0, a.Z)(
        function (n) {
            let { user: e, guildId: t, channel: a, showMediaItems: o = !1, showChatItems: s = !0, showChannelCallItems: B = !1, showModalItems: W = !0, showStageChannelItems: V = !1, context: H, onSelect: K, onHeightUpdate: F, viewingChannelId: q } = n,
                Y = {
                    page: L.ZY5.GUILD_CHANNEL,
                    section: L.jXE.CHAT_USERNAME,
                    object: L.qAy.CONTEXT_MENU_ITEM
                },
                z = (0, D.Z)({
                    userId: e.id,
                    guildId: t,
                    channelId: a.id
                }),
                Q = (0, O.Z)(e, t, H),
                X = (0, P.Z)(e.id, H),
                J = (0, G.Z)(e.id),
                $ = (0, S.Z)({
                    user: e,
                    context: H
                }),
                nn = (0, T.Z)({
                    user: e,
                    guildId: t,
                    channelId: a.id,
                    context: H
                }),
                ne = (0, Z.Z)({ user: e }),
                nt = (0, k.Z)(e.id),
                ni = (0, j.Z)(e.id),
                nr = (0, p.B)({
                    userId: e.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                nl = (0, h.Z)({
                    guildId: t,
                    userId: e.id,
                    analyticsLocation: Y,
                    context: H
                }),
                nu = (0, y.Z)({
                    user: e,
                    guildId: t
                }),
                na = (0, c.Z)(null, e),
                no = (0, I.Z)(e),
                nd = (0, C.Z)({ user: e }),
                nc = (0, N.Z)({ user: e }),
                ns = (0, v.Z)(e, t, a.id),
                nf = (0, R.Z)(e.id, t),
                n_ = (0, U.Z)(e, t),
                nE = (0, g.Z)({
                    id: e.id,
                    label: w.intl.string(w.t['/AXYnJ'])
                }),
                np = (0, x.Z)(e.id, a.id),
                ng = (0, _.Z)(e.id),
                nh = (0, f.Z)(a.id),
                nA = (0, A.Z)(e),
                nm = (0, m.Z)(e, t, a.id),
                nM = (0, r.e7)([M.Z], () => (null != q ? M.Z.getChannel(q) : null)),
                nI = (0, b.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: e.id,
                    channel: null != nM ? nM : a,
                    guildId: t,
                    onHeightUpdate: F,
                    context: H
                }),
                nZ = (0, E.Z)(e.id),
                nT = e.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: u.Zy,
                'aria-label': w.intl.string(w.t.liqwPD),
                onSelect: K,
                children: [
                    !nT &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [nA, V && nm]
                                }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [W && z, s && Q, X, $, W && nn, W && ne, J]
                                }),
                                o && (0, i.jsx)(l.MenuGroup, { children: nt }),
                                (0, i.jsx)(l.MenuGroup, { children: W && na }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [o && ni, o && nr, o && np, W && nl, nI, W && nu, no, W && nc, W && nd, B && nZ]
                                }),
                                (0, i.jsx)(l.MenuGroup, { children: ns }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [nf, n_]
                                }),
                                B &&
                                    (0, i.jsxs)(l.MenuGroup, {
                                        children: [nh, ng]
                                    })
                            ]
                        }),
                    (0, i.jsx)(l.MenuGroup, { children: nE })
                ]
            });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GUILD_CHANNEL_USER_MENU]
);
