n.r(s), n.d(s, {
  default: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  t = n(512722),
  o = n.n(t),
  r = n(442837),
  a = n(100527),
  d = n(699516),
  c = n(594174),
  u = n(453956),
  _ = n(380738),
  I = n(787018),
  f = n(910364),
  E = n(853825),
  m = n(41527),
  x = n(107889);
let S = [
  a.Z.BITE_SIZE_PROFILE_POPOUT,
  a.Z.PROFILE_POPOUT,
  a.Z.PROFILE_PANEL
];

function v(e) {
  let {
location: s,
user: n,
...t
  } = e, {
botProfilesEnabled: a
  } = (0, _.J)({
location: s
  }), v = (0, r.e7)([c.default], () => c.default.getCurrentUser());
  o()(null != v, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined');
  let Z = (0, r.e7)([d.Z], () => d.Z.isBlocked(n.id)),
[p, h] = l.useState(Z),
T = (0, u.sS)({
  location: s
});
  l.useEffect(() => {
h(Z);
  }, [Z]);
  let g = !S.some(e => {
var s;
return (null !== (s = t.sourceAnalyticsLocations) && void 0 !== s ? s : []).includes(e);
  });
  return p && T && g ? (0, i.jsx)(I.Z, {
user: n,
currentUser: v,
onViewBlockedProfileClick: () => h(!1),
...t
  }) : a && n.isNonUserBot() ? (0, i.jsx)(E.Z, {
...t,
user: n,
currentUser: v
  }) : a && n.bot ? (0, i.jsx)(m.Z, {
...t,
user: n,
currentUser: v
  }) : n.bot ? (0, i.jsx)(f.Z, {
...t,
user: n,
currentUser: v
  }) : (0, i.jsx)(x.Z, {
...t,
user: n,
currentUser: v
  });
}