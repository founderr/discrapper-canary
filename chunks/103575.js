"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(512722),
  s = n.n(r),
  o = n(442837),
  a = n(594174),
  l = n(786874),
  u = n(877485),
  _ = n(103113),
  c = n(788197),
  d = n(969835),
  E = n(985237);

function I(e) {
  let {
    location: t,
    userId: n,
    user: r,
    ...I
  } = e;
  (0, u.V)({
    location: t
  });
  let {
    botProfilesEnabled: T
  } = (0, l.J)({
    location: t
  }), h = (0, o.e7)([a.default], () => a.default.getUser(n), [n]), f = null != r ? r : h;
  s()(null != f, "UserPopoutExperimentWrapper: user cannot be undefined");
  let S = (0, o.e7)([a.default], () => a.default.getCurrentUser());
  return (s()(null != S, "UserPopoutExperimentWrapper: currentUser cannot be undefined"), T && f.isNonUserBot()) ? (0, i.jsx)(_.Z, {
    ...I,
    user: f,
    currentUser: S
  }) : T && f.bot ? (0, i.jsx)(E.Z, {
    ...I,
    user: f,
    currentUser: S
  }) : f.bot ? (0, i.jsx)(c.Z, {
    ...I,
    user: f,
    currentUser: S
  }) : (0, i.jsx)(d.Z, {
    ...I,
    user: f,
    currentUser: S
  })
}