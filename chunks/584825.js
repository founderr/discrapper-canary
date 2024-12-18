n.d(t, {
    GG: function () {
        return g;
    },
    HQ: function () {
        return C;
    },
    JH: function () {
        return v;
    },
    QV: function () {
        return T;
    },
    YB: function () {
        return S;
    },
    _1: function () {
        return h;
    },
    _k: function () {
        return _;
    },
    jO: function () {
        return p;
    },
    oC: function () {
        return b;
    },
    qi: function () {
        return E;
    },
    r4: function () {
        return I;
    },
    sp: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(442837),
    o = n(935369),
    l = n(38618);
n(823379);
var u = n(730647),
    a = n(423117),
    s = n(289393),
    c = n(697227);
let d = [],
    f = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: o, dontFetchWhileTrue: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, r.e7)([l.Z], () => l.Z.isConnected()),
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
                        countryCode: o
                    }));
            }, [c, e, n, t, o, u]),
            { listingsLoaded: d === s.M.FETCHED && !0 !== f.current }
        );
    },
    _ = function (e) {
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
    p = (e) => (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionListing(e) : null)),
    g = (e) => {
        let t = (0, u.f)('useGroupListingsForGuild');
        return (0, r.e7)([s.Z], () => (null != e && t ? s.Z.getSubscriptionGroupListingsForGuild(e) : d));
    },
    E = function (e) {
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
    m = (e) => {
        let [t, n] = i.useState(!1),
            o = i.useMemo(() => e.map(c.W), [e]),
            l = (0, r.Wu)([s.Z], () => o.filter((e) => !s.Z.getDidFetchListingForSubscriptionPlanId(e)), [o]);
        return (
            i.useEffect(() => {
                !t &&
                    l.length > 0 &&
                    (n(!0),
                    Promise.all(l.map((e) => a.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, l]),
            { loading: t }
        );
    },
    I = () => {
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
    h = () => {
        let [e, t] = (0, o.Z)(a.AE),
            { loading: n, error: i } = t;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    C = () => {
        let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: i, listingId: o } = e;
                try {
                    return (
                        t(!0),
                        r(null),
                        await a.O0({
                            guildId: n,
                            groupListingId: i,
                            listingId: o,
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
    S = (e) => (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionSettings(e) : void 0)),
    T = () => {
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
    v = () => {
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
    b = (e) => (0, r.e7)([s.Z], () => (null != e ? s.Z.getSubscriptionTrial(e) : null));
