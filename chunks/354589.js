t.r(n);
var i = t(200651);
t(192379);
var r = t(481060),
    a = t(239091),
    s = t(883385),
    o = t(108843),
    d = t(911969),
    l = t(947440),
    u = t(100527),
    c = t(441061),
    I = t(167675),
    E = t(737013),
    T = t(607783),
    p = t(299206),
    _ = t(819403),
    N = t(777658),
    S = t(858488),
    Z = t(185457),
    O = t(570870),
    f = t(389052),
    A = t(24311),
    h = t(915193),
    m = t(332576),
    M = t(710631),
    g = t(297047),
    v = t(88966),
    G = t(397616),
    R = t(558924),
    C = t(991307),
    y = t(725119),
    x = t(700994),
    P = t(332031),
    D = t(981631),
    b = t(689938);
n.default = (0, o.Z)(
    (0, s.Z)(
        function (e) {
            var n;
            let { user: t, channel: s, context: o, showChatItems: u = !0, showMediaItems: D = !1, showChannelCallItems: U = !1, showModalItems: j = !0, onSelect: L, onHeightUpdate: H } = e,
                F = (0, y.Z)({
                    userId: t.id,
                    guildId: null
                }),
                k = (0, g.Z)(t, null, o),
                W = (0, R.Z)(t, s.id),
                B = (0, v.Z)(t.id, o),
                w = (0, A.Z)({
                    user: t,
                    context: o
                }),
                V = (0, Z.Z)({
                    user: t,
                    channelId: s.id,
                    context: o
                }),
                K = (0, S.Z)({ user: t }),
                z = (0, x.Z)(t.id),
                Y = (0, G.Z)(t.id, s.id),
                q = (0, C.Z)(t.id),
                X = (0, T.B)({
                    userId: t.id,
                    channelId: s.id,
                    guildId: s.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                J = (0, m.Z)(t.id, s.id),
                Q = (0, M.Z)({ user: t }),
                $ = (0, l.Z)(null, t),
                ee = (0, N.Z)(t),
                en = (0, f.Z)({ user: t }),
                et = (0, p.Z)({
                    id: t.id,
                    label: b.Z.Messages.COPY_ID_USER
                }),
                ei = (0, P.Z)(t.id),
                er = (0, I.Z)(t.id),
                ea = (0, c.Z)(s.id),
                es = (0, _.Z)(t),
                eo = (0, E.Z)(t.id),
                ed = (0, O.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: t.id,
                    channel: s,
                    guildId: void 0,
                    onHeightUpdate: H
                }),
                el = (0, h.Z)(t, s),
                eu = t.isNonUserBot(),
                ec = s.isManaged(),
                eI = null === (n = s.recipients) || void 0 === n ? void 0 : n.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': b.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: L,
                children: [
                    !eu &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: es }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [j && F, u && k, B, w, !ec && W, j && V, j && K, ei]
                                }),
                                D && (0, i.jsx)(r.MenuGroup, { children: z }),
                                eI &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [!ec && Y, el]
                                    }),
                                (0, i.jsx)(r.MenuGroup, { children: j && $ }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [D && q, D && X, D && J, ed, j && Q, ee, j && en, D && eo]
                                }),
                                U &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [ea, er]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: et })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
