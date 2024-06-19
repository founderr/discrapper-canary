n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250),
  i = n(470079),
  s = n(576125),
  a = n(465858),
  r = n(112843),
  o = n(524484);

function c(e) {
  let {
    callTileRef: t,
    isFiring: n
  } = e, l = (0, r.Z)(), s = (0, a.Z)(t);
  return i.useEffect(() => {
    n && null != s && null != t && l.fire(s.x + t.clientWidth / 2, s.y + t.clientHeight / 2, {
      countMultiplier: 4
    })
  }, [t, l, n, s]), null
}

function u(e) {
  return (0, l.jsx)(s.Z, {
    confettiLocation: o.Hn.CALL_TILE,
    children: (0, l.jsx)(c, {
      ...e
    })
  })
}