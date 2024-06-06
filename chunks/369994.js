"use strict";
l.r(t), l.d(t, {
  handleReportRaid: function() {
    return E
  },
  handleResolveRaid: function() {
    return T
  },
  setGuildIncidentActions: function() {
    return m
  },
  setGuildRaidAlerts: function() {
    return I
  },
  trackReportRaidViewed: function() {
    return f
  }
}), l("47120");
var n = l("913527"),
  a = l.n(n),
  s = l("544891"),
  i = l("367907"),
  r = l("434404"),
  o = l("430824"),
  d = l("626135"),
  u = l("154285"),
  c = l("981631");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  0 !== t.length && d.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
    ...(0, i.collectGuildAnalyticsMetadata)(e),
    guild_id: e,
    raid_types: t
  })
}
async function I(e, t) {
  let l = new Set(e.features);
  l.has(c.GuildFeatures.COMMUNITY) ? t ? l.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : l.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? l.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : l.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await r.default.saveGuild(e.id, {
    features: l
  }, {
    throwErr: !0
  })
}
async function m(e, t, l, n) {
  let i = a()().add(n, "hours").toISOString();
  return await s.HTTP.put({
    url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: t ? i : null,
      dms_disabled_until: l ? i : null
    }
  })
}
async function T(e, t, l) {
  let {
    showAlertMode: n
  } = (0, u.getGuildAlertModeEnabled)(e), a = o.default.getGuild(e), i = null == a ? void 0 : a.getSafetyAlertsChannelId();
  return n && null != i ? await s.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: t,
      reason: l
    }
  }) : null
}
async function E(e) {
  let {
    showAlertMode: t
  } = (0, u.getGuildAlertModeEnabled)(e), l = o.default.getGuild(e), n = null == l ? void 0 : l.getSafetyAlertsChannelId();
  return t && null != n ? await s.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
  }) : null
}