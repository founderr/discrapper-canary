t.r(e);
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(239091),
    a = t(883385),
    d = t(108843),
    o = t(911969),
    u = t(947440),
    s = t(100527),
    c = t(441061),
    f = t(167675),
    m = t(737013),
    p = t(607783),
    g = t(299206),
    h = t(819403),
    v = t(777658),
    _ = t(858488),
    E = t(185457),
    Z = t(570870),
    x = t(389052),
    I = t(24311),
    T = t(915193),
    b = t(332576),
    A = t(158508),
    M = t(710631),
    S = t(297047),
    C = t(88966),
    j = t(397616),
    y = t(558924),
    N = t(991307),
    O = t(37258),
    P = t(700994),
    w = t(332031),
    k = t(981631),
    U = t(388032);
e.default = (0, d.Z)(
    (0, a.Z)(
        function (n) {
            var e;
            let { user: t, channel: a, context: d, showChatItems: s = !0, showMediaItems: k = !1, showChannelCallItems: R = !1, showModalItems: D = !0, onSelect: G, onHeightUpdate: V } = n,
                B = (0, O.Z)({
                    userId: t.id,
                    guildId: null
                }),
                L = (0, S.Z)(t, null, d),
                W = (0, y.Z)(t, a.id),
                H = (0, C.Z)(t.id, d),
                K = (0, I.Z)({
                    user: t,
                    context: d
                }),
                z = (0, E.Z)({
                    user: t,
                    channelId: a.id,
                    context: d
                }),
                q = (0, _.Z)({ user: t }),
                F = (0, P.Z)(t.id),
                Y = (0, j.Z)(t.id, a.id),
                J = (0, N.Z)(t.id),
                Q = (0, p.B)({
                    userId: t.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                X = (0, b.Z)(t.id, a.id),
                $ = (0, M.Z)({ user: t }),
                nn = (0, u.Z)(null, t),
                ne = (0, v.Z)(t),
                nt = (0, x.Z)({ user: t }),
                ni = (0, A.Z)({ user: t }),
                nr = (0, g.Z)({
                    id: t.id,
                    label: U.intl.string(U.t['/AXYnJ'])
                }),
                nl = (0, w.Z)(t.id),
                na = (0, f.Z)(t.id),
                nd = (0, c.Z)(a.id),
                no = (0, h.Z)(t),
                nu = (0, m.Z)(t.id),
                ns = (0, Z.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: t.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: V
                }),
                nc = (0, T.Z)(t, a),
                nf = t.isNonUserBot(),
                nm = a.isManaged(),
                np = null === (e = a.recipients) || void 0 === e ? void 0 : e.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: G,
                children: [
                    !nf &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: no }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [D && B, s && L, H, K, !nm && W, D && z, D && q, nl]
                                }),
                                k && (0, i.jsx)(r.MenuGroup, { children: F }),
                                np &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [!nm && Y, nc]
                                    }),
                                (0, i.jsx)(r.MenuGroup, { children: D && nn }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [k && J, k && Q, k && X, ns, D && $, ne, D && ni, D && nt, k && nu]
                                }),
                                R &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [nd, na]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nr })
                ]
            });
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_USER_MENU]
);
