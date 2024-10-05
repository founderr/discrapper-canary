n.d(t, {
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
        return O;
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
        return R;
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
    n(47120),
    n(653041);
var r = n(470079),
    i = n(442837),
    o = n(935369),
    u = n(38618);
n(823379);
var l = n(730647),
    s = n(423117),
    a = n(289393),
    c = n(697227);
let d = [],
    _ = function (e) {
        let { refetchOnMount: t = !1, includeSoftDeleted: n = !0, countryCode: o, dontFetchWhileTrue: l } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, i.e7)([u.Z], () => u.Z.isConnected()),
            d = (0, i.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionGroupListingsForGuildFetchState(e) : a.M.FETCHED)),
            _ = r.useRef(t);
        return (
            r.useEffect(() => {
                if (null == e || !c || !0 === l) return;
                let r = a.Z.getSubscriptionGroupListingsForGuildFetchState(e);
                (t || r === a.M.NOT_FETCHED) &&
                    ((_.current = !1),
                    s.FP(e, {
                        includeSoftDeleted: n,
                        countryCode: o
                    }));
            }, [c, e, n, t, o, l]),
            { listingsLoaded: d === a.M.FETCHED && !0 !== _.current }
        );
    },
    E = function (e) {
        let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.Wu)(
            [a.Z],
            () => {
                if (null == e) return [];
                let r = a.Z.getSubscriptionGroupListing(e);
                if (null == r) return [];
                let i = [];
                for (let e of r.subscription_listings_ids) {
                    let r = a.Z.getSubscriptionListing(e);
                    if (null != r && (!r.soft_deleted || !!t)) (r.published || n) && i.push(r);
                }
                return i;
            },
            [e, t, n]
        );
    },
    f = (e) => (0, i.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionListing(e) : null)),
    I = (e) => {
        let t = (0, l.f)('useGroupListingsForGuild');
        return (0, i.e7)([a.Z], () => (null != e && t ? a.Z.getSubscriptionGroupListingsForGuild(e) : d));
    },
    S = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      includeSoftDeleted: !1,
                      sortDeletedListingsLast: !1
                  };
        return (
            _(e),
            (0, i.Wu)([a.Z], () => {
                let n = null != e ? a.Z.getSubscriptionGroupListingsForGuild(e) : d,
                    r = [];
                for (let e of n)
                    for (let n of e.subscription_listings_ids) {
                        let e = a.Z.getSubscriptionListing(n);
                        null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e);
                    }
                return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter((e) => !e.soft_deleted), ...r.filter((e) => e.soft_deleted)] : r;
            })
        );
    },
    T = (e) => {
        let [t, n] = r.useState(!1),
            o = r.useMemo(() => e.map(c.W), [e]),
            u = (0, i.Wu)([a.Z], () => o.filter((e) => !a.Z.getDidFetchListingForSubscriptionPlanId(e)), [o]);
        return (
            r.useEffect(() => {
                !t &&
                    u.length > 0 &&
                    (n(!0),
                    Promise.all(u.map((e) => s.vY(e)))
                        .catch(() => {})
                        .then(() => {
                            n(!1);
                        }));
            }, [t, u]),
            { loading: t }
        );
    },
    C = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, r) => {
                try {
                    return t(!0), i(null), await s._d(e, n, r), !0;
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }
        };
    },
    p = () => {
        let [e, t] = (0, o.Z)(s.AE),
            { loading: n, error: r } = t;
        return {
            error: r,
            submitting: n,
            archiveSubscriptionListing: e
        };
    },
    N = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
                let { guildId: n, groupListingId: r, listingId: o } = e;
                try {
                    return (
                        t(!0),
                        i(null),
                        await s.O0({
                            guildId: n,
                            groupListingId: r,
                            listingId: o,
                            data: { published: !0 }
                        }),
                        !0
                    );
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            },
            clearError: () => i(null)
        };
    },
    O = (e) => (0, i.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionSettings(e) : void 0)),
    g = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: r.useCallback(async (e, n) => {
                t(!0), i(null);
                try {
                    await s.W2(e, n);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    m = () => {
        let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: r.useCallback(async (e) => {
                t(!0), i(null);
                try {
                    await s.Qb(e);
                } catch (e) {
                    i(e);
                } finally {
                    t(!1);
                }
            }, []),
            error: n
        };
    },
    R = (e) => (0, i.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionTrial(e) : null));
