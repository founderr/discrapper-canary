n.d(i, {
  Z: function() {
return a;
  }
});
var s = n(735250);
n(470079);
var l = n(705556),
  t = n(225714),
  o = n(984904);

function a(e) {
  let {
user: i,
isCurrentUser: n,
guildId: a,
friendToken: r,
relationshipType: d,
persistentCallCtaEnabled: c = !1,
activeInviteToCallCtaEnabled: u = !1,
onClose: I
  } = e;
  return (0, s.jsxs)('div', {
className: o.buttons,
children: [
  (0, s.jsx)(t.Z, {
    user: i,
    isCurrentUser: n,
    relationshipType: d,
    persistentCallCtaEnabled: c,
    activeInviteToCallCtaEnabled: u,
    friendToken: r,
    onClose: I
  }),
  (0, s.jsx)(l.Z, {
    user: i,
    guildId: a,
    onClose: I
  })
]
  });
}