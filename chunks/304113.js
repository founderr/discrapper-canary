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
  d = n(642113),
  c = n(910364),
  u = n(853825),
  I = n(41527),
  f = n(107889);

function _(e) {
  let {
location: i,
user: n,
...l
  } = e;
  (0, d.V)({
location: i
  });
  let {
botProfilesEnabled: _
  } = (0, a.J)({
location: i
  }), E = (0, t.e7)([r.default], () => r.default.getCurrentUser());
  return (o()(null != E, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), _ && n.isNonUserBot()) ? (0, s.jsx)(u.Z, {
...l,
user: n,
currentUser: E
  }) : _ && n.bot ? (0, s.jsx)(I.Z, {
...l,
user: n,
currentUser: E
  }) : n.bot ? (0, s.jsx)(c.Z, {
...l,
user: n,
currentUser: E
  }) : (0, s.jsx)(f.Z, {
...l,
user: n,
currentUser: E
  });
}