t.d(n, {
  B: function() {
    return s
  }
}), t(653041), t(47120);
var i = t(658722),
  l = t.n(i);

function s(e, n, t) {
  if ("" === t) return e;
  let i = t.toLowerCase(),
    s = [];
  for (let a of e) {
    let {
      id: e,
      names: r
    } = n(a);
    if (e === t) return [a];
    r.some(e => l()(i, e.toLowerCase())) && s.push(a)
  }
  return s
}