"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var s = n("446674"),
  a = n("913144");
let r = {},
  i = null,
  l = [],
  o = !1,
  u = null,
  d = null;

function c() {
  o = !0
}
class f extends s.default.Store {
  getAppliedGuildBoostsForGuild(e) {
    return null != r[e] ? r[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != r[e] ? r[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return l
  }
  getAppliedGuildBoost(e) {
    return l.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return o
  }
  get applyBoostError() {
    return u
  }
  get unapplyBoostError() {
    return d
  }
  get cooldownEndsAt() {
    return i
  }
}
f.displayName = "AppliedGuildBoostStore";
var _ = new f(a.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    r[t] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    l = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    i = t
  },
  GUILD_UNAPPLY_BOOST_START: c,
  GUILD_APPLY_BOOST_START: c,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    l = [...t, ...l.filter(e => !n.has(e.id))], u = null, o = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    o = !1, u = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    l = l.filter(e => e.id !== t), o = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    o = !1, d = t
  }
})