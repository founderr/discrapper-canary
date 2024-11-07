e.r(t);
var r = e(200651),
    i = e(192379),
    u = e(442837),
    a = e(481060),
    l = e(239091),
    o = e(883385),
    c = e(108843),
    d = e(2052),
    s = e(100527),
    _ = e(906732),
    E = e(299206),
    f = e(976192),
    M = e(910693),
    A = e(271383),
    I = e(979651),
    O = e(933409),
    N = e(389052),
    T = e(158508),
    L = e(88966),
    g = e(712301),
    p = e(567711),
    S = e(358386),
    U = e(37258),
    y = e(931617),
    C = e(981631),
    m = e(388032);
t.default = (0, c.Z)(
    (0, o.Z)(
        function (n) {
            var t;
            let { user: e, guildId: o, channelId: c, context: C, onSelect: D, moderationAlertId: R, analyticsLocation: x, analyticsLocations: b, onCloseContextMenu: j, showTransferOwnershipItem: Z } = n,
                { analyticsLocations: v } = (0, _.ZP)(s.Z.CONTEXT_MENU),
                h = (0, d.O)(),
                P = null !== (t = null == b ? void 0 : b[0]) && void 0 !== t ? t : v[0],
                G = (0, M.sE)(o, {
                    location: P,
                    targetUserId: e.id
                }),
                w = (0, u.e7)(
                    [I.Z],
                    () => {
                        var n;
                        return null !== (n = I.Z.getUserVoiceChannelId(o, e.id)) && void 0 !== n ? n : void 0;
                    },
                    [o, e.id]
                ),
                k = i.useCallback(() => {
                    G(M.jQ.COPY_ID);
                }, [G]),
                Y = (0, u.e7)([A.ZP], () => A.ZP.isMember(o, e.id), [o, e.id]),
                F = (0, U.Z)({
                    userId: e.id,
                    guildId: o,
                    sourceAnalyticsLocations: b
                }),
                K = (0, L.Z)(e.id, C),
                B = (0, f.Z)({
                    guildId: o,
                    userId: e.id,
                    analyticsLocation: null != x ? x : h.location,
                    analyticsLocations: [P],
                    context: C
                }),
                W = (0, N.Z)({
                    user: e,
                    location: P
                }),
                q = (0, T.Z)({
                    user: e,
                    location: P
                }),
                V = (0, O.Z)(e, o, null != c ? c : w, P),
                H = (0, p.Z)(c, R),
                X = (0, S.Z)(e, o),
                z = (0, y.Z)(e.id, o, !1, P),
                Q = (0, E.Z)({
                    id: e.id,
                    label: m.intl.string(m.t['/AXYnJ']),
                    onSuccess: k
                }),
                J = (0, g.Z)(e, o),
                $ = !!(null == e ? void 0 : e.isNonUserBot());
            return (0, r.jsxs)(a.Menu, {
                navId: 'user-context',
                onClose: () => {
                    (0, l.Zy)(), null == j || j();
                },
                'aria-label': m.intl.string(m.t.liqwPD),
                onSelect: D,
                children: [
                    !$ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(a.MenuGroup, {
                                    children: [F, K]
                                }),
                                (0, r.jsxs)(a.MenuGroup, {
                                    children: [B, q, W]
                                }),
                                Y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(a.MenuGroup, { children: V }),
                                            (0, r.jsxs)(a.MenuGroup, {
                                                children: [z, J]
                                            })
                                        ]
                                    }),
                                null != R ? H : null,
                                Z && null != X ? (0, r.jsx)(a.MenuGroup, { children: X }) : null
                            ]
                        }),
                    (0, r.jsx)(a.MenuGroup, { children: Q })
                ]
            });
        },
        { object: C.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GUILD_MODERATION_USER_MENU]
);
