t.r(n);
var s = t(735250);
t(470079);
var l = t(481060),
    i = t(239091),
    a = t(883385),
    o = t(108843),
    u = t(947440),
    d = t(100527),
    r = t(299206),
    c = t(819403),
    Z = t(777658),
    E = t(858488),
    M = t(185457),
    _ = t(389052),
    f = t(24311),
    g = t(710631),
    N = t(88966),
    A = t(991307),
    I = t(725119),
    T = t(700994),
    m = t(332031),
    O = t(981631),
    C = t(689938);
n.default = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: t, channelId: a, showMediaItems: o = !1, mediaEngineContext: d, onSelect: O } = e,
                S = (0, I.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: a
                }),
                U = (0, N.Z)(n.id),
                v = (0, f.Z)({ user: n }),
                D = (0, M.Z)({
                    user: n,
                    guildId: t,
                    channelId: a
                }),
                x = (0, E.Z)({ user: n }),
                b = (0, m.Z)(n.id),
                L = (0, T.Z)(n.id),
                h = (0, A.Z)(n.id, d),
                R = (0, g.Z)({ user: n }),
                j = (0, u.Z)(null, n),
                p = (0, Z.Z)(n),
                k = (0, _.Z)({ user: n }),
                V = (0, r.Z)({
                    id: n.id,
                    label: C.Z.Messages.COPY_ID_USER
                }),
                P = (0, c.Z)(n),
                F = n.isNonUserBot();
            return (0, s.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': C.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: O,
                children: [
                    !F &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(l.MenuGroup, { children: P }),
                                (0, s.jsxs)(l.MenuGroup, {
                                    children: [S, U, v, D, x, b]
                                }),
                                o && (0, s.jsx)(l.MenuGroup, { children: L }),
                                (0, s.jsx)(l.MenuGroup, { children: j }),
                                (0, s.jsxs)(l.MenuGroup, {
                                    children: [o && h, R, p, k]
                                })
                            ]
                        }),
                    (0, s.jsx)(l.MenuGroup, { children: V })
                ]
            });
        },
        { object: O.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.USER_GENERIC_MENU]
);
