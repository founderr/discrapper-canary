n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(442837),
    o = n(100527),
    l = n(906732),
    u = n(216742),
    c = n(246364),
    d = n(937111),
    f = n(741606),
    _ = n(703656),
    p = n(698305),
    h = n(314897),
    m = n(271383),
    g = n(594174),
    E = n(51144),
    v = n(970606),
    b = n(963202),
    I = n(645896),
    T = n(905362),
    S = n(353093),
    y = n(574410),
    A = n(900681),
    N = n(284019),
    C = n(308083),
    R = n(981631),
    O = n(388032),
    D = n(469761);
function L(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t, n;
    let { clan: x, isLoading: w, onClose: M, profileViewedAnalytics: P, userId: k } = e,
        U = null == x ? void 0 : x.identityGuildId,
        B = (0, I.Cc)(null != U ? U : null),
        G = null == x ? void 0 : x.tag,
        Z = (0, b.i)('clan_guild_profile'),
        { enabled: F } = (0, u.I)(),
        { enabled: V } = y.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [j, H] = i.useState(!1),
        [Y, W] = i.useState(''),
        K = (0, s.e7)([g.default], () => g.default.getUser(k)),
        { newestAnalyticsLocation: z } = (0, l.ZP)(),
        q = i.useMemo(
            () => ({
                tagUserId: k,
                source: z,
                ...P
            }),
            [k, z, P]
        ),
        Q = (0, s.e7)([h.default], () => h.default.getId()),
        X = (0, s.e7)([m.ZP], () => (null != U ? m.ZP.getMember(U, Q) : null), [U, Q]),
        J = (0, s.e7)([d.Z], () => {
            var e;
            return (null == B ? void 0 : B.id) != null && (null === (e = d.Z.getRequest(B.id)) || void 0 === e ? void 0 : e.applicationStatus) === c.wB.SUBMITTED;
        }),
        $ = null != B && B.memberCount >= C.Du,
        ee = (0, s.e7)([g.default], () => g.default.getUser(Q), [Q]),
        et = (null == X ? void 0 : X.joinedAt) != null,
        en = (0, S.Z4)(U, null == ee ? void 0 : ee.clan),
        er = null != (0, f.Z)(U),
        ei = (0, b.i)('ClanGuildProfile');
    i.useEffect(() => {
        null != U &&
            (0, v.u0)({
                guildId: U,
                hasJoinRequest: er,
                ...q,
                location: o.Z.CLAN_GUILD_PROFILE
            });
    }, [U, er, q]);
    let ea = i.useCallback(() => {
            (0, v.hM)(U, v.UE.ASK_TO_JOIN), H(!j);
        }, [U, j]),
        es = i.useCallback(async () => {
            if (null != K)
                try {
                    await (0, p.Z)({
                        userId: K.id,
                        content: Y,
                        openChannel: !0,
                        location: 'guildProfilePopout'
                    });
                } catch (e) {}
        }, [K, Y]),
        eo = i.useCallback(
            (e) => {
                if (null != U) e.stopPropagation(), e.preventDefault(), null == M || M(), (0, v.hM)(U, v.UE.TAG_ADOPTION), (0, T.SJ)(U);
            },
            [U, M]
        ),
        el = i.useCallback(
            (e) => {
                if (null == B || null == U) return;
                if ((e.stopPropagation(), e.preventDefault(), null == M || M(), !er))
                    (0, v.hM)(U, v.UE.APPLY_FLOW),
                        (0, T.qF)(U, B, {
                            source: null == q ? void 0 : q.source,
                            messageId: null == q ? void 0 : q.messageId,
                            tagUserId: null == q ? void 0 : q.tagUserId,
                            location: o.Z.CLAN_GUILD_PROFILE
                        });
            },
            [B, U, er, M, q]
        ),
        eu = i.useCallback(() => {
            if (null != U) (0, v.hM)(U, v.UE.APPLICATION), (0, _.uL)(R.Z5c.GUILD_MEMBER_VERIFICATION(U));
        }, [U]),
        ec = i.useCallback(() => {
            if (null != U) (0, v.hM)(U, v.UE.GUILD), (0, _.XU)(U);
        }, [U]),
        ed = i.useMemo(() => {
            var e, t;
            return {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                className: D.button,
                themeColor: null !== (t = null == B ? void 0 : null === (e = B.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == B ? void 0 : null === (t = B.branding) || void 0 === t ? void 0 : t.primaryColor]),
        ef = i.useMemo(() => {
            var e;
            switch (!0) {
                case !et && er:
                    return (0, r.jsx)(N.Z, {
                        onClick: eu,
                        ...ed,
                        children: O.intl.string(O.t.dXvKgY)
                    });
                case !et && (null == B ? void 0 : null === (e = B.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(R.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !et && ei:
                    return (0, r.jsx)(N.Z, {
                        onClick: el,
                        ...ed,
                        children: O.intl.string(O.t.YfkjGh)
                    });
                case et && !en:
                    return (0, r.jsx)(N.Z, {
                        onClick: eo,
                        ...ed,
                        children: O.intl.string(O.t['1keBy8'])
                    });
                case et && en:
                    return (0, r.jsx)(N.Z, {
                        onClick: ec,
                        ...ed,
                        children: O.intl.string(O.t.muzrLS)
                    });
                default:
                    return null;
            }
        }, [et, er, null == B ? void 0 : B.discoveryProfileFeatures, ei, en, eu, ed, el, eo, ec]),
        e_ = i.useMemo(
            () => ({
                className: D.container,
                onClick: L
            }),
            []
        );
    if (null == G || null == B || null == U || w)
        return (0, r.jsx)('div', {
            ...e_,
            children: (0, r.jsx)(a.Spinner, {})
        });
    let ep = !et && !Z && null != K && !er && V && !j,
        eh = null != ef || (Z && F) || ep,
        em = null !== (n = E.ZP.getName(K)) && void 0 !== n ? n : '';
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                ...e_,
                children: [
                    (0, r.jsx)(A.xV, {
                        clan: B,
                        className: D.cardContainer,
                        isMember: et,
                        hasPendingJoinRequest: J,
                        atMaxMemberCapacity: $
                    }),
                    eh &&
                        (0, r.jsxs)('div', {
                            className: D.buttonGroupContainer,
                            children: [
                                null != ef && ef,
                                ep &&
                                    (0, r.jsx)(N.Z, {
                                        onClick: ea,
                                        ...ed,
                                        children: O.intl.string(O.t.HzLAb2)
                                    })
                            ]
                        })
                ]
            }),
            j &&
                (0, r.jsxs)(a.Dialog, {
                    className: D.askToJoinInputWrapper,
                    children: [
                        (0, r.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: O.intl.format(O.t.k5d4Wl, { username: em })
                        }),
                        (0, r.jsxs)('div', {
                            className: D.inputRow,
                            children: [
                                (0, r.jsx)(a.TextInput, {
                                    inputClassName: D.input,
                                    value: Y,
                                    onChange: W,
                                    placeholder: O.intl.formatToPlainString(O.t['4c+CAw'], { channel: em })
                                }),
                                (0, r.jsx)(a.Button, {
                                    className: D.sendButton,
                                    color: a.Button.Colors.BRAND,
                                    onClick: es,
                                    children: O.intl.string(O.t.TXNS7e)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
