t.d(n, {
    C9: function () {
        return R;
    },
    CR: function () {
        return j;
    },
    Ev: function () {
        return b;
    },
    h6: function () {
        return C;
    },
    jd: function () {
        return l;
    },
    qz: function () {
        return A;
    },
    sp: function () {
        return O;
    }
}),
    t(653041),
    t(47120);
var l,
    i,
    a = t(470079),
    r = t(512722),
    o = t.n(r),
    s = t(442837),
    u = t(496929),
    c = t(430824),
    d = t(496675),
    p = t(509545),
    f = t(78839),
    m = t(580130),
    v = t(55563),
    I = t(801249),
    h = t(106976),
    S = t(307643),
    x = t(488915),
    N = t(171246),
    T = t(981631);
let Z = 12633 == t.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let g = (e) => {
        let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
            i = (0, s.e7)([x.Z], () => (null != n ? x.Z.getEntitlementsForGuildFetchState(n) : null), [n]);
        return (
            a.useEffect(() => {
                if (null == n || n === T.ME) return;
                let e = x.Z.getEntitlementsForGuildFetchState(n);
                t && (e === x.M.NOT_FETCHED || l) && (0, h.i1)(n);
            }, [n, t, l]),
            { entitlementsLoaded: i === x.M.FETCHED }
        );
    },
    E = [],
    _ = [];
function R(e, n) {
    o()(null == e || e.type === T.epS.SUBSCRIPTION_GROUP, 'SKU must be a subscription group');
    let t = null == e ? void 0 : e.bundledSkuIds,
        l = null == e ? void 0 : e.applicationId,
        i = (0, s.e7)([f.ZP], () => f.ZP.getSubscriptions(), []),
        r = (0, s.Wu)([x.Z], () => (null != l && null != n ? x.Z.getApplicationEntitlementsForGuild(l, n) : E), [l, n]),
        u = (0, s.Wu)(
            [m.Z],
            () => {
                var e;
                return null != l ? [...(null !== (e = m.Z.getForApplication(l)) && void 0 !== e ? e : [])] : _;
            },
            [l]
        ),
        c = a.useMemo(() => [...r, ...u].filter((e) => (null == t ? void 0 : t.includes(e.skuId)) && e.isValid(null, v.Z)), [r, u, t]);
    return (0, s.cj)(
        [p.Z, v.Z],
        () => {
            let e, l;
            if (null == i) return {};
            for (let a of Object.values(i)) {
                if (null == l) {
                    let e = (0, N.z0)(p.Z, null != t ? t : [], a);
                    null != e && (l = { upcomingSubscriptionPlan: e });
                }
                if (null == e)
                    for (let t of c) {
                        let l = (0, N.PB)(p.Z, v.Z, a, t, n);
                        if (null != l) {
                            e = {
                                activeSubscription: a,
                                activeSubscriptionPlan: l,
                                activeEntitlement: t
                            };
                            break;
                        }
                    }
                if (null != e && null != l) break;
            }
            return {
                ...e,
                ...l
            };
        },
        [i, t, c, n]
    );
}
function C(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : T.lds,
        { entitlementsLoaded: l } = g({
            guildId: t,
            canFetch: (0, s.e7)([d.Z], () => d.Z.can(T.Plq.ADMINISTRATOR, e))
        }),
        i = (0, s.e7)([I.Z], () => I.Z.getLastGuildDismissedTime(t)),
        r = (0, s.Wu)([x.Z], () => {
            let e = x.Z.getEntitlementsForGuild(t),
                n = x.Z.getEntitlementsForGuild(t, !1),
                l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
        }),
        o = (0, s.cj)([v.Z], () => v.Z.getSKUs()),
        u = a.useMemo(
            () =>
                r.filter((e) => {
                    let n = o[e.skuId];
                    return null != n && n.available;
                }),
            [r, o]
        );
    return l ? u.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - Z)) : [];
}
let O = (e) => {
        let [n, t] = a.useState(!1),
            l = a.useMemo(() => e.map(N.bZ), [e]);
        return (
            a.useEffect(() => {
                t(!0),
                    Promise.all(l.map((e) => (0, h.vY)(e)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        });
            }, [l]),
            { loading: n }
        );
    },
    A = () => {
        let [e, n] = a.useState(0);
        return (
            a.useEffect(() => {
                n(1),
                    Promise.all([
                        (0, u.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: T.qc2.APPLICATION_SUBSCRIPTION
                        }),
                        (0, u.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: T.qc2.PURCHASE
                        })
                    ])
                        .catch(() => {
                            n(3);
                        })
                        .then(() => {
                            n(2);
                        });
            }, []),
            { loadState: e }
        );
    };
function j(e, n) {
    let [t, l] = a.useState([]);
    return (
        a.useEffect(() => {
            null != e && (0, S.tn)(e, n).then(l);
        }, [e, n]),
        (0, s.Wu)([c.Z], () => t.map((e) => c.Z.getGuild(e)).filter((e) => null != e), [t])
    );
}
function b(e, n) {
    return (0, s.e7)(
        [f.ZP, v.Z, p.Z],
        () => {
            let t = new Set();
            for (let n of e) {
                let e = v.Z.get(n);
                null != e && e.isAvailable() && !1 === e.deleted && t.add(n);
            }
            let l = f.ZP.getActiveApplicationSubscriptions();
            return null == l
                ? void 0
                : l.find((e) => {
                      var l;
                      if (null != n && (null === (l = e.metadata) || void 0 === l ? void 0 : l.application_subscription_guild_id) !== n) return !1;
                      for (let n of e.items.map((e) => p.Z.get(e.planId))) if (null != n && t.has(n.skuId)) return !0;
                      return !1;
                  });
        },
        [e, n]
    );
}
