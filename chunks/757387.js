l.r(n);
var i = l(200651);
l(192379);
var t = l(442837),
    r = l(481060),
    a = l(239091),
    u = l(883385),
    d = l(108843),
    s = l(911969),
    o = l(947440),
    c = l(100527),
    Z = l(441061),
    M = l(167675),
    p = l(737013),
    h = l(607783),
    g = l(299206),
    C = l(976192),
    E = l(819403),
    N = l(286694),
    x = l(592125),
    _ = l(777658),
    f = l(858488),
    U = l(185457),
    G = l(933409),
    P = l(570870),
    b = l(389052),
    j = l(24311),
    A = l(332576),
    I = l(158508),
    v = l(710631),
    T = l(297047),
    m = l(88966),
    y = l(712301),
    L = l(991307),
    O = l(37258),
    S = l(931617),
    k = l(700994),
    q = l(332031),
    w = l(981631),
    R = l(388032);
n.default = (0, d.Z)(
    (0, u.Z)(
        function (e) {
            let { user: n, guildId: l, channel: u, showMediaItems: d = !1, showChatItems: c = !0, showChannelCallItems: W = !1, showModalItems: B = !0, showStageChannelItems: D = !1, context: H, onSelect: K, onHeightUpdate: X, viewingChannelId: F } = e,
                z = u.id,
                J = {
                    page: w.ZY5.GUILD_CHANNEL,
                    section: w.jXE.CHAT_USERNAME,
                    object: w.qAy.CONTEXT_MENU_ITEM
                },
                Q = (0, O.Z)({
                    userId: n.id,
                    guildId: l,
                    channelId: z
                }),
                V = (0, T.Z)(n, l, H),
                Y = (0, m.Z)(n.id, H),
                $ = (0, q.Z)(n.id),
                ee = (0, j.Z)({
                    user: n,
                    context: H
                }),
                en = (0, U.Z)({
                    user: n,
                    guildId: l,
                    channelId: z,
                    context: H
                }),
                el = (0, f.Z)({ user: n }),
                ei = (0, k.Z)(n.id),
                et = (0, L.Z)(n.id),
                er = (0, h.B)({
                    userId: n.id,
                    channelId: z,
                    guildId: u.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                ea = (0, C.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: J,
                    context: H
                }),
                eu = (0, v.Z)({
                    user: n,
                    guildId: l
                }),
                ed = (0, o.Z)(null, n),
                es = (0, _.Z)(n),
                eo = (0, b.Z)({
                    user: n,
                    guildId: l,
                    channelId: z
                }),
                ec = (0, I.Z)({
                    user: n,
                    guildId: l,
                    channelId: z
                }),
                eZ = (0, G.Z)(n, l, z),
                eM = (0, S.Z)(n.id, l),
                ep = (0, y.Z)(n, l),
                eh = (0, g.Z)({
                    id: n.id,
                    label: R.intl.string(R.t['/AXYnJ'])
                }),
                eg = (0, A.Z)(n.id, z),
                eC = (0, M.Z)(n.id),
                eE = (0, Z.Z)(z),
                eN = (0, E.Z)(n),
                ex = (0, N.Z)(n, l, z),
                e_ = (0, t.e7)([x.Z], () => (null != F ? x.Z.getChannel(F) : null)),
                ef = (0, P.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: null != e_ ? e_ : u,
                    guildId: l,
                    onHeightUpdate: X,
                    context: H
                }),
                eU = (0, p.Z)(n.id),
                eG = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': R.intl.string(R.t.liqwPD),
                onSelect: K,
                children: [
                    !eG &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [eN, D && ex]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [B && Q, c && V, Y, ee, B && en, B && el, $]
                                }),
                                d && (0, i.jsx)(r.MenuGroup, { children: ei }),
                                (0, i.jsx)(r.MenuGroup, { children: B && ed }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [d && et, d && er, d && eg, B && ea, ef, B && eu, es, B && ec, B && eo, W && eU]
                                }),
                                (0, i.jsx)(r.MenuGroup, { children: eZ }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [eM, ep]
                                }),
                                W &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [eE, eC]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: eh })
                ]
            });
        },
        { object: w.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
