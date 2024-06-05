"use strict";
l.r(t), l.d(t, {
  useCanEnableRaidAlerts: function() {
    return c
  },
  useCanReportRaid: function() {
    return u
  }
});
var n = l("442837");
l("467319");
var a = l("496675"),
  s = l("154285"),
  i = l("655006"),
  r = l("533244"),
  o = l("487419"),
  d = l("981631");

function u(e) {
  let t = (0, n.useStateFromStores)([a.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default;
      return t.can(d.Permissions.BAN_MEMBERS, e) || t.can(d.Permissions.KICK_MEMBERS, e) || t.can(d.Permissions.MANAGE_GUILD, e)
    })(e, a.default), [e]),
    l = (0, n.useStateFromStores)([o.default], () => null != e ? o.default.getGuildIncident(e.id) : null, [e]);
  return !(null != l && (0, r.hasDetectedActivity)(l)) && t
}

function c(e) {
  var t;
  let l = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : d.EMPTY_STRING_SNOWFLAKE_ID,
    r = (0, n.useStateFromStores)([a.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default;
      return t.can(d.Permissions.MANAGE_GUILD, e)
    })(e, a.default), [e]),
    {
      enableRaidAlerts: o
    } = i.RaidAlertExperiment.useExperiment({
      guildId: l,
      location: "4467c7_3"
    }, {
      autoTrackExposure: r
    }),
    {
      showAlertMode: u
    } = (0, s.useGuildAlertModeEnabled)(l);
  return r && (o || u)
}