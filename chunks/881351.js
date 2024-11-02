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
    x = t(710631),
    M = t(88966),
    b = t(991307),
    h = t(725119),
    C = t(700994),
    I = t(332031),
    j = t(981631),
    E = t(388032);
n.default = (0, d.Z)(
    (0, o.Z)(
        function (e) {
            let { user: n, guildId: t, channelId: o, showMediaItems: d = !1, mediaEngineContext: a, onSelect: j } = e,
                U = (0, h.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: o
                }),
                A = (0, M.Z)(n.id),
                L = (0, v.Z)({ user: n }),
                _ = (0, g.Z)({
                    user: n,
                    guildId: t,
                    channelId: o
                }),
                p = (0, f.Z)({ user: n }),
                T = (0, I.Z)(n.id),
                P = (0, C.Z)(n.id),
                k = (0, b.Z)(n.id, a),
                O = (0, x.Z)({ user: n }),
                S = (0, u.Z)(null, n),
                D = (0, Z.Z)(n),
                N = (0, m.Z)({ user: n }),
                V = (0, s.Z)({
                    id: n.id,
                    label: E.intl.string(E.t['/AXYnJ'])
                }),
                y = (0, c.Z)(n),
                F = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': E.intl.string(E.t.liqwPD),
                onSelect: j,
                children: [
                    !F &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.MenuGroup, { children: y }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [U, A, L, _, p, T]
                                }),
                                d && (0, i.jsx)(l.MenuGroup, { children: P }),
                                (0, i.jsx)(l.MenuGroup, { children: S }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [d && k, O, D, N]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.MenuGroup, { children: V })
                ]
            });
        },
        { object: j.qAy.CONTEXT_MENU }
    ),
    [a.Z.CONTEXT_MENU, a.Z.USER_GENERIC_MENU]
);
