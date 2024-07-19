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
defaultPosition: t = s.VD2.TOP_RIGHT,
children: n
  } = e, [d, _] = i.useState(t);
  return (0, r.jsx)(a._, {
position: d,
id: 0,
onMove: (e, t) => _(t),
maxX: window.innerWidth,
maxY: window.innerHeight,
edgeOffsetTop: o,
edgeOffsetBottom: l,
edgeOffsetLeft: u,
edgeOffsetRight: c,
children: n
  });
}