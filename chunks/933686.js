n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(774078),
  r = n(390322),
  o = n(272929),
  c = n(456631),
  u = n(381871),
  d = n(304388);

function h(e) {
  let {
    channel: t
  } = e, n = (0, s.e7)([c.Z], () => c.Z.effectCooldownEndTime), h = i.useMemo(() => null != n ? (n.getTime() - Date.now()) / 1e3 : 0, [n]), {
    seconds: m
  } = (0, a.Z)(null != n ? n : new Date), E = m > 0;
  return (0, l.jsx)(d.Z, {
    renderPopout: e => {
      let {
        closePopout: n,
        onFocus: i
      } = e;
      return (0, l.jsx)(r.Z, {
        children: (0, l.jsx)(u.Z, {
          channel: t,
          closePopout: n,
          onFocus: i
        })
      })
    },
    children: e => {
      let {
        onMouseEnter: t,
        ...n
      } = e;
      return (0, l.jsx)(o.Z, {
        totalCooldownSeconds: h,
        remainingCooldownSeconds: m,
        onMouseEnter: e => {
          var n, l;
          return n = e, l = t, void(!E && l(n))
        },
        ...n
      })
    }
  })
}