"use strict";
a.r(t), a.d(t, {
  DEFAULT_MINIMUM_SIZE: function() {
    return c
  },
  LOWERED_MINIMUM_SIZE: function() {
    return d
  }
});
var n, r, s, i, l = a("442837"),
  o = a("570140");
let c = 1e3,
  d = 200,
  u = {},
  f = !1;
class m extends(i = l.default.Store) {
  isLoading() {
    return f
  }
  passesChecklist(e) {
    var t;
    return !f && (null === (t = u[e]) || void 0 === t ? void 0 : t.sufficient)
  }
  isPendingSuccess(e) {
    let t = u[e];
    return null != t && !f && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected
  }
  getDiscoveryChecklist(e) {
    return u[e]
  }
}
s = "DiscoverGuildChecklistStore", (r = "displayName") in(n = m) ? Object.defineProperty(n, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[r] = s, t.default = new m(o.default, {
  DISCOVER_CHECKLIST_FETCH_START: function(e) {
    f = !0
  },
  DISCOVER_CHECKLIST_FETCH_FAILURE: function(e) {
    f = !1
  },
  DISCOVER_CHECKLIST_FETCH_SUCCESS: function(e) {
    var t;
    let {
      checklist: a,
      guildId: n
    } = e;
    f = !1, u[n] = {
      guildId: a.guild_id,
      safeEnvironment: a.safe_environment,
      healthy: a.healthy,
      healthScorePending: a.health_score_pending,
      nsfwProperties: a.nsfw_properties,
      size: a.size,
      protected: a.protected,
      sufficient: a.sufficient,
      sufficientWithoutGracePeriod: a.sufficient_without_grace_period,
      gracePeriodEndDate: null != a.grace_period_end_date ? new Date(a.grace_period_end_date) : null,
      retentionHealthy: a.retention_healthy,
      engagementHealthy: a.engagement_healthy,
      minimumGuildSize: null != a.minimum_size ? a.minimum_size : c,
      healthScore: a.health_score,
      minimumGuildAge: null !== (t = a.minimum_age) && void 0 !== t ? t : 0,
      age: a.age
    }
  }
})