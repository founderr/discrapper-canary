s.r(n), s.d(n, {
  default: function() {
return v;
  }
}), s(47120);
var i = s(735250),
  l = s(470079),
  o = s(512722),
  t = s.n(o),
  r = s(442837),
  a = s(100527),
  d = s(699516),
  c = s(594174),
  u = s(453956),
  I = s(380738),
  _ = s(787018),
  f = s(910364),
  E = s(853825),
  m = s(41527),
  S = s(107889);
let Z = [
  a.Z.BITE_SIZE_PROFILE_POPOUT,
  a.Z.PROFILE_POPOUT,
  a.Z.PROFILE_PANEL
];

function v(e) {
  let {
location: n,
user: s,
...o
  } = e, {
botProfilesEnabled: a
  } = (0, I.J)({
location: n
  }), v = (0, r.e7)([c.default], () => c.default.getCurrentUser());
  t()(null != v, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined');
  let x = (0, r.e7)([d.Z], () => d.Z.isBlocked(s.id)),
[h, T] = l.useState(x),
p = (0, u.sS)({
  location: n
});
  l.useEffect(() => {
T(x);
  }, [x]);
  let g = !Z.some(e => {
var n;
return (null !== (n = o.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
  });
  return h && p && g ? (0, i.jsx)(_.Z, {
user: s,
currentUser: v,
onViewBlockedProfileClick: () => T(!1),
...o
  }) : a && s.isNonUserBot() ? (0, i.jsx)(E.Z, {
...o,
user: s,
currentUser: v
  }) : a && s.bot ? (0, i.jsx)(m.Z, {
...o,
user: s,
currentUser: v
  }) : s.bot ? (0, i.jsx)(f.Z, {
...o,
user: s,
currentUser: v
  }) : (0, i.jsx)(S.Z, {
...o,
user: s,
currentUser: v
  });
}