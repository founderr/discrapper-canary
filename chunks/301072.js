n.d(e, {
  N: function() {
    return c
  }
});
var r = n(358133),
  i = n(726300),
  a = n(233863),
  s = n(416097),
  o = n(544457),
  l = n(527475);
let u = {},
  c = t => {
    let e;
    let n = (0, a.Y)(),
      c = (0, s.I)("LCP"),
      d = t => {
        let r = t[t.length - 1];
        if (r) {
          let t = Math.max(r.startTime - (0, i.A)(), 0);
          t < n.firstHiddenTime && (c.value = t, c.entries = [r], e())
        }
      },
      h = (0, o.N)("largest-contentful-paint", d);
    if (h) {
      e = (0, r._)(t, c);
      let n = () => {
        !u[c.id] && (d(h.takeRecords()), h.disconnect(), u[c.id] = !0, e(!0))
      };
      return ["keydown", "click"].forEach(t => {
        addEventListener(t, n, {
          once: !0,
          capture: !0
        })
      }), (0, l.u)(n, !0), n
    }
  }