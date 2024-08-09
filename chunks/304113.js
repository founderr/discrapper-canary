n.r(s), n.d(s, {
  default: function() {
return x;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  o = n(512722),
  t = n.n(o),
  r = n(442837),
  a = n(100527),
  d = n(699516),
  c = n(594174),
  u = n(453956),
  _ = n(380738),
  I = n(787018),
  E = n(910364),
  f = n(853825),
  m = n(41527),
  S = n(107889);
let Z = [
  a.Z.BITE_SIZE_PROFILE_POPOUT,
  a.Z.PROFILE_POPOUT,
  a.Z.PROFILE_PANEL
];

function x(e) {
  let {
location: s,
user: n,
...o
  } = e, {
botProfilesEnabled: a
  } = (0, _.J)({
location: s
  }), x = (0, r.e7)([c.default], () => c.default.getCurrentUser());
  t()(null != x, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined');
  let v = (0, r.e7)([d.Z], () => d.Z.isBlocked(n.id)),
[h, T] = l.useState(v),
p = (0, u.sS)({
  location: s
});
  l.useEffect(() => {
T(v);
  }, [v]);
  let g = !Z.some(e => {
var s;
return (null !== (s = o.sourceAnalyticsLocations) && void 0 !== s ? s : []).includes(e);
  });
  return h && p && g ? (0, i.jsx)(I.Z, {
user: n,
currentUser: x,
onViewBlockedProfileClick: () => T(!1),
...o
  }) : a && n.isNonUserBot() ? (0, i.jsx)(f.Z, {
...o,
user: n,
currentUser: x
  }) : a && n.bot ? (0, i.jsx)(m.Z, {
...o,
user: n,
currentUser: x
  }) : n.bot ? (0, i.jsx)(E.Z, {
...o,
user: n,
currentUser: x
  }) : (0, i.jsx)(S.Z, {
...o,
user: n,
currentUser: x
  });
}