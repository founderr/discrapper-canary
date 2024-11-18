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
    b = n(645896),
    I = n(905362),
    S = n(353093),
    T = n(574410),
    y = n(954138),
    A = n(900681),
    N = n(284019),
    C = n(308083),
    R = n(981631),
    O = n(388032),
    D = n(805697);
function L(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t, n;
    let { clan: x, isLoading: w, onClose: M, profileViewedAnalytics: P, userId: k } = e,
        U = null == x ? void 0 : x.identityGuildId,
        B = (0, b.Cc)(null != U ? U : null),
        G = null == x ? void 0 : x.tag,
        Z = (0, v.iN)('clan_guild_profile'),
        { enabled: F } = (0, l.I)(),
        { enabled: V } = T.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [j, H] = i.useState(!1),
        [Y, W] = i.useState(''),
        K = (0, s.e7)([m.default], () => m.default.getUser(k)),
        z = (0, y.Z)('base_clan_tag_chiplet'),
        q = (0, s.e7)([p.default], () => p.default.getId()),
        Q = (0, s.e7)([h.ZP], () => (null != U ? h.ZP.getMember(U, q) : null), [U, q]),
        X = (0, s.e7)([c.Z], () => {
            var e;
            return (null == B ? void 0 : B.id) != null && (null === (e = c.Z.getRequest(B.id)) || void 0 === e ? void 0 : e.applicationStatus) === u.wB.SUBMITTED;
        }),
        J = null != B && B.memberCount >= C.Du,
        $ = (0, s.e7)([m.default], () => m.default.getUser(q), [q]),
        ee = (null == Q ? void 0 : Q.joinedAt) != null,
        et = (0, S.Z4)(U, null == $ ? void 0 : $.clan),
        en = null != (0, d.Z)(U),
        er = (0, v.iN)('ClanGuildProfile');
    i.useEffect(() => {
        null != U &&
            (0, E.u0)({
                guildId: U,
                hasJoinRequest: en,
                ...P,
                location: o.Z.CLAN_GUILD_PROFILE
            });
    }, [U, en, P]);
    let ei = i.useCallback(() => {
            (0, E.hM)(U, E.UE.ASK_TO_JOIN), H(!j);
        }, [U, j]),
        ea = i.useCallback(async () => {
            if (null != K)
                try {
                    await (0, _.Z)({
                        userId: K.id,
                        content: Y,
                        openChannel: !0,
                        location: 'guildProfilePopout'
                    });
                } catch (e) {}
        }, [K, Y]),
        es = i.useCallback(
            (e) => {
                if (null != U) e.stopPropagation(), e.preventDefault(), null == M || M(), (0, E.hM)(U, E.UE.TAG_ADOPTION), (0, I.SJ)(U);
            },
            [U, M]
        ),
        eo = i.useCallback(
            (e) => {
                if (null == B || null == U) return;
                if ((e.stopPropagation(), e.preventDefault(), null == M || M(), !en))
                    (0, E.hM)(U, E.UE.APPLY_FLOW),
                        (0, I.qF)(U, B, {
                            source: null == P ? void 0 : P.source,
                            messageId: null == P ? void 0 : P.messageId,
                            tagUserId: null == P ? void 0 : P.tagUserId,
                            location: o.Z.CLAN_GUILD_PROFILE
                        });
            },
            [B, U, en, M, P]
        ),
        el = i.useCallback(() => {
            if (null != U) (0, E.hM)(U, E.UE.APPLICATION), (0, f.uL)(R.Z5c.GUILD_MEMBER_VERIFICATION(U));
        }, [U]),
        eu = i.useCallback(() => {
            if (null != U) (0, E.hM)(U, E.UE.GUILD), (0, f.XU)(U);
        }, [U]),
        ec = i.useMemo(() => {
            var e, t;
            return {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                className: D.button,
                themeColor: null !== (t = null == B ? void 0 : null === (e = B.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == B ? void 0 : null === (t = B.branding) || void 0 === t ? void 0 : t.primaryColor]),
        ed = i.useMemo(() => {
            var e;
            switch (!0) {
                case !z:
                    return null;
                case !ee && en:
                    return (0, r.jsx)(N.Z, {
                        onClick: el,
                        ...ec,
                        children: O.intl.string(O.t.dXvKgY)
                    });
                case !ee && (null == B ? void 0 : null === (e = B.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(R.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !ee && er:
                    return (0, r.jsx)(N.Z, {
                        onClick: eo,
                        ...ec,
                        children: O.intl.string(O.t.YfkjGh)
                    });
                case ee && !et:
                    return (0, r.jsx)(N.Z, {
                        onClick: es,
                        ...ec,
                        children: O.intl.string(O.t['1keBy8'])
                    });
                case ee && et:
                    return (0, r.jsx)(N.Z, {
                        onClick: eu,
                        ...ec,
                        children: O.intl.string(O.t.muzrLS)
                    });
                default:
                    return null;
            }
        }, [z, ee, en, null == B ? void 0 : B.discoveryProfileFeatures, er, et, el, ec, eo, es, eu]),
        ef = i.useMemo(
            () => ({
                className: D.container,
                onClick: L
            }),
            []
        );
    if (null == G || null == B || null == U || w)
        return (0, r.jsx)('div', {
            ...ef,
            children: (0, r.jsx)(a.Spinner, {})
        });
    let e_ = !ee && !Z && null != K && !en && V && !j,
        ep = null != ed || (Z && F) || e_,
        eh = null !== (n = g.ZP.getName(K)) && void 0 !== n ? n : '';
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                ...ef,
                children: [
                    (0, r.jsx)(A.xV, {
                        clan: B,
                        className: D.cardContainer,
                        isMember: ee,
                        hasPendingJoinRequest: X,
                        atMaxMemberCapacity: J
                    }),
                    ep &&
                        (0, r.jsxs)('div', {
                            className: D.buttonGroupContainer,
                            children: [
                                null != ed && ed,
                                e_ &&
                                    (0, r.jsx)(N.Z, {
                                        onClick: ei,
                                        ...ec,
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
                            children: O.intl.format(O.t.k5d4Wl, { username: eh })
                        }),
                        (0, r.jsxs)('div', {
                            className: D.inputRow,
                            children: [
                                (0, r.jsx)(a.TextInput, {
                                    inputClassName: D.input,
                                    value: Y,
                                    onChange: W,
                                    placeholder: O.intl.formatToPlainString(O.t['4c+CAw'], { channel: eh })
                                }),
                                (0, r.jsx)(a.Button, {
                                    className: D.sendButton,
                                    color: a.Button.Colors.BRAND,
                                    onClick: ea,
                                    children: O.intl.string(O.t.TXNS7e)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
