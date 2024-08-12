n.d(t, {
  Z: function() {
return s;
  }
});
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(768581),
  c = n(689938),
  d = n(62676);

function s(e) {
  let {
application: t,
className: n,
size: a,
botIconFirst: s,
fallbackAvatar: u
  } = e, m = o.useMemo(() => r.ZP.getApplicationIconURL({
id: t.id,
icon: t.icon,
bot: t.bot,
size: a,
botIconFirst: s,
fallbackAvatar: u
  }), [
t,
a,
s,
u
  ]);
  return null == m ? null : (0, i.jsx)('img', {
className: l()(d.icon, n),
alt: c.Z.Messages.IMAGE,
src: m,
'aria-hidden': !0
  });
}