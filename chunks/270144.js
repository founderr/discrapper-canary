"use strict";
n.r(t), n.d(t, {
  LoadState: function() {
    return i
  },
  default: function() {
    return U
  },
  useActiveSubscriptionListingForApplication: function() {
    return v
  },
  useApplication: function() {
    return P
  },
  useEligibleApplicationSubscriptionGuilds: function() {
    return b
  },
  useFetchEntitlementsForGuild: function() {
    return O
  },
  useFetchListingsForApplication: function() {
    return p
  },
  useFetchListingsForSubscriptions: function() {
    return M
  },
  useFetchUserApplicationSubscriptionEntitlements: function() {
    return y
  },
  useSubscriptionListingsForGroup: function() {
    return R
  },
  useUnseenEndedApplicationSubscriptionEntitlements: function() {
    return D
  }
}), n("653041"), n("47120");
var i, r, s = n("470079"),
  a = n("442837"),
  o = n("496929"),
  l = n("887706"),
  u = n("812206"),
  d = n("430824"),
  _ = n("496675"),
  c = n("509545"),
  E = n("78839"),
  I = n("580130"),
  T = n("55563"),
  f = n("801249"),
  S = n("106976"),
  h = n("307643"),
  A = n("488915"),
  m = n("171246"),
  N = n("981631");
(r = i || (i = {}))[r.NOT_LOADED = 0] = "NOT_LOADED", r[r.LOADING = 1] = "LOADING", r[r.LOADED = 2] = "LOADED", r[r.ERROR = 3] = "ERROR";
let p = function(e, t) {
    let {
      refetchOnMount: n = !1
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = (0, a.useStateFromStores)([A.default], () => null != e ? A.default.getSubscriptionGroupListingsForApplicationFetchState(e) : A.FetchState.FETCHED, [e]);
    return s.useEffect(() => {
      if (null == e || null == t) return;
      let i = A.default.getSubscriptionGroupListingsForApplicationFetchState(e);
      (n || i === A.FetchState.NOT_FETCHED) && (0, S.fetchAllSubscriptionListingsDataForApplication)(e, t)
    }, [e, t, n]), {
      listingsLoaded: i === A.FetchState.FETCHED
    }
  },
  O = e => {
    let {
      guildId: t,
      canFetch: n = !0,
      forceRefetch: i = !1
    } = e, r = (0, a.useStateFromStores)([A.default], () => null != t ? A.default.getEntitlementsForGuildFetchState(t) : null, [t]);
    return s.useEffect(() => {
      if (null == t || t === N.ME) return;
      let e = A.default.getEntitlementsForGuildFetchState(t);
      n && (e === A.FetchState.NOT_FETCHED || i) && (0, S.fetchEntitlementsForGuild)(t)
    }, [t, n, i]), {
      entitlementsLoaded: r === A.FetchState.FETCHED
    }
  },
  C = e => {
    let {
      applicationId: t,
      canFetch: n = !0,
      forceRefetch: i = !1,
      loggedIn: r
    } = e, l = (0, a.useStateFromStores)([I.default], () => I.default.isFetchedForApplication(t), [t]);
    return s.useEffect(() => {
      if (r) {
        let e = I.default.isFetchingForApplication(t);
        (n && !e && !l || i) && (0, o.fetchUserEntitlements)({
          entitlementType: N.EntitlementTypes.APPLICATION_SUBSCRIPTION
        })
      }
    }, [t, n, l, i, r]), {
      entitlementsLoaded: l
    }
  },
  R = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1
    };
    return (0, a.useStateFromStoresArray)([A.default], () => {
      if (null == e) return [];
      let n = A.default.getSubscriptionGroupListing(e);
      if (null == n) return [];
      let i = [];
      for (let e of n.subscription_listings_ids) {
        let n = A.default.getSubscriptionListing(e);
        if (null != n)(!n.soft_deleted || t.includeSoftDeleted) && i.push(n)
      }
      return i
    }, [e, t.includeSoftDeleted])
  },
  g = [],
  L = [];

