t.r(n);
var i = t(200651);
t(192379);
var l = t(481060),
    o = t(239091),
    r = t(883385),
    d = t(108843),
    a = t(947440),
    u = t(100527),
    s = t(299206),
    c = t(976192),
    Z = t(276022),
    f = t(777658),
    m = t(858488),
    g = t(185457),
    x = t(933409),
    M = t(389052),
    b = t(24311),
    h = t(710631),
    v = t(297047),
    C = t(88966),
    I = t(712301),
    j = t(991307),
    E = t(725119),
    L = t(931617),
    U = t(700994),
    p = t(332031),
    A = t(981631),
    T = t(388032);
n.default = (0, d.Z)(
    (0, r.Z)(
        function (e) {
            let { user: n, guildId: t, showModalItems: r = !0, showMediaItems: d = !1, showChatItems: u = !0, context: _, onSelect: N } = e,
                D = {
                    page: A.ZY5.GUILD_CHANNEL,
                    section: A.jXE.CHAT_USERNAME,
                    object: A.qAy.CONTEXT_MENU_ITEM
                },
                k = (0, E.Z)({
                    userId: n.id,
                    guildId: t
                }),
                S = (0, v.Z)(n, t, _),
                O = (0, C.Z)(n.id, _),
                P = (0, p.Z)(n.id),
                y = (0, b.Z)({
                    user: n,
                    context: _
                }),
                G = (0, g.Z)({
                    user: n,
                    guildId: t,
                    context: _
                }),
                w = (0, m.Z)({ user: n }),
                F = (0, U.Z)(n.id),
                B = (0, j.Z)(n.id),
                V = (0, c.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: D,
                    context: _
                }),
                R = (0, Z.Z)({
                    user: n,
                    guildId: t
                }),
                H = (0, h.Z)({
                    user: n,
                    guildId: t
                }),
                W = (0, a.Z)(null, n),
                q = (0, f.Z)(n),
                J = (0, M.Z)({ user: n }),
                Y = (0, x.Z)(n, t),
                X = (0, L.Z)(n.id, t),
                K = (0, I.Z)(n, t),
                z = (0, s.Z)({
                    id: n.id,
                    label: T.intl.string(T.t['/AXYnJ'])
                }),
                Q = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': T.intl.string(T.t.liqwPD),
                onSelect: N,
                children: [
                    !Q &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [r && k, u && S, O, y, r && G, r && w, P]
                                }),
                                d && (0, i.jsx)(l.MenuGroup, { children: F }),
                                (0, i.jsx)(l.MenuGroup, { children: r && W }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [d && B, r && V, r && H, q, R, r && J]
                                }),
                                (0, i.jsx)(l.MenuGroup, { children: Y }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [X, K]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.MenuGroup, { children: z })
                ]
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU]
);
