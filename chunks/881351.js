t.r(n);
var l = t(200651);
t(192379);
var s = t(481060),
    i = t(239091),
    a = t(883385),
    o = t(108843),
    d = t(947440),
    u = t(100527),
    r = t(299206),
    c = t(819403),
    Z = t(777658),
    E = t(858488),
    M = t(185457),
    _ = t(389052),
    f = t(24311),
    g = t(710631),
    A = t(88966),
    I = t(991307),
    N = t(725119),
    C = t(700994),
    m = t(332031),
    O = t(981631),
    T = t(689938);
n.default = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: t, channelId: a, showMediaItems: o = !1, mediaEngineContext: u, onSelect: O } = e,
                U = (0, N.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: a
                }),
                S = (0, A.Z)(n.id),
                v = (0, f.Z)({ user: n }),
                x = (0, M.Z)({
                    user: n,
                    guildId: t,
                    channelId: a
                }),
                b = (0, E.Z)({ user: n }),
                D = (0, m.Z)(n.id),
                L = (0, C.Z)(n.id),
                h = (0, I.Z)(n.id, u),
                R = (0, g.Z)({ user: n }),
                j = (0, d.Z)(null, n),
                p = (0, Z.Z)(n),
                P = (0, _.Z)({ user: n }),
                k = (0, r.Z)({
                    id: n.id,
                    label: T.Z.Messages.COPY_ID_USER
                }),
                V = (0, c.Z)(n),
                F = n.isNonUserBot();
            return (0, l.jsxs)(s.Menu, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': T.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: O,
                children: [
                    !F &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.MenuGroup, { children: V }),
                                (0, l.jsxs)(s.MenuGroup, {
                                    children: [U, S, v, x, b, D]
                                }),
                                o && (0, l.jsx)(s.MenuGroup, { children: L }),
                                (0, l.jsx)(s.MenuGroup, { children: j }),
                                (0, l.jsxs)(s.MenuGroup, {
                                    children: [o && h, R, p, P]
                                })
                            ]
                        }),
                    (0, l.jsx)(s.MenuGroup, { children: k })
                ]
            });
        },
        { object: O.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.USER_GENERIC_MENU]
);
