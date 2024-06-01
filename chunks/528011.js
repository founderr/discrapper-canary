"use strict";
n.r(t), n.d(t, {
  shouldShowRaidNotificationNagbar: function() {
    return I
  },
  useGuildIncidentsState: function() {
    return g
  }
}), n("47120");
var i = n("149765"),
  r = n("399606"),
  s = n("581883"),
  l = n("430824"),
  o = n("496675"),
  u = n("914010"),
  a = n("594174"),
  d = n("700785"),
  c = n("709054"),
  f = n("154285"),
  S = n("533244"),
  _ = n("487419"),
  p = n("676770"),
  E = n("981631");

function g(e) {
  let {
    showAlertMode: t
  } = (0, f.useGuildAlertModeEnabled)(null != e ? e : E.ZERO_STRING_GUILD_ID), n = (0, r.useStateFromStores)([l.default, o.default], () => {
    let t = l.default.getGuild(e);
    if (null == t) return !1;
    let n = o.default.getGuildPermissions(t);
    return null != n && i.hasAny(n, p.IncidentAlertModeratorPermissions)
  }), s = (0, r.useStateFromStores)([_.default], () => null != e ? _.default.getGuildIncident(e) : null), u = null != s && (0, S.isUnderLockdown)(s);
  return {
    shouldShowIncidentActions: n && t,
    incidentData: s,
    isUnderLockdown: u
  }
}

function I() {
  var e;
  let t = function(e) {
      let t = a.default.getCurrentUser(),
        n = _.default.getIncidentsByGuild();
      for (let r of c.default.keys(n).map(e => l.default.getGuild(e))) {
        if (null == r) continue;
        let s = n[r.id];
        if (!(null == s || !(0, S.hasDetectedActivity)(s) && !(0, S.isUnderLockdown)(s) || (0, S.isUnderLockdown)(s) && r.id !== e)) {
          if (i.hasAny(d.computePermissions({
              user: t,
              context: r,
              checkElevated: !1
            }), p.IncidentAlertModeratorPermissions)) return r.id
        }
      }
      return null
    }(u.default.getGuildId()),
    {
      showAlertMode: n
    } = (0, f.getGuildAlertModeEnabled)(null != t ? t : E.ZERO_STRING_GUILD_ID),
    r = null !== (e = s.default.getGuildsProto()) && void 0 !== e ? e : {},
    o = null != t ? r[t] : null,
    g = null != o && o.disableRaidAlertNag;
  return {
    show: null != t && n && !g,
    guildId: t
  }
}