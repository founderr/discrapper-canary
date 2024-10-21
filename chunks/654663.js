l.r(n);
var t = l(200651);
l(192379);
var i = l(481060),
    a = l(239091),
    r = l(883385),
    s = l(108843),
    u = l(911969),
    d = l(947440),
    o = l(100527),
    c = l(299206),
    Z = l(976192),
    E = l(819403),
    M = l(777658),
    f = l(858488),
    _ = l(185457),
    g = l(570870),
    I = l(389052),
    m = l(24311),
    R = l(710631),
    N = l(297047),
    C = l(88966),
    O = l(712301),
    A = l(520063),
    h = l(725119),
    v = l(931617),
    T = l(332031),
    x = l(981631),
    b = l(689938);
n.default = (0, s.Z)(
    (0, r.Z)(
        function (e) {
            let { user: n, guildId: l, channel: r, context: s, onSelect: o, onHeightUpdate: S } = e,
                p = (0, h.Z)({
                    userId: n.id,
                    guildId: l,
                    channelId: r.id
                }),
                P = (0, N.Z)(n, l, s),
                U = (0, C.Z)(n.id, s),
                j = (0, T.Z)(n.id),
                L = (0, m.Z)({
                    user: n,
                    context: s
                }),
                D = (0, _.Z)({
                    user: n,
                    guildId: l,
                    channelId: r.id,
                    context: s
                }),
                G = (0, f.Z)({ user: n }),
                F = (0, Z.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: {
                        page: x.ZY5.GUILD_CHANNEL,
                        section: x.jXE.CHAT_USERNAME,
                        object: x.qAy.CONTEXT_MENU_ITEM
                    },
                    context: s
                }),
                k = (0, R.Z)({
                    user: n,
                    guildId: l
                }),
                y = (0, d.Z)(null, n),
                V = (0, M.Z)(n),
                K = (0, I.Z)({ user: n }),
                B = (0, A.Z)(n, l, r.id),
                H = (0, v.Z)(n.id, l),
                q = (0, O.Z)(n, l),
                w = (0, c.Z)({
                    id: n.id,
                    label: b.Z.Messages.COPY_ID_USER
                }),
                Y = (0, E.Z)(n),
                W = (0, g.Z)({
                    commandType: u.yU.USER,
                    commandTargetId: n.id,
                    channel: r,
                    guildId: l,
                    onHeightUpdate: S
                }),
                z = n.isNonUserBot();
            return (0, t.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': b.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: o,
                children: [
                    !z &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(i.MenuGroup, { children: Y }),
                                (0, t.jsxs)(i.MenuGroup, {
                                    children: [p, P, U, L, D, G, j]
                                }),
                                (0, t.jsx)(i.MenuGroup, { children: y }),
                                (0, t.jsxs)(i.MenuGroup, {
                                    children: [F, W, k, V, K]
                                }),
                                (0, t.jsx)(i.MenuGroup, { children: B }),
                                (0, t.jsxs)(i.MenuGroup, {
                                    children: [H, q]
                                })
                            ]
                        }),
                    (0, t.jsx)(i.MenuGroup, { children: w })
                ]
            });
        },
        { object: x.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.THREAD_USER_MENU]
);
