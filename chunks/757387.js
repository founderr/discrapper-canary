n.r(t);
var r = n(735250);
n(470079);
var i = n(442837),
    o = n(481060),
    a = n(239091),
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
    p = n(976192),
    A = n(819403),
    N = n(286694),
    S = n(592125),
    h = n(777658),
    O = n(858488),
    g = n(185457),
    y = n(933409),
    Z = n(570870),
    M = n(389052),
    m = n(24311),
    R = n(332576),
    G = n(710631),
    b = n(297047),
    C = n(88966),
    v = n(712301),
    D = n(991307),
    U = n(725119),
    L = n(931617),
    w = n(700994),
    P = n(332031),
    x = n(981631),
    H = n(689938);
t.default = (0, u.Z)(
    (0, l.Z)(
        function (e) {
            let { user: t, guildId: n, channel: l, showMediaItems: u = !1, showChatItems: c = !0, showChannelCallItems: B = !1, showModalItems: k = !0, showStageChannelItems: F = !1, context: V, onSelect: j, onHeightUpdate: W, viewingChannelId: K } = e,
                z = {
                    page: x.ZY5.GUILD_CHANNEL,
                    section: x.jXE.CHAT_USERNAME,
                    object: x.qAy.CONTEXT_MENU_ITEM
                },
                Y = (0, U.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: l.id
                }),
                q = (0, b.Z)(t, n, V),
                X = (0, C.Z)(t.id, V),
                Q = (0, P.Z)(t.id),
                $ = (0, m.Z)({
                    user: t,
                    context: V
                }),
                J = (0, g.Z)({
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
                ei = (0, p.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: z,
                    context: V
                }),
                eo = (0, G.Z)({
                    user: t,
                    guildId: n
                }),
                ea = (0, d.Z)(null, t),
                el = (0, h.Z)(t),
                eu = (0, M.Z)({ user: t }),
                es = (0, y.Z)(t, n, l.id),
                ed = (0, L.Z)(t.id, n),
                ec = (0, v.Z)(t, n),
                eE = (0, f.Z)({
                    id: t.id,
                    label: H.Z.Messages.COPY_ID_USER
                }),
                eI = (0, R.Z)(t.id, l.id),
                e_ = (0, I.Z)(t.id),
                eT = (0, E.Z)(l.id),
                ef = (0, A.Z)(t),
                ep = (0, N.Z)(t, n, l.id),
                eA = (0, i.e7)([S.Z], () => (null != K ? S.Z.getChannel(K) : null)),
                eN = (0, Z.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: null != eA ? eA : l,
                    guildId: n,
                    onHeightUpdate: W,
                    context: V
                }),
                eS = (0, _.Z)(t.id),
                eh = t.isNonUserBot();
            return (0, r.jsxs)(o.Menu, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': H.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: j,
                children: [
                    !eh &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(o.MenuGroup, {
                                    children: [ef, F && ep]
                                }),
                                (0, r.jsxs)(o.MenuGroup, {
                                    children: [k && Y, c && q, X, $, k && J, k && ee, Q]
                                }),
                                u && (0, r.jsx)(o.MenuGroup, { children: et }),
                                (0, r.jsx)(o.MenuGroup, { children: k && ea }),
                                (0, r.jsxs)(o.MenuGroup, {
                                    children: [u && en, u && er, u && eI, k && ei, eN, k && eo, el, k && eu, B && eS]
                                }),
                                (0, r.jsx)(o.MenuGroup, { children: es }),
                                (0, r.jsxs)(o.MenuGroup, {
                                    children: [ed, ec]
                                }),
                                B &&
                                    (0, r.jsxs)(o.MenuGroup, {
                                        children: [eT, e_]
                                    })
                            ]
                        }),
                    (0, r.jsx)(o.MenuGroup, { children: eE })
                ]
            });
        },
        { object: x.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
