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
    h = t(461535),
    _ = t(776568),
    m = t(299206),
    M = t(895563),
    p = t(212205),
    v = t(62420),
    C = t(455395),
    Z = t(581052),
    j = t(875252),
    T = t(583332),
    E = t(122074),
    N = t(819403),
    S = t(777658),
    O = t(858488),
    U = t(185457),
    A = t(570870),
    P = t(389052),
    b = t(24311),
    y = t(794973),
    G = t(332576),
    R = t(158508),
    D = t(710631),
    F = t(558924),
    L = t(991307),
    k = t(37258),
    w = t(700994),
    z = t(332031),
    Y = t(981631),
    B = t(388032);
e.default = (0, a.Z)(
    (0, u.Z)(
        function (n) {
            let { user: e, channel: t, channelSelected: u = !1, showMute: a = !0, showMediaItems: s = !1, showChannelCallItems: V = !1, showModalItems: W = !0, targetIsUser: K = !1, context: X, onSelect: q, onHeightUpdate: J } = n,
                H = (0, k.Z)({
                    userId: e.id,
                    guildId: null
                }),
                Q = (0, b.Z)({
                    user: e,
                    context: X
                }),
                $ = (0, U.Z)({
                    user: e,
                    channelId: t.id,
                    context: X
                }),
                nn = (0, O.Z)({ user: e }),
                ne = (0, z.Z)(e.id),
                nt = (0, y.Z)(t.id, u),
                ni = (0, D.Z)({ user: e }),
                nr = (0, d.Z)(null, e),
                nl = (0, w.Z)(e.id),
                nu = (0, F.Z)(e, t.id),
                na = (0, S.Z)(e),
                no = (0, L.Z)(e.id),
                nd = (0, g.B)({
                    userId: e.id,
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                ns = (0, G.Z)(e.id, t.id),
                nc = (0, P.Z)({ user: e }),
                nf = (0, R.Z)({ user: e }),
                nI = (0, _.ZP)(t),
                ng = (0, E.Uf)(Y.aIL, t.id, 'trailing'),
                nx = (0, m.Z)({
                    id: e.id,
                    label: B.intl.string(B.t['/AXYnJ'])
                }),
                nh = (0, m.Z)({
                    id: t.id,
                    label: B.intl.string(B.t.gFHI3t)
                }),
                n_ = (0, h.Z)(t),
                nm = (0, f.Z)(e.id),
                nM = (0, c.Z)(t.id),
                np = (0, N.Z)(e),
                nv = (0, I.Z)(e.id),
                nC = (0, A.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: e.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: J
                }),
                nZ = (0, M.l)(t),
                nj = (0, M.P)(t),
                nT = (0, p.Z)(t),
                nE = (0, v.Z)(t),
                nN = (0, Z.V)(t),
                nS = (0, C.i)(t),
                nO = (0, T.g)(t),
                nU = (0, j.H)(t),
                nA = t.isManaged(),
                nP = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': B.intl.string(B.t.liqwPD),
                onSelect: q,
                children: [
                    (0, i.jsx)(r.MenuGroup, { children: !(nP && !(0, x.Z)(t.id)) && n_ }),
                    (0, i.jsx)(r.MenuGroup, { children: nN }),
                    (0, i.jsx)(r.MenuGroup, { children: nU }),
                    (0, i.jsx)(r.MenuGroup, { children: nO }),
                    (0, i.jsx)(r.MenuGroup, { children: nS }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [nZ, nT, nE]
                    }),
                    (0, i.jsx)(r.MenuGroup, { children: !nP && np }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [
                            !nP &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [W && H, Q, !nA && nu, W && $, W && nn, ne]
                                }),
                            (0, x.Z)(t.id) && H,
                            nt
                        ]
                    }),
                    !nP &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: s && nl }),
                                (0, i.jsx)(r.MenuGroup, { children: W && nr }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [s && no, W && nd, s && ns, nC, W && ni, na, W && nf, W && nc, s && nv]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [a && nI, ng]
                                }),
                                V &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [nM, nm]
                                    })
                            ]
                        }),
                    (0, x.Z)(t.id) &&
                        (0, i.jsxs)(r.MenuGroup, {
                            children: [a && nI, ng]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nj }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [nx, !K && nh]
                    })
                ]
            });
        },
        { object: Y.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.DM_USER_MENU]
);
