"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var r = n(512722),
  s = n.n(r),
  o = n(442837),
  a = n(594174),
  l = n(447452),
  u = n(877485),
  _ = n(788197),
  c = n(969835),
  d = n(985237);

function E(e) {
  let {
    location: t,
    userId: n,
    user: r,
    ...E
  } = e, {
    basicsEnabled: I,
    botProfilesEnabled: T
  } = (0, l.t)({
    location: t
  }), {
    originalFriendingEnabled: h,
    improvedFriendingEnabled: S
  } = (0, u.V)({
    location: t
  }), f = I || h || S, N = (0, o.e7)([a.default], () => a.default.getUser(n), [n]), A = null != r ? r : N;
  s()(null != A, "UserPopoutExperimentWrapper: user cannot be undefined");
  let m = (0, o.e7)([a.default], () => a.default.getCurrentUser());
  return (s()(null != m, "UserPopoutExperimentWrapper: currentUser cannot be undefined"), f && T && A.bot && !A.isNonUserBot() && !A.isClyde()) ? (0, i.jsx)(d.Z, {
    ...E,
    user: A,
    currentUser: m
  }) : !f || A.bot || A.isNonUserBot() || A.isClyde() ? (0, i.jsx)(_.Z, {
    ...E,
    user: A,
    currentUser: m
  }) : (0, i.jsx)(c.Z, {
    ...E,
    user: A,
    currentUser: m
  })
}