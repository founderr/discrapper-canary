t.r(n);
var s = t(735250);
t(470079);
var i = t(481060), l = t(239091), a = t(883385), o = t(108843), u = t(947440), d = t(100527), r = t(299206), c = t(819403), Z = t(777658), E = t(858488), M = t(185457), _ = t(389052), f = t(24311), g = t(710631), N = t(88966), A = t(991307), I = t(725119), m = t(700994), T = t(332031), C = t(981631), O = t(689938);
n.default = (0, o.Z)((0, a.Z)(function (e) {
    let {
            user: n,
            showMediaItems: t = !1,
            mediaEngineContext: a,
            onSelect: o
        } = e, d = (0, I.Z)(n.id), C = (0, N.Z)(n.id), x = (0, f.Z)({ user: n }), S = (0, M.Z)({ user: n }), U = (0, E.Z)({ user: n }), v = (0, T.Z)(n.id), D = (0, m.Z)(n.id), L = (0, A.Z)(n.id, a), b = (0, g.Z)({ user: n }), h = (0, u.Z)(null, n), R = (0, Z.Z)(n), j = (0, _.Z)({ user: n }), p = (0, r.Z)({
            id: n.id,
            label: O.Z.Messages.COPY_ID_USER
        }), P = (0, c.Z)(n), k = n.isNonUserBot();
    return (0, s.jsxs)(i.Menu, {
        navId: 'user-context',
        onClose: l.Zy,
        'aria-label': O.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: o,
        children: [
            !k && (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(i.MenuGroup, { children: P }),
                    (0, s.jsxs)(i.MenuGroup, {
                        children: [
                            d,
                            C,
                            x,
                            S,
                            U,
                            v
                        ]
                    }),
                    t && (0, s.jsx)(i.MenuGroup, { children: D }),
                    (0, s.jsx)(i.MenuGroup, { children: h }),
                    (0, s.jsxs)(i.MenuGroup, {
                        children: [
                            t && L,
                            b,
                            R,
                            j
                        ]
                    })
                ]
            }),
            (0, s.jsx)(i.MenuGroup, { children: p })
        ]
    });
}, { object: C.qAy.CONTEXT_MENU }), [
    d.Z.CONTEXT_MENU,
    d.Z.USER_GENERIC_MENU
]);
