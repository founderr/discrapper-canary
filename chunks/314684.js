n.d(t, {
    $_: function () {
        return O;
    },
    FM: function () {
        return y;
    },
    IB: function () {
        return M;
    },
    IY: function () {
        return B;
    },
    JR: function () {
        return w;
    },
    Vp: function () {
        return P;
    },
    nY: function () {
        return R;
    },
    rM: function () {
        return Z;
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
    _ = n(580130),
    p = n(626135),
    h = n(823379),
    E = n(111361),
    b = n(595878),
    x = n(944880),
    C = n(513785),
    v = n(106255),
    T = n(474936),
    N = n(735825),
    I = n(981631);
function S() {
    var e, t;
    let n = (function () {
            var e, t;
            let n = (0, s.cj)([C.Z], () => C.Z.getState());
            if (null != n) return null !== (t = null !== (e = n.userTenureRewardStatusByRewardId[N.Ft.FREE_AVATAR_DECO_1_MONTH]) && void 0 !== e ? e : n.userTenureRewardStatusByRewardId[N.Ft.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== t ? t : n.userTenureRewardStatusByRewardId[N.Ft.FREE_GUILD_BOOST_3_MONTHS];
        })(),
        r = P(),
        l = (function () {
            return j([N.Ft.FREE_AVATAR_DECO_1_MONTH]);
        })(),
        o = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        c = (0, s.e7)([f.Z], () => f.Z.boostSlots),
        d = i.useMemo(() => Object.values(c).some((e) => null == e.premiumGuildSubscription), [c]),
        u = null != r,
        g = u && !1 === d,
        p = null != l,
        E = (function () {
            let e = (0, s.e7)(
                [_.Z],
                () => {
                    var e;
                    return null !== (e = _.Z.getForApplication(I.XAJ)) && void 0 !== e ? e : A;
                },
                [],
                h.OL
            );
            return (0, v.Cl)(N.qY, e);
        })(),
        b = p && null != E && (0, v.C3)(E.skuId, o),
        x = null !== (t = null !== (e = null == n ? void 0 : n.next_tenure_reward_id) && void 0 !== e ? e : null == l ? void 0 : l.skuId) && void 0 !== t ? t : null == r ? void 0 : r.skuId;
    return i.useMemo(() => {
        let e = {
            redeemableAt: null == n ? void 0 : n.redeemable_at,
            tenureRewardStatusId: null == n ? void 0 : n.id,
            tenureRewardType: (0, v.Xs)(x)
        };
        if (g)
            return {
                ...e,
                nitroTenureStatus: N.EB.REDEEMED,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (u)
            return {
                ...e,
                nitroTenureStatus: N.EB.REDEEMABLE,
                tenureRewardSkuId: r.skuId,
                showNotification: !0,
                showCard: !0
            };
        if (b)
            return {
                ...e,
                nitroTenureStatus: N.EB.REDEEMED,
                tenureRewardSkuId: l.skuId,
                showNotification: !0,
                showCard: !0
            };
        else {
            if (p)
                return {
                    ...e,
                    nitroTenureStatus: N.EB.REDEEMABLE,
                    tenureRewardSkuId: l.skuId,
                    showNotification: !0,
                    showCard: !0
                };
            if (!(null != n && (0, v.u7)(n))) return null;
            if (null == n.redeemable_at || null == n.next_tenure_reward_id) return null;
            let t = a()(n.redeemable_at).diff(a().utc(), 'days'),
                i = null != n.redeemable_in_ms ? Math.ceil(a().duration(n.redeemable_in_ms).asDays()) : t;
            if (t < 0) return null;
            let r = !1,
                s = !1;
            return (
                n.next_tenure_reward_id === N.Ft.FREE_AVATAR_DECO_1_MONTH || n.next_tenure_reward_id === N.Ft.FREE_GUILD_BOOST_1_MONTH ? ((s = t <= N.bm), (r = t <= N.dF)) : n.next_tenure_reward_id === N.Ft.FREE_GUILD_BOOST_3_MONTHS && ((s = t <= N.yj), (r = t <= N.LJ)),
                {
                    ...e,
                    nitroTenureStatus: N.EB.PENDING,
                    tenureRewardSkuId: n.next_tenure_reward_id,
                    redeemableInDays: 0 === i ? 1 : i,
                    showNotification: s,
                    showCard: r
                }
            );
        }
    }, [u, r, n, g, p, b, l, x]);
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
function j(e) {
    let t = (0, s.e7)(
            [_.Z],
            () => {
                var e;
                return null !== (e = _.Z.getForApplication(T.CL)) && void 0 !== e ? e : A;
            },
            [],
            h.OL
        ),
        n = (0, s.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return null != e && (0, E.M5)(e, T.p9.TIER_2);
        });
    if (null != (0, v.kG)(t) || !!n) return (0, v.MR)(e, t);
}
function P() {
    return j([N.Ft.FREE_GUILD_BOOST_1_MONTH, N.Ft.FREE_GUILD_BOOST_3_MONTHS]);
}
let Z = (e) => {
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
            [t, n] = i.useState(Z(e)),
            r = (0, b.cG)({ location: 'Home' });
        i.useEffect(() => {
            if (!1 !== r) n(Z(e));
        }, [e, r]);
        let [a] = (0, g.US)(r ? t : []);
        return r ? (null != e && !0 === e.showNotification && (a === l.z.TENURE_REWARD_REDEEMABLE || a === l.z.TENURE_REWARD_PENDING) ? (0, v.Wb)(e.nitroTenureStatus) : null) : null;
    },
    M = () => {
        var e;
        let t = null === (e = S()) || void 0 === e ? void 0 : e.nitroTenureStatus,
            n = (0, b.cG)({ location: 'Home' }) && null != t && t === N.EB.REDEEMABLE,
            [i] = (0, g.US)(n ? [l.z.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
        return !!n && i === l.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
    },
    B = () => {
        let e = S(),
            t = i.useMemo(() => Z(e), [e]),
            [n] = (0, u.cv)(t),
            r = i.useRef(!1);
        return i.useCallback(() => {
            null != e &&
                !0 === e.showNotification &&
                (n === l.z.TENURE_REWARD_REDEEMABLE || n === l.z.TENURE_REWARD_PENDING) &&
                ((0, d.EW)(n),
                n === l.z.TENURE_REWARD_PENDING &&
                    !1 === r.current &&
                    (p.default.track(I.rMx.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
                        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
                        tenure_reward_id: e.tenureRewardSkuId,
                        reward_type: null == e ? void 0 : e.tenureRewardType,
                        redeemable_at: null == e ? void 0 : e.redeemableAt
                    }),
                    (r.current = !0)));
        }, [e, n]);
    };
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.CL,
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, s.e7)([_.Z], () => _.Z.isFetchingForApplication(e)),
        r = (0, s.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return null != e && (0, E.M5)(e, T.p9.TIER_2);
        }),
        a = i.useRef(!1);
    i.useEffect(() => {
        !1 === n && !0 === r && !1 === a.current && !0 === t && (o.yD(e), (a.current = !0));
    }, [n, r, e, t]);
}
function y() {
    var e;
    let t = (0, b.oY)({ location: 'Home' });
    w(T.CL), w(I.XAJ, t);
    let n = S(),
        r = null !== (e = null == n ? void 0 : n.showCard) && void 0 !== e && e;
    i.useEffect(() => {
        r && x.Z.forceRefreshIfOutdated();
    }, [r]);
}
