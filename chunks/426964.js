var r = n(735250),
    i = n(470079),
    a = n(704215),
    o = n(481060),
    s = n(442837),
    l = n(100527),
    u = n(231467),
    c = n(605236),
    d = n(246364),
    _ = n(937111),
    E = n(741606),
    f = n(703656),
    h = n(314897),
    p = n(271383),
    m = n(594174),
    I = n(63063),
    T = n(970606),
    g = n(963202),
    S = n(645896),
    A = n(905362),
    v = n(353093),
    N = n(954138),
    O = n(169559),
    R = n(284019),
    C = n(308083),
    y = n(981631),
    L = n(689938),
    b = n(469761);
function D(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t;
    let { clan: n, isLoading: M, onClose: P, profileViewedAnalytics: U } = e,
        w = null == n ? void 0 : n.identityGuildId,
        x = (0, S.Cc)(null != w ? w : null),
        G = null == n ? void 0 : n.tag,
        k = (0, O.Z)('clan_guild_profile'),
        B = (0, N.Z)('base_clan_tag_chiplet'),
        F = (0, s.e7)([h.default], () => h.default.getId()),
        Z = (0, s.e7)([p.ZP], () => (null != w ? p.ZP.getMember(w, F) : null), [w, F]),
        V = (0, s.e7)([_.Z], () => {
            var e;
            return (null == x ? void 0 : x.id) != null && (null === (e = _.Z.getRequest(x.id)) || void 0 === e ? void 0 : e.applicationStatus) === d.wB.SUBMITTED;
        }),
        H = null != x && x.memberCount >= C.Du,
        Y = (0, c.wE)(a.z.CLAN_TAG_WAITLIST),
        j = (0, s.e7)([m.default], () => m.default.getUser(F), [F]),
        W = (null == Z ? void 0 : Z.joinedAt) != null,
        K = (0, v.Z4)(w, null == j ? void 0 : j.clan),
        z = null != (0, E.Z)(w),
        q = (0, g.iN)('ClanGuildProfile');
    i.useEffect(() => {
        null != w &&
            (0, T.u0)({
                guildId: w,
                hasJoinRequest: z,
                ...U,
                location: l.Z.CLAN_GUILD_PROFILE
            });
    }, [w, z, U]);
    let Q = i.useCallback(() => {
            if (!Y)
                (0, T.pl)({
                    originGuildId: null == U ? void 0 : U.guildId,
                    tagGuildId: w,
                    messageId: null == U ? void 0 : U.messageId,
                    tagUserId: null == U ? void 0 : U.tagUserId,
                    location: l.Z.CLAN_GUILD_PROFILE
                }),
                    (0, o.showToast)((0, o.createToast)(L.Z.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, o.ToastType.SUCCESS));
        }, [w, Y, U]),
        X = i.useCallback(
            (e) => {
                if (null != w) e.stopPropagation(), e.preventDefault(), null == P || P(), (0, A.SJ)(w);
            },
            [w, P]
        ),
        $ = i.useCallback(
            (e) => {
                if (null == x || null == w) return;
                if ((e.stopPropagation(), e.preventDefault(), null == P || P(), !z))
                    (0, A.qF)(w, x, {
                        source: null == U ? void 0 : U.source,
                        messageId: null == U ? void 0 : U.messageId,
                        tagUserId: null == U ? void 0 : U.tagUserId,
                        location: l.Z.CLAN_GUILD_PROFILE
                    });
            },
            [x, w, z, P, U]
        ),
        J = i.useCallback(() => {
            open(I.Z.getArticleURL(y.BhN.CLANS_FAQ));
        }, []),
        ee = i.useCallback(() => {
            if (null != w) (0, f.uL)(y.Z5c.GUILD_MEMBER_VERIFICATION(w));
        }, [w]),
        et = i.useCallback(() => {
            if (null != w) (0, f.XU)(w);
        }, [w]),
        en = i.useMemo(() => {
            var e, t;
            return {
                color: o.Button.Colors.BRAND,
                size: o.Button.Sizes.SMALL,
                fullWidth: !0,
                className: b.button,
                themeColor: null !== (t = null == x ? void 0 : null === (e = x.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == x ? void 0 : null === (t = x.branding) || void 0 === t ? void 0 : t.primaryColor]),
        er = i.useMemo(() => {
            var e;
            switch (!0) {
                case !B:
                    return null;
                case !W && !k && !Y:
                    return (0, r.jsx)(o.Button, {
                        onClick: Q,
                        color: o.Button.Colors.PRIMARY,
                        size: o.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: L.Z.Messages.CLAN_USER_WAITLIST_CTA
                    });
                case !W && !k && Y:
                    return (0, r.jsxs)(o.Button, {
                        innerClassName: b.waitlistedButton,
                        onClick: J,
                        color: o.Button.Colors.PRIMARY,
                        size: o.Button.Sizes.SMALL,
                        fullWidth: !0,
                        children: [
                            L.Z.Messages.CLAN_USER_WAITLISTED,
                            (0, r.jsx)(o.CircleInformationIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        ]
                    });
                case !W && z:
                    return (0, r.jsx)(R.Z, {
                        onClick: ee,
                        ...en,
                        children: L.Z.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                    });
                case !W && (null == x ? void 0 : null === (e = x.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(y.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !W && q:
                    return (0, r.jsx)(R.Z, {
                        onClick: $,
                        ...en,
                        children: L.Z.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                    });
                case W && !K:
                    return (0, r.jsx)(R.Z, {
                        onClick: X,
                        ...en,
                        children: L.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                    });
                case W && K:
                    return (0, r.jsx)(R.Z, {
                        onClick: et,
                        ...en,
                        children: L.Z.Messages.CLAN_USER_GO_TO_CLAN_CTA
                    });
                default:
                    return null;
            }
        }, [B, W, k, Y, z, null == x ? void 0 : x.discoveryProfileFeatures, q, K, Q, J, ee, en, $, X, et]),
        ei = i.useMemo(
            () => ({
                className: b.container,
                onClick: D
            }),
            []
        );
    return null == G || null == x || null == w || M
        ? (0, r.jsx)('div', {
              ...ei,
              children: (0, r.jsx)(o.Spinner, {})
          })
        : (0, r.jsxs)('div', {
              ...ei,
              children: [
                  (0, r.jsx)(u.xV, {
                      clan: x,
                      className: b.cardContainer,
                      isMember: W,
                      hasPendingJoinRequest: V,
                      atMaxMemberCapacity: H
                  }),
                  null != er &&
                      (0, r.jsx)('div', {
                          className: b.buttonContainer,
                          children: er
                      })
              ]
          });
});
