s.r(n), s.d(n, {
  default: function() {
return _;
  }
});
var i = s(735250);
s(470079);
var l = s(512722),
  o = s.n(l),
  t = s(442837),
  r = s(594174),
  a = s(380738),
  d = s(910364),
  c = s(853825),
  u = s(41527),
  I = s(107889);

function _(e) {
  let {
location: n,
user: s,
...l
  } = e, {
botProfilesEnabled: _
  } = (0, a.J)({
location: n
  }), f = (0, t.e7)([r.default], () => r.default.getCurrentUser());
  return (o()(null != f, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), _ && s.isNonUserBot()) ? (0, i.jsx)(c.Z, {
...l,
user: s,
currentUser: f
  }) : _ && s.bot ? (0, i.jsx)(u.Z, {
...l,
user: s,
currentUser: f
  }) : s.bot ? (0, i.jsx)(d.Z, {
...l,
user: s,
currentUser: f
  }) : (0, i.jsx)(I.Z, {
...l,
user: s,
currentUser: f
  });
}