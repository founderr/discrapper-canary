t.r(e);
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(239091),
    a = t(883385),
    d = t(108843),
    o = t(911969),
    s = t(947440),
    c = t(100527),
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
    D = t(991307),
    R = t(37258),
    k = t(931617),
    G = t(700994),
    j = t(332031),
    L = t(981631),
    w = t(388032);
e.default = (0, d.Z)(
    (0, a.Z)(
        function (n) {
            let { user: e, guildId: t, channel: a, showMediaItems: d = !1, showChatItems: c = !0, showChannelCallItems: B = !1, showModalItems: V = !0, showStageChannelItems: H = !1, context: W, onSelect: K, onHeightUpdate: F, viewingChannelId: q } = n,
                Y = {
                    page: L.ZY5.GUILD_CHANNEL,
                    section: L.jXE.CHAT_USERNAME,
                    object: L.qAy.CONTEXT_MENU_ITEM
                },
                z = (0, R.Z)({
                    userId: e.id,
                    guildId: t,
                    channelId: a.id
                }),
                Q = (0, O.Z)(e, t, W),
                X = (0, P.Z)(e.id, W),
                J = (0, j.Z)(e.id),
                $ = (0, S.Z)({
                    user: e,
                    context: W
                }),
                nn = (0, T.Z)({
                    user: e,
                    guildId: t,
                    channelId: a.id,
                    context: W
                }),
                ne = (0, Z.Z)({ user: e }),
                nt = (0, G.Z)(e.id),
                ni = (0, D.Z)(e.id),
                nl = (0, p.B)({
                    userId: e.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                nr = (0, h.Z)({
                    guildId: t,
                    userId: e.id,
                    analyticsLocation: Y,
                    context: W
                }),
                nu = (0, y.Z)({
                    user: e,
                    guildId: t
                }),
                na = (0, s.Z)(null, e),
                nd = (0, I.Z)(e),
                no = (0, C.Z)({ user: e }),
                ns = (0, N.Z)({ user: e }),
                nc = (0, v.Z)(e, t, a.id),
                nf = (0, k.Z)(e.id, t),
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
                nM = (0, l.e7)([M.Z], () => (null != q ? M.Z.getChannel(q) : null)),
                nI = (0, b.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: e.id,
                    channel: null != nM ? nM : a,
                    guildId: t,
                    onHeightUpdate: F,
                    context: W
                }),
                nZ = (0, E.Z)(e.id),
                nT = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: u.Zy,
                'aria-label': w.intl.string(w.t.liqwPD),
                onSelect: K,
                children: [
                    !nT &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [nA, H && nm]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [V && z, c && Q, X, $, V && nn, V && ne, J]
                                }),
                                d && (0, i.jsx)(r.MenuGroup, { children: nt }),
                                (0, i.jsx)(r.MenuGroup, { children: V && na }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [d && ni, d && nl, d && np, V && nr, nI, V && nu, nd, V && ns, V && no, B && nZ]
                                }),
                                (0, i.jsx)(r.MenuGroup, { children: nc }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [nf, n_]
                                }),
                                B &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [nh, ng]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nE })
                ]
            });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
