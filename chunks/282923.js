t.d(n, {
  B: function() {
    return l
  }
}), t(653041), t(47120);
var i = t(658722),
  s = t.n(i);

function l(e, n, t) {
  if ("" === t) return e;
  let i = t.toLowerCase(),
    l = [];
  for (let a of e) {
    let {
      id: e,
      names: r
    } = n(a);
    if (e === t) return [a];
    r.some(e => s()(i, e.toLowerCase())) && l.push(a)
  }
  return l
}