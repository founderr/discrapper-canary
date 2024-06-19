n.d(e, {
  m: function() {
    return o
  }
});
var r = n(358133),
  i = n(416097),
  a = n(544457),
  s = n(527475);
let o = t => {
  let e;
  let n = (0, i.I)("CLS", 0),
    o = 0,
    l = [],
    u = t => {
      t.forEach(t => {
        if (!t.hadRecentInput) {
          let r = l[0],
            i = l[l.length - 1];
          o && 0 !== l.length && t.startTime - i.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (o += t.value, l.push(t)) : (o = t.value, l = [t]), o > n.value && (n.value = o, n.entries = l, e && e())
        }
      })
    },
    c = (0, a.N)("layout-shift", u);
  if (c) {
    e = (0, r._)(t, n);
    let i = () => {
      u(c.takeRecords()), e(!0)
    };
    return (0, s.u)(i), i
  }
}