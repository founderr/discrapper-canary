n.r(i), n.d(i, {
  default: function() {
    return Z
  }
});
var s = n(735250);
n(470079);
var l = n(512722),
  t = n.n(l),
  o = n(442837),
  r = n(594174),
  a = n(786874),
  d = n(447452),
  u = n(877485),
  c = n(910364),
  I = n(107889),
  E = n(397185);

function Z(e) {
  let {
    location: i,
    user: n,
    ...l
  } = e, {
    basicsEnabled: Z
  } = (0, d.t)({
    location: i
  }), {
    originalFriendingEnabled: _,
    improvedFriendingEnabled: f
  } = (0, u.V)({
    location: i
  }), {
    botProfilesEnabled: S
  } = (0, a.J)({
    location: i
  }), v = Z || _ || f, m = (0, o.e7)([r.default], () => r.default.getCurrentUser());
  return (t()(null != m, "UserProfileModalExperimentWrapper: currentUser cannot be undefined"), v && S && n.bot && !n.isNonUserBot()) ? (0, s.jsx)(E.Z, {
    ...l,
    user: n,
    currentUser: m
  }) : !v || n.bot || n.isNonUserBot() || n.isClyde() ? (0, s.jsx)(c.Z, {
    ...l,
    user: n,
    currentUser: m
  }) : (0, s.jsx)(I.Z, {
    ...l,
    user: n,
    currentUser: m
  })
}