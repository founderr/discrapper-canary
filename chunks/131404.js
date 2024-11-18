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
    M = t(299206),
    m = t(895563),
    p = t(212205),
    v = t(62420),
    Z = t(455395),
    C = t(581052),
    T = t(875252),
    j = t(122074),
    E = t(819403),
    N = t(777658),
    S = t(858488),
    O = t(185457),
    U = t(570870),
    A = t(389052),
    P = t(24311),
    b = t(794973),
    y = t(332576),
    G = t(158508),
    R = t(710631),
    D = t(558924),
    L = t(991307),
    F = t(37258),
    k = t(700994),
    w = t(332031),
    z = t(981631),
    Y = t(388032);
e.default = (0, a.Z)(
    (0, u.Z)(
        function (n) {
            let { user: e, channel: t, channelSelected: u = !1, showMute: a = !0, showMediaItems: s = !1, showChannelCallItems: B = !1, showModalItems: V = !0, targetIsUser: W = !1, context: K, onSelect: X, onHeightUpdate: q } = n,
                J = (0, F.Z)({
                    userId: e.id,
                    guildId: null
                }),
                H = (0, P.Z)({
                    user: e,
                    context: K
                }),
                Q = (0, O.Z)({
                    user: e,
                    channelId: t.id,
                    context: K
                }),
                $ = (0, S.Z)({ user: e }),
                nn = (0, w.Z)(e.id),
                ne = (0, b.Z)(t.id, u),
                nt = (0, R.Z)({ user: e }),
                ni = (0, d.Z)(null, e),
                nr = (0, k.Z)(e.id),
                nl = (0, D.Z)(e, t.id),
                nu = (0, N.Z)(e),
                na = (0, L.Z)(e.id),
                no = (0, g.B)({
                    userId: e.id,
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                nd = (0, y.Z)(e.id, t.id),
                ns = (0, A.Z)({ user: e }),
                nc = (0, G.Z)({ user: e }),
                nf = (0, _.ZP)(t),
                nI = (0, j.Uf)(z.aIL, t.id, 'trailing'),
                ng = (0, M.Z)({
                    id: e.id,
                    label: Y.intl.string(Y.t['/AXYnJ'])
                }),
                nx = (0, M.Z)({
                    id: t.id,
                    label: Y.intl.string(Y.t.gFHI3t)
                }),
                nh = (0, h.Z)(t),
                n_ = (0, f.Z)(e.id),
                nM = (0, c.Z)(t.id),
                nm = (0, E.Z)(e),
                np = (0, I.Z)(e.id),
                nv = (0, U.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: e.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: q
                }),
                nZ = (0, m.l)(t),
                nC = (0, m.P)(t),
                nT = (0, p.Z)(t),
                nj = (0, v.Z)(t),
                nE = (0, C.V)(t),
                nN = (0, Z.i)(t),
                nS = (0, T.H)(t),
                nO = t.isManaged(),
                nU = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': Y.intl.string(Y.t.liqwPD),
                onSelect: X,
                children: [
                    (0, i.jsx)(r.MenuGroup, { children: !(nU && !(0, x.Z)(t.id)) && nh }),
                    (0, i.jsx)(r.MenuGroup, { children: nE }),
                    (0, i.jsx)(r.MenuGroup, { children: nS }),
                    (0, i.jsx)(r.MenuGroup, { children: nN }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [nZ, nT, nj]
                    }),
                    (0, i.jsx)(r.MenuGroup, { children: !nU && nm }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [
                            !nU &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [V && J, H, !nO && nl, V && Q, V && $, nn]
                                }),
                            (0, x.Z)(t.id) && J,
                            ne
                        ]
                    }),
                    !nU &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: s && nr }),
                                (0, i.jsx)(r.MenuGroup, { children: V && ni }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [s && na, V && no, s && nd, nv, V && nt, nu, V && nc, V && ns, s && np]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [a && nf, nI]
                                }),
                                B &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [nM, n_]
                                    })
                            ]
                        }),
                    (0, x.Z)(t.id) &&
                        (0, i.jsxs)(r.MenuGroup, {
                            children: [a && nf, nI]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nC }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [ng, !W && nx]
                    })
                ]
            });
        },
        { object: z.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.DM_USER_MENU]
);
