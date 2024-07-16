n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(505737),
  a = n(705556),
  s = n(901952),
  o = n(228168),
  l = n(335182);

function u(e) {
  let {
user: t,
guildId: n,
channelId: u,
onClose: c
  } = e, d = (0, i.Z)(t.id, n);
  return (0, r.jsxs)('footer', {
className: l.footer,
children: [
  d && (0, r.jsx)(s.Z, {
    user: t,
    guildId: n,
    channelId: u,
    onClose: c
  }),
  !d && (0, r.jsx)(a.Z, {
    user: t,
    guildId: n,
    onClose: c,
    profileType: o.y0.BITE_SIZE,
    fullWidth: !0
  })
]
  });
}