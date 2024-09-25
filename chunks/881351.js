t.r(n);
var l = t(735250);
t(470079);
var i = t(481060),
    s = t(239091),
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
                v = (0, N.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: a
                }),
                U = (0, A.Z)(n.id),
                S = (0, f.Z)({ user: n }),
                b = (0, M.Z)({
                    user: n,
                    guildId: t,
                    channelId: a
                }),
                x = (0, E.Z)({ user: n }),
                D = (0, m.Z)(n.id),
                L = (0, C.Z)(n.id),
                h = (0, I.Z)(n.id, u),
                R = (0, g.Z)({ user: n }),
                P = (0, d.Z)(null, n),
                p = (0, Z.Z)(n),
                j = (0, _.Z)({ user: n }),
                k = (0, r.Z)({
                    id: n.id,
                    label: T.Z.Messages.COPY_ID_USER
                }),
                V = (0, c.Z)(n),
                F = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': T.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: O,
                children: [
                    !F &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(i.MenuGroup, { children: V }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [v, U, S, b, x, D]
                                }),
                                o && (0, l.jsx)(i.MenuGroup, { children: L }),
                                (0, l.jsx)(i.MenuGroup, { children: P }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [o && h, R, p, j]
                                })
                            ]
                        }),
                    (0, l.jsx)(i.MenuGroup, { children: k })
                ]
            });
        },
        { object: O.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.USER_GENERIC_MENU]
);
