n.d(s, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var l = n(705556),
  o = n(225714),
  t = n(984904);

function r(e) {
  let {
user: s,
isCurrentUser: n,
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
    user: s,
    isCurrentUser: n,
    relationshipType: d,
    persistentCallCtaEnabled: c,
    activeInviteToCallCtaEnabled: u,
    friendToken: a,
    onClose: I
  }),
  (0, i.jsx)(l.Z, {
    user: s,
    guildId: r,
    onClose: I
  })
]
  });
}