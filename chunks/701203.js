"use strict";
n.r(t), n.d(t, {
  useCanReportRaid: function() {
    return d
  },
  useCanEnableRaidAlerts: function() {
    return f
  }
});
var i = n("884691"),
  r = n("446674");
n("926809");
var u = n("957255"),
  a = n("610174"),
  s = n("413476"),
  l = n("311161"),
  o = n("54346"),
  c = n("49111");

function d(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_GUILD_ID,
    {
      enableRaidReporting: a
    } = s.ReportRaidExperiment.useExperiment({
      guildId: n,
      location: "4467c7_1"
    }, {
      autoTrackExposure: !1
    }),
    d = (0, r.useStateFromStores)([u.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default;
      return t.can(c.Permissions.BAN_MEMBERS, e) || t.can(c.Permissions.KICK_MEMBERS, e) || t.can(c.Permissions.MANAGE_GUILD, e)
    })(e, u.default), [e]),
    f = (0, r.useStateFromStores)([o.default], () => null != e ? o.default.getGuildIncident(e.id) : null, [e]),
    E = null != f && (0, l.hasDetectedActivity)(f);
  return i.useEffect(() => {
    !E && d && s.ReportRaidExperiment.trackExposure({
      guildId: n,
      location: "4467c7_2"
    })
  }, [E, d, n]), !E && d && a
}

function f(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : c.EMPTY_STRING_GUILD_ID,
    i = (0, r.useStateFromStores)([u.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default;
      return t.can(c.Permissions.MANAGE_GUILD, e)
    })(e, u.default), [e]),
    {
      enableRaidAlerts: l
    } = s.RaidAlertExperiment.useExperiment({
      guildId: n,
      location: "4467c7_3"
    }, {
      autoTrackExposure: i
    }),
    {
      showAlertMode: o
    } = (0, a.useGuildAlertModeEnabled)(n);
  return i && (l || o)
}