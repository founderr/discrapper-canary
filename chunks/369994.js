"use strict";
a.r(t), a.d(t, {
  handleReportRaid: function() {
    return A
  },
  handleResolveRaid: function() {
    return D
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
}), a("47120");
var s = a("913527"),
  d = a.n(s),
  l = a("544891"),
  n = a("367907"),
  i = a("434404"),
  o = a("430824"),
  r = a("626135"),
  u = a("154285"),
  c = a("981631");

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  0 !== t.length && r.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
    ...(0, n.collectGuildAnalyticsMetadata)(e),
    guild_id: e,
    raid_types: t
  })
}
async function E(e, t) {
  let a = new Set(e.features);
  a.has(c.GuildFeatures.COMMUNITY) ? t ? a.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : a.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? a.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : a.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await i.default.saveGuild(e.id, {
    features: a
  }, {
    throwErr: !0
  })
}
async function I(e, t, a, s) {
  let n = d()().add(s, "hours").toISOString();
  return await l.HTTP.put({
    url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: t ? n : null,
      dms_disabled_until: a ? n : null
    }
  })
}
async function D(e, t, a) {
  let {
    showAlertMode: s
  } = (0, u.getGuildAlertModeEnabled)(e), d = o.default.getGuild(e), n = null == d ? void 0 : d.getSafetyAlertsChannelId();
  return s && null != n ? await l.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: t,
      reason: a
    }
  }) : null
}
async function A(e) {
  let {
    showAlertMode: t
  } = (0, u.getGuildAlertModeEnabled)(e), a = o.default.getGuild(e), s = null == a ? void 0 : a.getSafetyAlertsChannelId();
  return t && null != s ? await l.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
  }) : null
}