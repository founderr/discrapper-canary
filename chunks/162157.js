"use strict";
n.r(t), n.d(t, {
  useCanEnableRaidAlerts: function() {
    return c
  },
  useCanReportRaid: function() {
    return o
  }
});
var i = n("442837");
n("467319");
var a = n("496675"),
  l = n("154285"),
  d = n("655006"),
  s = n("533244"),
  r = n("487419"),
  u = n("981631");

function o(e) {
  let t = (0, i.useStateFromStores)([a.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default;
      return t.can(u.Permissions.BAN_MEMBERS, e) || t.can(u.Permissions.KICK_MEMBERS, e) || t.can(u.Permissions.MANAGE_GUILD, e)
    })(e, a.default), [e]),
    n = (0, i.useStateFromStores)([r.default], () => null != e ? r.default.getGuildIncident(e.id) : null, [e]);
  return !(null != n && (0, s.hasDetectedActivity)(n)) && t
}

function c(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.EMPTY_STRING_SNOWFLAKE_ID,
    s = (0, i.useStateFromStores)([a.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default;
      return t.can(u.Permissions.MANAGE_GUILD, e)
    })(e, a.default), [e]),
    {
      enableRaidAlerts: r
    } = d.RaidAlertExperiment.useExperiment({
      guildId: n,
      location: "4467c7_3"
    }, {
      autoTrackExposure: s
    }),
    {
      showAlertMode: o
    } = (0, l.useGuildAlertModeEnabled)(n);
  return s && (r || o)
}