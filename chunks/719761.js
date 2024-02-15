"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("232268"),
  i = n("759432"),
  r = n("798592"),
  o = n("39141");

function u(e) {
  let {
    callTileRef: t,
    isFiring: n
  } = e, l = (0, r.default)(), s = (0, i.default)(t);
  return a.useEffect(() => {
    n && null != s && null != t && l.fire(s.x + t.clientWidth / 2, s.y + t.clientHeight / 2, {
      countMultiplier: 4
    })
  }, [t, l, n, s]), null
}

function d(e) {
  return (0, l.jsx)(s.default, {
    confettiLocation: o.ConfettiLocation.CALL_TILE,
    children: (0, l.jsx)(u, {
      ...e
    })
  })
}