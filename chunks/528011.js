t.d(n, {
  g: function() {
return A;
  },
  mI: function() {
return S;
  }
}), t(47120);
var r = t(149765),
  i = t(399606),
  o = t(581883),
  l = t(430824),
  u = t(496675),
  a = t(914010),
  s = t(594174),
  c = t(700785),
  d = t(709054),
  _ = t(154285),
  E = t(533244),
  f = t(487419),
  I = t(676770),
  T = t(981631);

function S(e) {
  let {
showAlertMode: n
  } = (0, _.sw)(null != e ? e : T.aIL), t = (0, i.e7)([
l.Z,
u.Z
  ], () => {
let n = l.Z.getGuild(e);
if (null == n)
  return !1;
let t = u.Z.getGuildPermissions(n);
return null != t && r.Db(t, I.cv);
  }), o = (0, i.e7)([f.Z], () => null != e ? f.Z.getGuildIncident(e) : null), a = null != o && (0, E.ur)(o);
  return {
shouldShowIncidentActions: t && n,
incidentData: o,
isUnderLockdown: a
  };
}

function A() {
  var e;
  let n = function(e) {
  let n = s.default.getCurrentUser(),
    t = f.Z.getIncidentsByGuild();
  for (let i of d.default.keys(t).map(e => l.Z.getGuild(e))) {
    if (null == i)
      continue;
    let o = t[i.id];
    if (!(null == o || !(0, E.i9)(o) && !(0, E.ur)(o) || (0, E.ur)(o) && i.id !== e)) {
      if (r.Db(c.uB({
          user: n,
          context: i,
          checkElevated: !1
        }), I.cv))
        return i.id;
    }
  }
  return null;
}(a.Z.getGuildId()),
{
  showAlertMode: t
} = (0, _.jy)(null != n ? n : T.aIL),
i = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
u = null != n ? i[n] : null,
S = null != u && u.disableRaidAlertNag;
  return {
show: null != n && t && !S,
guildId: n
  };
}