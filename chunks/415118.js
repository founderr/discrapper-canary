l.r(n);
var i = l(735250);
l(470079);
var t = l(481060),
    a = l(239091),
    s = l(883385),
    o = l(108843),
    d = l(947440),
    u = l(100527),
    r = l(299206),
    c = l(976192),
    Z = l(276022),
    M = l(777658),
    E = l(858488),
    f = l(185457),
    _ = l(933409),
    I = l(389052),
    A = l(24311),
    g = l(710631),
    N = l(297047),
    v = l(88966),
    b = l(712301),
    m = l(991307),
    C = l(725119),
    p = l(931617),
    O = l(700994),
    x = l(332031),
    D = l(981631),
    T = l(689938);
n.default = (0, o.Z)(
    (0, s.Z)(
        function (e) {
            let { user: n, guildId: l, showModalItems: s = !0, showMediaItems: o = !1, showChatItems: u = !0, context: U, onSelect: L } = e,
                h = {
                    page: D.ZY5.GUILD_CHANNEL,
                    section: D.jXE.CHAT_USERNAME,
                    object: D.qAy.CONTEXT_MENU_ITEM
                },
                S = (0, C.Z)({
                    userId: n.id,
                    guildId: l
                }),
                j = (0, N.Z)(n, l, U),
                R = (0, v.Z)(n.id, U),
                P = (0, x.Z)(n.id),
                k = (0, A.Z)({
                    user: n,
                    context: U
                }),
                G = (0, f.Z)({
                    user: n,
                    guildId: l,
                    context: U
                }),
                V = (0, E.Z)({ user: n }),
                F = (0, O.Z)(n.id),
                y = (0, m.Z)(n.id),
                B = (0, c.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: h,
                    context: U
                }),
                w = (0, Z.Z)({
                    user: n,
                    guildId: l
                }),
                z = (0, g.Z)({
                    user: n,
                    guildId: l
                }),
                Y = (0, d.Z)(null, n),
                W = (0, M.Z)(n),
                H = (0, I.Z)({ user: n }),
                q = (0, _.Z)(n, l),
                X = (0, p.Z)(n.id, l),
                K = (0, b.Z)(n, l),
                J = (0, r.Z)({
                    id: n.id,
                    label: T.Z.Messages.COPY_ID_USER
                }),
                Q = n.isNonUserBot();
            return (0, i.jsxs)(t.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': T.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: L,
                children: [
                    !Q &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(t.MenuGroup, {
                                    children: [s && S, u && j, R, k, s && G, s && V, P]
                                }),
                                o && (0, i.jsx)(t.MenuGroup, { children: F }),
                                (0, i.jsx)(t.MenuGroup, { children: s && Y }),
                                (0, i.jsxs)(t.MenuGroup, {
                                    children: [o && y, s && B, s && z, W, w, s && H]
                                }),
                                (0, i.jsx)(t.MenuGroup, { children: q }),
                                (0, i.jsxs)(t.MenuGroup, {
                                    children: [X, K]
                                })
                            ]
                        }),
                    (0, i.jsx)(t.MenuGroup, { children: J })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU]
);
