"use strict";
n.r(t), n.d(t, {
  shouldShowRaidNotificationNagbar: function() {
    return p
  },
  useGuildIncidentsState: function() {
    return h
  }
}), n("47120");
var i = n("149765"),
  r = n("399606"),
  l = n("581883"),
  s = n("430824"),
  u = n("496675"),
  o = n("914010"),
  a = n("594174"),
  d = n("700785"),
  c = n("709054"),
  f = n("154285"),
  S = n("533244"),
  E = n("487419"),
  _ = n("676770"),
  g = n("981631");

function h(e) {
  let {
    showAlertMode: t
  } = (0, f.useGuildAlertModeEnabled)(null != e ? e : g.ZERO_STRING_GUILD_ID), n = (0, r.useStateFromStores)([s.default, u.default], () => {
    let t = s.default.getGuild(e);
    if (null == t) return !1;
    let n = u.default.getGuildPermissions(t);
    return null != n && i.hasAny(n, _.IncidentAlertModeratorPermissions)
  }), l = (0, r.useStateFromStores)([E.default], () => null != e ? E.default.getGuildIncident(e) : null), o = null != l && (0, S.isUnderLockdown)(l);
  return {
    shouldShowIncidentActions: n && t,
    incidentData: l,
    isUnderLockdown: o
  }
}

function p() {
  var e;
  let t = function(e) {
      let t = a.default.getCurrentUser(),
        n = E.default.getIncidentsByGuild();
      for (let r of c.default.keys(n).map(e => s.default.getGuild(e))) {
        if (null == r) continue;
        let l = n[r.id];
        if (!(null == l || !(0, S.hasDetectedActivity)(l) && !(0, S.isUnderLockdown)(l) || (0, S.isUnderLockdown)(l) && r.id !== e)) {
          if (i.hasAny(d.computePermissions({
              user: t,
              context: r,
              checkElevated: !1
            }), _.IncidentAlertModeratorPermissions)) return r.id
        }
      }
      return null
    }(o.default.getGuildId()),
    {
      showAlertMode: n
    } = (0, f.getGuildAlertModeEnabled)(null != t ? t : g.ZERO_STRING_GUILD_ID),
    r = null !== (e = l.default.getGuildsProto()) && void 0 !== e ? e : {},
    u = null != t ? r[t] : null,
    h = null != u && u.disableRaidAlertNag;
  return {
    show: null != t && n && !h,
    guildId: t
  }
}