function v(e, t) {
  let n = (0, a.useStateFromStores)([E.default], () => E.default.getSubscriptions()),
    {
      subscriptionGroupListing: i,
      guildEntitlements: r,
      userEntitlements: o
    } = (0, a.useStateFromStoresObject)([A.default, I.default], () => {
      var n, i;
      return {
        subscriptionGroupListing: null != e ? A.default.getSubscriptionGroupListingForApplication(e) : null,
        guildEntitlements: null != e && null != t ? A.default.getApplicationEntitlementsForGuild(e, t) : g,
        userEntitlements: null != e && null !== (i = null === (n = I.default.getForApplication(e)) || void 0 === n ? void 0 : n.values()) && void 0 !== i ? i : L
      }
    }, [e, t]),
    l = s.useMemo(() => [...r, ...o], [r, o]),
    u = null == i ? void 0 : i.subscription_listings,
    {
      activeSubscriptionListing: d,
      activeEntitlement: _
    } = s.useMemo(() => {
      if (null != u) {
        for (let e of l)
          for (let n of u)
            if ((0, m.isListingActiveInGuild)(n, e, t)) return {
              activeSubscriptionListing: n,
              activeEntitlement: e
            }
      }
      return {
        activeSubscriptionListing: null,
        activeEntitlement: null
      }
    }, [l, u, t]);
  return {
    activeSubscription: s.useMemo(() => {
      if (null == n) return null;
      let e = null == d ? void 0 : d.subscription_plans[0].id;
      for (let t of Object.values(n))
        if (t.type === N.SubscriptionTypes.APPLICATION && t.items[0].planId === e) return t;
      return null
    }, [d, n]),
    activeSubscriptionListing: d,
    activeEntitlement: _,
    subscriptionGroupListing: i
  }
}

function D(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : N.EMPTY_STRING_SNOWFLAKE_ID,
    {
      entitlementsLoaded: i
    } = O({
      guildId: n,
      canFetch: (0, a.useStateFromStores)([_.default], () => _.default.can(N.Permissions.ADMINISTRATOR, e))
    }),
    r = (0, a.useStateFromStores)([f.default], () => f.default.getLastGuildDismissedTime(n)),
    o = (0, a.useStateFromStoresArray)([A.default], () => {
      let e = A.default.getEntitlementsForGuild(n),
        t = A.default.getEntitlementsForGuild(n, !1),
        i = e.map(e => e.applicationId);
      return t.filter(e => !i.includes(e.applicationId))
    }),
    l = (0, a.useStateFromStoresObject)([T.default], () => T.default.getSKUs()),
    u = s.useMemo(() => o.filter(e => {
      let t = l[e.skuId];
      return null != t && t.available
    }), [o, l]);
  return i ? u.filter(e => null != e.endsAt && e.endsAt.getTime() > Math.max(null != r ? r : 0, Date.now() - 2592e6)) : []
}
let M = e => {
    let [t, n] = s.useState(!1), i = s.useMemo(() => e.map(m.getApplicationSubscriptionPlanId), [e]), r = (0, a.useStateFromStoresArray)([c.default], () => i.filter(e => null == c.default.get(e)), [i]);
    return s.useEffect(() => {
      r.length > 0 && (n(!0), Promise.all(r.map(e => (0, S.fetchSubscriptionListingForPlan)(e))).catch(() => {}).then(() => {
        n(!1)
      }))
    }, [r]), {
      loading: t
    }
  },
  y = () => {
    let [e, t] = s.useState(0);
    return s.useEffect(() => {
      t(1), (0, o.fetchUserEntitlements)({
        withSku: !0,
        withApplication: !0,
        entitlementType: N.EntitlementTypes.APPLICATION_SUBSCRIPTION
      }).catch(() => {
        t(3)
      }).then(() => {
        t(2)
      })
    }, []), {
      loadState: e
    }
  },
  P = e => {
    let t = (0, l.default)(),
      n = (0, a.useStateFromStores)([u.default], () => null != e ? u.default.getApplication(e) : null, [e]),
      i = null != n;
    return s.useEffect(() => {
      !i && null != e && t && (0, h.fetchApplication)(e)
    }, [i, e, t]), n
  };

function U(e) {
  let {
    applicationId: t,
    groupListingId: n,
    guildId: i
  } = e, r = (0, l.default)(), {
    listingsLoaded: s
  } = p(t, n), {
    entitlementsLoaded: a
  } = O({
    guildId: i
  }), {
    entitlementsLoaded: o
  } = C({
    applicationId: t,
    loggedIn: r
  }), u = P(t), d = (null == u ? void 0 : u.isMonetized) === !0;
  return {
    applicationSubscriptionListingsShown: null != t && null != n && (null == i || a) && (!r || o) && s && d
  }
}

function b(e, t) {
  let n = (0, a.useStateFromStores)([d.default], () => d.default.isLoaded()),
    [i, r] = s.useState([]);
  return s.useEffect(() => {
    null == t && null != e && n && (0, h.fetchEligibleApplicationSubscriptionGuilds)(e).then(e => {
      r(e.map(e => d.default.getGuild(e)).filter(e => null != e))
    })
  }, [e, t, n]), i
}