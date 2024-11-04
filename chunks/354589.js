e.r(t);
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(239091),
    a = e(883385),
    o = e(108843),
    u = e(911969),
    d = e(947440),
    s = e(100527),
    c = e(441061),
    T = e(167675),
    I = e(737013),
    E = e(607783),
    p = e(299206),
    _ = e(819403),
    f = e(777658),
    S = e(858488),
    N = e(185457),
    h = e(570870),
    m = e(389052),
    A = e(24311),
    g = e(915193),
    Z = e(332576),
    O = e(710631),
    v = e(297047),
    M = e(88966),
    y = e(397616),
    G = e(558924),
    C = e(991307),
    R = e(725119),
    b = e(700994),
    x = e(332031),
    P = e(981631),
    U = e(388032);
t.default = (0, o.Z)(
    (0, a.Z)(
        function (n) {
            var t;
            let { user: e, channel: a, context: o, showChatItems: s = !0, showMediaItems: P = !1, showChannelCallItems: D = !1, showModalItems: j = !0, onSelect: w, onHeightUpdate: k } = n,
                H = (0, R.Z)({
                    userId: e.id,
                    guildId: null
                }),
                L = (0, v.Z)(e, null, o),
                B = (0, G.Z)(e, a.id),
                W = (0, M.Z)(e.id, o),
                V = (0, A.Z)({
                    user: e,
                    context: o
                }),
                K = (0, N.Z)({
                    user: e,
                    channelId: a.id,
                    context: o
                }),
                F = (0, S.Z)({ user: e }),
                q = (0, b.Z)(e.id),
                z = (0, y.Z)(e.id, a.id),
                Y = (0, C.Z)(e.id),
                J = (0, E.B)({
                    userId: e.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                Q = (0, Z.Z)(e.id, a.id),
                X = (0, O.Z)({ user: e }),
                $ = (0, d.Z)(null, e),
                nn = (0, f.Z)(e),
                nt = (0, m.Z)({ user: e }),
                ne = (0, p.Z)({
                    id: e.id,
                    label: U.intl.string(U.t['/AXYnJ'])
                }),
                ni = (0, x.Z)(e.id),
                nr = (0, T.Z)(e.id),
                nl = (0, c.Z)(a.id),
                na = (0, _.Z)(e),
                no = (0, I.Z)(e.id),
                nu = (0, h.Z)({
                    commandType: u.yU.USER,
                    commandTargetId: e.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: k
                }),
                nd = (0, g.Z)(e, a),
                ns = e.isNonUserBot(),
                nc = a.isManaged(),
                nT = null === (t = a.recipients) || void 0 === t ? void 0 : t.includes(e.id);
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: w,
                children: [
                    !ns &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: na }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [j && H, s && L, W, V, !nc && B, j && K, j && F, ni]
                                }),
                                P && (0, i.jsx)(r.MenuGroup, { children: q }),
                                nT &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [!nc && z, nd]
                                    }),
                                (0, i.jsx)(r.MenuGroup, { children: j && $ }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [P && Y, P && J, P && Q, nu, j && X, nn, j && nt, P && no]
                                }),
                                D &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [nl, nr]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: ne })
                ]
            });
        },
        { object: P.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_USER_MENU]
);
