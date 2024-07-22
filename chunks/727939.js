n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(241915),
  s = n(981631);
let o = 32,
  l = 32,
  u = 32,
  c = 32;

function d(e) {
  let {
className: t,
defaultPosition: n = s.VD2.TOP_RIGHT,
children: d
  } = e, [_, E] = i.useState(n);
  return (0, r.jsx)(a._, {
className: t,
position: _,
id: 0,
onMove: (e, t) => E(t),
maxX: window.innerWidth,
maxY: window.innerHeight,
edgeOffsetTop: o,
edgeOffsetBottom: l,
edgeOffsetLeft: u,
edgeOffsetRight: c,
children: d
  });
}