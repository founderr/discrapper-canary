i.r(n), i.d(n, {
  default: function() {
return f;
  }
});
var s = i(735250);
i(470079);
var l = i(512722),
  o = i.n(l),
  t = i(442837),
  r = i(594174),
  a = i(380738),
  d = i(910364),
  c = i(853825),
  u = i(41527),
  I = i(107889);

function f(e) {
  let {
location: n,
user: i,
...l
  } = e, {
botProfilesEnabled: f
  } = (0, a.J)({
location: n
  }), _ = (0, t.e7)([r.default], () => r.default.getCurrentUser());
  return (o()(null != _, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), f && i.isNonUserBot()) ? (0, s.jsx)(c.Z, {
...l,
user: i,
currentUser: _
  }) : f && i.bot ? (0, s.jsx)(u.Z, {
...l,
user: i,
currentUser: _
  }) : i.bot ? (0, s.jsx)(d.Z, {
...l,
user: i,
currentUser: _
  }) : (0, s.jsx)(I.Z, {
...l,
user: i,
currentUser: _
  });
}