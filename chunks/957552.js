t.d(n, {
  Z: function() {
return c;
  }
});
var i = t(735250),
  o = t(470079),
  a = t(120356),
  l = t.n(a),
  s = t(768581),
  r = t(689938),
  u = t(62676);

function c(e) {
  let {
application: n,
className: t,
size: a,
botIconFirst: c,
fallbackAvatar: d
  } = e, m = o.useMemo(() => s.ZP.getApplicationIconURL({
id: n.id,
icon: n.icon,
bot: n.bot,
size: a,
botIconFirst: c,
fallbackAvatar: d
  }), [
n,
a,
c,
d
  ]);
  return null == m ? null : (0, i.jsx)('img', {
className: l()(u.icon, t),
alt: r.Z.Messages.IMAGE,
src: m,
'aria-hidden': !0
  });
}