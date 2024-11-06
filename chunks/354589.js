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
    A = t(710631),
    M = t(297047),
    S = t(88966),
    C = t(397616),
    j = t(558924),
    y = t(991307),
    N = t(37258),
    O = t(700994),
    P = t(332031),
    w = t(981631),
    k = t(388032);
e.default = (0, d.Z)(
    (0, a.Z)(
        function (n) {
            var e;
            let { user: t, channel: a, context: d, showChatItems: s = !0, showMediaItems: w = !1, showChannelCallItems: U = !1, showModalItems: R = !0, onSelect: D, onHeightUpdate: G } = n,
                V = (0, N.Z)({
                    userId: t.id,
                    guildId: null
                }),
                B = (0, M.Z)(t, null, d),
                L = (0, j.Z)(t, a.id),
                W = (0, S.Z)(t.id, d),
                H = (0, I.Z)({
                    user: t,
                    context: d
                }),
                K = (0, E.Z)({
                    user: t,
                    channelId: a.id,
                    context: d
                }),
                z = (0, _.Z)({ user: t }),
                q = (0, O.Z)(t.id),
                F = (0, C.Z)(t.id, a.id),
                Y = (0, y.Z)(t.id),
                J = (0, p.B)({
                    userId: t.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                Q = (0, b.Z)(t.id, a.id),
                X = (0, A.Z)({ user: t }),
                $ = (0, u.Z)(null, t),
                nn = (0, v.Z)(t),
                ne = (0, x.Z)({ user: t }),
                nt = (0, g.Z)({
                    id: t.id,
                    label: k.intl.string(k.t['/AXYnJ'])
                }),
                ni = (0, P.Z)(t.id),
                nr = (0, f.Z)(t.id),
                nl = (0, c.Z)(a.id),
                na = (0, h.Z)(t),
                nd = (0, m.Z)(t.id),
                no = (0, Z.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: t.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: G
                }),
                nu = (0, T.Z)(t, a),
                ns = t.isNonUserBot(),
                nc = a.isManaged(),
                nf = null === (e = a.recipients) || void 0 === e ? void 0 : e.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': k.intl.string(k.t.liqwPD),
                onSelect: D,
                children: [
                    !ns &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: na }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [R && V, s && B, W, H, !nc && L, R && K, R && z, ni]
                                }),
                                w && (0, i.jsx)(r.MenuGroup, { children: q }),
                                nf &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [!nc && F, nu]
                                    }),
                                (0, i.jsx)(r.MenuGroup, { children: R && $ }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [w && Y, w && J, w && Q, no, R && X, nn, R && ne, w && nd]
                                }),
                                U &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [nl, nr]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nt })
                ]
            });
        },
        { object: w.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_USER_MENU]
);
