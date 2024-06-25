i.r(n), i.d(n, {
  default: function() {
    return E
  }
});
var t = i(735250);
i(470079);
var s = i(512722),
  o = i.n(s),
  l = i(442837),
  a = i(594174),
  r = i(786874),
  d = i(877485),
  c = i(910364),
  u = i(853825),
  I = i(41527),
  f = i(107889);

function E(e) {
  let {
    location: n,
    user: i,
    ...s
  } = e;
  (0, d.V)({
    location: n
  });
  let {
    botProfilesEnabled: E
  } = (0, r.J)({
    location: n
  }), _ = (0, l.e7)([a.default], () => a.default.getCurrentUser());
  return (o()(null != _, "UserProfileModalExperimentWrapper: currentUser cannot be undefined"), E && i.isNonUserBot()) ? (0, t.jsx)(u.Z, {
    ...s,
    user: i,
    currentUser: _
  }) : E && i.bot ? (0, t.jsx)(I.Z, {
    ...s,
    user: i,
    currentUser: _
  }) : i.bot ? (0, t.jsx)(c.Z, {
    ...s,
    user: i,
    currentUser: _
  }) : (0, t.jsx)(f.Z, {
    ...s,
    user: i,
    currentUser: _
  })
}