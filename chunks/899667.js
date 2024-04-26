"use strict";
n.r(t), n("47120");
var i, r, s, a, l = n("442837"),
  o = n("570140");
let u = {},
  c = null,
  d = [],
  f = !1,
  p = !1,
  m = null,
  E = null;

function I() {
  p = !0
}
class _ extends(i = l.default.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != u[e] ? u[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != u[e] ? u[e].lastFetchedAt : null
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
    return m
  }
  get unapplyBoostError() {
    return E
  }
  get cooldownEndsAt() {
    return c
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return f
  }
}
a = "AppliedGuildBoostStore", (s = "displayName") in(r = _) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new _(o.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    u[t] = {
      subscriptions: n,
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
    c = t
  },
  GUILD_UNAPPLY_BOOST_START: I,
  GUILD_APPLY_BOOST_START: I,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    d = [...t, ...d.filter(e => !n.has(e.id))], m = null, p = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    p = !1, m = t
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
    p = !1, E = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    f = !0
  }
})