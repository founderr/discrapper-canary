t.d(n, {
    GG: function () {
        return m;
    },
    HQ: function () {
        return S;
    },
    JH: function () {
        return T;
    },
    QV: function () {
        return C;
    },
    YB: function () {
        return v;
    },
    _1: function () {
        return I;
    },
    _k: function () {
        return p;
    },
    jO: function () {
        return _;
    },
    oC: function () {
        return N;
    },
    qi: function () {
        return g;
    },
    r4: function () {
        return h;
    },
    sp: function () {
        return E;
    }
}),
    t(47120),
    t(653041);
var i = t(192379),
    r = t(442837),
    l = t(935369),
    o = t(38618);
t(823379);
var u = t(730647),
    a = t(423117),
    s = t(289393),
    c = t(697227);
let d = [],
    f = function (e) {
        let { refetchOnMount: n = !1, includeSoftDeleted: t = !0, countryCode: l, dontFetchWhileTrue: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionGroupListingsForGuildFetchState(e) : s.M.FETCHED)),
            f = i.useRef(n);
        return (
            i.useEffect(() => {
                if (null == e || !c || !0 === u) return;
                let i = s.Z.getSubscriptionGroupListingsForGuildFetchState(e);
                (n || i === s.M.NOT_FETCHED) &&
                    ((f.current = !1),
                    a.FP(e, {
                        includeSoftDeleted: t,
                        countryCode: l
                    }));
            }, [c, e, t, n, l, u]),
            { listingsLoaded: d === s.M.FETCHED && !0 !== f.current }
        );
    },
    p = function (e) {
        let { includeSoftDeleted: n = !1, includeUnpublished: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [s.Z],
            () => {
                if (null == e) return [];
                let i = s.Z.getSubscriptionGroupListing(e);
                if (null == i) return [];
                let r = [];
                for (let e of i.subscription_listings_ids) {
                    let i = s.Z.getSubscriptionListing(e);
                    if (null != i && (!i.soft_deleted || !!n)) (i.published || t) && r.push(i);
                }
                return r;
            },
            [e, n, t]
        );
    },
    _ = (e) => (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionListing(e) : null)),
    m = (e) => {
        let n = (0, u.f)('useGroupListingsForGuild');
        return (0, r.e7)([s.Z], () => (null != e && n ? s.Z.getSubscriptionGroupListingsForGuild(e) : d));
    },
    g = function (e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            f(e),
            (0, r.Wu)([s.Z], () => {
                let t = null != e ? s.Z.getSubscriptionGroupListingsForGuild(e) : d,
                    i = [];
                for (let e of t)
                    for (let t of e.subscription_listings_ids) {
                        let e = s.Z.getSubscriptionListing(t);
                        null != e && (n.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                    }
                return n.includeSoftDeleted && n.sortDeletedListingsLast ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)] : i;
            })
        );
    },
    E = (e) => {
        let [n, t] = i.useState(!1),
            l = i.useMemo(() => e.map(c.W), [e]),
            o = (0, r.Wu)([s.Z], () => l.filter((e) => !s.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return (
            i.useEffect(() => {
                !n &&
                    o.length > 0 &&
                    (t(!0),
                    Promise.all(o.map((e) => a.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        }));
            }, [n, o]),
            { loading: n }
        );
    },
    h = () => {
        let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
        return {
            error: t,
            submitting: e,
            deleteSubscriptionListing: async (e, t, i) => {
                try {
                    return n(!0), r(null), await a._d(e, t, i), !0;
                } catch (e) {
                    r(e);
                } finally {
                    n(!1);
                }
            }
        };
    },
    I = () => {
        let [e, n] = (0, l.Z)(a.AE),
            { loading: t, error: i } = n;
        return {
            error: i,
            submitting: t,
            archiveSubscriptionListing: e
        };
    },
    S = () => {
        let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
        return {
            error: t,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: t, groupListingId: i, listingId: l } = e;
                try {
                    return (
                        n(!0),
                        r(null),
                        await a.O0({
                            guildId: t,
                            groupListingId: i,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (e) {
                    r(e);
                } finally {
                    n(!1);
                }
            },
            clearError: () => r(null)
        };
    },
    v = (e) => (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionSettings(e) : void 0)),
    C = () => {
        let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, t) => {
                n(!0), r(null);
                try {
                    await a.W2(e, t);
                } catch (e) {
                    r(e);
                } finally {
                    n(!1);
                }
            }, []),
            error: t
        };
    },
    T = () => {
        let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
                n(!0), r(null);
                try {
                    await a.Qb(e);
                } catch (e) {
                    r(e);
                } finally {
                    n(!1);
                }
            }, []),
            error: t
        };
    },
    N = (e) => (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionTrial(e) : null));
