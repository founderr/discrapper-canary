n.d(t, {
    TN: function () {
        return c;
    },
    WZ: function () {
        return u;
    }
});
var r,
    i,
    o,
    a,
    l = n(442837),
    s = n(570140);
let c = 1000,
    u = 200,
    d = {},
    _ = !1;
class m extends (a = l.ZP.Store) {
    isLoading() {
        return _;
    }
    passesChecklist(e) {
        var t;
        return !_ && (null === (t = d[e]) || void 0 === t ? void 0 : t.sufficient);
    }
    isPendingSuccess(e) {
        let t = d[e];
        return null != t && !_ && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected;
    }
    getDiscoveryChecklist(e) {
        return d[e];
    }
}
(o = 'DiscoverGuildChecklistStore'),
    (i = 'displayName') in (r = m)
        ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = o),
    (t.ZP = new m(s.Z, {
        DISCOVER_CHECKLIST_FETCH_START: function (e) {
            _ = !0;
        },
        DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
            _ = !1;
        },
        DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
            var t;
            let { checklist: n, guildId: r } = e;
            (_ = !1),
                (d[r] = {
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
                });
        }
    }));
