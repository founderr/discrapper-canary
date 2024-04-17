"use strict";
i.r(t), i("47120");
var n, r, s, a, l = i("442837"),
  o = i("570140");
let c = {},
  u = null,
  d = [],
  f = !1,
  p = !1,
  C = null,
  m = null;

function h() {
  p = !0
}
class _ extends(n = l.default.Store) {
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
    return C
  }
  get unapplyBoostError() {
    return m
  }
  get cooldownEndsAt() {
    return u
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
      appliedBoosts: i
    } = e;
    c[t] = {
      subscriptions: i,
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
    } = e, i = new Set(t.map(e => e.id));
    d = [...t, ...d.filter(e => !i.has(e.id))], C = null, p = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    p = !1, C = t
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
    p = !1, m = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    f = !0
  }
})