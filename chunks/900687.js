i.d(n, {
  Z: function() {
return r;
  }
});
var s = i(735250);
i(470079);
var l = i(705556),
  o = i(225714),
  t = i(612309);

function r(e) {
  let {
user: n,
isCurrentUser: i,
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
    user: n,
    isCurrentUser: i,
    relationshipType: d,
    persistentCallCtaEnabled: c,
    activeInviteToCallCtaEnabled: u,
    friendToken: a,
    onClose: I
  }),
  (0, s.jsx)(l.Z, {
    user: n,
    guildId: r,
    onClose: I
  })
]
  });
}