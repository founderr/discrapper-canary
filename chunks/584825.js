"use strict";
n.r(t), n.d(t, {
  useArchiveSubscriptionListing: function() {
    return C
  },
  useDeleteSubscriptionListing: function() {
    return p
  },
  useFetchListingsForSubscriptions: function() {
    return h
  },
  useFetchSubscriptionsSettings: function() {
    return R
  },
  useGroupListingsForGuild: function() {
    return _
  },
  usePublishSubscriptionListing: function() {
    return I
  },
  useSubscriptionListing: function() {
    return E
  },
  useSubscriptionListingsForGroup: function() {
    return S
  },
  useSubscriptionListingsForGuild: function() {
    return g
  },
  useSubscriptionTrial: function() {
    return N
  },
  useSubscriptionsSettings: function() {
    return T
  },
  useUpdateSubscriptionsSettings: function() {
    return m
  }
}), n("47120"), n("653041");
var i = n("470079"),
  r = n("442837"),
  l = n("935369"),
  s = n("38618");
n("823379");
var u = n("730647"),
  o = n("423117"),
  a = n("289393"),
  d = n("697227");
let c = [],
  f = function(e) {
    let {
      refetchOnMount: t = !1,
      includeSoftDeleted: n = !0,
      countryCode: l,
      dontFetchWhileTrue: u
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, r.useStateFromStores)([s.default], () => s.default.isConnected()), c = (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionGroupListingsForGuildFetchState(e) : a.FetchState.FETCHED), f = i.useRef(t);
    return i.useEffect(() => {
      if (null == e || !d || !0 === u) return;
      let i = a.default.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || i === a.FetchState.NOT_FETCHED) && (f.current = !1, o.fetchAllSubscriptionListingsDataForGuild(e, {
        includeSoftDeleted: n,
        countryCode: l
      }))
    }, [d, e, n, t, l, u]), {
      listingsLoaded: c === a.FetchState.FETCHED && !0 !== f.current
    }
  },
  S = function(e) {
    let {
      includeSoftDeleted: t = !1,
      includeUnpublished: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, r.useStateFromStoresArray)([a.default], () => {
      if (null == e) return [];
      let i = a.default.getSubscriptionGroupListing(e);
      if (null == i) return [];
      let r = [];
      for (let e of i.subscription_listings_ids) {
        let i = a.default.getSubscriptionListing(e);
        if (null != i && (!i.soft_deleted || !!t))(i.published || n) && r.push(i)
      }
      return r
    }, [e, t, n])
  },
  E = e => (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionListing(e) : null),
  _ = e => {
    let t = (0, u.useGroupListingsFetchContext)("useGroupListingsForGuild");
    return (0, r.useStateFromStores)([a.default], () => null != e && t ? a.default.getSubscriptionGroupListingsForGuild(e) : c)
  },
  g = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1,
      sortDeletedListingsLast: !1
    };
    return f(e), (0, r.useStateFromStoresArray)([a.default], () => {
      let n = null != e ? a.default.getSubscriptionGroupListingsForGuild(e) : c,
        i = [];
      for (let e of n)
        for (let n of e.subscription_listings_ids) {
          let e = a.default.getSubscriptionListing(n);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter(e => !e.soft_deleted), ...i.filter(e => e.soft_deleted)] : i
    })
  },
  h = e => {
    let [t, n] = i.useState(!1), l = i.useMemo(() => e.map(d.getRoleSubscriptionPlanId), [e]), s = (0, r.useStateFromStoresArray)([a.default], () => l.filter(e => !a.default.getDidFetchListingForSubscriptionPlanId(e)), [l]);
    return i.useEffect(() => {
      !t && s.length > 0 && (n(!0), Promise.all(s.map(e => o.fetchSubscriptionListingForPlan(e))).catch(() => {}).then(() => {
        n(!1)
      }))
    }, [t, s]), {
      loading: t
    }
  },
  p = () => {
    let [e, t] = i.useState(!1), [n, r] = i.useState(null);
    return {
      error: n,
      submitting: e,
      deleteSubscriptionListing: async (e, n, i) => {
        try {
          return t(!0), r(null), await o.deleteSubscriptionListing(e, n, i), !0
        } catch (e) {
          r(e)
        } finally {
          t(!1)
        }
      }
    }
  },
  C = () => {
    let [e, t] = (0, l.default)(o.archiveSubscriptionListing), {
      loading: n,
      error: i
    } = t;
    return {
      error: i,
      submitting: n,
      archiveSubscriptionListing: e
    }
  },
  I = () => {
    let [e, t] = i.useState(!1), [n, r] = i.useState(null);
    return {
      error: n,
      submitting: e,
      publishSubscriptionListing: async e => {
        let {
          guildId: n,
          groupListingId: i,
          listingId: l
        } = e;
        try {
          return t(!0), r(null), await o.updateSubscriptionListing({
            guildId: n,
            groupListingId: i,
            listingId: l,
            data: {
              published: !0
            }
          }), !0
        } catch (e) {
          r(e)
        } finally {
          t(!1)
        }
      },
      clearError: () => r(null)
    }
  },
  T = e => (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionSettings(e) : void 0),
  m = () => {
    let [e, t] = i.useState(!1), [n, r] = i.useState(null);
    return {
      loading: e,
      updateSubscriptionsSettings: i.useCallback(async (e, n) => {
        t(!0), r(null);
        try {
          await o.updateSubscriptionsSettings(e, n)
        } catch (e) {
          r(e)
        } finally {
          t(!1)
        }
      }, []),
      error: n
    }
  },
  R = () => {
    let [e, t] = i.useState(!1), [n, r] = i.useState(null);
    return {
      loading: e,
      fetchSubscriptionsSettings: i.useCallback(async e => {
        t(!0), r(null);
        try {
          await o.fetchSubscriptionsSettings(e)
        } catch (e) {
          r(e)
        } finally {
          t(!1)
        }
      }, []),
      error: n
    }
  },
  N = e => (0, r.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionTrial(e) : null)