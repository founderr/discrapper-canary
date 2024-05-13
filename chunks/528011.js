"use strict";
n.r(t), n.d(t, {
  shouldShowRaidNotificationNagbar: function() {
    return I
  },
  useGuildIncidentsState: function() {
    return h
  }
}), n("47120");
var r = n("149765"),
  i = n("399606"),
  s = n("581883"),
  l = n("430824"),
  u = n("496675"),
  o = n("914010"),
  a = n("594174"),
  d = n("700785"),
  c = n("709054"),
  f = n("154285"),
  S = n("533244"),
  _ = n("487419"),
  E = n("676770"),
  g = n("981631");

function h(e) {
  let {
    showAlertMode: t
  } = (0, f.useGuildAlertModeEnabled)(null != e ? e : g.ZERO_STRING_GUILD_ID), n = (0, i.useStateFromStores)([l.default, u.default], () => {
    let t = l.default.getGuild(e);
    if (null == t) return !1;
    let n = u.default.getGuildPermissions(t);
    return null != n && r.hasAny(n, E.IncidentAlertModeratorPermissions)
  }), s = (0, i.useStateFromStores)([_.default], () => null != e ? _.default.getGuildIncident(e) : null), o = null != s && (0, S.isUnderLockdown)(s);
  return {
    shouldShowIncidentActions: n && t,
    incidentData: s,
    isUnderLockdown: o
  }
}

function I() {
  var e;
  let t = function(e) {
      let t = a.default.getCurrentUser(),
        n = _.default.getIncidentsByGuild();
      for (let i of c.default.keys(n).map(e => l.default.getGuild(e))) {
        if (null == i) continue;
        let s = n[i.id];
        if (!(null == s || !(0, S.hasDetectedActivity)(s) && !(0, S.isUnderLockdown)(s) || (0, S.isUnderLockdown)(s) && i.id !== e)) {
          if (r.hasAny(d.computePermissions({
              user: t,
              context: i,
              checkElevated: !1
            }), E.IncidentAlertModeratorPermissions)) return i.id
        }
      }
      return null
    }(o.default.getGuildId()),
    {
      showAlertMode: n
    } = (0, f.getGuildAlertModeEnabled)(null != t ? t : g.ZERO_STRING_GUILD_ID),
    i = null !== (e = s.default.getGuildsProto()) && void 0 !== e ? e : {},
    u = null != t ? i[t] : null,
    h = null != u && u.disableRaidAlertNag;
  return {
    show: null != t && n && !h,
    guildId: t
  }
}