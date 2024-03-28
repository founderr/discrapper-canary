"use strict";
n.r(e), n("47120");
var i, s, r, a, u = n("442837"),
  o = n("570140");
let l = {},
  c = null,
  d = [],
  p = !1,
  h = null,
  f = null;

function S() {
  p = !0
}
class m extends(i = u.default.Store) {
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
    return p
  }
  get applyBoostError() {
    return h
  }
  get unapplyBoostError() {
    return f
  }
  get cooldownEndsAt() {
    return c
  }
}
a = "AppliedGuildBoostStore", (r = "displayName") in(s = m) ? Object.defineProperty(s, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = a, e.default = new m(o.default, {
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
    d = e
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(t) {
    let {
      endsAt: e
    } = t;
    c = e
  },
  GUILD_UNAPPLY_BOOST_START: S,
  GUILD_APPLY_BOOST_START: S,
  GUILD_APPLY_BOOST_SUCCESS: function(t) {
    let {
      appliedGuildBoost: e
    } = t, n = new Set(e.map(t => t.id));
    d = [...e, ...d.filter(t => !n.has(t.id))], h = null, p = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(t) {
    let {
      error: e
    } = t;
    p = !1, h = e
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(t) {
    let {
      boostId: e
    } = t;
    d = d.filter(t => t.id !== e), p = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(t) {
    let {
      error: e
    } = t;
    p = !1, f = e
  }
})