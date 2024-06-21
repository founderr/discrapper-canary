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
  u = n(447452),
  _ = n(877485),
  c = n(788197),
  d = n(969835),
  E = n(985237);

function I(e) {
  let {
    location: t,
    userId: n,
    user: r,
    ...I
  } = e, {
    basicsEnabled: T
  } = (0, u.t)({
    location: t
  }), {
    originalFriendingEnabled: h,
    improvedFriendingEnabled: S
  } = (0, _.V)({
    location: t
  }), {
    botProfilesEnabled: f
  } = (0, l.J)({
    location: t
  }), N = T || h || S, A = (0, o.e7)([a.default], () => a.default.getUser(n), [n]), m = null != r ? r : A;
  s()(null != m, "UserPopoutExperimentWrapper: user cannot be undefined");
  let O = (0, o.e7)([a.default], () => a.default.getCurrentUser());
  return (s()(null != O, "UserPopoutExperimentWrapper: currentUser cannot be undefined"), N && f && m.bot && !m.isNonUserBot() && !m.isClyde()) ? (0, i.jsx)(E.Z, {
    ...I,
    user: m,
    currentUser: O
  }) : !N || m.bot || m.isNonUserBot() || m.isClyde() ? (0, i.jsx)(c.Z, {
    ...I,
    user: m,
    currentUser: O
  }) : (0, i.jsx)(d.Z, {
    ...I,
    user: m,
    currentUser: O
  })
}