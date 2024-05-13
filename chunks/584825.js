"use strict";
n.r(t), n.d(t, {
  useArchiveSubscriptionListing: function() {
    return p
  },
  useDeleteSubscriptionListing: function() {
    return I
  },
  useFetchListingsForSubscriptions: function() {
    return h
  },
  useFetchSubscriptionsSettings: function() {
    return R
  },
  useGroupListingsForGuild: function() {
    return E
  },
  usePublishSubscriptionListing: function() {
    return T
  },
  useSubscriptionListing: function() {
    return _
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
    return C
  },
  useUpdateSubscriptionsSettings: function() {
    return m
  }
}), n("47120"), n("653041");
var r = n("470079"),
  i = n("442837"),
  s = n("935369"),
  l = n("38618");
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
      countryCode: s,
      dontFetchWhileTrue: u
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, i.useStateFromStores)([l.default], () => l.default.isConnected()), c = (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionGroupListingsForGuildFetchState(e) : a.FetchState.FETCHED), f = r.useRef(t);
    return r.useEffect(() => {
      if (null == e || !d || !0 === u) return;
      let r = a.default.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || r === a.FetchState.NOT_FETCHED) && (f.current = !1, o.fetchAllSubscriptionListingsDataForGuild(e, {
        includeSoftDeleted: n,
        countryCode: s
      }))
    }, [d, e, n, t, s, u]), {
      listingsLoaded: c === a.FetchState.FETCHED && !0 !== f.current
    }
  },
  S = function(e) {
    let {
      includeSoftDeleted: t = !1,
      includeUnpublished: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.useStateFromStoresArray)([a.default], () => {
      if (null == e) return [];
      let r = a.default.getSubscriptionGroupListing(e);
      if (null == r) return [];
      let i = [];
      for (let e of r.subscription_listings_ids) {
        let r = a.default.getSubscriptionListing(e);
        if (null != r && (!r.soft_deleted || !!t))(r.published || n) && i.push(r)
      }
      return i
    }, [e, t, n])
  },
  _ = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionListing(e) : null),
  E = e => {
    let t = (0, u.useGroupListingsFetchContext)("useGroupListingsForGuild");
    return (0, i.useStateFromStores)([a.default], () => null != e && t ? a.default.getSubscriptionGroupListingsForGuild(e) : c)
  },
  g = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1,
      sortDeletedListingsLast: !1
    };
    return f(e), (0, i.useStateFromStoresArray)([a.default], () => {
      let n = null != e ? a.default.getSubscriptionGroupListingsForGuild(e) : c,
        r = [];
      for (let e of n)
        for (let n of e.subscription_listings_ids) {
          let e = a.default.getSubscriptionListing(n);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter(e => !e.soft_deleted), ...r.filter(e => e.soft_deleted)] : r
    })
  },
  h = e => {
    let [t, n] = r.useState(!1), s = r.useMemo(() => e.map(d.getRoleSubscriptionPlanId), [e]), l = (0, i.useStateFromStoresArray)([a.default], () => s.filter(e => !a.default.getDidFetchListingForSubscriptionPlanId(e)), [s]);
    return r.useEffect(() => {
      !t && l.length > 0 && (n(!0), Promise.all(l.map(e => o.fetchSubscriptionListingForPlan(e))).catch(() => {}).then(() => {
        n(!1)
      }))
    }, [t, l]), {
      loading: t
    }
  },
  I = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: e,
      deleteSubscriptionListing: async (e, n, r) => {
        try {
          return t(!0), i(null), await o.deleteSubscriptionListing(e, n, r), !0
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      }
    }
  },
  p = () => {
    let [e, t] = (0, s.default)(o.archiveSubscriptionListing), {
      loading: n,
      error: r
    } = t;
    return {
      error: r,
      submitting: n,
      archiveSubscriptionListing: e
    }
  },
  T = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: e,
      publishSubscriptionListing: async e => {
        let {
          guildId: n,
          groupListingId: r,
          listingId: s
        } = e;
        try {
          return t(!0), i(null), await o.updateSubscriptionListing({
            guildId: n,
            groupListingId: r,
            listingId: s,
            data: {
              published: !0
            }
          }), !0
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      },
      clearError: () => i(null)
    }
  },
  C = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionSettings(e) : void 0),
  m = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      loading: e,
      updateSubscriptionsSettings: r.useCallback(async (e, n) => {
        t(!0), i(null);
        try {
          await o.updateSubscriptionsSettings(e, n)
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      }, []),
      error: n
    }
  },
  R = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      loading: e,
      fetchSubscriptionsSettings: r.useCallback(async e => {
        t(!0), i(null);
        try {
          await o.fetchSubscriptionsSettings(e)
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      }, []),
      error: n
    }
  },
  N = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionTrial(e) : null)