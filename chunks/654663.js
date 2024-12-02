t.r(n);
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    a = t(883385),
    u = t(108843),
    o = t(911969),
    d = t(947440),
    s = t(100527),
    c = t(299206),
    Z = t(976192),
    f = t(819403),
    g = t(777658),
    m = t(858488),
    M = t(185457),
    v = t(570870),
    x = t(389052),
    h = t(24311),
    P = t(158508),
    p = t(710631),
    C = t(297047),
    I = t(88966),
    b = t(712301),
    E = t(520063),
    j = t(37258),
    T = t(931617),
    O = t(332031),
    N = t(981631),
    U = t(388032);
n.default = (0, u.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: t, channel: a, context: u, onSelect: s, onHeightUpdate: _ } = e,
                A = a.id,
                R = (0, j.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: A
                }),
                S = (0, C.Z)(n, t, u),
                L = (0, I.Z)(n.id, u),
                k = (0, O.Z)(n.id),
                y = (0, h.Z)({
                    user: n,
                    context: u
                }),
                G = (0, M.Z)({
                    user: n,
                    guildId: t,
                    channelId: A,
                    context: u
                }),
                q = (0, m.Z)({ user: n }),
                w = (0, Z.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: N.ZY5.GUILD_CHANNEL,
                        section: N.jXE.CHAT_USERNAME,
                        object: N.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                V = (0, p.Z)({
                    user: n,
                    guildId: t
                }),
                D = (0, d.Z)(null, n),
                F = (0, g.Z)(n),
                W = (0, x.Z)({
                    user: n,
                    guildId: t,
                    channelId: A,
                    location: 'ThreadUserContextMenu'
                }),
                B = (0, P.Z)({
                    user: n,
                    guildId: t,
                    channelId: A,
                    location: 'ThreadUserContextMenu'
                }),
                K = (0, E.Z)(n, t, A),
                H = (0, T.Z)(n.id, t),
                z = (0, b.Z)(n, t),
                X = (0, c.Z)({
                    id: n.id,
                    label: U.intl.string(U.t['/AXYnJ'])
                }),
                Y = (0, f.Z)(n),
                J = (0, v.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: t,
                    onHeightUpdate: _
                }),
                Q = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: s,
                children: [
                    !Q &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(i.MenuGroup, { children: Y }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [R, S, L, y, G, q, k]
                                }),
                                (0, l.jsx)(i.MenuGroup, { children: D }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [w, J, V, F, B, W]
                                }),
                                (0, l.jsx)(i.MenuGroup, { children: K }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [H, z]
                                })
                            ]
                        }),
                    (0, l.jsx)(i.MenuGroup, { children: X })
                ]
            });
        },
        { object: N.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.THREAD_USER_MENU]
);
