s.r(i), s.d(i, {
  default: function() {
    return Z
  }
});
var n = s(735250);
s(470079);
var l = s(512722),
  t = s.n(l),
  o = s(442837),
  r = s(594174),
  a = s(786874),
  d = s(877485),
  c = s(910364),
  u = s(853825),
  I = s(41527),
  E = s(107889);

function Z(e) {
  let {
    location: i,
    user: s,
    ...l
  } = e;
  (0, d.V)({
    location: i
  });
  let {
    botProfilesEnabled: Z
  } = (0, a.J)({
    location: i
  }), f = (0, o.e7)([r.default], () => r.default.getCurrentUser());
  return (t()(null != f, "UserProfileModalExperimentWrapper: currentUser cannot be undefined"), Z && s.isNonUserBot()) ? (0, n.jsx)(u.Z, {
    ...l,
    user: s,
    currentUser: f
  }) : Z && s.bot ? (0, n.jsx)(I.Z, {
    ...l,
    user: s,
    currentUser: f
  }) : s.bot ? (0, n.jsx)(c.Z, {
    ...l,
    user: s,
    currentUser: f
  }) : (0, n.jsx)(E.Z, {
    ...l,
    user: s,
    currentUser: f
  })
}