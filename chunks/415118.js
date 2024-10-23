t.r(n);
var s = t(200651);
t(192379);
var l = t(481060),
    i = t(239091),
    a = t(883385),
    o = t(108843),
    d = t(947440),
    u = t(100527),
    r = t(299206),
    c = t(976192),
    Z = t(276022),
    M = t(777658),
    E = t(858488),
    _ = t(185457),
    f = t(933409),
    N = t(389052),
    I = t(24311),
    g = t(710631),
    A = t(297047),
    C = t(88966),
    m = t(712301),
    U = t(991307),
    x = t(725119),
    D = t(931617),
    O = t(700994),
    b = t(332031),
    T = t(981631),
    L = t(689938);
n.default = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: t, showModalItems: a = !0, showMediaItems: o = !1, showChatItems: u = !0, context: h, onSelect: v } = e,
                S = {
                    page: T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.CHAT_USERNAME,
                    object: T.qAy.CONTEXT_MENU_ITEM
                },
                j = (0, x.Z)({
                    userId: n.id,
                    guildId: t
                }),
                R = (0, A.Z)(n, t, h),
                p = (0, C.Z)(n.id, h),
                k = (0, b.Z)(n.id),
                V = (0, I.Z)({
                    user: n,
                    context: h
                }),
                F = (0, _.Z)({
                    user: n,
                    guildId: t,
                    context: h
                }),
                P = (0, E.Z)({ user: n }),
                B = (0, O.Z)(n.id),
                G = (0, U.Z)(n.id),
                y = (0, c.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: S,
                    context: h
                }),
                w = (0, Z.Z)({
                    user: n,
                    guildId: t
                }),
                Y = (0, g.Z)({
                    user: n,
                    guildId: t
                }),
                W = (0, d.Z)(null, n),
                H = (0, M.Z)(n),
                X = (0, N.Z)({ user: n }),
                q = (0, f.Z)(n, t),
                z = (0, D.Z)(n.id, t),
                K = (0, m.Z)(n, t),
                J = (0, r.Z)({
                    id: n.id,
                    label: L.Z.Messages.COPY_ID_USER
                }),
                Q = n.isNonUserBot();
            return (0, s.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': L.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: v,
                children: [
                    !Q &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsxs)(l.MenuGroup, {
                                    children: [a && j, u && R, p, V, a && F, a && P, k]
                                }),
                                o && (0, s.jsx)(l.MenuGroup, { children: B }),
                                (0, s.jsx)(l.MenuGroup, { children: a && W }),
                                (0, s.jsxs)(l.MenuGroup, {
                                    children: [o && G, a && y, a && Y, H, w, a && X]
                                }),
                                (0, s.jsx)(l.MenuGroup, { children: q }),
                                (0, s.jsxs)(l.MenuGroup, {
                                    children: [z, K]
                                })
                            ]
                        }),
                    (0, s.jsx)(l.MenuGroup, { children: J })
                ]
            });
        },
        { object: T.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU]
);
