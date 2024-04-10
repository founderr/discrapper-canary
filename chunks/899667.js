"use strict";
n.r(e), n("47120");
var i, s, r, a, u = n("442837"),
  o = n("570140");
let l = {},
  c = null,
  d = [],
  p = !1,
  h = !1,
  f = null,
  S = null;

function m() {
  h = !0
}
class A extends(i = u.default.Store) {
  getAppliedGuildBoostsForGuild(t) {
    return null != l[t] ? l[t].subscriptions : null
  }
  getLastFetchedAtForGuild(t) {
    return null != l[t] ? l[t].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return d
  }
  getAppliedGuildBoost(t) {
    return d.find(e => e.id === t)
  }
  get isModifyingAppliedBoost() {
    return h
  }
  get applyBoostError() {
    return f
  }
  get unapplyBoostError() {
    return S
  }
  get cooldownEndsAt() {
    return c
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return p
  }
}
a = "AppliedGuildBoostStore", (r = "displayName") in(s = A) ? Object.defineProperty(s, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = a, e.default = new A(o.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(t) {
    let {
      guildId: e,
      appliedBoosts: n
    } = t;
    l[e] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(t) {
    let {
      appliedGuildBoosts: e
    } = t;
    p = !1, d = e
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(t) {
    let {
      endsAt: e
    } = t;
    c = e
  },
  GUILD_UNAPPLY_BOOST_START: m,
  GUILD_APPLY_BOOST_START: m,
  GUILD_APPLY_BOOST_SUCCESS: function(t) {
    let {
      appliedGuildBoost: e
    } = t, n = new Set(e.map(t => t.id));
    d = [...e, ...d.filter(t => !n.has(t.id))], f = null, h = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(t) {
    let {
      error: e
    } = t;
    h = !1, f = e
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(t) {
    let {
      boostId: e
    } = t;
    d = d.filter(t => t.id !== e), h = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(t) {
    let {
      error: e
    } = t;
    h = !1, S = e
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    p = !0
  }
})