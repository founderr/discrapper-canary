n.r(t);
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(239091),
    l = n(883385),
    u = n(108843),
    s = n(911969),
    d = n(947440),
    c = n(100527),
    E = n(441061),
    I = n(167675),
    _ = n(737013),
    T = n(607783),
    f = n(299206),
    A = n(976192),
    p = n(819403),
    N = n(286694),
    S = n(592125),
    h = n(777658),
    O = n(858488),
    y = n(185457),
    g = n(933409),
    Z = n(570870),
    M = n(389052),
    m = n(24311),
    R = n(332576),
    G = n(710631),
    C = n(297047),
    b = n(88966),
    v = n(712301),
    D = n(991307),
    U = n(725119),
    L = n(931617),
    w = n(700994),
    P = n(332031),
    H = n(981631),
    B = n(689938);
t.default = (0, u.Z)(
    (0, l.Z)(
        function (e) {
            let { user: t, guildId: n, channel: l, showMediaItems: u = !1, showChatItems: c = !0, showChannelCallItems: x = !1, showModalItems: F = !0, showStageChannelItems: k = !1, context: V, onSelect: j, onHeightUpdate: W, viewingChannelId: K } = e,
                z = {
                    page: H.ZY5.GUILD_CHANNEL,
                    section: H.jXE.CHAT_USERNAME,
                    object: H.qAy.CONTEXT_MENU_ITEM
                },
                Y = (0, U.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: l.id
                }),
                q = (0, C.Z)(t, n, V),
                X = (0, b.Z)(t.id, V),
                Q = (0, P.Z)(t.id),
                $ = (0, m.Z)({
                    user: t,
                    context: V
                }),
                J = (0, y.Z)({
                    user: t,
                    guildId: n,
                    channelId: l.id,
                    context: V
                }),
                ee = (0, O.Z)({ user: t }),
                et = (0, w.Z)(t.id),
                en = (0, D.Z)(t.id),
                er = (0, T.B)({
                    userId: t.id,
                    channelId: l.id,
                    guildId: l.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                ei = (0, A.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: z,
                    context: V
                }),
                ea = (0, G.Z)({
                    user: t,
                    guildId: n
                }),
                eo = (0, d.Z)(null, t),
                el = (0, h.Z)(t),
                eu = (0, M.Z)({ user: t }),
                es = (0, g.Z)(t, n, l.id),
                ed = (0, L.Z)(t.id, n),
                ec = (0, v.Z)(t, n),
                eE = (0, f.Z)({
                    id: t.id,
                    label: B.Z.Messages.COPY_ID_USER
                }),
                eI = (0, R.Z)(t.id, l.id),
                e_ = (0, I.Z)(t.id),
                eT = (0, E.Z)(l.id),
                ef = (0, p.Z)(t),
                eA = (0, N.Z)(t, n, l.id),
                ep = (0, i.e7)([S.Z], () => (null != K ? S.Z.getChannel(K) : null)),
                eN = (0, Z.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: null != ep ? ep : l,
                    guildId: n,
                    onHeightUpdate: W,
                    context: V
                }),
                eS = (0, _.Z)(t.id),
                eh = t.isNonUserBot();
            return (0, r.jsxs)(a.Menu, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': B.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: j,
                children: [
                    !eh &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(a.MenuGroup, {
                                    children: [ef, k && eA]
                                }),
                                (0, r.jsxs)(a.MenuGroup, {
                                    children: [F && Y, c && q, X, $, F && J, F && ee, Q]
                                }),
                                u && (0, r.jsx)(a.MenuGroup, { children: et }),
                                (0, r.jsx)(a.MenuGroup, { children: F && eo }),
                                (0, r.jsxs)(a.MenuGroup, {
                                    children: [u && en, u && er, u && eI, F && ei, eN, F && ea, el, F && eu, x && eS]
                                }),
                                (0, r.jsx)(a.MenuGroup, { children: es }),
                                (0, r.jsxs)(a.MenuGroup, {
                                    children: [ed, ec]
                                }),
                                x &&
                                    (0, r.jsxs)(a.MenuGroup, {
                                        children: [eT, e_]
                                    })
                            ]
                        }),
                    (0, r.jsx)(a.MenuGroup, { children: eE })
                ]
            });
        },
        { object: H.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
