n.d(t, {
    $_: function () {
        return B;
    },
    FM: function () {
        return L;
    },
    IB: function () {
        return w;
    },
    IY: function () {
        return y;
    },
    JR: function () {
        return k;
    },
    Kb: function () {
        return U;
    },
    Vp: function () {
        return O;
    },
    bq: function () {
        return j;
    },
    rM: function () {
        return M;
    },
    yQ: function () {
        return A;
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
    d = n(335131),
    u = n(1870),
    g = n(605236),
    m = n(706140),
    f = n(243778),
    _ = n(594174),
    p = n(314884),
    h = n(580130),
    E = n(626135),
    b = n(823379),
    x = n(111361),
    C = n(595878),
    v = n(944880),
    T = n(513785),
    N = n(106255),
    I = n(474936),
    S = n(735825),
    R = n(981631);
function A() {
    var e, t;
    let n = (function () {
            var e, t;
            let n = (0, s.cj)([T.Z], () => T.Z.getState());
            if (null != n) return null !== (t = null !== (e = n.userTenureRewardStatusByRewardId[S.Ft.FREE_AVATAR_DECO_1_MONTH]) && void 0 !== e ? e : n.userTenureRewardStatusByRewardId[S.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== t ? t : n.userTenureRewardStatusByRewardId[S.Ft.FREE_GUILD_BOOST_3_MONTHS];
        })(),
        r = O(),
        l = (function () {
            return Z([S.Ft.FREE_AVATAR_DECO_1_MONTH]);
        })(),
        o = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        c = (0, s.e7)([p.Z], () => p.Z.boostSlots),
        d = i.useMemo(() => Object.values(c).some((e) => null == e.premiumGuildSubscription), [c]),
        u = null != r,
        g = u && !1 === d,
        m = null != l,
        f = (function () {
            let e = (0, s.e7)(
                [h.Z],
                () => {
                    var e;
                    return null !== (e = h.Z.getForApplication(R.XAJ)) && void 0 !== e ? e : P;
                },
                [],
                b.OL
            );
            return (0, N.Cl)(S.qY, e);
        })(),
        E = m && null != f && (0, N.C3)(f.skuId, o),
        x = null !== (t = null !== (e = null == n ? void 0 : n.next_tenure_reward_id) && void 0 !== e ? e : null == l ? void 0 : l.skuId) && void 0 !== t ? t : null == r ? void 0 : r.skuId;
    return i.useMemo(() => {
        let e = {
            redeemableAt: null == n ? void 0 : n.redeemable_at,
            tenureRewardStatusId: null == n ? void 0 : n.id,
            tenureRewardType: (0, N.Xs)(x)
        };
        if (g)
            return {
                ...e,
                nitroTenureStatus: S.EB.REDEEMED,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (u)
            return {
                ...e,
                nitroTenureStatus: S.EB.REDEEMABLE,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (E)
            return {
                ...e,
                nitroTenureStatus: S.EB.REDEEMED,
                tenureRewardSkuId: l.skuId,
                showNotification: !0,
                showCard: !0
            };
        else {
            if (m)
                return {
                    ...e,
                    nitroTenureStatus: S.EB.REDEEMABLE,
                    tenureRewardSkuId: l.skuId,
                    showNotification: !0,
                    showCard: !0
                };
            if (!(null != n && (0, N.u7)(n))) return null;
            if (null == n.redeemable_at || null == n.next_tenure_reward_id) return null;
            let t = a()(n.redeemable_at).diff(a().utc(), 'days'),
                i = null != n.redeemable_in_ms ? Math.ceil(a().duration(n.redeemable_in_ms).asDays()) : t;
            if (t < 0) return null;
            let r = !1,
                s = !1;
            return (
                n.next_tenure_reward_id === S.Ft.FREE_AVATAR_DECO_1_MONTH || n.next_tenure_reward_id === S.Ft.FREE_GUILD_BOOST_1_MONTH ? ((s = t <= S.bm), (r = t <= S.dF)) : n.next_tenure_reward_id === S.Ft.FREE_GUILD_BOOST_3_MONTHS && ((s = t <= S.yj), (r = t <= S.LJ)),
                {
                    ...e,
                    nitroTenureStatus: S.EB.PENDING,
                    tenureRewardSkuId: n.next_tenure_reward_id,
                    redeemableInDays: 0 === i ? 1 : i,
                    showNotification: s,
                    showCard: r
                }
            );
        }
    }, [u, r, n, g, m, E, l, x]);
}
function j(e) {
    let { showAnimations: t } = e,
        n = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        i = A();
    if (null == i) return;
    let { redeemableInDays: r = 0, tenureRewardSkuId: a } = i,
        l = S.Ft.FREE_GUILD_BOOST_1_MONTH === a || S.Ft.FREE_AVATAR_DECO_1_MONTH === a ? S.jW : S.fY,
        o = Math.min(l, Math.max(l - r, 0)),
        d = (100 * o) / l;
    return {
        initialPercentage: t && !n ? (100 * Math.max(o - 0.25 * l, 0)) / l : d,
        percentage: d
    };
}
let P = new Set();
function Z(e) {
    let t = (0, s.e7)(
            [h.Z],
            () => {
                var e;
                return null !== (e = h.Z.getForApplication(I.CL)) && void 0 !== e ? e : P;
            },
            [],
            b.OL
        ),
        n = (0, s.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return null != e && (0, x.M5)(e, I.p9.TIER_2);
        });
    if (null != (0, N.kG)(t) || !!n) return (0, N.MR)(e, t);
}
function O() {
    return Z([S.Ft.FREE_GUILD_BOOST_1_MONTH, S.Ft.FREE_GUILD_BOOST_3_MONTHS]);
}
let M = (e) => {
        if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
        switch (e.nitroTenureStatus) {
            case S.EB.PENDING:
                return [l.z.TENURE_REWARD_PENDING];
            case S.EB.REDEEMABLE:
                return [l.z.TENURE_REWARD_REDEEMABLE];
            default:
                return [];
        }
    },
    B = () => {
        let e = A(),
            [t, n] = i.useState(M(e)),
            r = (0, C.cG)({ location: 'Home' });
        i.useEffect(() => {
            if (!1 !== r) n(M(e));
        }, [e, r]);
        let [a] = (0, f.US)(r ? t : []);
        return r ? (null != e && !0 === e.showNotification && (a === l.z.TENURE_REWARD_REDEEMABLE || a === l.z.TENURE_REWARD_PENDING) ? (0, N.Wb)(e.nitroTenureStatus) : null) : null;
    },
    w = () => {
        var e;
        let t = null === (e = A()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            n = (0, C.cG)({ location: 'Home' }) && null != t && t === S.EB.REDEEMABLE,
            [i] = (0, f.US)(n ? [l.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && i === l.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    y = () => {
        let e = A(),
            t = i.useMemo(() => M(e), [e]),
            [n] = (0, m.cv)(t),
            r = i.useRef(!1);
        return i.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === l.z.TENURE_REWARD_REDEEMABLE || n === l.z.TENURE_REWARD_PENDING) &&
                ((0, g.EW)(n),
                n === l.z.TENURE_REWARD_PENDING &&
                    !1 === r.current &&
                    (E.default.track(R.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (r.current = !0)));
        }, [e, n]);
    };
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, s.e7)([h.Z], () => h.Z.isFetchingForApplication(e)),
        r = (0, s.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return null != e && (0, x.M5)(e, I.p9.TIER_2);
        }),
        a = i.useRef(!1);
    i.useEffect(() => {
        !1 === n && !0 === r && !1 === a.current && !0 === t && (o.yD(e), (a.current = !0));
    }, [n, r, e, t]);
}
function L() {
    var e;
    let t = (0, C.oY)({ location: 'Home' });
    k(I.CL), k(R.XAJ, t), U(S.qY);
    let n = A(),
        r = null !== (e = null == n ? void 0 : n.showCard) && void 0 !== e && e;
    i.useEffect(() => {
        r && v.Z.forceRefreshIfOutdated();
    }, [r]);
}
function U(e) {
    var t;
    let n = (0, C.oY)({ location: 'Home' }),
        [r, a] = (0, s.Wu)([u.Z], () => [u.Z.purchases, u.Z.hasPreviouslyFetched]);
    return (
        i.useEffect(() => {
            n && !a && (0, d.qg)();
        }, [r, a, n]),
        null !== (t = null == r ? void 0 : r.get(e)) && void 0 !== t ? t : null
    );
}
