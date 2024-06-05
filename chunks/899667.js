"use strict";
r.r(t), r("47120");
var s, n, l, i, a = r("442837"),
  o = r("570140");
let c = {},
  u = null,
  d = [],
  f = !1,
  p = !1,
  h = null,
  g = null;

function m() {
  p = !0
}
class x extends(s = a.default.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != c[e] ? c[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != c[e] ? c[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return d
  }
  getAppliedGuildBoost(e) {
    return d.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return p
  }
  get applyBoostError() {
    return h
  }
  get unapplyBoostError() {
    return g
  }
  get cooldownEndsAt() {
    return u
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return f
  }
}
i = "AppliedGuildBoostStore", (l = "displayName") in(n = x) ? Object.defineProperty(n, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = i, t.default = new x(o.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: r
    } = e;
    c[t] = {
      subscriptions: r,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    f = !1, d = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    u = t
  },
  GUILD_UNAPPLY_BOOST_START: m,
  GUILD_APPLY_BOOST_START: m,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, r = new Set(t.map(e => e.id));
    d = [...t, ...d.filter(e => !r.has(e.id))], h = null, p = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    p = !1, h = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    d = d.filter(e => e.id !== t), p = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    p = !1, g = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    f = !0
  }
})