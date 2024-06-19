t.d(n, {
  g: function() {
    return p
  },
  mI: function() {
    return g
  }
}), t(47120);
var r = t(149765),
  i = t(399606),
  l = t(581883),
  o = t(430824),
  u = t(496675),
  s = t(914010),
  a = t(594174),
  c = t(700785),
  d = t(709054),
  f = t(154285),
  E = t(533244),
  _ = t(487419),
  I = t(676770),
  S = t(981631);

function g(e) {
  let {
    showAlertMode: n
  } = (0, f.sw)(null != e ? e : S.aIL), t = (0, i.e7)([o.Z, u.Z], () => {
    let n = o.Z.getGuild(e);
    if (null == n) return !1;
    let t = u.Z.getGuildPermissions(n);
    return null != t && r.Db(t, I.cv)
  }), l = (0, i.e7)([_.Z], () => null != e ? _.Z.getGuildIncident(e) : null), s = null != l && (0, E.ur)(l);
  return {
    shouldShowIncidentActions: t && n,
    incidentData: l,
    isUnderLockdown: s
  }
}

function p() {
  var e;
  let n = function(e) {
      let n = a.default.getCurrentUser(),
        t = _.Z.getIncidentsByGuild();
      for (let i of d.default.keys(t).map(e => o.Z.getGuild(e))) {
        if (null == i) continue;
        let l = t[i.id];
        if (!(null == l || !(0, E.i9)(l) && !(0, E.ur)(l) || (0, E.ur)(l) && i.id !== e)) {
          if (r.Db(c.uB({
              user: n,
              context: i,
              checkElevated: !1
            }), I.cv)) return i.id
        }
      }
      return null
    }(s.Z.getGuildId()),
    {
      showAlertMode: t
    } = (0, f.jy)(null != n ? n : S.aIL),
    i = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
    u = null != n ? i[n] : null,
    g = null != u && u.disableRaidAlertNag;
  return {
    show: null != n && t && !g,
    guildId: n
  }
}