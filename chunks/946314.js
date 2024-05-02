"use strict";
n.r(t), n.d(t, {
  DEFAULT_MINIMUM_SIZE: function() {
    return c
  },
  LOWERED_MINIMUM_SIZE: function() {
    return d
  }
});
var a, r, i, s, l = n("442837"),
  o = n("570140");
let c = 1e3,
  d = 200,
  u = {},
  f = !1;
class m extends(s = l.default.Store) {
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
i = "DiscoverGuildChecklistStore", (r = "displayName") in(a = m) ? Object.defineProperty(a, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[r] = i, t.default = new m(o.default, {
  DISCOVER_CHECKLIST_FETCH_START: function(e) {
    f = !0
  },
  DISCOVER_CHECKLIST_FETCH_FAILURE: function(e) {
    f = !1
  },
  DISCOVER_CHECKLIST_FETCH_SUCCESS: function(e) {
    var t;
    let {
      checklist: n,
      guildId: a
    } = e;
    f = !1, u[a] = {
      guildId: n.guild_id,
      safeEnvironment: n.safe_environment,
      healthy: n.healthy,
      healthScorePending: n.health_score_pending,
      nsfwProperties: n.nsfw_properties,
      size: n.size,
      protected: n.protected,
      sufficient: n.sufficient,
      sufficientWithoutGracePeriod: n.sufficient_without_grace_period,
      gracePeriodEndDate: null != n.grace_period_end_date ? new Date(n.grace_period_end_date) : null,
      retentionHealthy: n.retention_healthy,
      engagementHealthy: n.engagement_healthy,
      minimumGuildSize: null != n.minimum_size ? n.minimum_size : c,
      healthScore: n.health_score,
      minimumGuildAge: null !== (t = n.minimum_age) && void 0 !== t ? t : 0,
      age: n.age
    }
  }
})