l.r(n);
var i = l(200651);
l(192379);
var a = l(442837),
    r = l(481060),
    s = l(239091),
    d = l(883385),
    u = l(108843),
    t = l(911969),
    c = l(947440),
    o = l(100527),
    Z = l(441061),
    E = l(167675),
    M = l(737013),
    _ = l(607783),
    N = l(299206),
    C = l(976192),
    h = l(819403),
    p = l(286694),
    I = l(592125),
    U = l(777658),
    A = l(858488),
    g = l(185457),
    G = l(933409),
    x = l(570870),
    T = l(389052),
    f = l(24311),
    b = l(332576),
    j = l(710631),
    P = l(297047),
    O = l(88966),
    S = l(712301),
    L = l(991307),
    v = l(725119),
    R = l(931617),
    m = l(700994),
    H = l(332031),
    y = l(981631),
    D = l(689938);
n.default = (0, u.Z)(
    (0, d.Z)(
        function (e) {
            let { user: n, guildId: l, channel: d, showMediaItems: u = !1, showChatItems: o = !0, showChannelCallItems: k = !1, showModalItems: q = !0, showStageChannelItems: w = !1, context: B, onSelect: F, onHeightUpdate: K, viewingChannelId: W } = e,
                X = {
                    page: y.ZY5.GUILD_CHANNEL,
                    section: y.jXE.CHAT_USERNAME,
                    object: y.qAy.CONTEXT_MENU_ITEM
                },
                V = (0, v.Z)({
                    userId: n.id,
                    guildId: l,
                    channelId: d.id
                }),
                Y = (0, P.Z)(n, l, B),
                z = (0, O.Z)(n.id, B),
                $ = (0, H.Z)(n.id),
                J = (0, f.Z)({
                    user: n,
                    context: B
                }),
                Q = (0, g.Z)({
                    user: n,
                    guildId: l,
                    channelId: d.id,
                    context: B
                }),
                ee = (0, A.Z)({ user: n }),
                en = (0, m.Z)(n.id),
                el = (0, L.Z)(n.id),
                ei = (0, _.B)({
                    userId: n.id,
                    channelId: d.id,
                    guildId: d.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                ea = (0, C.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: X,
                    context: B
                }),
                er = (0, j.Z)({
                    user: n,
                    guildId: l
                }),
                es = (0, c.Z)(null, n),
                ed = (0, U.Z)(n),
                eu = (0, T.Z)({ user: n }),
                et = (0, G.Z)(n, l, d.id),
                ec = (0, R.Z)(n.id, l),
                eo = (0, S.Z)(n, l),
                eZ = (0, N.Z)({
                    id: n.id,
                    label: D.Z.Messages.COPY_ID_USER
                }),
                eE = (0, b.Z)(n.id, d.id),
                eM = (0, E.Z)(n.id),
                e_ = (0, Z.Z)(d.id),
                eN = (0, h.Z)(n),
                eC = (0, p.Z)(n, l, d.id),
                eh = (0, a.e7)([I.Z], () => (null != W ? I.Z.getChannel(W) : null)),
                ep = (0, x.Z)({
                    commandType: t.yU.USER,
                    commandTargetId: n.id,
                    channel: null != eh ? eh : d,
                    guildId: l,
                    onHeightUpdate: K,
                    context: B
                }),
                eI = (0, M.Z)(n.id),
                eU = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': D.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: F,
                children: [
                    !eU &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [eN, w && eC]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [q && V, o && Y, z, J, q && Q, q && ee, $]
                                }),
                                u && (0, i.jsx)(r.MenuGroup, { children: en }),
                                (0, i.jsx)(r.MenuGroup, { children: q && es }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [u && el, u && ei, u && eE, q && ea, ep, q && er, ed, q && eu, k && eI]
                                }),
                                (0, i.jsx)(r.MenuGroup, { children: et }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [ec, eo]
                                }),
                                k &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [e_, eM]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: eZ })
                ]
            });
        },
        { object: y.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.GUILD_CHANNEL_USER_MENU]
);
