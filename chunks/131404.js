t.r(e);
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(239091),
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
    _ = t(461535),
    h = t(776568),
    M = t(299206),
    m = t(895563),
    p = t(212205),
    v = t(62420),
    C = t(455395),
    Z = t(581052),
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
    G = t(710631),
    R = t(558924),
    D = t(991307),
    L = t(37258),
    F = t(700994),
    k = t(332031),
    w = t(981631),
    z = t(388032);
e.default = (0, a.Z)(
    (0, u.Z)(
        function (n) {
            let { user: e, channel: t, channelSelected: u = !1, showMute: a = !0, showMediaItems: s = !1, showChannelCallItems: Y = !1, showModalItems: B = !0, targetIsUser: V = !1, context: W, onSelect: K, onHeightUpdate: X } = n,
                q = (0, L.Z)({
                    userId: e.id,
                    guildId: null
                }),
                J = (0, P.Z)({
                    user: e,
                    context: W
                }),
                H = (0, O.Z)({
                    user: e,
                    channelId: t.id,
                    context: W
                }),
                Q = (0, S.Z)({ user: e }),
                $ = (0, k.Z)(e.id),
                nn = (0, b.Z)(t.id, u),
                ne = (0, G.Z)({ user: e }),
                nt = (0, d.Z)(null, e),
                ni = (0, F.Z)(e.id),
                nl = (0, R.Z)(e, t.id),
                nr = (0, N.Z)(e),
                nu = (0, D.Z)(e.id),
                na = (0, g.B)({
                    userId: e.id,
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                no = (0, y.Z)(e.id, t.id),
                nd = (0, A.Z)({ user: e }),
                ns = (0, h.ZP)(t),
                nc = (0, j.Uf)(w.aIL, t.id, 'trailing'),
                nf = (0, M.Z)({
                    id: e.id,
                    label: z.intl.string(z.t['/AXYnJ'])
                }),
                nI = (0, M.Z)({
                    id: t.id,
                    label: z.intl.string(z.t.gFHI3t)
                }),
                ng = (0, _.Z)(t),
                nx = (0, f.Z)(e.id),
                n_ = (0, c.Z)(t.id),
                nh = (0, E.Z)(e),
                nM = (0, I.Z)(e.id),
                nm = (0, U.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: e.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: X
                }),
                np = (0, m.l)(t),
                nv = (0, m.P)(t),
                nC = (0, p.Z)(t),
                nZ = (0, v.Z)(t),
                nT = (0, Z.V)(t),
                nj = (0, C.i)(t),
                nE = (0, T.H)(t),
                nN = t.isManaged(),
                nS = e.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': z.intl.string(z.t.liqwPD),
                onSelect: K,
                children: [
                    (0, i.jsx)(l.MenuGroup, { children: !(nS && !(0, x.Z)(t.id)) && ng }),
                    (0, i.jsx)(l.MenuGroup, { children: nT }),
                    (0, i.jsx)(l.MenuGroup, { children: nE }),
                    (0, i.jsx)(l.MenuGroup, { children: nj }),
                    (0, i.jsxs)(l.MenuGroup, {
                        children: [np, nC, nZ]
                    }),
                    (0, i.jsx)(l.MenuGroup, { children: !nS && nh }),
                    (0, i.jsxs)(l.MenuGroup, {
                        children: [
                            !nS &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [B && q, J, !nN && nl, B && H, B && Q, $]
                                }),
                            (0, x.Z)(t.id) && q,
                            nn
                        ]
                    }),
                    !nS &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.MenuGroup, { children: s && ni }),
                                (0, i.jsx)(l.MenuGroup, { children: B && nt }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [s && nu, B && na, s && no, nm, B && ne, nr, B && nd, s && nM]
                                }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [a && ns, nc]
                                }),
                                Y &&
                                    (0, i.jsxs)(l.MenuGroup, {
                                        children: [n_, nx]
                                    })
                            ]
                        }),
                    (0, x.Z)(t.id) &&
                        (0, i.jsxs)(l.MenuGroup, {
                            children: [a && ns, nc]
                        }),
                    (0, i.jsx)(l.MenuGroup, { children: nv }),
                    (0, i.jsxs)(l.MenuGroup, {
                        children: [nf, !V && nI]
                    })
                ]
            });
        },
        { object: w.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.DM_USER_MENU]
);
