t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250),
  o = t(470079),
  l = t(120356),
  a = t.n(l),
  s = t(768581),
  r = t(689938),
  u = t(62676);

function d(e) {
  let {
application: n,
className: t,
size: l,
botIconFirst: d,
fallbackAvatar: c
  } = e, m = o.useMemo(() => s.ZP.getApplicationIconURL({
id: n.id,
icon: n.icon,
bot: n.bot,
size: l,
botIconFirst: d,
fallbackAvatar: c
  }), [
n,
l,
d,
c
  ]);
  return null == m ? null : (0, i.jsx)('img', {
className: a()(u.icon, t),
alt: r.Z.Messages.IMAGE,
src: m,
'aria-hidden': !0
  });
}