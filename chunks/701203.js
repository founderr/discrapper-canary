"use strict";
s.r(t), s.d(t, {
  useCanReportRaid: function() {
    return c
  },
  useCanEnableRaidAlerts: function() {
    return E
  }
});
var a = s("884691"),
  l = s("446674");
s("926809");
var n = s("957255"),
  i = s("610174"),
  r = s("413476"),
  o = s("311161"),
  d = s("54346"),
  u = s("49111");

function c(e) {
  var t;
  let s = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.EMPTY_STRING_GUILD_ID,
    {
      enableRaidReporting: i
    } = r.ReportRaidExperiment.useExperiment({
      guildId: s,
      location: "4467c7_1"
    }, {
      autoTrackExposure: !1
    }),
    c = (0, l.useStateFromStores)([n.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.default;
      return t.can(u.Permissions.BAN_MEMBERS, e) || t.can(u.Permissions.KICK_MEMBERS, e) || t.can(u.Permissions.MANAGE_GUILD, e)
    })(e, n.default), [e]),
    E = (0, l.useStateFromStores)([d.default], () => null != e ? d.default.getGuildIncident(e.id) : null, [e]),
    _ = null != E && (0, o.hasDetectedActivity)(E);
  return a.useEffect(() => {
    !_ && c && r.ReportRaidExperiment.trackExposure({
      guildId: s,
      location: "4467c7_2"
    })
  }, [_, c, s]), !_ && c && i
}

function E(e) {
  var t;
  let s = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.EMPTY_STRING_GUILD_ID,
    a = (0, l.useStateFromStores)([n.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.default;
      return t.can(u.Permissions.MANAGE_GUILD, e)
    })(e, n.default), [e]),
    {
      enableRaidAlerts: o
    } = r.RaidAlertExperiment.useExperiment({
      guildId: s,
      location: "4467c7_3"
    }, {
      autoTrackExposure: a
    }),
    {
      showAlertMode: d
    } = (0, i.useGuildAlertModeEnabled)(s);
  return a && (o || d)
}