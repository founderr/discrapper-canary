"use strict";
n.r(t), n.d(t, {
  useCanReportRaid: function() {
    return c
  },
  useCanEnableRaidAlerts: function() {
    return f
  }
});
var a = n("884691"),
  i = n("446674");
n("926809");
var l = n("957255"),
  r = n("610174"),
  d = n("413476"),
  s = n("311161"),
  u = n("54346"),
  o = n("49111");

function c(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.EMPTY_STRING_GUILD_ID,
    {
      enableRaidReporting: r
    } = d.ReportRaidExperiment.useExperiment({
      guildId: n,
      location: "4467c7_1"
    }, {
      autoTrackExposure: !1
    }),
    c = (0, i.useStateFromStores)([l.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
      return t.can(o.Permissions.BAN_MEMBERS, e) || t.can(o.Permissions.KICK_MEMBERS, e) || t.can(o.Permissions.MANAGE_GUILD, e)
    })(e, l.default), [e]),
    f = (0, i.useStateFromStores)([u.default], () => null != e ? u.default.getGuildIncident(e.id) : null, [e]),
    _ = null != f && (0, s.hasDetectedActivity)(f);
  return a.useEffect(() => {
    !_ && c && d.ReportRaidExperiment.trackExposure({
      guildId: n,
      location: "4467c7_2"
    })
  }, [_, c, n]), !_ && c && r
}

function f(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.EMPTY_STRING_GUILD_ID,
    a = (0, i.useStateFromStores)([l.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
      return t.can(o.Permissions.MANAGE_GUILD, e)
    })(e, l.default), [e]),
    {
      enableRaidAlerts: s
    } = d.RaidAlertExperiment.useExperiment({
      guildId: n,
      location: "4467c7_3"
    }, {
      autoTrackExposure: a
    }),
    {
      showAlertMode: u
    } = (0, r.useGuildAlertModeEnabled)(n);
  return a && (s || u)
}