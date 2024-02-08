"use strict";
n.r(t), n.d(t, {
  useCanReportRaid: function() {
    return A
  },
  useCanEnableRaidAlerts: function() {
    return E
  }
});
var l = n("884691"),
  a = n("446674");
n("926809");
var i = n("957255"),
  u = n("610174"),
  r = n("413476"),
  d = n("311161"),
  s = n("54346"),
  o = n("49111");

function A(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
    {
      enableRaidReporting: u
    } = r.ReportRaidExperiment.useExperiment({
      guildId: n,
      location: "4467c7_1"
    }, {
      autoTrackExposure: !1
    }),
    A = (0, a.useStateFromStores)([i.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
      return t.can(o.Permissions.BAN_MEMBERS, e) || t.can(o.Permissions.KICK_MEMBERS, e) || t.can(o.Permissions.MANAGE_GUILD, e)
    })(e, i.default), [e]),
    E = (0, a.useStateFromStores)([s.default], () => null != e ? s.default.getGuildIncident(e.id) : null, [e]),
    _ = null != E && (0, d.hasDetectedActivity)(E);
  return l.useEffect(() => {
    !_ && A && r.ReportRaidExperiment.trackExposure({
      guildId: n,
      location: "4467c7_2"
    })
  }, [_, A, n]), !_ && A && u
}

function E(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
    l = (0, a.useStateFromStores)([i.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
      return t.can(o.Permissions.MANAGE_GUILD, e)
    })(e, i.default), [e]),
    {
      enableRaidAlerts: d
    } = r.RaidAlertExperiment.useExperiment({
      guildId: n,
      location: "4467c7_3"
    }, {
      autoTrackExposure: l
    }),
    {
      showAlertMode: s
    } = (0, u.useGuildAlertModeEnabled)(n);
  return l && (d || s)
}