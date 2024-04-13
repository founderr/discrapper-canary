"use strict";
n.r(t), n.d(t, {
  handleReportRaid: function() {
    return A
  },
  handleResolveRaid: function() {
    return f
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
var i = n("913527"),
  a = n.n(i),
  l = n("544891"),
  d = n("367907"),
  s = n("434404"),
  r = n("430824"),
  u = n("626135"),
  o = n("154285"),
  c = n("981631");

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
    ...(0, d.collectGuildAnalyticsMetadata)(e),
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
async function I(e, t, n, i) {
  let d = a()().add(i, "hours").toISOString();
  return await l.HTTP.put({
    url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: t ? d : null,
      dms_disabled_until: n ? d : null
    }
  })
}
async function f(e, t, n) {
  let {
    showAlertMode: i
  } = (0, o.getGuildAlertModeEnabled)(e), a = r.default.getGuild(e), d = null == a ? void 0 : a.getSafetyAlertsChannelId();
  return i && null != d ? await l.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: t,
      reason: n
    }
  }) : null
}
async function A(e) {
  let {
    showAlertMode: t
  } = (0, o.getGuildAlertModeEnabled)(e), n = r.default.getGuild(e), i = null == n ? void 0 : n.getSafetyAlertsChannelId();
  return t && null != i ? await l.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
  }) : null
}