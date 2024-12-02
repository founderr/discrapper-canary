t.r(e);
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(239091),
    u = t(883385),
    a = t(108843),
    o = t(911969),
    d = t(947440),
    s = t(100527),
    c = t(441061),
    f = t(167675),
    I = t(737013),
    g = t(607783),
    x = t(702321),
    M = t(461535),
    _ = t(776568),
    m = t(299206),
    h = t(895563),
    p = t(212205),
    v = t(62420),
    j = t(455395),
    C = t(750850),
    Z = t(581052),
    T = t(875252),
    E = t(583332),
    N = t(122074),
    S = t(819403),
    A = t(777658),
    U = t(858488),
    O = t(185457),
    y = t(570870),
    b = t(389052),
    G = t(24311),
    P = t(794973),
    R = t(332576),
    D = t(158508),
    F = t(710631),
    L = t(558924),
    k = t(991307),
    w = t(37258),
    Y = t(700994),
    z = t(332031),
    B = t(981631),
    V = t(388032);
e.default = (0, a.Z)(
    (0, u.Z)(
        function (n) {
            let { user: e, channel: t, channelSelected: u = !1, showMute: a = !0, showMediaItems: s = !1, showChannelCallItems: W = !1, showModalItems: K = !0, targetIsUser: J = !1, context: X, onSelect: q, onHeightUpdate: H } = n,
                Q = (0, w.Z)({
                    userId: e.id,
                    guildId: null
                }),
                $ = (0, G.Z)({
                    user: e,
                    context: X
                }),
                nn = (0, O.Z)({
                    user: e,
                    channelId: t.id,
                    context: X
                }),
                ne = (0, U.Z)({ user: e }),
                nt = (0, z.Z)(e.id),
                ni = (0, P.Z)(t.id, u),
                nr = (0, F.Z)({ user: e }),
                nl = (0, d.Z)(null, e),
                nu = (0, Y.Z)(e.id),
                na = (0, L.Z)(e, t.id),
                no = (0, A.Z)(e),
                nd = (0, k.Z)(e.id),
                ns = (0, g.B)({
                    userId: e.id,
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                nc = (0, R.Z)(e.id, t.id),
                nf = (0, b.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                nI = (0, D.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                ng = (0, _.ZP)(t),
                nx = (0, N.Uf)(B.aIL, t.id, 'trailing'),
                nM = (0, m.Z)({
                    id: e.id,
                    label: V.intl.string(V.t['/AXYnJ'])
                }),
                n_ = (0, m.Z)({
                    id: t.id,
                    label: V.intl.string(V.t.gFHI3t)
                }),
                nm = (0, M.Z)(t),
                nh = (0, f.Z)(e.id),
                np = (0, c.Z)(t.id),
                nv = (0, S.Z)(e),
                nj = (0, I.Z)(e.id),
                nC = (0, y.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: e.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: H
                }),
                nZ = (0, h.l)(t),
                nT = (0, h.P)(t),
                nE = (0, p.Z)(t),
                nN = (0, v.Z)(t),
                nS = (0, Z.V)(t),
                nA = (0, j.i)(t),
                nU = (0, E.g)(t),
                nO = (0, T.H)(t),
                ny = (0, C.e)(t),
                nb = t.isManaged(),
                nG = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': V.intl.string(V.t.liqwPD),
                onSelect: q,
                children: [
                    (0, i.jsx)(r.MenuGroup, { children: !(nG && !(0, x.Z)(t.id)) && nm }),
                    (0, i.jsx)(r.MenuGroup, { children: nS }),
                    (0, i.jsx)(r.MenuGroup, { children: nO }),
                    (0, i.jsx)(r.MenuGroup, { children: nU }),
                    (0, i.jsx)(r.MenuGroup, { children: nA }),
                    (0, i.jsx)(r.MenuGroup, { children: ny }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [nZ, nE, nN]
                    }),
                    (0, i.jsx)(r.MenuGroup, { children: !nG && nv }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [
                            !nG &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [K && Q, $, !nb && na, K && nn, K && ne, nt]
                                }),
                            (0, x.Z)(t.id) && Q,
                            ni
                        ]
                    }),
                    !nG &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: s && nu }),
                                (0, i.jsx)(r.MenuGroup, { children: K && nl }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [s && nd, K && ns, s && nc, nC, K && nr, no, K && nI, K && nf, s && nj]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [a && ng, nx]
                                }),
                                W &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [np, nh]
                                    })
                            ]
                        }),
                    (0, x.Z)(t.id) &&
                        (0, i.jsxs)(r.MenuGroup, {
                            children: [a && ng, nx]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nT }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [nM, !J && n_]
                    })
                ]
            });
        },
        { object: B.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.DM_USER_MENU]
);
