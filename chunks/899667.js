"use strict";
s.r(t), s("47120");
var r, n, i, a, l = s("442837"),
  o = s("570140");
let c = {},
  u = null,
  d = [],
  f = !1,
  p = !1,
  g = null,
  v = null;

function h() {
  p = !0
}
class b extends(r = l.default.Store) {
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
    return g
  }
  get unapplyBoostError() {
    return v
  }
  get cooldownEndsAt() {
    return u
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return f
  }
}
a = "AppliedGuildBoostStore", (i = "displayName") in(n = b) ? Object.defineProperty(n, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = a, t.default = new b(o.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: s
    } = e;
    c[t] = {
      subscriptions: s,
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
  GUILD_UNAPPLY_BOOST_START: h,
  GUILD_APPLY_BOOST_START: h,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, s = new Set(t.map(e => e.id));
    d = [...t, ...d.filter(e => !s.has(e.id))], g = null, p = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    p = !1, g = t
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
    p = !1, v = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    f = !0
  }
})