t.r(n);
var l = t(735250),
    u = t(470079),
    a = t(442837),
    r = t(481060),
    i = t(239091),
    o = t(883385),
    c = t(108843),
    s = t(2052),
    d = t(100527),
    _ = t(906732),
    E = t(299206),
    M = t(976192),
    f = t(910693),
    Z = t(271383),
    A = t(979651),
    T = t(933409),
    I = t(389052),
    N = t(88966),
    C = t(712301),
    O = t(567711),
    g = t(358386),
    L = t(725119),
    U = t(931617),
    p = t(981631),
    S = t(689938);
n.default = (0, c.Z)(
    (0, o.Z)(
        function (e) {
            var n;
            let { user: t, guildId: o, channelId: c, context: p, onSelect: D, moderationAlertId: h, analyticsLocation: b, analyticsLocations: v, onCloseContextMenu: x, showTransferOwnershipItem: P } = e,
                { analyticsLocations: j } = (0, _.ZP)(d.Z.CONTEXT_MENU),
                R = (0, s.O)(),
                m = null !== (n = null == v ? void 0 : v[0]) && void 0 !== n ? n : j[0],
                G = (0, f.sE)(o, {
                    location: m,
                    targetUserId: t.id
                }),
                y = (0, a.e7)(
                    [A.Z],
                    () => {
                        var e;
                        return null !== (e = A.Z.getUserVoiceChannelId(o, t.id)) && void 0 !== e ? e : void 0;
                    },
                    [o, t.id]
                ),
                k = u.useCallback(() => {
                    G(f.jQ.COPY_ID);
                }, [G]),
                B = (0, a.e7)([Z.ZP], () => Z.ZP.isMember(o, t.id), [o, t.id]),
                H = (0, L.Z)({
                    userId: t.id,
                    guildId: o,
                    sourceAnalyticsLocations: v
                }),
                w = (0, N.Z)(t.id, p),
                F = (0, M.Z)({
                    guildId: o,
                    userId: t.id,
                    analyticsLocation: null != b ? b : R.location,
                    analyticsLocations: [m],
                    context: p
                }),
                Y = (0, I.Z)({
                    user: t,
                    location: m
                }),
                q = (0, T.Z)(t, o, null != c ? c : y, m),
                K = (0, O.Z)(c, h),
                W = (0, g.Z)(t, o),
                z = (0, U.Z)(t.id, o, !1, m),
                V = (0, E.Z)({
                    id: t.id,
                    label: S.Z.Messages.COPY_ID_USER,
                    onSuccess: k
                }),
                X = (0, C.Z)(t, o),
                Q = !!(null == t ? void 0 : t.isNonUserBot());
            return (0, l.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: () => {
                    (0, i.Zy)(), null == x || x();
                },
                'aria-label': S.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: D,
                children: [
                    !Q &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(r.MenuGroup, {
                                    children: [H, w]
                                }),
                                (0, l.jsxs)(r.MenuGroup, {
                                    children: [F, Y]
                                }),
                                B &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(r.MenuGroup, { children: q }),
                                            (0, l.jsxs)(r.MenuGroup, {
                                                children: [z, X]
                                            })
                                        ]
                                    }),
                                null != h ? K : null,
                                P && null != W ? (0, l.jsx)(r.MenuGroup, { children: W }) : null
                            ]
                        }),
                    (0, l.jsx)(r.MenuGroup, { children: V })
                ]
            });
        },
        { object: p.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GUILD_MODERATION_USER_MENU]
);
