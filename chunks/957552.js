n.d(t, {
  Z: function() {
return s;
  }
});
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  c = n(768581),
  d = n(689938),
  r = n(62676);

function s(e) {
  let {
application: t,
className: n,
size: a,
botIconFirst: s,
fallbackAvatar: m
  } = e, u = o.useMemo(() => c.ZP.getApplicationIconURL({
id: t.id,
icon: t.icon,
bot: t.bot,
size: a,
botIconFirst: s,
fallbackAvatar: m
  }), [
t,
a,
s,
m
  ]);
  return null == u ? null : (0, i.jsx)('img', {
className: l()(r.icon, n),
alt: d.Z.Messages.IMAGE,
src: u,
'aria-hidden': !0
  });
}