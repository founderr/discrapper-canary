l.r(n);
var t = l(735250);
l(470079);
var i = l(481060), r = l(239091), a = l(883385), s = l(108843), u = l(911969), o = l(947440), d = l(100527), c = l(299206), Z = l(976192), E = l(819403), M = l(777658), _ = l(858488), f = l(185457), g = l(570870), m = l(389052), R = l(24311), I = l(710631), N = l(297047), C = l(88966), O = l(712301), A = l(520063), x = l(725119), T = l(931617), v = l(332031), h = l(981631), S = l(689938);
n.default = (0, s.Z)((0, a.Z)(function (e) {
    let {
            user: n,
            guildId: l,
            channel: a,
            context: s,
            onSelect: d,
            onHeightUpdate: p
        } = e, b = (0, x.Z)(n.id, l), P = (0, N.Z)(n, l, s), U = (0, C.Z)(n.id, s), j = (0, v.Z)(n.id), L = (0, R.Z)({
            user: n,
            context: s
        }), D = (0, f.Z)({
            user: n,
            guildId: l,
            context: s
        }), G = (0, _.Z)({ user: n }), F = (0, Z.Z)({
            guildId: l,
            userId: n.id,
            analyticsLocation: {
                page: h.ZY5.GUILD_CHANNEL,
                section: h.jXE.CHAT_USERNAME,
                object: h.qAy.CONTEXT_MENU_ITEM
            },
            context: s
        }), y = (0, I.Z)({
            user: n,
            guildId: l
        }), k = (0, o.Z)(null, n), V = (0, M.Z)(n), K = (0, m.Z)({ user: n }), H = (0, A.Z)(n, l, a.id), B = (0, T.Z)(n.id, l), q = (0, O.Z)(n, l), w = (0, c.Z)({
            id: n.id,
            label: S.Z.Messages.COPY_ID_USER
        }), Y = (0, E.Z)(n), W = (0, g.Z)({
            commandType: u.yU.USER,
            commandTargetId: n.id,
            channel: a,
            guildId: l,
            onHeightUpdate: p
        }), z = n.isNonUserBot();
    return (0, t.jsxs)(i.Menu, {
        navId: 'user-context',
        onClose: r.Zy,
        'aria-label': S.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: d,
        children: [
            !z && (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(i.MenuGroup, { children: Y }),
                    (0, t.jsxs)(i.MenuGroup, {
                        children: [
                            b,
                            P,
                            U,
                            L,
                            D,
                            G,
                            j
                        ]
                    }),
                    (0, t.jsx)(i.MenuGroup, { children: k }),
                    (0, t.jsxs)(i.MenuGroup, {
                        children: [
                            F,
                            W,
                            y,
                            V,
                            K
                        ]
                    }),
                    (0, t.jsx)(i.MenuGroup, { children: H }),
                    (0, t.jsxs)(i.MenuGroup, {
                        children: [
                            B,
                            q
                        ]
                    })
                ]
            }),
            (0, t.jsx)(i.MenuGroup, { children: w })
        ]
    });
}, { object: h.qAy.CONTEXT_MENU }), [
    d.Z.CONTEXT_MENU,
    d.Z.THREAD_USER_MENU
]);
