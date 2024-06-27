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
  I = n(959546),
  T = n(55563);

function h(e) {
  return "subscription_listing:".concat(e)
}

function f(e) {
  return "application:".concat(e)
}

function S(e) {
  return "plan:".concat(e)
}

function A(e, t, n) {
  return "entitlement:".concat(e, ":").concat(n, ":").concat(t)
}

function N(e, t) {
  return "entitlement:".concat(t, ":").concat(e)
}(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
let m = new d.h(e => [f(e.application_id), ...e.subscription_listings_ids.map(h)], e => e.id),
  O = new d.h(e => [f(e.application_id), S(e.subscription_plans[0].id)], e => e.id),
  R = new d.h(e => [A(e.applicationId, e.isValid(null, T.Z), e.guildId), N(e.isValid(null, T.Z), e.guildId)], e => e.id),
  p = {},
  g = {};

function C(e) {
  let t = m.values(f(e));
  return _()(t.length <= 1, "Found multiple group listings for application"), t[0]
}

function v(e) {
  var t;
  for (let n of (m.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : []))(function(e) {
    O.set(e.id, e)
  })(n)
}
class L extends(r = c.yh) {
  getSubscriptionGroupListingsForApplicationFetchState(e) {
    var t;
    return null !== (t = p[e]) && void 0 !== t ? t : 0
  }
  getSubscriptionGroupListing(e) {
    return m.get(e)
  }
  getSubscriptionGroupListingForApplication(e) {
    return C(e)
  }
  getSubscriptionGroupListingForSubscriptionListing(e) {
    let t = m.values(h(e));
    return _()(t.length <= 1, "Found multiple group listings for listing"), t[0]
  }
  getSubscriptionListing(e) {
    return O.get(e)
  }
  getSubscriptionListingsForApplication(e) {
    return O.values(f(e))
  }
  getEntitlementsForGuildFetchState(e) {
    var t;
    return null !== (t = g[e]) && void 0 !== t ? t : 0
  }
  getSubscriptionListingForPlan(e) {
    let t = O.values(S(e));
    return _()(t.length <= 1, "Found multiple listings for plan"), t[0]
  }
  getApplicationEntitlementsForGuild(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return R.values(A(e, n, t))
  }
  getEntitlementsForGuild(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return R.values(N(t, e))
  }
}
l = "ApplicationSubscriptionStore", (a = "displayName") in(o = L) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new L(E.Z, {
  LOGOUT: function() {
    m.clear(), O.clear(), R.clear(), p = {}, g = {}
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
    let {
      applicationId: t
    } = e;
    p[t] = 1;
    let n = C(t);
    if (null != n)
      for (let e of n.subscription_listings_ids) O.delete(e)
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
    let {
      applicationId: t,
      groupListing: n
    } = e;
    p[t] = 2, v(n)
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
    let {
      applicationId: t
    } = e;
    p[t] = 2
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
    let {
      guildId: t
    } = e;
    g[t] = 1
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
    let {
      guildId: t,
      entitlements: n
    } = e;
    g[t] = 2, n.forEach(e => {
      let t = I.Z.createFromServer(e);
      R.set(t.id, t)
    })
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
    let {
      guildId: t
    } = e;
    g[t] = 0
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
    let {
      groupListing: t
    } = e;
    v(t)
  }
})