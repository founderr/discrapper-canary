t.r(n);
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(239091),
    o = t(883385),
    d = t(108843),
    u = t(947440),
    a = t(100527),
    s = t(299206),
    c = t(819403),
    Z = t(777658),
    f = t(858488),
    g = t(185457),
    m = t(389052),
    v = t(24311),
    x = t(158508),
    M = t(710631),
    b = t(88966),
    h = t(991307),
    C = t(37258),
    I = t(700994),
    j = t(332031),
    E = t(981631),
    U = t(388032);
n.default = (0, d.Z)(
    (0, o.Z)(
        function (e) {
            let { user: n, guildId: t, channelId: o, showMediaItems: d = !1, mediaEngineContext: a, onSelect: E } = e,
                A = (0, C.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: o
                }),
                L = (0, b.Z)(n.id),
                _ = (0, v.Z)({ user: n }),
                p = (0, g.Z)({
                    user: n,
                    guildId: t,
                    channelId: o
                }),
                T = (0, f.Z)({ user: n }),
                P = (0, j.Z)(n.id),
                k = (0, I.Z)(n.id),
                O = (0, h.Z)(n.id, a),
                S = (0, M.Z)({ user: n }),
                D = (0, u.Z)(null, n),
                N = (0, Z.Z)(n),
                V = (0, m.Z)({ user: n }),
                y = (0, x.Z)({ user: n }),
                F = (0, s.Z)({
                    id: n.id,
                    label: U.intl.string(U.t['/AXYnJ'])
                }),
                G = (0, c.Z)(n),
                w = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: E,
                children: [
                    !w &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.MenuGroup, { children: G }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [A, L, _, p, T, P]
                                }),
                                d && (0, i.jsx)(l.MenuGroup, { children: k }),
                                (0, i.jsx)(l.MenuGroup, { children: D }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [d && O, S, N, y, V]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.MenuGroup, { children: F })
                ]
            });
        },
        { object: E.qAy.CONTEXT_MENU }
    ),
    [a.Z.CONTEXT_MENU, a.Z.USER_GENERIC_MENU]
);
