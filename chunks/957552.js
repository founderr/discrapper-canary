t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250),
  l = t(470079),
  o = t(120356),
  a = t.n(o),
  s = t(768581),
  r = t(689938),
  d = t(62676);

function u(e) {
  let {
application: n,
className: t,
size: o,
botIconFirst: u,
fallbackAvatar: c
  } = e, m = l.useMemo(() => s.ZP.getApplicationIconURL({
id: n.id,
icon: n.icon,
bot: n.bot,
size: o,
botIconFirst: u,
fallbackAvatar: c
  }), [
n,
o,
u,
c
  ]);
  return null == m ? null : (0, i.jsx)('img', {
className: a()(d.icon, t),
alt: r.Z.Messages.IMAGE,
src: m,
'aria-hidden': !0
  });
}