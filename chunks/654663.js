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
    P = t(24311),
    h = t(158508),
    p = t(710631),
    I = t(297047),
    b = t(88966),
    C = t(712301),
    E = t(520063),
    j = t(37258),
    O = t(931617),
    N = t(332031),
    T = t(981631),
    _ = t(388032);
n.default = (0, u.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: t, channel: a, context: u, onSelect: s, onHeightUpdate: A } = e,
                U = a.id,
                R = (0, j.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: U
                }),
                S = (0, I.Z)(n, t, u),
                L = (0, b.Z)(n.id, u),
                k = (0, N.Z)(n.id),
                y = (0, P.Z)({
                    user: n,
                    context: u
                }),
                G = (0, M.Z)({
                    user: n,
                    guildId: t,
                    channelId: U,
                    context: u
                }),
                q = (0, m.Z)({ user: n }),
                w = (0, Z.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: T.ZY5.GUILD_CHANNEL,
                        section: T.jXE.CHAT_USERNAME,
                        object: T.qAy.CONTEXT_MENU_ITEM
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
                    channelId: U
                }),
                B = (0, h.Z)({
                    user: n,
                    guildId: t,
                    channelId: U
                }),
                K = (0, E.Z)(n, t, U),
                H = (0, O.Z)(n.id, t),
                z = (0, C.Z)(n, t),
                X = (0, c.Z)({
                    id: n.id,
                    label: _.intl.string(_.t['/AXYnJ'])
                }),
                Y = (0, f.Z)(n),
                J = (0, v.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: t,
                    onHeightUpdate: A
                }),
                Q = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': _.intl.string(_.t.liqwPD),
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
        { object: T.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.THREAD_USER_MENU]
);
