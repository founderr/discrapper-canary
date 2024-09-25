n.d(t, {
    CR: function () {
        return L;
    },
    F5: function () {
        return R;
    },
    _k: function () {
        return v;
    },
    h6: function () {
        return C;
    },
    jd: function () {
        return r;
    },
    qz: function () {
        return b;
    },
    sp: function () {
        return y;
    }
});
var r,
    i = n(653041);
var a = n(47120);
var o = n(470079),
    s = n(442837),
    l = n(496929),
    u = n(430824),
    c = n(496675),
    d = n(509545),
    _ = n(78839),
    E = n(580130),
    f = n(55563),
    h = n(801249),
    p = n(106976),
    m = n(307643),
    I = n(488915),
    T = n(171246),
    g = n(981631);
let S = 2592000000;
!(function (e) {
    (e[(e.NOT_LOADED = 0)] = 'NOT_LOADED'), (e[(e.LOADING = 1)] = 'LOADING'), (e[(e.LOADED = 2)] = 'LOADED'), (e[(e.ERROR = 3)] = 'ERROR');
})(r || (r = {}));
let A = (e) => {
        let { guildId: t, canFetch: n = !0, forceRefetch: r = !1 } = e,
            i = (0, s.e7)([I.Z], () => (null != t ? I.Z.getEntitlementsForGuildFetchState(t) : null), [t]);
        return (
            o.useEffect(() => {
                if (null == t || t === g.ME) return;
                let e = I.Z.getEntitlementsForGuildFetchState(t);
                n && (e === I.M.NOT_FETCHED || r) && (0, p.i1)(t);
            }, [t, n, r]),
            { entitlementsLoaded: i === I.M.FETCHED }
        );
    },
    v = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 };
        return (0, s.Wu)(
            [I.Z],
            () => {
                if (null == e) return [];
                let n = I.Z.getSubscriptionGroupListing(e);
                if (null == n) return [];
                let r = [];
                for (let e of n.subscription_listings_ids) {
                    let n = I.Z.getSubscriptionListing(e);
                    if (null != n) (!n.soft_deleted || t.includeSoftDeleted) && r.push(n);
                }
                return r;
            },
            [e, t.includeSoftDeleted]
        );
    },
    N = [],
    O = [];
function R(e, t, n) {
    let r = (0, s.e7)([_.ZP], () => _.ZP.getSubscriptions()),
        {
            subscriptionGroupListing: i,
            guildEntitlements: a,
            userEntitlements: l
        } = (0, s.cj)(
            [I.Z, E.Z],
            () => {
                var r, i;
                return {
                    subscriptionGroupListing: null != n ? I.Z.getSubscriptionGroupListing(n) : null,
                    guildEntitlements: null != e && null != t ? I.Z.getApplicationEntitlementsForGuild(e, t) : N,
                    userEntitlements: null != e && null !== (i = null === (r = E.Z.getForApplication(e)) || void 0 === r ? void 0 : r.values()) && void 0 !== i ? i : O
                };
            },
            [e, t, n]
        ),
        u = o.useMemo(() => [...a, ...l], [a, l]),
        c = null == i ? void 0 : i.subscription_listings,
        { activeSubscriptionListing: d, activeEntitlement: f } = o.useMemo(() => {
            if (null != c) {
                for (let e of u)
                    for (let n of c)
                        if ((0, T.AQ)(n, e, t))
                            return {
                                activeSubscriptionListing: n,
                                activeEntitlement: e
                            };
            }
            return {
                activeSubscriptionListing: null,
                activeEntitlement: null
            };
        }, [u, c, t]);
    return {
        activeSubscription: o.useMemo(() => {
            if (null == r) return null;
            let e = null == d ? void 0 : d.subscription_plans[0].id;
            for (let t of Object.values(r)) if (t.type === g.NYc.APPLICATION && t.items[0].planId === e) return t;
            return null;
        }, [d, r]),
        activeSubscriptionListing: d,
        activeEntitlement: f,
        subscriptionGroupListing: i
    };
}
function C(e) {
    var t;
    let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : g.lds,
        { entitlementsLoaded: r } = A({
            guildId: n,
            canFetch: (0, s.e7)([c.Z], () => c.Z.can(g.Plq.ADMINISTRATOR, e))
        }),
        i = (0, s.e7)([h.Z], () => h.Z.getLastGuildDismissedTime(n)),
        a = (0, s.Wu)([I.Z], () => {
            let e = I.Z.getEntitlementsForGuild(n),
                t = I.Z.getEntitlementsForGuild(n, !1),
                r = e.map((e) => e.applicationId);
            return t.filter((e) => !r.includes(e.applicationId));
        }),
        l = (0, s.cj)([f.Z], () => f.Z.getSKUs()),
        u = o.useMemo(
            () =>
                a.filter((e) => {
                    let t = l[e.skuId];
                    return null != t && t.available;
                }),
            [a, l]
        );
    return r ? u.filter((e) => null != e.endsAt && e.endsAt.getTime() > Math.max(null != i ? i : 0, Date.now() - S)) : [];
}
let y = (e) => {
        let [t, n] = o.useState(!1),
            r = o.useMemo(() => e.map(T.bZ), [e]),
            i = (0, s.Wu)([d.Z], () => r.filter((e) => null == d.Z.get(e)), [r]);
        return (
            o.useEffect(() => {
                i.length > 0 &&
                    (n(!0),
                    Promise.all(i.map((e) => (0, p.vY)(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [i]),
            { loading: t }
        );
    },
    b = () => {
        let [e, t] = o.useState(0);
        return (
            o.useEffect(() => {
                t(1),
                    (0, l.p0)({
                        withSku: !0,
                        withApplication: !0,
                        entitlementType: g.qc2.APPLICATION_SUBSCRIPTION
                    })
                        .catch(() => {
                            t(3);
                        })
                        .then(() => {
                            t(2);
                        });
            }, []),
            { loadState: e }
        );
    };
function L(e, t) {
    let n = (0, s.e7)([u.Z], () => u.Z.isLoaded()),
        [r, i] = o.useState([]);
    return (
        o.useEffect(() => {
            null == t &&
                null != e &&
                n &&
                (0, m.tn)(e).then((e) => {
                    i(e.map((e) => u.Z.getGuild(e)).filter((e) => null != e));
                });
        }, [e, t, n]),
        r
    );
}
