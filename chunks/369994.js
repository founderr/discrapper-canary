t.d(n, {
  C4: function() {
    return m
  },
  Fi: function() {
    return T
  },
  KK: function() {
    return I
  },
  f6: function() {
    return N
  },
  n: function() {
    return E
  }
}), t(47120);
var i = t(913527),
  s = t.n(i),
  l = t(544891),
  a = t(367907),
  r = t(434404),
  o = t(430824),
  c = t(626135),
  d = t(154285),
  u = t(981631);

function I(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  if (0 !== n.length) c.default.track(u.rMx.GUILD_RAID_REPORTED, {
    ...(0, a.hH)(e),
    guild_id: e,
    raid_types: n
  })
}
async function N(e, n) {
  let t = new Set(e.features);
  t.has(u.oNc.COMMUNITY) ? n ? t.delete(u.oNc.RAID_ALERTS_DISABLED) : t.add(u.oNc.RAID_ALERTS_DISABLED) : n ? t.add(u.oNc.NON_COMMUNITY_RAID_ALERTS) : t.delete(u.oNc.NON_COMMUNITY_RAID_ALERTS), await r.Z.saveGuild(e.id, {
    features: t
  }, {
    throwErr: !0
  })
}
async function E(e, n, t, i) {
  let a = s()().add(i, "hours").toISOString();
  return await l.tn.put({
    url: u.ANM.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: n ? a : null,
      dms_disabled_until: t ? a : null
    }
  })
}
async function T(e, n, t) {
  let {
    showAlertMode: i
  } = (0, d.jy)(e), s = o.Z.getGuild(e), a = null == s ? void 0 : s.getSafetyAlertsChannelId();
  return i && null != a ? await l.tn.post({
    url: u.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: n,
      reason: t
    }
  }) : null
}
async function m(e) {
  let {
    showAlertMode: n
  } = (0, d.jy)(e), t = o.Z.getGuild(e), i = null == t ? void 0 : t.getSafetyAlertsChannelId();
  return n && null != i ? await l.tn.post({
    url: u.ANM.GUILD_INCIDENT_REPORT_RAID(e)
  }) : null
}