var i,
    r,
    l,
    s,
    a = n(442837),
    o = n(570140);
let c = {},
    d = !1;
class u extends (s = a.ZP.Store) {
    isLoading() {
        return d;
    }
    passesChecklist(e) {
        var t;
        return !d && (null === (t = c[e]) || void 0 === t ? void 0 : t.sufficient);
    }
    isPendingSuccess(e) {
        let t = c[e];
        return null != t && !d && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected;
    }
    getDiscoveryChecklist(e) {
        return c[e];
    }
}
(l = 'DiscoverGuildChecklistStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.ZP = new u(o.Z, {
        DISCOVER_CHECKLIST_FETCH_START: function (e) {
            d = !0;
        },
        DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
            d = !1;
        },
        DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
            var t;
            let { checklist: n, guildId: i } = e;
            (d = !1),
                (c[i] = {
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
                    minimumGuildSize: null != n.minimum_size ? n.minimum_size : 1000,
                    healthScore: n.health_score,
                    minimumGuildAge: null !== (t = n.minimum_age) && void 0 !== t ? t : 0,
                    age: n.age
                });
        }
    }));
