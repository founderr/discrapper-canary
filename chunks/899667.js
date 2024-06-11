"use strict";
n.r(e), n("47120");
var r, u, i, s, l = n("442837"),
  o = n("570140");
let a = {},
  c = null,
  d = [],
  p = !1,
  S = !1,
  f = null,
  _ = null;

function A() {
  S = !0
}
class P extends(r = l.default.Store) {
  getAppliedGuildBoostsForGuild(t) {
    return null != a[t] ? a[t].subscriptions : null
  }
  getLastFetchedAtForGuild(t) {
    return null != a[t] ? a[t].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return d
  }
  getAppliedGuildBoost(t) {
    return d.find(e => e.id === t)
  }
  get isModifyingAppliedBoost() {
    return S
  }
  get applyBoostError() {
    return f
  }
  get unapplyBoostError() {
    return _
  }
  get cooldownEndsAt() {
    return c
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return p
  }
}
s = "AppliedGuildBoostStore", (i = "displayName") in(u = P) ? Object.defineProperty(u, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[i] = s, e.default = new P(o.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(t) {
    let {
      guildId: e,
      appliedBoosts: n
    } = t;
    a[e] = {
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
  GUILD_UNAPPLY_BOOST_START: A,
  GUILD_APPLY_BOOST_START: A,
  GUILD_APPLY_BOOST_SUCCESS: function(t) {
    let {
      appliedGuildBoost: e
    } = t, n = new Set(e.map(t => t.id));
    d = [...e, ...d.filter(t => !n.has(t.id))], f = null, S = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(t) {
    let {
      error: e
    } = t;
    S = !1, f = e
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(t) {
    let {
      boostId: e
    } = t;
    d = d.filter(t => t.id !== e), S = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(t) {
    let {
      error: e
    } = t;
    S = !1, _ = e
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    p = !0
  }
})