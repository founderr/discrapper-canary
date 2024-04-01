"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("792766"),
  a = n("197409");
t.default = e => {
  let {
    stageInstance: t,
    guild: n,
    isMember: i,
    onTransitionToInviteChannel: r,
    onAcceptInstantInvite: o
  } = e;
  return (0, s.jsx)(a.default, {
    children: (0, s.jsx)(l.default, {
      isEmbed: !0,
      stageInstance: t,
      guild: n,
      onClick: i ? r : o
    })
  })
}