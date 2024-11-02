n.r(t);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(239091),
    o = n(883385),
    l = n(108843),
    d = n(911969),
    s = n(947440),
    u = n(100527),
    c = n(441061),
    I = n(167675),
    T = n(737013),
    p = n(607783),
    E = n(299206),
    N = n(819403),
    S = n(777658),
    _ = n(858488),
    f = n(185457),
    h = n(570870),
    m = n(389052),
    Z = n(24311),
    A = n(915193),
    g = n(332576),
    O = n(710631),
    v = n(297047),
    G = n(88966),
    M = n(397616),
    y = n(558924),
    x = n(991307),
    C = n(725119),
    R = n(700994),
    b = n(332031),
    P = n(981631),
    U = n(388032);
t.default = (0, l.Z)(
    (0, o.Z)(
        function (e) {
            var t;
            let { user: n, channel: o, context: l, showChatItems: u = !0, showMediaItems: P = !1, showChannelCallItems: j = !1, showModalItems: D = !0, onSelect: k, onHeightUpdate: L } = e,
                H = (0, C.Z)({
                    userId: n.id,
                    guildId: null
                }),
                w = (0, v.Z)(n, null, l),
                W = (0, y.Z)(n, o.id),
                B = (0, G.Z)(n.id, l),
                F = (0, Z.Z)({
                    user: n,
                    context: l
                }),
                K = (0, f.Z)({
                    user: n,
                    channelId: o.id,
                    context: l
                }),
                V = (0, _.Z)({ user: n }),
                z = (0, R.Z)(n.id),
                Y = (0, M.Z)(n.id, o.id),
                q = (0, x.Z)(n.id),
                J = (0, p.B)({
                    userId: n.id,
                    channelId: o.id,
                    guildId: o.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                X = (0, g.Z)(n.id, o.id),
                Q = (0, O.Z)({ user: n }),
                $ = (0, s.Z)(null, n),
                ee = (0, S.Z)(n),
                et = (0, m.Z)({ user: n }),
                en = (0, E.Z)({
                    id: n.id,
                    label: U.intl.string(U.t['/AXYnJ'])
                }),
                ei = (0, b.Z)(n.id),
                er = (0, I.Z)(n.id),
                ea = (0, c.Z)(o.id),
                eo = (0, N.Z)(n),
                el = (0, T.Z)(n.id),
                ed = (0, h.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: n.id,
                    channel: o,
                    guildId: void 0,
                    onHeightUpdate: L
                }),
                es = (0, A.Z)(n, o),
                eu = n.isNonUserBot(),
                ec = o.isManaged(),
                eI = null === (t = o.recipients) || void 0 === t ? void 0 : t.includes(n.id);
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: k,
                children: [
                    !eu &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: eo }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [D && H, u && w, B, F, !ec && W, D && K, D && V, ei]
                                }),
                                P && (0, i.jsx)(r.MenuGroup, { children: z }),
                                eI &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [!ec && Y, es]
                                    }),
                                (0, i.jsx)(r.MenuGroup, { children: D && $ }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [P && q, P && J, P && X, ed, D && Q, ee, D && et, P && el]
                                }),
                                j &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [ea, er]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: en })
                ]
            });
        },
        { object: P.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
