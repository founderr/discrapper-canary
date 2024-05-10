"use strict";
n.r(t), n.d(t, {
  handleReportRaid: function() {
    return D
  },
  handleResolveRaid: function() {
    return A
  },
  setGuildIncidentActions: function() {
    return I
  },
  setGuildRaidAlerts: function() {
    return E
  },
  trackReportRaidViewed: function() {
    return _
  }
}), n("47120");
var a = n("913527"),
  i = n.n(a),
  d = n("544891"),
  l = n("367907"),
  s = n("434404"),
  o = n("430824"),
  r = n("626135"),
  u = n("154285"),
  c = n("981631");

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  0 !== t.length && r.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
    ...(0, l.collectGuildAnalyticsMetadata)(e),
    guild_id: e,
    raid_types: t
  })
}
async function E(e, t) {
  let n = new Set(e.features);
  n.has(c.GuildFeatures.COMMUNITY) ? t ? n.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await s.default.saveGuild(e.id, {
    features: n
  }, {
    throwErr: !0
  })
}
async function I(e, t, n, a) {
  let l = i()().add(a, "hours").toISOString();
  return await d.HTTP.put({
    url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: t ? l : null,
      dms_disabled_until: n ? l : null
    }
  })
}
async function A(e, t, n) {
  let {
    showAlertMode: a
  } = (0, u.getGuildAlertModeEnabled)(e), i = o.default.getGuild(e), l = null == i ? void 0 : i.getSafetyAlertsChannelId();
  return a && null != l ? await d.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: t,
      reason: n
    }
  }) : null
}
async function D(e) {
  let {
    showAlertMode: t
  } = (0, u.getGuildAlertModeEnabled)(e), n = o.default.getGuild(e), a = null == n ? void 0 : n.getSafetyAlertsChannelId();
  return t && null != a ? await d.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
  }) : null
}