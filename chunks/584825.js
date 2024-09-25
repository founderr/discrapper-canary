n.d(t, {
    GG: function () {
        return m;
    },
    HQ: function () {
        return A;
    },
    JH: function () {
        return O;
    },
    QV: function () {
        return N;
    },
    YB: function () {
        return v;
    },
    _1: function () {
        return S;
    },
    _k: function () {
        return h;
    },
    jO: function () {
        return p;
    },
    oC: function () {
        return R;
    },
    qi: function () {
        return I;
    },
    r4: function () {
        return g;
    },
    sp: function () {
        return T;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(470079),
    o = n(442837),
    s = n(935369),
    l = n(38618);
n(823379);
var u = n(730647),
    c = n(423117),
    d = n(289393),
    _ = n(697227);
let E = [],
    f = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: r, dontFetchWhileTrue: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = (0, o.e7)([l.Z], () => l.Z.isConnected()),
            u = (0, o.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionGroupListingsForGuildFetchState(e) : d.M.FETCHED)),
            _ = a.useRef(t);
        return (
            a.useEffect(() => {
                if (null == e || !s || !0 === i) return;
                let a = d.Z.getSubscriptionGroupListingsForGuildFetchState(e);
                (t || a === d.M.NOT_FETCHED) &&
                    ((_.current = !1),
                    c.FP(e, {
                        includeSoftDeleted: n,
                        countryCode: r
                    }));
            }, [s, e, n, t, r, i]),
            { listingsLoaded: u === d.M.FETCHED && !0 !== _.current }
        );
    },
    h = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, o.Wu)(
            [d.Z],
            () => {
                if (null == e) return [];
                let r = d.Z.getSubscriptionGroupListing(e);
                if (null == r) return [];
                let i = [];
                for (let e of r.subscription_listings_ids) {
                    let r = d.Z.getSubscriptionListing(e);
                    if (null != r && (!r.soft_deleted || !!t)) (r.published || n) && i.push(r);
                }
                return i;
            },
            [e, t, n]
        );
    },
    p = (e) => (0, o.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionListing(e) : null)),
    m = (e) => {
        let t = (0, u.f)('useGroupListingsForGuild');
        return (0, o.e7)([d.Z], () => (null != e && t ? d.Z.getSubscriptionGroupListingsForGuild(e) : E));
    },
    I = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            f(e),
            (0, o.Wu)([d.Z], () => {
                let n = null != e ? d.Z.getSubscriptionGroupListingsForGuild(e) : E,
                    r = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = d.Z.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter((e) => !e.soft_deleted), ...r.filter((e) => e.soft_deleted)] : r;
            })
        );
    },
    T = (e) => {
        let [t, n] = a.useState(!1),
            r = a.useMemo(() => e.map(_.W), [e]),
            i = (0, o.Wu)([d.Z], () => r.filter((e) => !d.Z.getDidFetchListingForSubscriptionPlanId(e)), [r]);
        return (
            a.useEffect(() => {
                !t &&
                    i.length > 0 &&
                    (n(!0),
                    Promise.all(i.map((e) => c.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, i]),
            { loading: t }
        );
    },
    g = () => {
        let [e, t] = a.useState(!1),
            [n, r] = a.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
                try {
                    return t(!0), r(null), await c._d(e, n, i), !0;
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }
        };
    },
    S = () => {
        let [e, t] = (0, s.Z)(c.AE),
            { loading: n, error: r } = t;
        return {
            error: r,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    A = () => {
        let [e, t] = a.useState(!1),
            [n, r] = a.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: i, listingId: a } = e;
                try {
                    return (
                        t(!0),
                        r(null),
                        await c.O0({
                            guildId: n,
                            groupListingId: i,
                            listingId: a,
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
    v = (e) => (0, o.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionSettings(e) : void 0)),
    N = () => {
        let [e, t] = a.useState(!1),
            [n, r] = a.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: a.useCallback(async (e, n) => {
                t(!0), r(null);
                try {
                    await c.W2(e, n);
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    O = () => {
        let [e, t] = a.useState(!1),
            [n, r] = a.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: a.useCallback(async (e) => {
                t(!0), r(null);
                try {
                    await c.Qb(e);
                } catch (e) {
                    r(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    R = (e) => (0, o.e7)([d.Z], () => (null != e ? d.Z.getSubscriptionTrial(e) : null));
