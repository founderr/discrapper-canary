t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250),
  l = t(470079),
  o = t(120356),
  a = t.n(o),
  s = t(768581),
  r = t(689938),
  u = t(62676);

function d(e) {
  let {
application: n,
className: t,
size: o,
botIconFirst: d,
fallbackAvatar: c
  } = e, m = l.useMemo(() => s.ZP.getApplicationIconURL({
id: n.id,
icon: n.icon,
bot: n.bot,
size: o,
botIconFirst: d,
fallbackAvatar: c
  }), [
n,
o,
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