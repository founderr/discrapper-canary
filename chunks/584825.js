t.d(n, {
    GG: function () {
        return I;
    },
    HQ: function () {
        return g;
    },
    JH: function () {
        return A;
    },
    QV: function () {
        return m;
    },
    YB: function () {
        return N;
    },
    _1: function () {
        return C;
    },
    _k: function () {
        return E;
    },
    jO: function () {
        return f;
    },
    oC: function () {
        return h;
    },
    qi: function () {
        return S;
    },
    r4: function () {
        return T;
    },
    sp: function () {
        return p;
    }
}),
    t(47120),
    t(653041);
var r = t(470079),
    i = t(442837),
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
            c = (0, i.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, i.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionGroupListingsForGuildFetchState(e) : a.M.FETCHED)),
            _ = r.useRef(n);
        return (
            r.useEffect(() => {
                if (null == e || !c || !0 === u) return;
                let r = a.Z.getSubscriptionGroupListingsForGuildFetchState(e);
                (n || r === a.M.NOT_FETCHED) &&
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
        return (0, i.Wu)(
            [a.Z],
            () => {
                if (null == e) return [];
                let r = a.Z.getSubscriptionGroupListing(e);
                if (null == r) return [];
                let i = [];
                for (let e of r.subscription_listings_ids) {
                    let r = a.Z.getSubscriptionListing(e);
                    if (null != r && (!r.soft_deleted || !!n)) (r.published || t) && i.push(r);
                }
                return i;
            },
            [e, n, t]
        );
    },
    f = (e) => (0, i.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionListing(e) : null)),
    I = (e) => {
        let n = (0, u.f)('useGroupListingsForGuild');
        return (0, i.e7)([a.Z], () => (null != e && n ? a.Z.getSubscriptionGroupListingsForGuild(e) : d));
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
            (0, i.Wu)([a.Z], () => {
                let t = null != e ? a.Z.getSubscriptionGroupListingsForGuild(e) : d,
                    r = [];
                for (let e of t)
                    for (let t of e.subscription_listings_ids) {
                        let e = a.Z.getSubscriptionListing(t);
                        null != e && (n.includeSoftDeleted || !e.soft_deleted) && r.push(e);
                    }
                return n.includeSoftDeleted && n.sortDeletedListingsLast ? [...r.filter((e) => !e.soft_deleted), ...r.filter((e) => e.soft_deleted)] : r;
            })
        );
    },
    p = (e) => {
        let [n, t] = r.useState(!1),
            l = r.useMemo(() => e.map(c.W), [e]),
            o = (0, i.Wu)([a.Z], () => l.filter((e) => !a.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return (
            r.useEffect(() => {
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
    T = () => {
        let [e, n] = r.useState(!1),
            [t, i] = r.useState(null);
        return {
            error: t,
            submitting: e,
            deleteSubscriptionListing: async (e, t, r) => {
                try {
                    return n(!0), i(null), await s._d(e, t, r), !0;
                } catch (e) {
                    i(e);
                } finally {
                    n(!1);
                }
            }
        };
    },
    C = () => {
        let [e, n] = (0, l.Z)(s.AE),
            { loading: t, error: r } = n;
        return {
            error: r,
            submitting: t,
            archiveSubscriptionListing: e
        };
    },
    g = () => {
        let [e, n] = r.useState(!1),
            [t, i] = r.useState(null);
        return {
            error: t,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: t, groupListingId: r, listingId: l } = e;
                try {
                    return (
                        n(!0),
                        i(null),
                        await s.O0({
                            guildId: t,
                            groupListingId: r,
                            listingId: l,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (e) {
                    i(e);
                } finally {
                    n(!1);
                }
            },
            clearError: () => i(null)
        };
    },
    N = (e) => (0, i.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionSettings(e) : void 0)),
    m = () => {
        let [e, n] = r.useState(!1),
            [t, i] = r.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: r.useCallback(async (e, t) => {
                n(!0), i(null);
                try {
                    await s.W2(e, t);
                } catch (e) {
                    i(e);
                } finally {
                    n(!1);
                }
            }, []),
            error: t
        };
    },
    A = () => {
        let [e, n] = r.useState(!1),
            [t, i] = r.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: r.useCallback(async (e) => {
                n(!0), i(null);
                try {
                    await s.Qb(e);
                } catch (e) {
                    i(e);
                } finally {
                    n(!1);
                }
            }, []),
            error: t
        };
    },
    h = (e) => (0, i.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionTrial(e) : null));
