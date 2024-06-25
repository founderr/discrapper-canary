"use strict";
n.d(t, {
  M: function() {
    return i
  }
}), n(47120);
var i, r, s, o, a, l, u = n(512722),
  _ = n.n(u),
  c = n(442837),
  d = n(759174),
  E = n(570140),
  I = n(308636);

function T(e) {
  return "guild:".concat(e)
}

function h(e) {
  return "subscription_listing:".concat(e)
}

function f(e) {
  return "application:".concat(e)
}

function S(e) {
  return "plan:".concat(e)
}(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
let A = new d.h(e => [T(e.guild_id), ...e.subscription_listings_ids.map(h)], e => e.id),
  N = new d.h(e => [f(e.application_id), S(e.subscription_plans[0].id)], e => e.id),
  m = {},
  O = new Set,
  p = {},
  R = {},
  g = {},
  C = {},
  v = new Map;

function L(e) {
  return A.values(T(e))
}

function D(e) {
  var t;
  for (let n of (A.set(e.id, e), v.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) M(n)
}

function M(e) {
  N.set(e.id, e)
}
let P = [];
class y extends(r = c.ZP.Store) {
  getSubscriptionGroupListingsForGuildFetchState(e) {
    var t;
    return null !== (t = m[e]) && void 0 !== t ? t : 0
  }
  getDidFetchListingForSubscriptionPlanId(e) {
    return O.has(e)
  }
  getSubscriptionGroupListing(e) {
    return A.get(e)
  }
  getSubscriptionGroupListingsForGuild(e) {
    return L(e)
  }
  getSubscriptionGroupListingForSubscriptionListing(e) {
    let t = A.values(h(e));
    return _()(t.length <= 1, "Found multiple group listings for listing"), t[0]
  }
  getSubscriptionListing(e) {
    return N.get(e)
  }
  getSubscriptionListingsForGuild(e) {
    var t;
    let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
    return null != n ? N.values(f(n)) : P
  }
  getSubscriptionListingForPlan(e) {
    let t = N.values(S(e));
    return _()(t.length <= 1, "Found multiple listings for plan"), t[0]
  }
  getSubscriptionSettings(e) {
    return p[e]
  }
  getSubscriptionTrial(e) {
    return R[e]
  }
  getMonetizationRestrictions(e) {
    return g[e]
  }
  getMonetizationRestrictionsFetchState(e) {
    var t;
    return null !== (t = C[e]) && void 0 !== t ? t : 0
  }
  getApplicationIdForGuild(e) {
    return v.get(e)
  }
}
l = "GuildRoleSubscriptionsStore", (a = "displayName") in(o = y) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new y(E.Z, {
  CONNECTION_OPEN: function() {
    A.clear(), N.clear(), m = {}, O.clear(), p = {}, R = {}, g = {}, C = {}, v.clear()
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    p[t.guild_id] = t
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
    let {
      guildId: t
    } = e;
    for (let e of (m[t] = 1, L(t)))
      for (let t of (A.delete(e.id), e.subscription_listings_ids)) N.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
    let {
      guildId: t,
      groupListings: n,
      settings: i,
      subscriptionTrials: r
    } = e;
    for (let e of (m[t] = 2, n)) D(e);
    for (let e of (p[t] = i, r)) R[e.id] = e
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    m[t] = 2
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function(e) {
    let {
      listing: t
    } = e;
    D(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function(e) {
    let {
      groupListingId: t
    } = e;
    A.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function(e) {
    let {
      planId: t
    } = e;
    O.add(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
    let {
      groupListing: t
    } = e;
    D(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function(e) {
    let {
      listing: t,
      groupListing: n
    } = e;
    M(t), D(n)
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function(e) {
    let {
      listing: t
    } = e;
    M(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function(e) {
    let {
      listingId: t
    } = e;
    return N.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function(e) {
    let {
      subscriptionTrial: t
    } = e;
    R[t.id] = t
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function(e) {
    let {
      guildId: t
    } = e;
    C[t] = 1
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
    let {
      guildId: t,
      restrictions: n
    } = e;
    g[t] = n, C[t] = 2
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    C[t] = 2, g[t] = I.m
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function(e) {
    let {
      guildId: t
    } = e;
    C[t] = 0
  }
})