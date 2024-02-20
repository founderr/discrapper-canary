"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return i
  },
  default: function() {
    return D
  }
}), n("222007");
var i, r, s = n("627445"),
  a = n.n(s),
  o = n("446674"),
  l = n("407846"),
  u = n("913144"),
  c = n("139170");

function d(e) {
  return "guild:".concat(e)
}

function p(e) {
  return "subscription_listing:".concat(e)
}

function h(e) {
  return "application:".concat(e)
}

function f(e) {
  return "plan:".concat(e)
}(r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
let E = new l.default(e => [d(e.guild_id), ...e.subscription_listings_ids.map(p)], e => e.id),
  _ = new l.default(e => [h(e.application_id), f(e.subscription_plans[0].id)], e => e.id),
  m = {},
  S = new Set,
  g = {},
  T = {},
  I = {},
  v = {},
  C = new Map;

function A(e) {
  return E.values(d(e))
}

function R(e) {
  var t;
  for (let n of (E.set(e.id, e), C.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) N(n)
}

function N(e) {
  _.set(e.id, e)
}
let y = [];
class O extends o.default.Store {
  getSubscriptionGroupListingsForGuildFetchState(e) {
    var t;
    return null !== (t = m[e]) && void 0 !== t ? t : 0
  }
  getDidFetchListingForSubscriptionPlanId(e) {
    return S.has(e)
  }
  getSubscriptionGroupListing(e) {
    return E.get(e)
  }
  getSubscriptionGroupListingsForGuild(e) {
    return A(e)
  }
  getSubscriptionGroupListingForSubscriptionListing(e) {
    let t = E.values(p(e));
    return a(t.length <= 1, "Found multiple group listings for listing"), t[0]
  }
  getSubscriptionListing(e) {
    return _.get(e)
  }
  getSubscriptionListingsForGuild(e) {
    var t;
    let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
    return null != n ? _.values(h(n)) : y
  }
  getSubscriptionListingForPlan(e) {
    let t = _.values(f(e));
    return a(t.length <= 1, "Found multiple listings for plan"), t[0]
  }
  getSubscriptionSettings(e) {
    return g[e]
  }
  getSubscriptionTrial(e) {
    return T[e]
  }
  getMonetizationRestrictions(e) {
    return I[e]
  }
  getMonetizationRestrictionsFetchState(e) {
    var t;
    return null !== (t = v[e]) && void 0 !== t ? t : 0
  }
  getApplicationIdForGuild(e) {
    return C.get(e)
  }
}
O.displayName = "GuildRoleSubscriptionsStore";
var D = new O(u.default, {
  CONNECTION_OPEN: function() {
    E.clear(), _.clear(), m = {}, S.clear(), g = {}, T = {}, I = {}, v = {}, C.clear()
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    g[t.guild_id] = t
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
    let {
      guildId: t
    } = e;
    for (let e of (m[t] = 1, A(t)))
      for (let t of (E.delete(e.id), e.subscription_listings_ids)) _.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
    let {
      guildId: t,
      groupListings: n,
      settings: i,
      subscriptionTrials: r
    } = e;
    for (let e of (m[t] = 2, n)) R(e);
    for (let e of (g[t] = i, r)) T[e.id] = e
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
    R(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function(e) {
    let {
      groupListingId: t
    } = e;
    E.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function(e) {
    let {
      planId: t
    } = e;
    S.add(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
    let {
      groupListing: t
    } = e;
    R(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function(e) {
    let {
      listing: t,
      groupListing: n
    } = e;
    N(t), R(n)
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function(e) {
    let {
      listing: t
    } = e;
    N(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function(e) {
    let {
      listingId: t
    } = e;
    return _.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function(e) {
    let {
      subscriptionTrial: t
    } = e;
    T[t.id] = t
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function(e) {
    let {
      guildId: t
    } = e;
    v[t] = 1
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
    let {
      guildId: t,
      restrictions: n
    } = e;
    I[t] = n, v[t] = 2
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    v[t] = 2, I[t] = c.DefaultCreatorMonetizationRestrictions
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function(e) {
    let {
      guildId: t
    } = e;
    v[t] = 0
  }
})