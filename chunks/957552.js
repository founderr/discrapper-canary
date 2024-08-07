n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  s = n(768581),
  r = n(689938),
  d = n(62676);

function u(e) {
  let {
application: t,
className: n,
size: a,
botIconFirst: u,
fallbackAvatar: c
  } = e, m = o.useMemo(() => s.ZP.getApplicationIconURL({
id: t.id,
icon: t.icon,
bot: t.bot,
size: a,
botIconFirst: u,
fallbackAvatar: c
  }), [
t,
a,
u,
c
  ]);
  return null == m ? null : (0, i.jsx)('img', {
className: l()(d.icon, n),
alt: r.Z.Messages.IMAGE,
src: m,
'aria-hidden': !0
  });
}