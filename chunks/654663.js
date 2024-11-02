t.r(n);
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    a = t(883385),
    u = t(108843),
    d = t(911969),
    o = t(947440),
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
    P = t(710631),
    I = t(297047),
    p = t(88966),
    b = t(712301),
    C = t(520063),
    E = t(725119),
    j = t(931617),
    O = t(332031),
    N = t(981631),
    T = t(388032);
n.default = (0, u.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: t, channel: a, context: u, onSelect: s, onHeightUpdate: _ } = e,
                A = (0, E.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: a.id
                }),
                U = (0, I.Z)(n, t, u),
                R = (0, p.Z)(n.id, u),
                S = (0, O.Z)(n.id),
                L = (0, h.Z)({
                    user: n,
                    context: u
                }),
                k = (0, M.Z)({
                    user: n,
                    guildId: t,
                    channelId: a.id,
                    context: u
                }),
                y = (0, m.Z)({ user: n }),
                G = (0, Z.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: N.ZY5.GUILD_CHANNEL,
                        section: N.jXE.CHAT_USERNAME,
                        object: N.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                q = (0, P.Z)({
                    user: n,
                    guildId: t
                }),
                w = (0, o.Z)(null, n),
                V = (0, g.Z)(n),
                D = (0, x.Z)({ user: n }),
                F = (0, C.Z)(n, t, a.id),
                W = (0, j.Z)(n.id, t),
                B = (0, b.Z)(n, t),
                K = (0, c.Z)({
                    id: n.id,
                    label: T.intl.string(T.t['/AXYnJ'])
                }),
                H = (0, f.Z)(n),
                z = (0, v.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: t,
                    onHeightUpdate: _
                }),
                X = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': T.intl.string(T.t.liqwPD),
                onSelect: s,
                children: [
                    !X &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(i.MenuGroup, { children: H }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [A, U, R, L, k, y, S]
                                }),
                                (0, l.jsx)(i.MenuGroup, { children: w }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [G, z, q, V, D]
                                }),
                                (0, l.jsx)(i.MenuGroup, { children: F }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [W, B]
                                })
                            ]
                        }),
                    (0, l.jsx)(i.MenuGroup, { children: K })
                ]
            });
        },
        { object: N.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.THREAD_USER_MENU]
);
