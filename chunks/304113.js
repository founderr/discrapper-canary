i.r(s), i.d(s, {
  default: function() {
return f;
  }
});
var n = i(735250);
i(470079);
var l = i(512722),
  t = i.n(l),
  o = i(442837),
  a = i(594174),
  r = i(380738),
  d = i(910364),
  c = i(853825),
  u = i(41527),
  I = i(107889);

function f(e) {
  let {
location: s,
user: i,
...l
  } = e, {
botProfilesEnabled: f
  } = (0, r.J)({
location: s
  }), _ = (0, o.e7)([a.default], () => a.default.getCurrentUser());
  return (t()(null != _, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), f && i.isNonUserBot()) ? (0, n.jsx)(c.Z, {
...l,
user: i,
currentUser: _
  }) : f && i.bot ? (0, n.jsx)(u.Z, {
...l,
user: i,
currentUser: _
  }) : i.bot ? (0, n.jsx)(d.Z, {
...l,
user: i,
currentUser: _
  }) : (0, n.jsx)(I.Z, {
...l,
user: i,
currentUser: _
  });
}