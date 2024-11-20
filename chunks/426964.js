n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(442837),
    o = n(100527),
    l = n(216742),
    u = n(246364),
    c = n(937111),
    d = n(741606),
    f = n(703656),
    _ = n(698305),
    p = n(314897),
    h = n(271383),
    m = n(594174),
    g = n(51144),
    E = n(970606),
    v = n(963202),
    I = n(645896),
    b = n(905362),
    T = n(353093),
    S = n(574410),
    y = n(900681),
    A = n(284019),
    N = n(308083),
    C = n(981631),
    R = n(388032),
    O = n(469761);
function D(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t, n;
    let { clan: L, isLoading: x, onClose: w, profileViewedAnalytics: M, userId: P } = e,
        k = null == L ? void 0 : L.identityGuildId,
        U = (0, I.Cc)(null != k ? k : null),
        B = null == L ? void 0 : L.tag,
        G = (0, v.i)('clan_guild_profile'),
        { enabled: Z } = (0, l.I)(),
        { enabled: F } = S.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [V, j] = i.useState(!1),
        [H, Y] = i.useState(''),
        W = (0, s.e7)([m.default], () => m.default.getUser(P)),
        K = (0, s.e7)([p.default], () => p.default.getId()),
        z = (0, s.e7)([h.ZP], () => (null != k ? h.ZP.getMember(k, K) : null), [k, K]),
        q = (0, s.e7)([c.Z], () => {
            var e;
            return (null == U ? void 0 : U.id) != null && (null === (e = c.Z.getRequest(U.id)) || void 0 === e ? void 0 : e.applicationStatus) === u.wB.SUBMITTED;
        }),
        Q = null != U && U.memberCount >= N.Du,
        X = (0, s.e7)([m.default], () => m.default.getUser(K), [K]),
        J = (null == z ? void 0 : z.joinedAt) != null,
        $ = (0, T.Z4)(k, null == X ? void 0 : X.clan),
        ee = null != (0, d.Z)(k),
        et = (0, v.i)('ClanGuildProfile');
    i.useEffect(() => {
        null != k &&
            (0, E.u0)({
                guildId: k,
                hasJoinRequest: ee,
                ...M,
                location: o.Z.CLAN_GUILD_PROFILE
            });
    }, [k, ee, M]);
    let en = i.useCallback(() => {
            (0, E.hM)(k, E.UE.ASK_TO_JOIN), j(!V);
        }, [k, V]),
        er = i.useCallback(async () => {
            if (null != W)
                try {
                    await (0, _.Z)({
                        userId: W.id,
                        content: H,
                        openChannel: !0,
                        location: 'guildProfilePopout'
                    });
                } catch (e) {}
        }, [W, H]),
        ei = i.useCallback(
            (e) => {
                if (null != k) e.stopPropagation(), e.preventDefault(), null == w || w(), (0, E.hM)(k, E.UE.TAG_ADOPTION), (0, b.SJ)(k);
            },
            [k, w]
        ),
        ea = i.useCallback(
            (e) => {
                if (null == U || null == k) return;
                if ((e.stopPropagation(), e.preventDefault(), null == w || w(), !ee))
                    (0, E.hM)(k, E.UE.APPLY_FLOW),
                        (0, b.qF)(k, U, {
                            source: null == M ? void 0 : M.source,
                            messageId: null == M ? void 0 : M.messageId,
                            tagUserId: null == M ? void 0 : M.tagUserId,
                            location: o.Z.CLAN_GUILD_PROFILE
                        });
            },
            [U, k, ee, w, M]
        ),
        es = i.useCallback(() => {
            if (null != k) (0, E.hM)(k, E.UE.APPLICATION), (0, f.uL)(C.Z5c.GUILD_MEMBER_VERIFICATION(k));
        }, [k]),
        eo = i.useCallback(() => {
            if (null != k) (0, E.hM)(k, E.UE.GUILD), (0, f.XU)(k);
        }, [k]),
        el = i.useMemo(() => {
            var e, t;
            return {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                className: O.button,
                themeColor: null !== (t = null == U ? void 0 : null === (e = U.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == U ? void 0 : null === (t = U.branding) || void 0 === t ? void 0 : t.primaryColor]),
        eu = i.useMemo(() => {
            var e;
            switch (!0) {
                case !J && ee:
                    return (0, r.jsx)(A.Z, {
                        onClick: es,
                        ...el,
                        children: R.intl.string(R.t.dXvKgY)
                    });
                case !J && (null == U ? void 0 : null === (e = U.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(C.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !J && et:
                    return (0, r.jsx)(A.Z, {
                        onClick: ea,
                        ...el,
                        children: R.intl.string(R.t.YfkjGh)
                    });
                case J && !$:
                    return (0, r.jsx)(A.Z, {
                        onClick: ei,
                        ...el,
                        children: R.intl.string(R.t['1keBy8'])
                    });
                case J && $:
                    return (0, r.jsx)(A.Z, {
                        onClick: eo,
                        ...el,
                        children: R.intl.string(R.t.muzrLS)
                    });
                default:
                    return null;
            }
        }, [J, ee, null == U ? void 0 : U.discoveryProfileFeatures, et, $, es, el, ea, ei, eo]),
        ec = i.useMemo(
            () => ({
                className: O.container,
                onClick: D
            }),
            []
        );
    if (null == B || null == U || null == k || x)
        return (0, r.jsx)('div', {
            ...ec,
            children: (0, r.jsx)(a.Spinner, {})
        });
    let ed = !J && !G && null != W && !ee && F && !V,
        ef = null != eu || (G && Z) || ed,
        e_ = null !== (n = g.ZP.getName(W)) && void 0 !== n ? n : '';
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                ...ec,
                children: [
                    (0, r.jsx)(y.xV, {
                        clan: U,
                        className: O.cardContainer,
                        isMember: J,
                        hasPendingJoinRequest: q,
                        atMaxMemberCapacity: Q
                    }),
                    ef &&
                        (0, r.jsxs)('div', {
                            className: O.buttonGroupContainer,
                            children: [
                                null != eu && eu,
                                ed &&
                                    (0, r.jsx)(A.Z, {
                                        onClick: en,
                                        ...el,
                                        children: R.intl.string(R.t.HzLAb2)
                                    })
                            ]
                        })
                ]
            }),
            V &&
                (0, r.jsxs)(a.Dialog, {
                    className: O.askToJoinInputWrapper,
                    children: [
                        (0, r.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: R.intl.format(R.t.k5d4Wl, { username: e_ })
                        }),
                        (0, r.jsxs)('div', {
                            className: O.inputRow,
                            children: [
                                (0, r.jsx)(a.TextInput, {
                                    inputClassName: O.input,
                                    value: H,
                                    onChange: Y,
                                    placeholder: R.intl.formatToPlainString(R.t['4c+CAw'], { channel: e_ })
                                }),
                                (0, r.jsx)(a.Button, {
                                    className: O.sendButton,
                                    color: a.Button.Colors.BRAND,
                                    onClick: er,
                                    children: R.intl.string(R.t.TXNS7e)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
