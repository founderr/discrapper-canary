t.r(e);
var r = t(200651),
    a = t(192379),
    u = t(442837),
    i = t(481060),
    l = t(239091),
    o = t(883385),
    c = t(108843),
    d = t(2052),
    s = t(100527),
    _ = t(906732),
    E = t(299206),
    M = t(976192),
    f = t(910693),
    A = t(271383),
    I = t(979651),
    O = t(933409),
    N = t(389052),
    T = t(88966),
    L = t(712301),
    U = t(567711),
    C = t(358386),
    S = t(725119),
    g = t(931617),
    D = t(981631),
    p = t(689938);
e.default = (0, c.Z)(
    (0, o.Z)(
        function (n) {
            var e;
            let { user: t, guildId: o, channelId: c, context: D, onSelect: y, moderationAlertId: R, analyticsLocation: m, analyticsLocations: Z, onCloseContextMenu: b, showTransferOwnershipItem: x } = n,
                { analyticsLocations: j } = (0, _.ZP)(s.Z.CONTEXT_MENU),
                v = (0, d.O)(),
                h = null !== (e = null == Z ? void 0 : Z[0]) && void 0 !== e ? e : j[0],
                G = (0, f.sE)(o, {
                    location: h,
                    targetUserId: t.id
                }),
                P = (0, u.e7)(
                    [I.Z],
                    () => {
                        var n;
                        return null !== (n = I.Z.getUserVoiceChannelId(o, t.id)) && void 0 !== n ? n : void 0;
                    },
                    [o, t.id]
                ),
                w = a.useCallback(() => {
                    G(f.jQ.COPY_ID);
                }, [G]),
                k = (0, u.e7)([A.ZP], () => A.ZP.isMember(o, t.id), [o, t.id]),
                F = (0, S.Z)({
                    userId: t.id,
                    guildId: o,
                    sourceAnalyticsLocations: Z
                }),
                Y = (0, T.Z)(t.id, D),
                B = (0, M.Z)({
                    guildId: o,
                    userId: t.id,
                    analyticsLocation: null != m ? m : v.location,
                    analyticsLocations: [h],
                    context: D
                }),
                K = (0, N.Z)({
                    user: t,
                    location: h
                }),
                H = (0, O.Z)(t, o, null != c ? c : P, h),
                V = (0, U.Z)(c, R),
                W = (0, C.Z)(t, o),
                q = (0, g.Z)(t.id, o, !1, h),
                z = (0, E.Z)({
                    id: t.id,
                    label: p.Z.Messages.COPY_ID_USER,
                    onSuccess: w
                }),
                X = (0, L.Z)(t, o),
                Q = !!(null == t ? void 0 : t.isNonUserBot());
            return (0, r.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: () => {
                    (0, l.Zy)(), null == b || b();
                },
                'aria-label': p.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: y,
                children: [
                    !Q &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(i.MenuGroup, {
                                    children: [F, Y]
                                }),
                                (0, r.jsxs)(i.MenuGroup, {
                                    children: [B, K]
                                }),
                                k &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(i.MenuGroup, { children: H }),
                                            (0, r.jsxs)(i.MenuGroup, {
                                                children: [q, X]
                                            })
                                        ]
                                    }),
                                null != R ? V : null,
                                x && null != W ? (0, r.jsx)(i.MenuGroup, { children: W }) : null
                            ]
                        }),
                    (0, r.jsx)(i.MenuGroup, { children: z })
                ]
            });
        },
        { object: D.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GUILD_MODERATION_USER_MENU]
);
