n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(735250);
n(470079);
var i = n(512722),
  a = n.n(i),
  s = n(442837),
  o = n(594174),
  l = n(380738),
  u = n(103113),
  c = n(788197),
  d = n(969835),
  _ = n(985237);

function E(e) {
  let {
location: t,
userId: n,
user: i,
...E
  } = e, {
botProfilesEnabled: f
  } = (0, l.J)({
location: t
  }), h = (0, s.e7)([o.default], () => o.default.getUser(n), [n]), p = null != i ? i : h;
  a()(null != p, 'UserPopoutExperimentWrapper: user cannot be undefined');
  let m = (0, s.e7)([o.default], () => o.default.getCurrentUser());
  return (a()(null != m, 'UserPopoutExperimentWrapper: currentUser cannot be undefined'), f && p.isNonUserBot()) ? (0, r.jsx)(u.Z, {
...E,
user: p,
currentUser: m
  }) : f && p.bot ? (0, r.jsx)(_.Z, {
...E,
user: p,
currentUser: m
  }) : p.bot ? (0, r.jsx)(c.Z, {
...E,
user: p,
currentUser: m
  }) : (0, r.jsx)(d.Z, {
...E,
user: p,
currentUser: m
  });
}