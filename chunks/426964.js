var r = n(735250),
    i = n(470079),
    a = n(704215),
    s = n(481060),
    o = n(442837),
    l = n(100527),
    u = n(231467),
    c = n(605236),
    d = n(216742),
    _ = n(859921),
    E = n(246364),
    f = n(937111),
    h = n(741606),
    p = n(703656),
    I = n(314897),
    m = n(271383),
    T = n(594174),
    S = n(63063),
    g = n(970606),
    A = n(963202),
    N = n(645896),
    R = n(905362),
    O = n(353093),
    v = n(954138),
    C = n(169559),
    L = n(284019),
    y = n(308083),
    D = n(981631),
    b = n(128449),
    M = n(689938),
    P = n(469761);
function U(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t;
    let { clan: n, isLoading: w, onClose: x, profileViewedAnalytics: G } = e,
        k = null == n ? void 0 : n.identityGuildId,
        B = (0, N.Cc)(null != k ? k : null),
        F = null == n ? void 0 : n.tag,
        V = (0, C.Z)('clan_guild_profile'),
        { enabled: H } = (0, d.I7)(),
        Z = (0, v.Z)('base_clan_tag_chiplet'),
        Y = (0, o.e7)([I.default], () => I.default.getId()),
        j = (0, o.e7)([m.ZP], () => (null != k ? m.ZP.getMember(k, Y) : null), [k, Y]),
        W = (0, o.e7)([f.Z], () => {
            var e;
            return (null == B ? void 0 : B.id) != null && (null === (e = f.Z.getRequest(B.id)) || void 0 === e ? void 0 : e.applicationStatus) === E.wB.SUBMITTED;
        }),
        K = null != B && B.memberCount >= y.Du,
        z = (0, c.wE)(a.z.CLAN_TAG_WAITLIST),
        q = (0, o.e7)([T.default], () => T.default.getUser(Y), [Y]),
        Q = (null == j ? void 0 : j.joinedAt) != null,
        X = (0, O.Z4)(k, null == q ? void 0 : q.clan),
        $ = null != (0, h.Z)(k),
        J = (0, A.iN)('ClanGuildProfile');
    i.useEffect(() => {
        null != k &&
            (0, g.u0)({
                guildId: k,
                hasJoinRequest: $,
                ...G,
                location: l.Z.CLAN_GUILD_PROFILE
            });
    }, [k, $, G]);
    let ee = i.useCallback(() => {
            (0, g.hM)(k, g.UE.DISCOVERY), (0, p.uL)(D.Z5c.GLOBAL_DISCOVERY_SERVERS), (0, _.jY)({ selectedTab: b.vf.GUILDS });
        }, [k]),
        et = i.useCallback(() => {
            if (!z)
                (0, g.pl)({
                    originGuildId: null == G ? void 0 : G.guildId,
                    tagGuildId: k,
                    messageId: null == G ? void 0 : G.messageId,
                    tagUserId: null == G ? void 0 : G.tagUserId,
                    location: l.Z.CLAN_GUILD_PROFILE
                }),
                    (0, s.showToast)((0, s.createToast)(M.Z.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, s.ToastType.SUCCESS));
        }, [k, z, G]),
        en = i.useCallback(
            (e) => {
                if (null != k) e.stopPropagation(), e.preventDefault(), null == x || x(), (0, g.hM)(k, g.UE.TAG_ADOPTION), (0, R.SJ)(k);
            },
            [k, x]
        ),
        er = i.useCallback(
            (e) => {
                if (null == B || null == k) return;
                if ((e.stopPropagation(), e.preventDefault(), null == x || x(), !$))
                    (0, g.hM)(k, g.UE.APPLY_FLOW),
                        (0, R.qF)(k, B, {
                            source: null == G ? void 0 : G.source,
                            messageId: null == G ? void 0 : G.messageId,
                            tagUserId: null == G ? void 0 : G.tagUserId,
                            location: l.Z.CLAN_GUILD_PROFILE
                        });
            },
            [B, k, $, x, G]
        ),
        ei = i.useCallback(() => {
            open(S.Z.getArticleURL(D.BhN.CLANS_FAQ));
        }, []),
        ea = i.useCallback(() => {
            if (null != k) (0, g.hM)(k, g.UE.APPLICATION), (0, p.uL)(D.Z5c.GUILD_MEMBER_VERIFICATION(k));
        }, [k]),
        es = i.useCallback(() => {
            if (null != k) (0, g.hM)(k, g.UE.GUILD), (0, p.XU)(k);
        }, [k]),
        eo = i.useMemo(() => {
            var e, t;
            return {
                color: s.Button.Colors.BRAND,
                size: s.Button.Sizes.SMALL,
                fullWidth: !0,
                className: P.button,
                themeColor: null !== (t = null == B ? void 0 : null === (e = B.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == B ? void 0 : null === (t = B.branding) || void 0 === t ? void 0 : t.primaryColor]),
        el = i.useMemo(() => {
            var e;
            switch (!0) {
                case !Z:
                    return null;
                case !Q && !V && !z:
                    return (0, r.jsx)(s.Button, {
                        onClick: et,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: M.Z.Messages.CLAN_USER_WAITLIST_CTA
                    });
                case !Q && !V && z:
                    return (0, r.jsxs)(s.Button, {
                        innerClassName: P.waitlistedButton,
                        onClick: ei,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: [
                            M.Z.Messages.CLAN_USER_WAITLISTED,
                            (0, r.jsx)(s.CircleInformationIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        ]
                    });
                case !Q && $:
                    return (0, r.jsx)(L.Z, {
                        onClick: ea,
                        ...eo,
                        children: M.Z.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                    });
                case !Q && (null == B ? void 0 : null === (e = B.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(D.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !Q && J:
                    return (0, r.jsx)(L.Z, {
                        onClick: er,
                        ...eo,
                        children: M.Z.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                    });
                case Q && !X:
                    return (0, r.jsx)(L.Z, {
                        onClick: en,
                        ...eo,
                        children: M.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                    });
                case Q && X:
                    return (0, r.jsx)(L.Z, {
                        onClick: es,
                        ...eo,
                        children: M.Z.Messages.CLAN_USER_GO_TO_CLAN_CTA
                    });
                default:
                    return null;
            }
        }, [Z, Q, V, z, $, null == B ? void 0 : B.discoveryProfileFeatures, J, X, et, ei, ea, eo, er, en, es]),
        eu = i.useMemo(
            () => ({
                className: P.container,
                onClick: U
            }),
            []
        );
    if (null == F || null == B || null == k || w)
        return (0, r.jsx)('div', {
            ...eu,
            children: (0, r.jsx)(s.Spinner, {})
        });
    let ec = null != el || (V && H);
    return (0, r.jsxs)('div', {
        ...eu,
        children: [
            (0, r.jsx)(u.xV, {
                clan: B,
                className: P.cardContainer,
                isMember: Q,
                hasPendingJoinRequest: W,
                atMaxMemberCapacity: K
            }),
            ec &&
                (0, r.jsxs)('div', {
                    className: P.buttonGroupContainer,
                    children: [
                        null != el && el,
                        V &&
                            H &&
                            (0, r.jsx)(s.Button, {
                                onClick: ee,
                                color: s.Button.Colors.TRANSPARENT,
                                size: s.Button.Sizes.SMALL,
                                fullWidth: !0,
                                children: M.Z.Messages.RAPIDASH_MORE_GUILDS_CTA
                            })
                    ]
                })
        ]
    });
});
