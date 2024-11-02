l.r(n);
var i = l(200651);
l(192379);
var t = l(442837),
    r = l(481060),
    a = l(239091),
    d = l(883385),
    u = l(108843),
    s = l(911969),
    c = l(947440),
    o = l(100527),
    Z = l(441061),
    M = l(167675),
    h = l(737013),
    p = l(607783),
    g = l(299206),
    C = l(976192),
    E = l(819403),
    N = l(286694),
    x = l(592125),
    _ = l(777658),
    f = l(858488),
    I = l(185457),
    U = l(933409),
    G = l(570870),
    P = l(389052),
    b = l(24311),
    j = l(332576),
    A = l(710631),
    v = l(297047),
    T = l(88966),
    m = l(712301),
    y = l(991307),
    L = l(725119),
    O = l(931617),
    S = l(700994),
    k = l(332031),
    q = l(981631),
    w = l(388032);
n.default = (0, u.Z)(
    (0, d.Z)(
        function (e) {
            let { user: n, guildId: l, channel: d, showMediaItems: u = !1, showChatItems: o = !0, showChannelCallItems: R = !1, showModalItems: W = !0, showStageChannelItems: B = !1, context: D, onSelect: H, onHeightUpdate: K, viewingChannelId: X } = e,
                F = {
                    page: q.ZY5.GUILD_CHANNEL,
                    section: q.jXE.CHAT_USERNAME,
                    object: q.qAy.CONTEXT_MENU_ITEM
                },
                z = (0, L.Z)({
                    userId: n.id,
                    guildId: l,
                    channelId: d.id
                }),
                J = (0, v.Z)(n, l, D),
                Q = (0, T.Z)(n.id, D),
                V = (0, k.Z)(n.id),
                Y = (0, b.Z)({
                    user: n,
                    context: D
                }),
                $ = (0, I.Z)({
                    user: n,
                    guildId: l,
                    channelId: d.id,
                    context: D
                }),
                ee = (0, f.Z)({ user: n }),
                en = (0, S.Z)(n.id),
                el = (0, y.Z)(n.id),
                ei = (0, p.B)({
                    userId: n.id,
                    channelId: d.id,
                    guildId: d.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                et = (0, C.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: F,
                    context: D
                }),
                er = (0, A.Z)({
                    user: n,
                    guildId: l
                }),
                ea = (0, c.Z)(null, n),
                ed = (0, _.Z)(n),
                eu = (0, P.Z)({ user: n }),
                es = (0, U.Z)(n, l, d.id),
                ec = (0, O.Z)(n.id, l),
                eo = (0, m.Z)(n, l),
                eZ = (0, g.Z)({
                    id: n.id,
                    label: w.intl.string(w.t['/AXYnJ'])
                }),
                eM = (0, j.Z)(n.id, d.id),
                eh = (0, M.Z)(n.id),
                ep = (0, Z.Z)(d.id),
                eg = (0, E.Z)(n),
                eC = (0, N.Z)(n, l, d.id),
                eE = (0, t.e7)([x.Z], () => (null != X ? x.Z.getChannel(X) : null)),
                eN = (0, G.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: null != eE ? eE : d,
                    guildId: l,
                    onHeightUpdate: K,
                    context: D
                }),
                ex = (0, h.Z)(n.id),
                e_ = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': w.intl.string(w.t.liqwPD),
                onSelect: H,
                children: [
                    !e_ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [eg, B && eC]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [W && z, o && J, Q, Y, W && $, W && ee, V]
                                }),
                                u && (0, i.jsx)(r.MenuGroup, { children: en }),
                                (0, i.jsx)(r.MenuGroup, { children: W && ea }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [u && el, u && ei, u && eM, W && et, eN, W && er, ed, W && eu, R && ex]
                                }),
                                (0, i.jsx)(r.MenuGroup, { children: es }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [ec, eo]
                                }),
                                R &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [ep, eh]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: eZ })
                ]
            });
        },
        { object: q.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.GUILD_CHANNEL_USER_MENU]
);
