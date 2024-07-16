n.d(i, {
  Z: function() {
return r;
  }
});
var s = n(735250);
n(470079);
var l = n(705556),
  o = n(225714),
  t = n(984904);

function r(e) {
  let {
user: i,
isCurrentUser: n,
guildId: r,
friendToken: a,
relationshipType: d,
persistentCallCtaEnabled: c = !1,
activeInviteToCallCtaEnabled: u = !1,
onClose: I
  } = e;
  return (0, s.jsxs)('div', {
className: t.buttons,
children: [
  (0, s.jsx)(o.Z, {
    user: i,
    isCurrentUser: n,
    relationshipType: d,
    persistentCallCtaEnabled: c,
    activeInviteToCallCtaEnabled: u,
    friendToken: a,
    onClose: I
  }),
  (0, s.jsx)(l.Z, {
    user: i,
    guildId: r,
    onClose: I
  })
]
  });
}