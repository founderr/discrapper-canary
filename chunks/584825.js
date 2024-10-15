t.d(n, {
    GG: function () {
        return I;
    },
    HQ: function () {
        return N;
    },
    JH: function () {
        return m;
    },
    QV: function () {
        return g;
    },
    YB: function () {
        return A;
    },
    _1: function () {
        return p;
    },
    _k: function () {
        return E;
    },
    jO: function () {
        return f;
    },
    oC: function () {
        return L;
    },
    qi: function () {
        return S;
    },
    r4: function () {
        return C;
    },
    sp: function () {
        return T;
    }
}),
    t(47120),
    t(653041);
var i = t(470079),
    r = t(442837),
    l = t(935369),
    o = t(38618);
t(823379);
var u = t(730647),
    s = t(423117),
    a = t(289393),
    c = t(697227);
let d = [],
    _ = function (e) {
        let { refetchOnMount: n = !1, includeSoftDeleted: t = !0, countryCode: l, dontFetchWhileTrue: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, r.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionGroupListingsForGuildFetchState(e) : a.M.FETCHED)),
            _ = i.useRef(n);
        return (
            i.useEffect(() => {
                if (null == e || !c || !0 === u) return;
                let i = a.Z.getSubscriptionGroupListingsForGuildFetchState(e);
                (n || i === a.M.NOT_FETCHED) &&
                    ((_.current = !1),
                    s.FP(e, {
                        includeSoftDeleted: t,
                        countryCode: l
                    }));
            }, [c, e, t, n, l, u]),
            { listingsLoaded: d === a.M.FETCHED && !0 !== _.current }
        );
    },
    E = function (e) {
        let { includeSoftDeleted: n = !1, includeUnpublished: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.Wu)(
            [a.Z],
            () => {
                if (null == e) return [];
                let i = a.Z.getSubscriptionGroupListing(e);
                if (null == i) return [];
                let r = [];
                for (let e of i.subscription_listings_ids) {
                    let i = a.Z.getSubscriptionListing(e);
                    if (null != i && (!i.soft_deleted || !!n)) (i.published || t) && r.push(i);
                }
                return r;
            },
            [e, n, t]
        );
    },
    f = (e) => (0, r.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionListing(e) : null)),
    I = (e) => {
        let n = (0, u.f)('useGroupListingsForGuild');
        return (0, r.e7)([a.Z], () => (null != e && n ? a.Z.getSubscriptionGroupListingsForGuild(e) : d));
    },
    S = function (e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            _(e),
            (0, r.Wu)([a.Z], () => {
                let t = null != e ? a.Z.getSubscriptionGroupListingsForGuild(e) : d,
                    i = [];
                for (let e of t)
                    for (let t of e.subscription_listings_ids) {
                        let e = a.Z.getSubscriptionListing(t);
                        null != e && (n.includeSoftDeleted || !e.soft_deleted) && i.push(e);
                    }
                return n.includeSoftDeleted && n.sortDeletedListingsLast ? [...i.filter((e) => !e.soft_deleted), ...i.filter((e) => e.soft_deleted)] : i;
            })
        );
    },
    T = (e) => {
        let [n, t] = i.useState(!1),
            l = i.useMemo(() => e.map(c.W), [e]),
            o = (0, r.Wu)([a.Z], () => l.filter((e) => !a.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return (
            i.useEffect(() => {
                !n &&
                    o.length > 0 &&
                    (t(!0),
                    Promise.all(o.map((e) => s.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            t(!1);
                        }));
            }, [n, o]),
            { loading: n }
        );
    },
    C = () => {
        let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
        return {
            error: t,
            submitting: e,
            deleteSubscriptionListing: async (e, t, i) => {
                try {
                    return n(!0), r(null), await s._d(e, t, i), !0;
                } catch (e) {
                    r(e);
                } finally {
                    n(!1);
                }
            }
        };
    },
    p = () => {
        let [e, n] = (0, l.Z)(s.AE),
            { loading: t, error: i } = n;
        return {
            error: i,
            submitting: t,
            archiveSubscriptionListing: e
        };
    },
    N = () => {
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
                        await s.O0({
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
    A = (e) => (0, r.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionSettings(e) : void 0)),
    g = () => {
        let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, t) => {
                n(!0), r(null);
                try {
                    await s.W2(e, t);
                } catch (e) {
                    r(e);
                } finally {
                    n(!1);
                }
            }, []),
            error: t
        };
    },
    m = () => {
        let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
                n(!0), r(null);
                try {
                    await s.Qb(e);
                } catch (e) {
                    r(e);
                } finally {
                    n(!1);
                }
            }, []),
            error: t
        };
    },
    L = (e) => (0, r.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionTrial(e) : null));
