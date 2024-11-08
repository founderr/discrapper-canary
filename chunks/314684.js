n.d(t, {
    $_: function () {
        return O;
    },
    FM: function () {
        return w;
    },
    IB: function () {
        return Z;
    },
    IY: function () {
        return M;
    },
    JR: function () {
        return B;
    },
    Vp: function () {
        return j;
    },
    nY: function () {
        return R;
    },
    rM: function () {
        return P;
    },
    yQ: function () {
        return S;
    }
}),
    n(47120);
var i = n(192379),
    r = n(913527),
    a = n.n(r),
    s = n(442837),
    l = n(704215),
    o = n(496929),
    c = n(607070),
    d = n(605236),
    u = n(706140),
    g = n(243778),
    m = n(594174),
    f = n(314884),
    p = n(580130),
    _ = n(626135),
    h = n(823379),
    E = n(111361),
    x = n(595878),
    b = n(944880),
    C = n(513785),
    v = n(106255),
    T = n(474936),
    N = n(735825),
    I = n(981631);
function S() {
    let e = (function () {
            var e;
            let t = (0, s.cj)([C.Z], () => C.Z.getState());
            if (null != t) return null !== (e = t.userTenureRewardStatusByRewardId[N.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[N.Ft.FREE_GUILD_BOOST_3_MONTHS];
        })(),
        t = j(),
        n = (0, s.e7)([f.Z], () => f.Z.boostSlots),
        r = i.useMemo(() => Object.values(n).some((e) => null == e.premiumGuildSubscription), [n]),
        l = null != t,
        o = l && !1 === r;
    return i.useMemo(() => {
        let n = {
            redeemableAt: null == e ? void 0 : e.redeemable_at,
            tenureRewardStatusId: null == e ? void 0 : e.id,
            tenureRewardType: (0, v.Xs)(null == e ? void 0 : e.next_tenure_reward_id)
        };
        if (o)
            return {
                ...n,
                nitroTenureStatus: N.EB.REDEEMED,
                tenureRewardSkuId: t.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (l)
            return {
                ...n,
                nitroTenureStatus: N.EB.REDEEMABLE,
                tenureRewardSkuId: t.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (!(null != e && (0, v.u7)(e))) return null;
        else {
            if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
            let t = a()(e.redeemable_at).diff(a().utc(), 'days'),
                i = null != e.redeemable_in_ms ? Math.ceil(a().duration(e.redeemable_in_ms).asDays()) : t;
            if (t < 0) return null;
            let r = !1,
                s = !1;
            return (
                e.next_tenure_reward_id === N.Ft.FREE_AVATAR_DECO_1_MONTH || e.next_tenure_reward_id === N.Ft.FREE_GUILD_BOOST_1_MONTH ? ((s = t <= N.bm), (r = t <= N.dF)) : e.next_tenure_reward_id === N.Ft.FREE_GUILD_BOOST_3_MONTHS && ((s = t <= N.yj), (r = t <= N.LJ)),
                {
                    ...n,
                    nitroTenureStatus: N.EB.PENDING,
                    tenureRewardSkuId: e.next_tenure_reward_id,
                    redeemableInDays: 0 === i ? 1 : i,
                    showNotification: s,
                    showCard: r
                }
            );
        }
    }, [l, t, e, o]);
}
function R(e) {
    let { showAnimations: t } = e,
        n = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        i = S();
    if (null == i) return;
    let { redeemableInDays: r = 0, tenureRewardSkuId: a } = i,
        l = N.Ft.FREE_GUILD_BOOST_1_MONTH === a ? N.jW : N.fY,
        o = Math.min(l, Math.max(l - r, 0)),
        d = (100 * o) / l;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * l, 0)) / l : d,
        percentage: d
    };
}
let A = new Set();
function j() {
    let e = (0, s.e7)(
            [p.Z],
            () => {
                var e;
                return null !== (e = p.Z.getForApplication(T.CL)) && void 0 !== e ? e : A;
            },
            [],
            h.OL
        ),
        t = (0, s.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return null != e && (0, E.M5)(e, T.p9.TIER_2);
        });
    if (null != (0, v.kG)(e) || !!t) return (0, v.MR)([N.Ft.FREE_GUILD_BOOST_1_MONTH, N.Ft.FREE_GUILD_BOOST_3_MONTHS], e);
}
let P = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case N.EB.PENDING:
                return [l.z.TENURE_REWARD_PENDING];
            case N.EB.REDEEMABLE:
                return [l.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    O = () => {
        let e = S(),
            [t, n] = i.useState(P(e)),
            r = (0, x.cG)({ location: 'Home' });
        i.useEffect(() => {
            if (!1 !== r) n(P(e));
        }, [e, r]);
        let [a] = (0, g.US)(r ? t : []);
        return r ? (null != e && !0 === e.showNotification && (a === l.z.TENURE_REWARD_REDEEMABLE || a === l.z.TENURE_REWARD_PENDING) ? (0, v.Wb)(e.nitroTenureStatus) : null) : null;
    },
    Z = () => {
        var e;
        let t = null === (e = S()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            n = (0, x.cG)({ location: 'Home' }) && null != t && t === N.EB.REDEEMABLE,
            [i] = (0, g.US)(n ? [l.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && i === l.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    M = () => {
        let e = S(),
            t = i.useMemo(() => P(e), [e]),
            [n] = (0, u.cv)(t),
            r = i.useRef(!1);
        return i.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === l.z.TENURE_REWARD_REDEEMABLE || n === l.z.TENURE_REWARD_PENDING) &&
                ((0, d.EW)(n),
                n === l.z.TENURE_REWARD_PENDING &&
                    !1 === r.current &&
                    (_.default.track(I.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (r.current = !0)));
        }, [e, n]);
    };
function B() {
    let { hasFetchedPremiumApplicationEntitlements: e, isFetchingPremiumApplicationEntitlements: t } = (0, s.cj)([p.Z], () => ({
            hasFetchedPremiumApplicationEntitlements: p.Z.isFetchedForApplication(T.CL),
            isFetchingPremiumApplicationEntitlements: p.Z.isFetchingForApplication(T.CL)
        })),
        n = (0, s.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return null != e && (0, E.M5)(e, T.p9.TIER_2);
        }),
        r = i.useRef(!1);
    i.useEffect(() => {
        !1 === e && !1 === t && !0 === n && !1 === r.current && (o.yD(T.CL), (r.current = !0));
    }, [e, t, n]);
}
function w() {
    var e;
    B();
    let t = S(),
        n = null !== (e = null == t ? void 0 : t.showCard) && void 0 !== e && e;
    i.useEffect(() => {
        n && b.Z.forceRefreshIfOutdated();
    }, [n]);
}
