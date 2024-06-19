n.d(t, {
  Z: function() {
    return m
  }
});
var i = n(735250),
  s = n(470079),
  a = n(392711),
  l = n(399606),
  o = n(351780),
  r = n(576125),
  u = n(465858),
  c = n(112843),
  d = n(524484);

function h(e) {
  let {
    reactionRef: t,
    count: n
  } = e, i = s.useRef(n), r = (0, l.e7)([o.Z], () => o.Z.getState()), d = (0, c.Z)(), h = (0, u.Z)(t);
  return s.useEffect(() => {
    if (n > i.current && null != h) {
      let e = (0, a.clamp)(n, r.confettiCount / 2, 2 * r.confettiCount);
      d.fire(h.x, h.y, {
        count: e
      })
    }
    i.current = n
  }, [n, h, d, r.confettiCount]), null
}

function m(e) {
  return (0, i.jsx)(r.Z, {
    confettiLocation: d.Hn.REACTION,
    children: (0, i.jsx)(h, {
      ...e
    })
  })
}