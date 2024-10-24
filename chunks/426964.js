n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(442837),
    o = n(100527),
    l = n(231467),
    u = n(749681),
    c = n(216742),
    d = n(246364),
    _ = n(937111),
    E = n(741606),
    f = n(703656),
    h = n(698305),
    p = n(314897),
    I = n(271383),
    m = n(594174),
    T = n(51144),
    S = n(970606),
    g = n(963202),
    A = n(645896),
    N = n(905362),
    R = n(353093),
    O = n(574410),
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
    var t, n;
    let { clan: x, isLoading: G, onClose: k, profileViewedAnalytics: B, userId: F } = e,
        V = null == x ? void 0 : x.identityGuildId,
        H = (0, A.Cc)(null != V ? V : null),
        Z = null == x ? void 0 : x.tag,
        Y = (0, C.Z)('clan_guild_profile'),
        { enabled: j } = (0, c.I7)(),
        { enabled: W } = O.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [K, z] = i.useState(!1),
        [q, Q] = i.useState(''),
        X = (0, s.e7)([m.default], () => m.default.getUser(F)),
        $ = (0, v.Z)('base_clan_tag_chiplet'),
        J = (0, s.e7)([p.default], () => p.default.getId()),
        ee = (0, s.e7)([I.ZP], () => (null != V ? I.ZP.getMember(V, J) : null), [V, J]),
        et = (0, s.e7)([_.Z], () => {
            var e;
            return (null == H ? void 0 : H.id) != null && (null === (e = _.Z.getRequest(H.id)) || void 0 === e ? void 0 : e.applicationStatus) === d.wB.SUBMITTED;
        }),
        en = null != H && H.memberCount >= D.Du,
        er = (0, s.e7)([m.default], () => m.default.getUser(J), [J]),
        ei = (null == ee ? void 0 : ee.joinedAt) != null,
        ea = (0, R.Z4)(V, null == er ? void 0 : er.clan),
        es = null != (0, E.Z)(V),
        eo = (0, g.iN)('ClanGuildProfile');
    i.useEffect(() => {
        null != V &&
            (0, S.u0)({
                guildId: V,
                hasJoinRequest: es,
                ...B,
                location: o.Z.CLAN_GUILD_PROFILE
            });
    }, [V, es, B]);
    let el = i.useCallback(() => {
            (0, a.closeAllModals)(),
                (0, S.hM)(V, S.UE.DISCOVERY),
                (0, u.transitionToGlobalDiscovery)({
                    tab: b.F$.SERVERS,
                    selectedServersTab: M.vf.GUILDS,
                    entrypoint: M.Qq.PROFILE
                });
        }, [V]),
        eu = i.useCallback(() => {
            (0, S.hM)(V, S.UE.ASK_TO_JOIN), z(!K);
        }, [V, K]),
        ec = i.useCallback(async () => {
            if (null != X)
                try {
                    await (0, h.Z)({
                        userId: X.id,
                        content: q,
                        openChannel: !0,
                        location: 'guildProfilePopout'
                    });
                } catch (e) {}
        }, [X, q]),
        ed = i.useCallback(
            (e) => {
                if (null != V) e.stopPropagation(), e.preventDefault(), null == k || k(), (0, S.hM)(V, S.UE.TAG_ADOPTION), (0, N.SJ)(V);
            },
            [V, k]
        ),
        e_ = i.useCallback(
            (e) => {
                if (null == H || null == V) return;
                if ((e.stopPropagation(), e.preventDefault(), null == k || k(), !es))
                    (0, S.hM)(V, S.UE.APPLY_FLOW),
                        (0, N.qF)(V, H, {
                            source: null == B ? void 0 : B.source,
                            messageId: null == B ? void 0 : B.messageId,
                            tagUserId: null == B ? void 0 : B.tagUserId,
                            location: o.Z.CLAN_GUILD_PROFILE
                        });
            },
            [H, V, es, k, B]
        ),
        eE = i.useCallback(() => {
            if (null != V) (0, S.hM)(V, S.UE.APPLICATION), (0, f.uL)(y.Z5c.GUILD_MEMBER_VERIFICATION(V));
        }, [V]),
        ef = i.useCallback(() => {
            if (null != V) (0, S.hM)(V, S.UE.GUILD), (0, f.XU)(V);
        }, [V]),
        eh = i.useMemo(() => {
            var e, t;
            return {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                className: U.button,
                themeColor: null !== (t = null == H ? void 0 : null === (e = H.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == H ? void 0 : null === (t = H.branding) || void 0 === t ? void 0 : t.primaryColor]),
        ep = i.useMemo(() => {
            var e;
            switch (!0) {
                case !$:
                    return null;
                case !ei && es:
                    return (0, r.jsx)(L.Z, {
                        onClick: eE,
                        ...eh,
                        children: P.Z.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
                    });
                case !ei && (null == H ? void 0 : null === (e = H.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(y.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !ei && eo:
                    return (0, r.jsx)(L.Z, {
                        onClick: e_,
                        ...eh,
                        children: P.Z.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
                    });
                case ei && !ea:
                    return (0, r.jsx)(L.Z, {
                        onClick: ed,
                        ...eh,
                        children: P.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
                    });
                case ei && ea:
                    return (0, r.jsx)(L.Z, {
                        onClick: ef,
                        ...eh,
                        children: P.Z.Messages.CLAN_USER_GO_TO_CLAN_CTA
                    });
                default:
                    return null;
            }
        }, [$, ei, es, null == H ? void 0 : H.discoveryProfileFeatures, eo, ea, eE, eh, e_, ed, ef]),
        eI = i.useMemo(
            () => ({
                className: U.container,
                onClick: w
            }),
            []
        );
    if (null == Z || null == H || null == V || G)
        return (0, r.jsx)('div', {
            ...eI,
            children: (0, r.jsx)(a.Spinner, {})
        });
    let em = !ei && !Y && null != X && !es && W && !K,
        eT = null != ep || (Y && j) || em,
        eS = null !== (n = T.ZP.getName(X)) && void 0 !== n ? n : '';
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                ...eI,
                children: [
                    (0, r.jsx)(l.xV, {
                        clan: H,
                        className: U.cardContainer,
                        isMember: ei,
                        hasPendingJoinRequest: et,
                        atMaxMemberCapacity: en
                    }),
                    eT &&
                        (0, r.jsxs)('div', {
                            className: U.buttonGroupContainer,
                            children: [
                                null != ep && ep,
                                Y &&
                                    j &&
                                    (0, r.jsx)(a.Button, {
                                        onClick: el,
                                        color: a.Button.Colors.TRANSPARENT,
                                        size: a.Button.Sizes.SMALL,
                                        fullWidth: !0,
                                        children: P.Z.Messages.RAPIDASH_MORE_GUILDS_CTA
                                    }),
                                em &&
                                    (0, r.jsx)(L.Z, {
                                        onClick: eu,
                                        ...eh,
                                        children: P.Z.Messages.RAPIDASH_ASK_TO_JOIN_CTA
                                    })
                            ]
                        })
                ]
            }),
            K &&
                (0, r.jsxs)(a.Dialog, {
                    className: U.askToJoinInputWrapper,
                    children: [
                        (0, r.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: P.Z.Messages.RAPIDASH_ASK_TO_JOIN_LABEL.format({ username: eS })
                        }),
                        (0, r.jsxs)('div', {
                            className: U.inputRow,
                            children: [
                                (0, r.jsx)(a.TextInput, {
                                    inputClassName: U.input,
                                    value: q,
                                    onChange: Q,
                                    placeholder: P.Z.Messages.DM_TEXTAREA_PLACEHOLDER.format({ channel: eS })
                                }),
                                (0, r.jsx)(a.Button, {
                                    className: U.sendButton,
                                    color: a.Button.Colors.BRAND,
                                    onClick: ec,
                                    children: P.Z.Messages.SEND
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
