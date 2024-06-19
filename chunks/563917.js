var s = n(735250);
n(470079);
var i = n(792766),
  l = n(197409);
t.Z = e => {
  let {
    stageInstance: t,
    guild: n,
    isMember: a,
    onTransitionToInviteChannel: r,
    onAcceptInstantInvite: o
  } = e;
  return (0, s.jsx)(l.Z, {
    children: (0, s.jsx)(i.Z, {
      isEmbed: !0,
      stageInstance: t,
      guild: n,
      onClick: a ? r : o
    })
  })
}