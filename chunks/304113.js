n.r(i), n.d(i, {
  default: function() {
return _;
  }
});
var s = n(735250);
n(470079);
var l = n(512722),
  o = n.n(l),
  t = n(442837),
  r = n(594174),
  a = n(380738),
  d = n(910364),
  c = n(853825),
  u = n(41527),
  I = n(107889);

function _(e) {
  let {
location: i,
user: n,
...l
  } = e, {
botProfilesEnabled: _
  } = (0, a.J)({
location: i
  }), f = (0, t.e7)([r.default], () => r.default.getCurrentUser());
  return (o()(null != f, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), _ && n.isNonUserBot()) ? (0, s.jsx)(c.Z, {
...l,
user: n,
currentUser: f
  }) : _ && n.bot ? (0, s.jsx)(u.Z, {
...l,
user: n,
currentUser: f
  }) : n.bot ? (0, s.jsx)(d.Z, {
...l,
user: n,
currentUser: f
  }) : (0, s.jsx)(I.Z, {
...l,
user: n,
currentUser: f
  });
}