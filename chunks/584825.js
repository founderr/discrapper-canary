n.d(t, {
    GG: function () {
        return E;
    },
    HQ: function () {
        return I;
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
        return S;
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
        return m;
    },
    sp: function () {
        return h;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(442837),
    l = n(935369),
    o = n(38618);
n(823379);
var u = n(730647),
    a = n(423117),
    s = n(289393),
    c = n(697227);
let d = [],
    f = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: l, dontFetchWhileTrue: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionGroupListingsForGuildFetchState(e) : s.M.FETCHED)),
            f = i.useRef(t);
        return (
            i.useEffect(() => {
                if (null == e || !c || !0 === u) return;
                let i = s.Z.getSubscriptionGroupListingsForGuildFetchState(e);
                (t || i === s.M.NOT_FETCHED) &&
                    ((f.current = !1),
                    a.FP(e, {
                        includeSoftDeleted: n,
                        countryCode: l
                    }));
            }, [c, e, n, t, l, u]),
            { listingsLoaded: d === s.M.FETCHED && !0 !== f.current }
        );
    },
    p = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [s.Z],
            () => {
                if (null == e) return [];
                let i = s.Z.getSubscriptionGroupListing(e);
                if (null == i) return [];
                let r = [];
                for (let e of i.subscription_listings_ids) {
                    let i = s.Z.getSubscriptionListing(e);
                    if (null != i && (!i.soft_deleted || !!t)) (i.published || n) && r.push(i);
                }
                return r;
            },
            [e, t, n]
        );
    },
    _ = (e) => (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionListing(e) : null)),
    E = (e) => {
        let t = (0, u.f)('useGroupListingsForGuild');
        return (0, r.e7)([s.Z], () => (null != e && t ? s.Z.getSubscriptionGroupListingsForGuild(e) : d));
    },
    g = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            f(e),
            (0, r.Wu)([s.Z], () => {
                let n = null != e ? s.Z.getSubscriptionGroupListingsForGuild(e) : d,
                    i = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = s.Z.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)] : i;
            })
        );
    },
    h = (e) => {
        let [t, n] = i.useState(!1),
            l = i.useMemo(() => e.map(c.W), [e]),
            o = (0, r.Wu)([s.Z], () => l.filter((e) => !s.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return (
            i.useEffect(() => {
                !t &&
                    o.length > 0 &&
                    (n(!0),
                    Promise.all(o.map((e) => a.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, o]),
            { loading: t }
        );
    },
    m = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
                try {
                    return t(!0), r(null), await a._d(e, n, i), !0;
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }
        };
    },
    S = () => {
        let [e, t] = (0, l.Z)(a.AE),
            { loading: n, error: i } = t;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    I = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: i, listingId: l } = e;
                try {
                    return (
                        t(!0),
                        r(null),
                        await a.O0({
                            guildId: n,
                            groupListingId: i,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            },
            clearError: () => r(null)
        };
    },
    v = (e) => (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionSettings(e) : void 0)),
    C = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
                t(!0), r(null);
                try {
                    await a.W2(e, n);
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    T = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
                t(!0), r(null);
                try {
                    await a.Qb(e);
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    N = (e) => (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionTrial(e) : null));
