t.d(n, {
    CR: function () {
        return O;
    },
    F5: function () {
        return Z;
    },
    _k: function () {
        return N;
    },
    h6: function () {
        return C;
    },
    jd: function () {
        return l;
    },
    qz: function () {
        return L;
    },
    sp: function () {
        return A;
    }
}),
    t(653041),
    t(47120);
var l,
    i,
    r = t(470079),
    s = t(442837),
    o = t(496929),
    a = t(430824),
    u = t(496675),
    c = t(509545),
    d = t(78839),
    f = t(580130),
    p = t(55563),
    m = t(801249),
    v = t(106976),
    I = t(307643),
    S = t(488915),
    h = t(171246),
    g = t(981631);
let x = 12633 == t.j ? 2592000000 : null;
((i = l || (l = {}))[(i.NOT_LOADED = 0)] = 'NOT_LOADED'), (i[(i.LOADING = 1)] = 'LOADING'), (i[(i.LOADED = 2)] = 'LOADED'), (i[(i.ERROR = 3)] = 'ERROR');
let _ = (e) => {
        let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
            i = (0, s.e7)([S.Z], () => (null != n ? S.Z.getEntitlementsForGuildFetchState(n) : null), [n]);
        return (
            r.useEffect(() => {
                if (null == n || n === g.ME) return;
                let e = S.Z.getEntitlementsForGuildFetchState(n);
                t && (e === S.M.NOT_FETCHED || l) && (0, v.i1)(n);
            }, [n, t, l]),
            { entitlementsLoaded: i === S.M.FETCHED }
        );
    },
    N = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 };
        return (0, s.Wu)(
            [S.Z],
            () => {
                if (null == e) return [];
                let t = S.Z.getSubscriptionGroupListing(e);
                if (null == t) return [];
                let l = [];
                for (let e of t.subscription_listings_ids) {
                    let t = S.Z.getSubscriptionListing(e);
                    if (null != t) (!t.soft_deleted || n.includeSoftDeleted) && l.push(t);
                }
                return l;
            },
            [e, n.includeSoftDeleted]
        );
    },
    E = [],
    T = [];
function Z(e, n, t) {
    let l = (0, s.e7)([d.ZP], () => d.ZP.getSubscriptions()),
        {
            subscriptionGroupListing: i,
            guildEntitlements: o,
            userEntitlements: a
        } = (0, s.cj)(
            [S.Z, f.Z],
            () => {
                var l, i;
                return {
                    subscriptionGroupListing: null != t ? S.Z.getSubscriptionGroupListing(t) : null,
                    guildEntitlements: null != e && null != n ? S.Z.getApplicationEntitlementsForGuild(e, n) : E,
                    userEntitlements: null != e && null !== (i = null === (l = f.Z.getForApplication(e)) || void 0 === l ? void 0 : l.values()) && void 0 !== i ? i : T
                };
            },
            [e, n, t]
        ),
        u = r.useMemo(() => [...o, ...a], [o, a]),
        c = null == i ? void 0 : i.subscription_listings,
        { activeSubscriptionListing: p, activeEntitlement: m } = r.useMemo(() => {
            if (null != c) {
                for (let e of u)
                    for (let t of c)
                        if ((0, h.AQ)(t, e, n))
                            return {
                                activeSubscriptionListing: t,
                                activeEntitlement: e
                            };
            }
            return {
                activeSubscriptionListing: null,
                activeEntitlement: null
            };
        }, [u, c, n]);
    return {
        activeSubscription: r.useMemo(() => {
            if (null == l) return null;
            let e = null == p ? void 0 : p.subscription_plans[0].id;
            for (let n of Object.values(l)) if (n.type === g.NYc.APPLICATION && n.items[0].planId === e) return n;
            return null;
        }, [p, l]),
        activeSubscriptionListing: p,
        activeEntitlement: m,
        subscriptionGroupListing: i
    };
}
function C(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : g.lds,
        { entitlementsLoaded: l } = _({
            guildId: t,
            canFetch: (0, s.e7)([u.Z], () => u.Z.can(g.Plq.ADMINISTRATOR, e))
        }),
        i = (0, s.e7)([m.Z], () => m.Z.getLastGuildDismissedTime(t)),
        o = (0, s.Wu)([S.Z], () => {
            let e = S.Z.getEntitlementsForGuild(t),
                n = S.Z.getEntitlementsForGuild(t, !1),
                l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
        }),
        a = (0, s.cj)([p.Z], () => p.Z.getSKUs()),
        c = r.useMemo(
            () =>
                o.filter((e) => {
                    let n = a[e.skuId];
                    return null != n && n.available;
                }),
            [o, a]
        );
    return l ? c.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - x)) : [];
}
let A = (e) => {
        let [n, t] = r.useState(!1),
            l = r.useMemo(() => e.map(h.bZ), [e]),
            i = (0, s.Wu)([c.Z], () => l.filter((e) => null == c.Z.get(e)), [l]);
        return (
            r.useEffect(() => {
                i.length > 0 &&
                    (t(!0),
                    Promise.all(i.map((e) => (0, v.vY)(e)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        }));
            }, [i]),
            { loading: n }
        );
    },
    L = () => {
        let [e, n] = r.useState(0);
        return (
            r.useEffect(() => {
                n(1),
                    (0, o.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: g.qc2.APPLICATION_SUBSCRIPTION
                    })
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
function O(e, n) {
    let t = (0, s.e7)([a.Z], () => a.Z.isLoaded()),
        [l, i] = r.useState([]);
    return (
        r.useEffect(() => {
            null == n &&
                null != e &&
                t &&
                (0, I.tn)(e).then((e) => {
                    i(e.map((e) => a.Z.getGuild(e)).filter((e) => null != e));
                });
        }, [e, n, t]),
        l
    );
}
