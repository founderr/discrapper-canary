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
    P = t(158508),
    I = t(710631),
    p = t(297047),
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
                U = (0, j.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: a.id
                }),
                R = (0, p.Z)(n, t, u),
                S = (0, b.Z)(n.id, u),
                L = (0, N.Z)(n.id),
                k = (0, h.Z)({
                    user: n,
                    context: u
                }),
                y = (0, M.Z)({
                    user: n,
                    guildId: t,
                    channelId: a.id,
                    context: u
                }),
                G = (0, m.Z)({ user: n }),
                q = (0, Z.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: T.ZY5.GUILD_CHANNEL,
                        section: T.jXE.CHAT_USERNAME,
                        object: T.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                w = (0, I.Z)({
                    user: n,
                    guildId: t
                }),
                V = (0, o.Z)(null, n),
                D = (0, g.Z)(n),
                F = (0, x.Z)({ user: n }),
                W = (0, P.Z)({ user: n }),
                B = (0, E.Z)(n, t, a.id),
                K = (0, O.Z)(n.id, t),
                H = (0, C.Z)(n, t),
                z = (0, c.Z)({
                    id: n.id,
                    label: _.intl.string(_.t['/AXYnJ'])
                }),
                X = (0, f.Z)(n),
                Y = (0, v.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: t,
                    onHeightUpdate: A
                }),
                J = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': _.intl.string(_.t.liqwPD),
                onSelect: s,
                children: [
                    !J &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(i.MenuGroup, { children: X }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [U, R, S, k, y, G, L]
                                }),
                                (0, l.jsx)(i.MenuGroup, { children: V }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [q, Y, w, D, W, F]
                                }),
                                (0, l.jsx)(i.MenuGroup, { children: B }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [K, H]
                                })
                            ]
                        }),
                    (0, l.jsx)(i.MenuGroup, { children: z })
                ]
            });
        },
        { object: T.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.THREAD_USER_MENU]
);
