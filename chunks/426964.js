var r = n(735250),
    i = n(470079),
    a = n(704215),
    s = n(481060),
    o = n(442837),
    l = n(100527),
    u = n(231467),
    c = n(605236),
    d = n(749681),
    _ = n(216742),
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
    D = n(308083),
    y = n(981631),
    b = n(49898),
    M = n(128449),
    P = n(689938),
    U = n(469761);
function w(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t;
    let { clan: n, isLoading: x, onClose: G, profileViewedAnalytics: k } = e,
        B = null == n ? void 0 : n.identityGuildId,
        F = (0, N.Cc)(null != B ? B : null),
        V = null == n ? void 0 : n.tag,
        H = (0, C.Z)('clan_guild_profile'),
        { enabled: Z } = (0, _.I7)(),
        Y = (0, v.Z)('base_clan_tag_chiplet'),
        j = (0, o.e7)([I.default], () => I.default.getId()),
        W = (0, o.e7)([m.ZP], () => (null != B ? m.ZP.getMember(B, j) : null), [B, j]),
        K = (0, o.e7)([f.Z], () => {
            var e;
            return (null == F ? void 0 : F.id) != null && (null === (e = f.Z.getRequest(F.id)) || void 0 === e ? void 0 : e.applicationStatus) === E.wB.SUBMITTED;
        }),
        z = null != F && F.memberCount >= D.Du,
        q = (0, c.wE)(a.z.CLAN_TAG_WAITLIST),
        Q = (0, o.e7)([T.default], () => T.default.getUser(j), [j]),
        X = (null == W ? void 0 : W.joinedAt) != null,
        $ = (0, O.Z4)(B, null == Q ? void 0 : Q.clan),
        J = null != (0, h.Z)(B),
        ee = (0, A.iN)('ClanGuildProfile');
    i.useEffect(() => {
        null != B &&
            (0, g.u0)({
                guildId: B,
                hasJoinRequest: J,
                ...k,
                location: l.Z.CLAN_GUILD_PROFILE
            });
    }, [B, J, k]);
    let et = i.useCallback(() => {
            (0, s.closeAllModals)(),
                (0, g.hM)(B, g.UE.DISCOVERY),
                (0, d.transitionToGlobalDiscovery)({
                    tab: b.F$.SERVERS,
                    selectedServersTab: M.vf.GUILDS
                });
        }, [B]),
        en = i.useCallback(() => {
            if (!q)
                (0, g.pl)({
                    originGuildId: null == k ? void 0 : k.guildId,
                    tagGuildId: B,
                    messageId: null == k ? void 0 : k.messageId,
                    tagUserId: null == k ? void 0 : k.tagUserId,
                    location: l.Z.CLAN_GUILD_PROFILE
                }),
                    (0, s.showToast)((0, s.createToast)(P.Z.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, s.ToastType.SUCCESS));
        }, [B, q, k]),
        er = i.useCallback(
            (e) => {
                if (null != B) e.stopPropagation(), e.preventDefault(), null == G || G(), (0, g.hM)(B, g.UE.TAG_ADOPTION), (0, R.SJ)(B);
            },
            [B, G]
        ),
        ei = i.useCallback(
            (e) => {
                if (null == F || null == B) return;
                if ((e.stopPropagation(), e.preventDefault(), null == G || G(), !J))
                    (0, g.hM)(B, g.UE.APPLY_FLOW),
                        (0, R.qF)(B, F, {
                            source: null == k ? void 0 : k.source,
                            messageId: null == k ? void 0 : k.messageId,
                            tagUserId: null == k ? void 0 : k.tagUserId,
                            location: l.Z.CLAN_GUILD_PROFILE
                        });
            },
            [F, B, J, G, k]
        ),
        ea = i.useCallback(() => {
            open(S.Z.getArticleURL(y.BhN.CLANS_FAQ));
        }, []),
        es = i.useCallback(() => {
            if (null != B) (0, g.hM)(B, g.UE.APPLICATION), (0, p.uL)(y.Z5c.GUILD_MEMBER_VERIFICATION(B));
        }, [B]),
        eo = i.useCallback(() => {
            if (null != B) (0, g.hM)(B, g.UE.GUILD), (0, p.XU)(B);
        }, [B]),
        el = i.useMemo(() => {
            var e, t;
            return {
                color: s.Button.Colors.BRAND,
                size: s.Button.Sizes.SMALL,
                fullWidth: !0,
                className: U.button,
                themeColor: null !== (t = null == F ? void 0 : null === (e = F.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == F ? void 0 : null === (t = F.branding) || void 0 === t ? void 0 : t.primaryColor]),
        eu = i.useMemo(() => {
            var e;
            switch (!0) {
                case !Y:
                    return null;
                case !X && !H && !q:
                    return (0, r.jsx)(s.Button, {
                        onClick: en,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: P.Z.Messages.CLAN_USER_WAITLIST_CTA
                    });
                case !X && !H && q:
                    return (0, r.jsxs)(s.Button, {
                        innerClassName: U.waitlistedButton,
                        onClick: ea,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: [
                            P.Z.Messages.CLAN_USER_WAITLISTED,
                            (0, r.jsx)(s.CircleInformationIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        ]
                    });
                case !X && J:
                    return (0, r.jsx)(L.Z, {
                        onClick: es,
                        ...el,
                        children: P.Z.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                    });
                case !X && (null == F ? void 0 : null === (e = F.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(y.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !X && ee:
                    return (0, r.jsx)(L.Z, {
                        onClick: ei,
                        ...el,
                        children: P.Z.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                    });
                case X && !$:
                    return (0, r.jsx)(L.Z, {
                        onClick: er,
                        ...el,
                        children: P.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                    });
                case X && $:
                    return (0, r.jsx)(L.Z, {
                        onClick: eo,
                        ...el,
                        children: P.Z.Messages.CLAN_USER_GO_TO_CLAN_CTA
                    });
                default:
                    return null;
            }
        }, [Y, X, H, q, J, null == F ? void 0 : F.discoveryProfileFeatures, ee, $, en, ea, es, el, ei, er, eo]),
        ec = i.useMemo(
            () => ({
                className: U.container,
                onClick: w
            }),
            []
        );
    if (null == V || null == F || null == B || x)
        return (0, r.jsx)('div', {
            ...ec,
            children: (0, r.jsx)(s.Spinner, {})
        });
    let ed = null != eu || (H && Z);
    return (0, r.jsxs)('div', {
        ...ec,
        children: [
            (0, r.jsx)(u.xV, {
                clan: F,
                className: U.cardContainer,
                isMember: X,
                hasPendingJoinRequest: K,
                atMaxMemberCapacity: z
            }),
            ed &&
                (0, r.jsxs)('div', {
                    className: U.buttonGroupContainer,
                    children: [
                        null != eu && eu,
                        H &&
                            Z &&
                            (0, r.jsx)(s.Button, {
                                onClick: et,
                                color: s.Button.Colors.TRANSPARENT,
                                size: s.Button.Sizes.SMALL,
                                fullWidth: !0,
                                children: P.Z.Messages.RAPIDASH_MORE_GUILDS_CTA
                            })
                    ]
                })
        ]
    });
});
