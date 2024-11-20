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
    h = t(158508),
    v = t(710631),
    C = t(297047),
    I = t(88966),
    j = t(712301),
    E = t(991307),
    L = t(37258),
    U = t(931617),
    p = t(700994),
    A = t(332031),
    T = t(981631),
    _ = t(388032);
n.default = (0, d.Z)(
    (0, r.Z)(
        function (e) {
            let { user: n, guildId: t, showModalItems: r = !0, showMediaItems: d = !1, showChatItems: u = !0, context: N, onSelect: D } = e,
                k = {
                    page: T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.CHAT_USERNAME,
                    object: T.qAy.CONTEXT_MENU_ITEM
                },
                S = (0, L.Z)({
                    userId: n.id,
                    guildId: t
                }),
                O = (0, C.Z)(n, t, N),
                P = (0, I.Z)(n.id, N),
                y = (0, A.Z)(n.id),
                G = (0, b.Z)({
                    user: n,
                    context: N
                }),
                w = (0, g.Z)({
                    user: n,
                    guildId: t,
                    context: N
                }),
                F = (0, m.Z)({ user: n }),
                B = (0, p.Z)(n.id),
                V = (0, E.Z)(n.id),
                R = (0, c.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: k,
                    context: N
                }),
                H = (0, Z.Z)({
                    user: n,
                    guildId: t
                }),
                W = (0, v.Z)({
                    user: n,
                    guildId: t
                }),
                q = (0, a.Z)(null, n),
                J = (0, f.Z)(n),
                Y = (0, M.Z)({
                    user: n,
                    guildId: t
                }),
                X = (0, h.Z)({
                    user: n,
                    guildId: t
                }),
                K = (0, x.Z)(n, t),
                z = (0, U.Z)(n.id, t),
                Q = (0, j.Z)(n, t),
                $ = (0, s.Z)({
                    id: n.id,
                    label: _.intl.string(_.t['/AXYnJ'])
                }),
                ee = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': _.intl.string(_.t.liqwPD),
                onSelect: D,
                children: [
                    !ee &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [r && S, u && O, P, G, r && w, r && F, y]
                                }),
                                d && (0, i.jsx)(l.MenuGroup, { children: B }),
                                (0, i.jsx)(l.MenuGroup, { children: r && q }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [d && V, r && R, r && W, J, H, r && X, r && Y]
                                }),
                                (0, i.jsx)(l.MenuGroup, { children: K }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [z, Q]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.MenuGroup, { children: $ })
                ]
            });
        },
        { object: T.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU]
);
