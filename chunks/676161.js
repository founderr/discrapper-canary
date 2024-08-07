t.d(n, {
  Z: function() {
return o;
  }
}), t(724458);
var i = t(470079),
  a = t(700089),
  l = t(654455),
  r = t(496158);

function o(e) {
  let {
channel: n,
commands: t,
limit: o = t.length
  } = e, s = (0, r.D)(n), c = (0, a.R)(s), u = i.useMemo(() => t.reduce((e, n) => (e[n.id] = n, e), {}), [t]);
  return i.useMemo(() => c.map(e => u[e]).filter(e => null != e).sort((e, n) => {
let t = l.ZP.getScoreWithoutLoadingLatest(s, e);
return l.ZP.getScoreWithoutLoadingLatest(s, n) - t;
  }).slice(0, o), [
c,
u,
s,
o
  ]);
}