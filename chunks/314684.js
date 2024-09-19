n.d(t, {
    $_: function () {
        return P;
    },
    FM: function () {
        return B;
    },
    IB: function () {
        return L;
    },
    IY: function () {
        return Z;
    },
    JR: function () {
        return D;
    },
    Vp: function () {
        return O;
    },
    nY: function () {
        return x;
    },
    rM: function () {
        return v;
    },
    yQ: function () {
        return M;
    }
}),
    n(47120);
var s = n(470079),
    a = n(913527),
    r = n.n(a),
    i = n(442837),
    l = n(704215),
    o = n(496929),
    c = n(607070),
    d = n(605236),
    _ = n(706140),
    u = n(243778),
    E = n(594174),
    T = n(314884),
    I = n(580130),
    R = n(626135),
    m = n(823379),
    N = n(111361),
    g = n(595878),
    C = n(944880),
    p = n(513785),
    f = n(106255),
    A = n(474936),
    h = n(735825),
    S = n(981631);
function M() {
    let e = (function () {
            var e;
            let t = (0, i.cj)([p.Z], () => p.Z.getState());
            if (null != t) return null !== (e = t.userTenureRewardStatusByRewardId[h.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[h.Ft.FREE_GUILD_BOOST_3_MONTHS];
        })(),
        t = O(),
        n = (0, i.e7)([T.Z], () => T.Z.boostSlots),
        a = s.useMemo(() => Object.values(n).some((e) => null == e.premiumGuildSubscription), [n]),
        l = null != t,
        o = l && !1 === a;
    return s.useMemo(() => {
        let n = {
            redeemableAt: null == e ? void 0 : e.redeemable_at,
            tenureRewardStatusId: null == e ? void 0 : e.id
        };
        if (o)
            return {
                ...n,
                nitroTenureStatus: h.EB.REDEEMED,
                tenureRewardSkuId: t.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (l)
            return {
                ...n,
                nitroTenureStatus: h.EB.REDEEMABLE,
                tenureRewardSkuId: t.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (!(null != e && (0, f.u7)(e))) return null;
        else {
            if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
            let t = r()(e.redeemable_at).diff(r().utc(), 'days'),
                s = null != e.redeemable_in_ms ? Math.ceil(r().duration(e.redeemable_in_ms).asDays()) : t;
            if (t < 0) return null;
            let a = !1,
                i = !1;
            return (
                e.next_tenure_reward_id === h.Ft.FREE_GUILD_BOOST_1_MONTH ? ((i = t <= h.bm), (a = t <= h.dF)) : e.next_tenure_reward_id === h.Ft.FREE_GUILD_BOOST_3_MONTHS && ((i = t <= h.yj), (a = t <= h.LJ)),
                {
                    ...n,
                    nitroTenureStatus: h.EB.PENDING,
                    tenureRewardSkuId: e.next_tenure_reward_id,
                    redeemableInDays: 0 === s ? 1 : s,
                    showNotification: i,
                    showCard: a
                }
            );
        }
    }, [l, t, e, o]);
}
function x(e) {
    let { showAnimations: t } = e,
        n = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        s = M();
    if (null == s) return;
    let { redeemableInDays: a = 0, tenureRewardSkuId: r } = s,
        l = h.Ft.FREE_GUILD_BOOST_1_MONTH === r ? h.jW : h.fY,
        o = Math.min(l, Math.max(l - a, 0)),
        d = (100 * o) / l;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * l, 0)) / l : d,
        percentage: d
    };
}
let b = new Set();
function O() {
    let e = (0, i.e7)(
            [I.Z],
            () => {
                var e;
                return null !== (e = I.Z.getForApplication(A.CL)) && void 0 !== e ? e : b;
            },
            [],
            m.OL
        ),
        t = (0, i.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return null != e && (0, N.M5)(e, A.p9.TIER_2);
        });
    if (null != (0, f.kG)(e) || !!t) return (0, f.MR)([h.Ft.FREE_GUILD_BOOST_1_MONTH, h.Ft.FREE_GUILD_BOOST_3_MONTHS], e);
}
let v = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case h.EB.PENDING:
                return [l.z.TENURE_REWARD_PENDING];
            case h.EB.REDEEMABLE:
                return [l.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    P = () => {
        let e = M(),
            [t, n] = s.useState(v(e)),
            a = (0, g.cG)({ location: 'Home' });
        s.useEffect(() => {
            if (!1 !== a) n(v(e));
        }, [e, a]);
        let [r] = (0, u.US)(a ? t : []);
        return a ? (null != e && !0 === e.showNotification && (r === l.z.TENURE_REWARD_REDEEMABLE || r === l.z.TENURE_REWARD_PENDING) ? (0, f.Wb)(e.nitroTenureStatus) : null) : null;
    },
    L = () => {
        var e;
        let t = null === (e = M()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            n = (0, g.cG)({ location: 'Home' }) && null != t && t === h.EB.REDEEMABLE,
            [s] = (0, u.US)(n ? [l.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && s === l.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    Z = () => {
        let e = M(),
            t = s.useMemo(() => v(e), [e]),
            [n] = (0, _.cv)(t),
            a = s.useRef(!1);
        return s.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === l.z.TENURE_REWARD_REDEEMABLE || n === l.z.TENURE_REWARD_PENDING) &&
                ((0, d.EW)(n),
                n === l.z.TENURE_REWARD_PENDING &&
                    !1 === a.current &&
                    (R.default.track(S.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: h.nW.SERVER_BOOST,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (a.current = !0)));
        }, [e, n]);
    };
function D() {
    let { hasFetchedPremiumApplicationEntitlements: e, isFetchingPremiumApplicationEntitlements: t } = (0, i.cj)([I.Z], () => ({
            hasFetchedPremiumApplicationEntitlements: I.Z.isFetchedForApplication(A.CL),
            isFetchingPremiumApplicationEntitlements: I.Z.isFetchingForApplication(A.CL)
        })),
        n = (0, i.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return null != e && (0, N.M5)(e, A.p9.TIER_2);
        }),
        a = s.useRef(!1);
    s.useEffect(() => {
        !1 === e && !1 === t && !0 === n && !1 === a.current && (o.yD(A.CL), (a.current = !0));
    }, [e, t, n]);
}
function B() {
    var e;
    D();
    let t = M(),
        n = null !== (e = null == t ? void 0 : t.showCard) && void 0 !== e && e;
    s.useEffect(() => {
        n && C.Z.forceRefreshIfOutdated();
    }, [n]);
}
