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
    A = l(158508),
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
n.default = (0, u.Z)(
    (0, d.Z)(
        function (e) {
            let { user: n, guildId: l, channel: d, showMediaItems: u = !1, showChatItems: o = !0, showChannelCallItems: W = !1, showModalItems: B = !0, showStageChannelItems: D = !1, context: H, onSelect: K, onHeightUpdate: X, viewingChannelId: F } = e,
                z = {
                    page: w.ZY5.GUILD_CHANNEL,
                    section: w.jXE.CHAT_USERNAME,
                    object: w.qAy.CONTEXT_MENU_ITEM
                },
                J = (0, O.Z)({
                    userId: n.id,
                    guildId: l,
                    channelId: d.id
                }),
                Q = (0, T.Z)(n, l, H),
                V = (0, m.Z)(n.id, H),
                Y = (0, q.Z)(n.id),
                $ = (0, b.Z)({
                    user: n,
                    context: H
                }),
                ee = (0, I.Z)({
                    user: n,
                    guildId: l,
                    channelId: d.id,
                    context: H
                }),
                en = (0, f.Z)({ user: n }),
                el = (0, k.Z)(n.id),
                ei = (0, L.Z)(n.id),
                et = (0, p.B)({
                    userId: n.id,
                    channelId: d.id,
                    guildId: d.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                er = (0, C.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: z,
                    context: H
                }),
                ea = (0, v.Z)({
                    user: n,
                    guildId: l
                }),
                ed = (0, c.Z)(null, n),
                eu = (0, _.Z)(n),
                es = (0, P.Z)({ user: n }),
                ec = (0, A.Z)({ user: n }),
                eo = (0, U.Z)(n, l, d.id),
                eZ = (0, S.Z)(n.id, l),
                eM = (0, y.Z)(n, l),
                eh = (0, g.Z)({
                    id: n.id,
                    label: R.intl.string(R.t['/AXYnJ'])
                }),
                ep = (0, j.Z)(n.id, d.id),
                eg = (0, M.Z)(n.id),
                eC = (0, Z.Z)(d.id),
                eE = (0, E.Z)(n),
                eN = (0, N.Z)(n, l, d.id),
                ex = (0, t.e7)([x.Z], () => (null != F ? x.Z.getChannel(F) : null)),
                e_ = (0, G.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: null != ex ? ex : d,
                    guildId: l,
                    onHeightUpdate: X,
                    context: H
                }),
                ef = (0, h.Z)(n.id),
                eI = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': R.intl.string(R.t.liqwPD),
                onSelect: K,
                children: [
                    !eI &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [eE, D && eN]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [B && J, o && Q, V, $, B && ee, B && en, Y]
                                }),
                                u && (0, i.jsx)(r.MenuGroup, { children: el }),
                                (0, i.jsx)(r.MenuGroup, { children: B && ed }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [u && ei, u && et, u && ep, B && er, e_, B && ea, eu, B && ec, B && es, W && ef]
                                }),
                                (0, i.jsx)(r.MenuGroup, { children: eo }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [eZ, eM]
                                }),
                                W &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [eC, eg]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: eh })
                ]
            });
        },
        { object: w.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.GUILD_CHANNEL_USER_MENU]
);
