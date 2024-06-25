t.d(n, {
  g: function() {
    return p
  },
  mI: function() {
    return S
  }
}), t(47120);
var i = t(149765),
  r = t(399606),
  l = t(581883),
  o = t(430824),
  u = t(496675),
  s = t(914010),
  a = t(594174),
  c = t(700785),
  d = t(709054),
  _ = t(154285),
  f = t(533244),
  E = t(487419),
  I = t(676770),
  g = t(981631);

function S(e) {
  let {
    showAlertMode: n
  } = (0, _.sw)(null != e ? e : g.aIL), t = (0, r.e7)([o.Z, u.Z], () => {
    let n = o.Z.getGuild(e);
    if (null == n) return !1;
    let t = u.Z.getGuildPermissions(n);
    return null != t && i.Db(t, I.cv)
  }), l = (0, r.e7)([E.Z], () => null != e ? E.Z.getGuildIncident(e) : null), s = null != l && (0, f.ur)(l);
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
        t = E.Z.getIncidentsByGuild();
      for (let r of d.default.keys(t).map(e => o.Z.getGuild(e))) {
        if (null == r) continue;
        let l = t[r.id];
        if (!(null == l || !(0, f.i9)(l) && !(0, f.ur)(l) || (0, f.ur)(l) && r.id !== e)) {
          if (i.Db(c.uB({
              user: n,
              context: r,
              checkElevated: !1
            }), I.cv)) return r.id
        }
      }
      return null
    }(s.Z.getGuildId()),
    {
      showAlertMode: t
    } = (0, _.jy)(null != n ? n : g.aIL),
    r = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
    u = null != n ? r[n] : null,
    S = null != u && u.disableRaidAlertNag;
  return {
    show: null != n && t && !S,
    guildId: n
  }
}