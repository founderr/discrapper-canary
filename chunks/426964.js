n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(442837),
    o = n(100527),
    l = n(231467),
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
    I = n(963202),
    b = n(645896),
    S = n(905362),
    T = n(353093),
    y = n(574410),
    A = n(954138),
    N = n(169559),
    C = n(284019),
    R = n(308083),
    O = n(981631),
    D = n(388032),
    L = n(469761);
function x(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t, n;
    let { clan: w, isLoading: M, onClose: P, profileViewedAnalytics: k, userId: U } = e,
        B = null == w ? void 0 : w.identityGuildId,
        G = (0, b.Cc)(null != B ? B : null),
        Z = null == w ? void 0 : w.tag,
        F = (0, N.Z)('clan_guild_profile'),
        { enabled: V } = (0, u.I7)(),
        { enabled: j } = y.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [H, Y] = i.useState(!1),
        [W, K] = i.useState(''),
        z = (0, s.e7)([g.default], () => g.default.getUser(U)),
        q = (0, A.Z)('base_clan_tag_chiplet'),
        Q = (0, s.e7)([h.default], () => h.default.getId()),
        X = (0, s.e7)([m.ZP], () => (null != B ? m.ZP.getMember(B, Q) : null), [B, Q]),
        J = (0, s.e7)([d.Z], () => {
            var e;
            return (null == G ? void 0 : G.id) != null && (null === (e = d.Z.getRequest(G.id)) || void 0 === e ? void 0 : e.applicationStatus) === c.wB.SUBMITTED;
        }),
        $ = null != G && G.memberCount >= R.Du,
        ee = (0, s.e7)([g.default], () => g.default.getUser(Q), [Q]),
        et = (null == X ? void 0 : X.joinedAt) != null,
        en = (0, T.Z4)(B, null == ee ? void 0 : ee.clan),
        er = null != (0, f.Z)(B),
        ei = (0, I.iN)('ClanGuildProfile');
    i.useEffect(() => {
        null != B &&
            (0, v.u0)({
                guildId: B,
                hasJoinRequest: er,
                ...k,
                location: o.Z.CLAN_GUILD_PROFILE
            });
    }, [B, er, k]);
    let ea = i.useCallback(() => {
            (0, v.hM)(B, v.UE.ASK_TO_JOIN), Y(!H);
        }, [B, H]),
        es = i.useCallback(async () => {
            if (null != z)
                try {
                    await (0, p.Z)({
                        userId: z.id,
                        content: W,
                        openChannel: !0,
                        location: 'guildProfilePopout'
                    });
                } catch (e) {}
        }, [z, W]),
        eo = i.useCallback(
            (e) => {
                if (null != B) e.stopPropagation(), e.preventDefault(), null == P || P(), (0, v.hM)(B, v.UE.TAG_ADOPTION), (0, S.SJ)(B);
            },
            [B, P]
        ),
        el = i.useCallback(
            (e) => {
                if (null == G || null == B) return;
                if ((e.stopPropagation(), e.preventDefault(), null == P || P(), !er))
                    (0, v.hM)(B, v.UE.APPLY_FLOW),
                        (0, S.qF)(B, G, {
                            source: null == k ? void 0 : k.source,
                            messageId: null == k ? void 0 : k.messageId,
                            tagUserId: null == k ? void 0 : k.tagUserId,
                            location: o.Z.CLAN_GUILD_PROFILE
                        });
            },
            [G, B, er, P, k]
        ),
        eu = i.useCallback(() => {
            if (null != B) (0, v.hM)(B, v.UE.APPLICATION), (0, _.uL)(O.Z5c.GUILD_MEMBER_VERIFICATION(B));
        }, [B]),
        ec = i.useCallback(() => {
            if (null != B) (0, v.hM)(B, v.UE.GUILD), (0, _.XU)(B);
        }, [B]),
        ed = i.useMemo(() => {
            var e, t;
            return {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                className: L.button,
                themeColor: null !== (t = null == G ? void 0 : null === (e = G.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == G ? void 0 : null === (t = G.branding) || void 0 === t ? void 0 : t.primaryColor]),
        ef = i.useMemo(() => {
            var e;
            switch (!0) {
                case !q:
                    return null;
                case !et && er:
                    return (0, r.jsx)(C.Z, {
                        onClick: eu,
                        ...ed,
                        children: D.intl.string(D.t.dXvKgY)
                    });
                case !et && (null == G ? void 0 : null === (e = G.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(O.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !et && ei:
                    return (0, r.jsx)(C.Z, {
                        onClick: el,
                        ...ed,
                        children: D.intl.string(D.t.YfkjGh)
                    });
                case et && !en:
                    return (0, r.jsx)(C.Z, {
                        onClick: eo,
                        ...ed,
                        children: D.intl.string(D.t['1keBy8'])
                    });
                case et && en:
                    return (0, r.jsx)(C.Z, {
                        onClick: ec,
                        ...ed,
                        children: D.intl.string(D.t.muzrLS)
                    });
                default:
                    return null;
            }
        }, [q, et, er, null == G ? void 0 : G.discoveryProfileFeatures, ei, en, eu, ed, el, eo, ec]),
        e_ = i.useMemo(
            () => ({
                className: L.container,
                onClick: x
            }),
            []
        );
    if (null == Z || null == G || null == B || M)
        return (0, r.jsx)('div', {
            ...e_,
            children: (0, r.jsx)(a.Spinner, {})
        });
    let ep = !et && !F && null != z && !er && j && !H,
        eh = null != ef || (F && V) || ep,
        em = null !== (n = E.ZP.getName(z)) && void 0 !== n ? n : '';
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                ...e_,
                children: [
                    (0, r.jsx)(l.xV, {
                        clan: G,
                        className: L.cardContainer,
                        isMember: et,
                        hasPendingJoinRequest: J,
                        atMaxMemberCapacity: $
                    }),
                    eh &&
                        (0, r.jsxs)('div', {
                            className: L.buttonGroupContainer,
                            children: [
                                null != ef && ef,
                                ep &&
                                    (0, r.jsx)(C.Z, {
                                        onClick: ea,
                                        ...ed,
                                        children: D.intl.string(D.t.HzLAb2)
                                    })
                            ]
                        })
                ]
            }),
            H &&
                (0, r.jsxs)(a.Dialog, {
                    className: L.askToJoinInputWrapper,
                    children: [
                        (0, r.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: D.intl.format(D.t.k5d4Wl, { username: em })
                        }),
                        (0, r.jsxs)('div', {
                            className: L.inputRow,
                            children: [
                                (0, r.jsx)(a.TextInput, {
                                    inputClassName: L.input,
                                    value: W,
                                    onChange: K,
                                    placeholder: D.intl.formatToPlainString(D.t['4c+CAw'], { channel: em })
                                }),
                                (0, r.jsx)(a.Button, {
                                    className: L.sendButton,
                                    color: a.Button.Colors.BRAND,
                                    onClick: es,
                                    children: D.intl.string(D.t.TXNS7e)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
