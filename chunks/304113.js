i.r(s), i.d(s, {
  default: function() {
return S;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(512722),
  o = i.n(t),
  a = i(442837),
  r = i(100527),
  d = i(699516),
  c = i(594174),
  u = i(453956),
  I = i(380738),
  _ = i(787018),
  f = i(910364),
  E = i(853825),
  m = i(41527),
  x = i(107889);
let v = [
  r.Z.BITE_SIZE_PROFILE_POPOUT,
  r.Z.PROFILE_POPOUT,
  r.Z.PROFILE_PANEL
];

function S(e) {
  let {
location: s,
user: i,
...t
  } = e, {
botProfilesEnabled: r
  } = (0, I.J)({
location: s
  }), S = (0, a.e7)([c.default], () => c.default.getCurrentUser());
  o()(null != S, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined');
  let Z = (0, a.e7)([d.Z], () => d.Z.isBlocked(i.id)),
[h, p] = l.useState(Z),
T = (0, u.sS)({
  location: s
});
  l.useEffect(() => {
p(Z);
  }, [Z]);
  let g = !v.some(e => {
var s;
return (null !== (s = t.sourceAnalyticsLocations) && void 0 !== s ? s : []).includes(e);
  });
  return h && T && g ? (0, n.jsx)(_.Z, {
user: i,
currentUser: S,
onViewBlockedProfileClick: () => p(!1),
...t
  }) : r && i.isNonUserBot() ? (0, n.jsx)(E.Z, {
...t,
user: i,
currentUser: S
  }) : r && i.bot ? (0, n.jsx)(m.Z, {
...t,
user: i,
currentUser: S
  }) : i.bot ? (0, n.jsx)(f.Z, {
...t,
user: i,
currentUser: S
  }) : (0, n.jsx)(x.Z, {
...t,
user: i,
currentUser: S
  });
}