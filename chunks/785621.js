"use strict";
i.r(t), i.d(t, {
  default: function() {
    return p
  }
});
var a = i("37983"),
  n = i("884691"),
  l = i("917351"),
  o = i("65597"),
  s = i("880731"),
  r = i("232268"),
  u = i("759432"),
  d = i("798592"),
  c = i("39141");

function h(e) {
  let {
    reactionRef: t,
    count: i
  } = e, a = n.useRef(i), r = (0, o.default)([s.default], () => s.default.getState()), c = (0, d.default)(), h = (0, u.default)(t);
  return n.useEffect(() => {
    if (i > a.current && null != h) {
      let e = (0, l.clamp)(i, r.confettiCount / 2, 2 * r.confettiCount);
      c.fire(h.x, h.y, {
        count: e
      })
    }
    a.current = i
  }, [i, h, c, r.confettiCount]), null
}

function p(e) {
  return (0, a.jsx)(r.default, {
    confettiLocation: c.ConfettiLocation.REACTION,
    children: (0, a.jsx)(h, {
      ...e
    })
  })
}