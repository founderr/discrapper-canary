s.d(n, {
  Z: function() {
return r;
  }
});
var i = s(735250);
s(470079);
var l = s(705556),
  o = s(225714),
  t = s(984904);

function r(e) {
  let {
user: n,
isCurrentUser: s,
guildId: r,
friendToken: a,
relationshipType: d,
persistentCallCtaEnabled: c = !1,
activeInviteToCallCtaEnabled: u = !1,
onClose: I
  } = e;
  return (0, i.jsxs)('div', {
className: t.buttons,
children: [
  (0, i.jsx)(o.Z, {
    user: n,
    isCurrentUser: s,
    relationshipType: d,
    persistentCallCtaEnabled: c,
    activeInviteToCallCtaEnabled: u,
    friendToken: a,
    onClose: I
  }),
  (0, i.jsx)(l.Z, {
    user: n,
    guildId: r,
    onClose: I
  })
]
  });
}