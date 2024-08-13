n.d(s, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var l = n(705556),
  t = n(225714),
  o = n(612309);

function r(e) {
  let {
user: s,
isCurrentUser: n,
guildId: r,
friendToken: a,
relationshipType: d,
persistentCallCtaEnabled: c = !1,
activeInviteToCallCtaEnabled: u = !1,
onClose: _
  } = e;
  return (0, i.jsxs)('div', {
className: o.buttons,
children: [
  (0, i.jsx)(t.Z, {
    user: s,
    isCurrentUser: n,
    relationshipType: d,
    persistentCallCtaEnabled: c,
    activeInviteToCallCtaEnabled: u,
    friendToken: a,
    onClose: _
  }),
  (0, i.jsx)(l.Z, {
    user: s,
    guildId: r,
    onClose: _
  })
]
  });
}