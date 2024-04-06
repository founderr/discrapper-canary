"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("392711"),
  o = n.n(r),
  u = n("718017"),
  d = n("442837"),
  c = n("607070"),
  f = n("320173");
let E = {
  mass: 10,
  tension: 550,
  friction: 140
};

function _(e) {
  let {
    className: t,
    pageMultiplier: n
  } = e, l = (0, d.useStateFromStores)([c.default], () => c.default.useReducedMotion), [r, _] = s.useState({
    x: 0,
    y: 0
  }), h = s.useMemo(() => o().throttle(e => {
    if (l) return;
    let t = (window.innerWidth - e.pageX * n) / 90;
    _({
      x: t,
      y: (window.innerHeight - e.pageY * n) / 90
    })
  }, 20), [n, l]);
  s.useEffect(() => (window.addEventListener("mousemove", h), () => window.removeEventListener("mousemove", h)), [h]);
  let [C, m] = (0, u.useSpring)(() => ({
    x: 0,
    y: 0,
    config: E
  }));
  return s.useEffect(() => {
    m({
      x: r.x,
      y: r.y
    })
  }, [r.x, r.y, m]), (0, a.jsx)(u.animated.div, {
    style: {
      transform: (0, u.to)([C.x, C.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
    },
    className: i()(f.background, t)
  })
}