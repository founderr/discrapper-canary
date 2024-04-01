"use strict";
n.r(e), n("47120");
var r, i, s, u, a = n("442837"),
  l = n("570140");
let o = {},
  c = null,
  d = [],
  p = !1,
  f = null,
  S = null;

function A() {
  p = !0
}
class _ extends(r = a.default.Store) {
  getAppliedGuildBoostsForGuild(t) {
    return null != o[t] ? o[t].subscriptions : null
  }
  getLastFetchedAtForGuild(t) {
    return null != o[t] ? o[t].lastFetchedAt : null
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
    return f
  }
  get unapplyBoostError() {
    return S
  }
  get cooldownEndsAt() {
    return c
  }
}
u = "AppliedGuildBoostStore", (s = "displayName") in(i = _) ? Object.defineProperty(i, s, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = u, e.default = new _(l.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(t) {
    let {
      guildId: e,
      appliedBoosts: n
    } = t;
    o[e] = {
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
  GUILD_UNAPPLY_BOOST_START: A,
  GUILD_APPLY_BOOST_START: A,
  GUILD_APPLY_BOOST_SUCCESS: function(t) {
    let {
      appliedGuildBoost: e
    } = t, n = new Set(e.map(t => t.id));
    d = [...e, ...d.filter(t => !n.has(t.id))], f = null, p = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(t) {
    let {
      error: e
    } = t;
    p = !1, f = e
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
    p = !1, S = e
  }
})