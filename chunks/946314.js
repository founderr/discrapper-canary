"use strict";
i.r(t), i.d(t, {
  DEFAULT_MINIMUM_SIZE: function() {
    return c
  },
  LOWERED_MINIMUM_SIZE: function() {
    return u
  }
});
var n, r, s, a, l = i("442837"),
  o = i("570140");
let c = 1e3,
  u = 200,
  d = {},
  f = !1;
class p extends(a = l.default.Store) {
  isLoading() {
    return f
  }
  passesChecklist(e) {
    var t;
    return !f && (null === (t = d[e]) || void 0 === t ? void 0 : t.sufficient)
  }
  isPendingSuccess(e) {
    let t = d[e];
    return null != t && !f && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected
  }
  getDiscoveryChecklist(e) {
    return d[e]
  }
}
s = "DiscoverGuildChecklistStore", (r = "displayName") in(n = p) ? Object.defineProperty(n, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[r] = s, t.default = new p(o.default, {
  DISCOVER_CHECKLIST_FETCH_START: function(e) {
    f = !0
  },
  DISCOVER_CHECKLIST_FETCH_FAILURE: function(e) {
    f = !1
  },
  DISCOVER_CHECKLIST_FETCH_SUCCESS: function(e) {
    var t;
    let {
      checklist: i,
      guildId: n
    } = e;
    f = !1, d[n] = {
      guildId: i.guild_id,
      safeEnvironment: i.safe_environment,
      healthy: i.healthy,
      healthScorePending: i.health_score_pending,
      nsfwProperties: i.nsfw_properties,
      size: i.size,
      protected: i.protected,
      sufficient: i.sufficient,
      sufficientWithoutGracePeriod: i.sufficient_without_grace_period,
      gracePeriodEndDate: null != i.grace_period_end_date ? new Date(i.grace_period_end_date) : null,
      retentionHealthy: i.retention_healthy,
      engagementHealthy: i.engagement_healthy,
      minimumGuildSize: null != i.minimum_size ? i.minimum_size : c,
      healthScore: i.health_score,
      minimumGuildAge: null !== (t = i.minimum_age) && void 0 !== t ? t : 0,
      age: i.age
    }
  }
})