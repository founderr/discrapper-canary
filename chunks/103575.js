"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("512722"),
  s = n.n(r),
  a = n("442837"),
  o = n("594174"),
  l = n("447452"),
  u = n("877485"),
  d = n("788197"),
  _ = n("969835");

function c(e) {
  let {
    location: t,
    userId: n,
    user: r,
    ...c
  } = e, {
    basicsEnabled: E
  } = (0, l.useSimplifiedProfileExperiment)({
    location: t
  }), {
    originalFriendingEnabled: I,
    improvedFriendingEnabled: T
  } = (0, u.useSimplifiedProfileFriendingExperiment)({
    location: t
  }), f = (0, a.useStateFromStores)([o.default], () => o.default.getUser(n), [n]), S = null != r ? r : f;
  return (s()(null != S, "Unexpected missing user"), (E || I || T) && !S.bot && !S.isNonUserBot() && !S.isClyde()) ? (0, i.jsx)(_.default, {
    ...c,
    user: S
  }) : (0, i.jsx)(d.default, {
    ...c,
    user: S
  })
}