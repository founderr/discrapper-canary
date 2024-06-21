s.r(i), s.d(i, {
  default: function() {
    return f
  }
});
var n = s(735250);
s(470079);
var l = s(512722),
  t = s.n(l),
  o = s(442837),
  r = s(594174),
  a = s(786874),
  d = s(447452),
  c = s(877485),
  u = s(910364),
  I = s(853825),
  E = s(41527),
  Z = s(107889);

function f(e) {
  let {
    location: i,
    user: s,
    ...l
  } = e, {
    basicsEnabled: f
  } = (0, d.t)({
    location: i
  }), {
    originalFriendingEnabled: _,
    improvedFriendingEnabled: S
  } = (0, c.V)({
    location: i
  }), {
    botProfilesEnabled: v
  } = (0, a.J)({
    location: i
  }), m = f || _ || S, x = (0, o.e7)([r.default], () => r.default.getCurrentUser());
  return (t()(null != x, "UserProfileModalExperimentWrapper: currentUser cannot be undefined"), m && v && s.isNonUserBot()) ? (0, n.jsx)(I.Z, {
    ...l,
    user: s,
    currentUser: x
  }) : m && v && s.bot ? (0, n.jsx)(E.Z, {
    ...l,
    user: s,
    currentUser: x
  }) : !m || s.bot || s.isNonUserBot() || s.isClyde() ? (0, n.jsx)(u.Z, {
    ...l,
    user: s,
    currentUser: x
  }) : (0, n.jsx)(Z.Z, {
    ...l,
    user: s,
    currentUser: x
  })
}