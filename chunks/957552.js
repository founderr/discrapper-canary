n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250),
  o = n(470079),
  l = n(120356),
  a = n.n(l),
  s = n(768581),
  r = n(689938),
  u = n(62676);

function c(e) {
  let {
application: t,
className: n,
size: l,
botIconFirst: c,
fallbackAvatar: d
  } = e, m = o.useMemo(() => s.ZP.getApplicationIconURL({
id: t.id,
icon: t.icon,
bot: t.bot,
size: l,
botIconFirst: c,
fallbackAvatar: d
  }), [
t,
l,
c,
d
  ]);
  return null == m ? null : (0, i.jsx)('img', {
className: a()(u.icon, n),
alt: r.Z.Messages.IMAGE,
src: m,
'aria-hidden': !0
  });
}