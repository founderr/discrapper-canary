n.r(t);
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(239091),
    o = n(883385),
    s = n(108843),
    l = n(911969),
    u = n(947440),
    d = n(100527),
    c = n(441061),
    I = n(167675),
    f = n(737013),
    E = n(607783),
    p = n(299206),
    T = n(819403),
    N = n(777658),
    h = n(858488),
    _ = n(185457),
    S = n(570870),
    A = n(389052),
    g = n(24311),
    m = n(915193),
    Z = n(332576),
    O = n(710631),
    y = n(297047),
    M = n(88966),
    v = n(397616),
    R = n(558924),
    G = n(991307),
    b = n(725119),
    C = n(700994),
    w = n(332031),
    x = n(981631),
    P = n(689938);
t.default = (0, s.Z)(
    (0, o.Z)(
        function (e) {
            var t;
            let { user: n, channel: o, context: s, showChatItems: d = !0, showMediaItems: x = !1, showChannelCallItems: U = !1, showModalItems: D = !0, onSelect: L, onHeightUpdate: j } = e,
                H = (0, b.Z)({
                    userId: n.id,
                    guildId: null
                }),
                B = (0, y.Z)(n, null, s),
                k = (0, R.Z)(n.id, o.id),
                F = (0, M.Z)(n.id, s),
                V = (0, g.Z)({
                    user: n,
                    context: s
                }),
                W = (0, _.Z)({
                    user: n,
                    channelId: o.id,
                    context: s
                }),
                K = (0, h.Z)({ user: n }),
                z = (0, C.Z)(n.id),
                Y = (0, v.Z)(n.id, o.id),
                q = (0, G.Z)(n.id),
                X = (0, E.B)({
                    userId: n.id,
                    channelId: o.id,
                    guildId: o.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                $ = (0, Z.Z)(n.id, o.id),
                J = (0, O.Z)({ user: n }),
                Q = (0, u.Z)(null, n),
                ee = (0, N.Z)(n),
                et = (0, A.Z)({ user: n }),
                en = (0, p.Z)({
                    id: n.id,
                    label: P.Z.Messages.COPY_ID_USER
                }),
                er = (0, w.Z)(n.id),
                ei = (0, I.Z)(n.id),
                ea = (0, c.Z)(o.id),
                eo = (0, T.Z)(n),
                es = (0, f.Z)(n.id),
                el = (0, S.Z)({
                    commandType: l.yU.USER,
                    commandTargetId: n.id,
                    channel: o,
                    guildId: void 0,
                    onHeightUpdate: j
                }),
                eu = (0, m.Z)(n, o),
                ed = n.isNonUserBot(),
                ec = o.isManaged(),
                eI = null === (t = o.recipients) || void 0 === t ? void 0 : t.includes(n.id);
            return (0, r.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': P.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: L,
                children: [
                    !ed &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.MenuGroup, { children: eo }),
                                (0, r.jsxs)(i.MenuGroup, {
                                    children: [D && H, d && B, F, V, !ec && k, D && W, D && K, er]
                                }),
                                x && (0, r.jsx)(i.MenuGroup, { children: z }),
                                eI &&
                                    (0, r.jsxs)(i.MenuGroup, {
                                        children: [!ec && Y, eu]
                                    }),
                                (0, r.jsx)(i.MenuGroup, { children: D && Q }),
                                (0, r.jsxs)(i.MenuGroup, {
                                    children: [x && q, x && X, x && $, el, D && J, ee, D && et, x && es]
                                }),
                                U &&
                                    (0, r.jsxs)(i.MenuGroup, {
                                        children: [ea, ei]
                                    })
                            ]
                        }),
                    (0, r.jsx)(i.MenuGroup, { children: en })
                ]
            });
        },
        { object: x.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_USER_MENU]
);
