t.d(n, {
  BT: function() {
    return u
  },
  N8: function() {
    return d
  }
});
var i = t(442837);
t(467319);
var s = t(496675),
  l = t(154285),
  a = t(655006),
  r = t(533244),
  o = t(487419),
  c = t(981631);

function d(e) {
  let n = (0, i.e7)([s.Z], () => (function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z;
      return n.can(c.Plq.BAN_MEMBERS, e) || n.can(c.Plq.KICK_MEMBERS, e) || n.can(c.Plq.MANAGE_GUILD, e)
    })(e, s.Z), [e]),
    t = (0, i.e7)([o.Z], () => null != e ? o.Z.getGuildIncident(e.id) : null, [e]);
  return !(null != t && (0, r.i9)(t)) && n
}

function u(e) {
  var n;
  let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : c.lds,
    r = (0, i.e7)([s.Z], () => (function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z;
      return n.can(c.Plq.MANAGE_GUILD, e)
    })(e, s.Z), [e]),
    {
      enableRaidAlerts: o
    } = a.l.useExperiment({
      guildId: t,
      location: "4467c7_3"
    }, {
      autoTrackExposure: r
    }),
    {
      showAlertMode: d
    } = (0, l.sw)(t);
  return r && (o || d)
}