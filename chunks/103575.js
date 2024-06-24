"use strict";
n.d(t, {
  Z: function() {
    return T
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
  c = n(103113),
  d = n(788197),
  E = n(969835),
  I = n(985237);

function T(e) {
  let {
    location: t,
    userId: n,
    user: r,
    ...T
  } = e, {
    basicsEnabled: h
  } = (0, u.t)({
    location: t
  }), {
    originalFriendingEnabled: S,
    improvedFriendingEnabled: f
  } = (0, _.V)({
    location: t
  }), {
    botProfilesEnabled: N
  } = (0, l.J)({
    location: t
  }), A = h || S || f, m = (0, o.e7)([a.default], () => a.default.getUser(n), [n]), O = null != r ? r : m;
  s()(null != O, "UserPopoutExperimentWrapper: user cannot be undefined");
  let R = (0, o.e7)([a.default], () => a.default.getCurrentUser());
  return (s()(null != R, "UserPopoutExperimentWrapper: currentUser cannot be undefined"), A && N && O.isNonUserBot()) ? (0, i.jsx)(c.Z, {
    ...T,
    user: O,
    currentUser: R
  }) : A && N && O.bot ? (0, i.jsx)(I.Z, {
    ...T,
    user: O,
    currentUser: R
  }) : !A || O.bot || O.isNonUserBot() || O.isClyde() ? (0, i.jsx)(d.Z, {
    ...T,
    user: O,
    currentUser: R
  }) : (0, i.jsx)(E.Z, {
    ...T,
    user: O,
    currentUser: R
  })
}