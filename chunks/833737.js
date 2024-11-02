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
    T = e(88966),
    L = e(712301),
    g = e(567711),
    p = e(358386),
    S = e(725119),
    U = e(931617),
    y = e(981631),
    C = e(388032);
t.default = (0, c.Z)(
    (0, o.Z)(
        function (n) {
            var t;
            let { user: e, guildId: o, channelId: c, context: y, onSelect: m, moderationAlertId: D, analyticsLocation: R, analyticsLocations: x, onCloseContextMenu: b, showTransferOwnershipItem: j } = n,
                { analyticsLocations: v } = (0, _.ZP)(s.Z.CONTEXT_MENU),
                Z = (0, d.O)(),
                h = null !== (t = null == x ? void 0 : x[0]) && void 0 !== t ? t : v[0],
                P = (0, M.sE)(o, {
                    location: h,
                    targetUserId: e.id
                }),
                G = (0, u.e7)(
                    [I.Z],
                    () => {
                        var n;
                        return null !== (n = I.Z.getUserVoiceChannelId(o, e.id)) && void 0 !== n ? n : void 0;
                    },
                    [o, e.id]
                ),
                w = i.useCallback(() => {
                    P(M.jQ.COPY_ID);
                }, [P]),
                k = (0, u.e7)([A.ZP], () => A.ZP.isMember(o, e.id), [o, e.id]),
                Y = (0, S.Z)({
                    userId: e.id,
                    guildId: o,
                    sourceAnalyticsLocations: x
                }),
                F = (0, T.Z)(e.id, y),
                K = (0, f.Z)({
                    guildId: o,
                    userId: e.id,
                    analyticsLocation: null != R ? R : Z.location,
                    analyticsLocations: [h],
                    context: y
                }),
                B = (0, N.Z)({
                    user: e,
                    location: h
                }),
                W = (0, O.Z)(e, o, null != c ? c : G, h),
                q = (0, g.Z)(c, D),
                V = (0, p.Z)(e, o),
                H = (0, U.Z)(e.id, o, !1, h),
                X = (0, E.Z)({
                    id: e.id,
                    label: C.intl.string(C.t['/AXYnJ']),
                    onSuccess: w
                }),
                z = (0, L.Z)(e, o),
                Q = !!(null == e ? void 0 : e.isNonUserBot());
            return (0, r.jsxs)(a.Menu, {
                navId: 'user-context',
                onClose: () => {
                    (0, l.Zy)(), null == b || b();
                },
                'aria-label': C.intl.string(C.t.liqwPD),
                onSelect: m,
                children: [
                    !Q &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(a.MenuGroup, {
                                    children: [Y, F]
                                }),
                                (0, r.jsxs)(a.MenuGroup, {
                                    children: [K, B]
                                }),
                                k &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(a.MenuGroup, { children: W }),
                                            (0, r.jsxs)(a.MenuGroup, {
                                                children: [H, z]
                                            })
                                        ]
                                    }),
                                null != D ? q : null,
                                j && null != V ? (0, r.jsx)(a.MenuGroup, { children: V }) : null
                            ]
                        }),
                    (0, r.jsx)(a.MenuGroup, { children: X })
                ]
            });
        },
        { object: y.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GUILD_MODERATION_USER_MENU]
);
