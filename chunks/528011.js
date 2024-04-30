"use strict";
n.r(t), n.d(t, {
  shouldShowRaidNotificationNagbar: function() {
    return p
  },
  useGuildIncidentsState: function() {
    return _
  }
}), n("47120");
var r = n("149765"),
  i = n("399606"),
  l = n("581883"),
  s = n("430824"),
  o = n("496675"),
  u = n("914010"),
  a = n("594174"),
  c = n("700785"),
  d = n("709054"),
  f = n("154285"),
  S = n("533244"),
  g = n("487419"),
  h = n("676770"),
  E = n("981631");

function _(e) {
  let {
    showAlertMode: t
  } = (0, f.useGuildAlertModeEnabled)(null != e ? e : E.ZERO_STRING_GUILD_ID), n = (0, i.useStateFromStores)([s.default, o.default], () => {
    let t = s.default.getGuild(e);
    if (null == t) return !1;
    let n = o.default.getGuildPermissions(t);
    return null != n && r.hasAny(n, h.IncidentAlertModeratorPermissions)
  }), l = (0, i.useStateFromStores)([g.default], () => null != e ? g.default.getGuildIncident(e) : null), u = null != l && (0, S.isUnderLockdown)(l);
  return {
    shouldShowIncidentActions: n && t,
    incidentData: l,
    isUnderLockdown: u
  }
}

function p() {
  var e;
  let t = function(e) {
      let t = a.default.getCurrentUser(),
        n = g.default.getIncidentsByGuild();
      for (let i of d.default.keys(n).map(e => s.default.getGuild(e))) {
        if (null == i) continue;
        let l = n[i.id];
        if (!(null == l || !(0, S.hasDetectedActivity)(l) && !(0, S.isUnderLockdown)(l) || (0, S.isUnderLockdown)(l) && i.id !== e)) {
          if (r.hasAny(c.computePermissions({
              user: t,
              context: i,
              checkElevated: !1
            }), h.IncidentAlertModeratorPermissions)) return i.id
        }
      }
      return null
    }(u.default.getGuildId()),
    {
      showAlertMode: n
    } = (0, f.getGuildAlertModeEnabled)(null != t ? t : E.ZERO_STRING_GUILD_ID),
    i = null !== (e = l.default.getGuildsProto()) && void 0 !== e ? e : {},
    o = null != t ? i[t] : null,
    _ = null != o && o.disableRaidAlertNag;
  return {
    show: null != t && n && !_,
    guildId: t
  }
}