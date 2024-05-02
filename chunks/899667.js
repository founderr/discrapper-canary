"use strict";
n.r(t), n("47120");
var a, r, i, s, l = n("442837"),
  o = n("570140");
let c = {},
  d = null,
  u = [],
  f = !1,
  m = !1,
  h = null,
  p = null;

function T() {
  m = !0
}
class E extends(a = l.default.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != c[e] ? c[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != c[e] ? c[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return u
  }
  getAppliedGuildBoost(e) {
    return u.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return m
  }
  get applyBoostError() {
    return h
  }
  get unapplyBoostError() {
    return p
  }
  get cooldownEndsAt() {
    return d
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return f
  }
}
s = "AppliedGuildBoostStore", (i = "displayName") in(r = E) ? Object.defineProperty(r, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = s, t.default = new E(o.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    c[t] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    f = !1, u = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    d = t
  },
  GUILD_UNAPPLY_BOOST_START: T,
  GUILD_APPLY_BOOST_START: T,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    u = [...t, ...u.filter(e => !n.has(e.id))], h = null, m = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    m = !1, h = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    u = u.filter(e => e.id !== t), m = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    m = !1, p = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    f = !0
  }
})