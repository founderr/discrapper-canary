n(47120);
var r, u, i, s, l = n(442837),
  o = n(570140);
let c = {},
  a = null,
  d = [],
  p = !1,
  S = !1,
  _ = null,
  A = null;

function T() {
  S = !0
}
class f extends(r = l.ZP.Store) {
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
    return S
  }
  get applyBoostError() {
    return _
  }
  get unapplyBoostError() {
    return A
  }
  get cooldownEndsAt() {
    return a
  }
  get isFetchingCurrentUserAppliedBoosts() {
    return p
  }
}
s = "AppliedGuildBoostStore", (i = "displayName") in(u = f) ? Object.defineProperty(u, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[i] = s, t.Z = new f(o.Z, {
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
    p = !1, d = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    a = t
  },
  GUILD_UNAPPLY_BOOST_START: T,
  GUILD_APPLY_BOOST_START: T,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    d = [...t, ...d.filter(e => !n.has(e.id))], _ = null, S = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    S = !1, _ = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    d = d.filter(e => e.id !== t), S = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    S = !1, A = t
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
    p = !0
  }
})