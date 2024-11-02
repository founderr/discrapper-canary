e.d(n, {
    GG: function () {
        return E;
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
        return _;
    },
    jO: function () {
        return p;
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
        return m;
    }
}),
    e(47120),
    e(653041);
var i = e(192379),
    r = e(442837),
    l = e(935369),
    o = e(38618);
e(823379);
var u = e(730647),
    a = e(423117),
    s = e(289393),
    c = e(697227);
let d = [],
    f = function (t) {
        let { refetchOnMount: n = !1, includeSoftDeleted: e = !0, countryCode: l, dontFetchWhileTrue: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, r.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionGroupListingsForGuildFetchState(t) : s.M.FETCHED)),
            f = i.useRef(n);
        return (
            i.useEffect(() => {
                if (null == t || !c || !0 === u) return;
                let i = s.Z.getSubscriptionGroupListingsForGuildFetchState(t);
                (n || i === s.M.NOT_FETCHED) &&
                    ((f.current = !1),
                    a.FP(t, {
                        includeSoftDeleted: e,
                        countryCode: l
                    }));
            }, [c, t, e, n, l, u]),
            { listingsLoaded: d === s.M.FETCHED && !0 !== f.current }
        );
    },
    _ = function (t) {
        let { includeSoftDeleted: n = !1, includeUnpublished: e = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [s.Z],
            () => {
                if (null == t) return [];
                let i = s.Z.getSubscriptionGroupListing(t);
                if (null == i) return [];
                let r = [];
                for (let t of i.subscription_listings_ids) {
                    let i = s.Z.getSubscriptionListing(t);
                    if (null != i && (!i.soft_deleted || !!n)) (i.published || e) && r.push(i);
                }
                return r;
            },
            [t, n, e]
        );
    },
    p = (t) => (0, r.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionListing(t) : null)),
    E = (t) => {
        let n = (0, u.f)('useGroupListingsForGuild');
        return (0, r.e7)([s.Z], () => (null != t && n ? s.Z.getSubscriptionGroupListingsForGuild(t) : d));
    },
    g = function (t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            f(t),
            (0, r.Wu)([s.Z], () => {
                let e = null != t ? s.Z.getSubscriptionGroupListingsForGuild(t) : d,
                    i = [];
                for (let t of e)
                    for (let e of t.subscription_listings_ids) {
                        let t = s.Z.getSubscriptionListing(e);
                        null != t && (n.includeSoftDeleted || !t.soft_deleted) && i.push(t);
                    }
                return n.includeSoftDeleted && n.sortDeletedListingsLast ? [...i.filter((t) => !t.soft_deleted), ...i.filter((t) => t.soft_deleted)] : i;
            })
        );
    },
    m = (t) => {
        let [n, e] = i.useState(!1),
            l = i.useMemo(() => t.map(c.W), [t]),
            o = (0, r.Wu)([s.Z], () => l.filter((t) => !s.Z.getDidFetchListingForSubscriptionPlanId(t)), [l]);
        return (
            i.useEffect(() => {
                !n &&
                    o.length > 0 &&
                    (e(!0),
                    Promise.all(o.map((t) => a.vY(t)))
                        .catch(() => {})
                        .then(() => {
                            e(!1);
                        }));
            }, [n, o]),
            { loading: n }
        );
    },
    h = () => {
        let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
        return {
            error: e,
            submitting: t,
            deleteSubscriptionListing: async (t, e, i) => {
                try {
                    return n(!0), r(null), await a._d(t, e, i), !0;
                } catch (t) {
                    r(t);
                } finally {
                    n(!1);
                }
            }
        };
    },
    I = () => {
        let [t, n] = (0, l.Z)(a.AE),
            { loading: e, error: i } = n;
        return {
            error: i,
            submitting: e,
            archiveSubscriptionListing: t
        };
    },
    S = () => {
        let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
        return {
            error: e,
            submitting: t,
            publishSubscriptionListing: async (t) => {
                let { guildId: e, groupListingId: i, listingId: l } = t;
                try {
                    return (
                        n(!0),
                        r(null),
                        await a.O0({
                            guildId: e,
                            groupListingId: i,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (t) {
                    r(t);
                } finally {
                    n(!1);
                }
            },
            clearError: () => r(null)
        };
    },
    v = (t) => (0, r.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionSettings(t) : void 0)),
    C = () => {
        let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
        return {
            loading: t,
            updateSubscriptionsSettings: i.useCallback(async (t, e) => {
                n(!0), r(null);
                try {
                    await a.W2(t, e);
                } catch (t) {
                    r(t);
                } finally {
                    n(!1);
                }
            }, []),
            error: e
        };
    },
    T = () => {
        let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
        return {
            loading: t,
            fetchSubscriptionsSettings: i.useCallback(async (t) => {
                n(!0), r(null);
                try {
                    await a.Qb(t);
                } catch (t) {
                    r(t);
                } finally {
                    n(!1);
                }
            }, []),
            error: e
        };
    },
    N = (t) => (0, r.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionTrial(t) : null));
