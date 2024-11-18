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
    A = n(169559),
    N = n(900681),
    C = n(284019),
    R = n(308083),
    O = n(981631),
    D = n(388032),
    L = n(805697);
function x(e) {
    e.stopPropagation();
}
t.Z = i.memo(function (e) {
    var t, n;
    let { clan: w, isLoading: M, onClose: P, profileViewedAnalytics: k, userId: U } = e,
        G = null == w ? void 0 : w.identityGuildId,
        B = (0, b.Cc)(null != G ? G : null),
        Z = null == w ? void 0 : w.tag,
        F = (0, A.Z)('clan_guild_profile'),
        { enabled: V } = (0, l.I)(),
        { enabled: j } = T.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [H, Y] = i.useState(!1),
        [W, K] = i.useState(''),
        z = (0, s.e7)([m.default], () => m.default.getUser(U)),
        q = (0, y.Z)('base_clan_tag_chiplet'),
        Q = (0, s.e7)([p.default], () => p.default.getId()),
        X = (0, s.e7)([h.ZP], () => (null != G ? h.ZP.getMember(G, Q) : null), [G, Q]),
        J = (0, s.e7)([c.Z], () => {
            var e;
            return (null == B ? void 0 : B.id) != null && (null === (e = c.Z.getRequest(B.id)) || void 0 === e ? void 0 : e.applicationStatus) === u.wB.SUBMITTED;
        }),
        $ = null != B && B.memberCount >= R.Du,
        ee = (0, s.e7)([m.default], () => m.default.getUser(Q), [Q]),
        et = (null == X ? void 0 : X.joinedAt) != null,
        en = (0, S.Z4)(G, null == ee ? void 0 : ee.clan),
        er = null != (0, d.Z)(G),
        ei = (0, v.iN)('ClanGuildProfile');
    i.useEffect(() => {
        null != G &&
            (0, E.u0)({
                guildId: G,
                hasJoinRequest: er,
                ...k,
                location: o.Z.CLAN_GUILD_PROFILE
            });
    }, [G, er, k]);
    let ea = i.useCallback(() => {
            (0, E.hM)(G, E.UE.ASK_TO_JOIN), Y(!H);
        }, [G, H]),
        es = i.useCallback(async () => {
            if (null != z)
                try {
                    await (0, _.Z)({
                        userId: z.id,
                        content: W,
                        openChannel: !0,
                        location: 'guildProfilePopout'
                    });
                } catch (e) {}
        }, [z, W]),
        eo = i.useCallback(
            (e) => {
                if (null != G) e.stopPropagation(), e.preventDefault(), null == P || P(), (0, E.hM)(G, E.UE.TAG_ADOPTION), (0, I.SJ)(G);
            },
            [G, P]
        ),
        el = i.useCallback(
            (e) => {
                if (null == B || null == G) return;
                if ((e.stopPropagation(), e.preventDefault(), null == P || P(), !er))
                    (0, E.hM)(G, E.UE.APPLY_FLOW),
                        (0, I.qF)(G, B, {
                            source: null == k ? void 0 : k.source,
                            messageId: null == k ? void 0 : k.messageId,
                            tagUserId: null == k ? void 0 : k.tagUserId,
                            location: o.Z.CLAN_GUILD_PROFILE
                        });
            },
            [B, G, er, P, k]
        ),
        eu = i.useCallback(() => {
            if (null != G) (0, E.hM)(G, E.UE.APPLICATION), (0, f.uL)(O.Z5c.GUILD_MEMBER_VERIFICATION(G));
        }, [G]),
        ec = i.useCallback(() => {
            if (null != G) (0, E.hM)(G, E.UE.GUILD), (0, f.XU)(G);
        }, [G]),
        ed = i.useMemo(() => {
            var e, t;
            return {
                color: a.Button.Colors.BRAND,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                className: L.button,
                themeColor: null !== (t = null == B ? void 0 : null === (e = B.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == B ? void 0 : null === (t = B.branding) || void 0 === t ? void 0 : t.primaryColor]),
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
                case !et && (null == B ? void 0 : null === (e = B.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(O.oNc.CLAN_DISCOVERY_DISABLED)):
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
        }, [q, et, er, null == B ? void 0 : B.discoveryProfileFeatures, ei, en, eu, ed, el, eo, ec]),
        e_ = i.useMemo(
            () => ({
                className: L.container,
                onClick: x
            }),
            []
        );
    if (null == Z || null == B || null == G || M)
        return (0, r.jsx)('div', {
            ...e_,
            children: (0, r.jsx)(a.Spinner, {})
        });
    let ep = !et && !F && null != z && !er && j && !H,
        eh = null != ef || (F && V) || ep,
        em = null !== (n = g.ZP.getName(z)) && void 0 !== n ? n : '';
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                ...e_,
                children: [
                    (0, r.jsx)(N.xV, {
                        clan: B,
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
