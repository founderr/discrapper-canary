i.d(n, {
  Z: function() {
return a;
  }
});
var s = i(735250);
i(470079);
var l = i(705556),
  t = i(225714),
  o = i(984904);

function a(e) {
  let {
user: n,
isCurrentUser: i,
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
    user: n,
    isCurrentUser: i,
    relationshipType: d,
    persistentCallCtaEnabled: c,
    activeInviteToCallCtaEnabled: u,
    friendToken: r,
    onClose: I
  }),
  (0, s.jsx)(l.Z, {
    user: n,
    guildId: a,
    onClose: I
  })
]
  });
}