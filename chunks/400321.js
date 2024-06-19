n.d(t, {
  Z: function() {
    return a
  }
}), n(653041);
var l = n(88315),
  i = n(199766),
  s = n(813900);

function a(e) {
  let {
    line: t,
    context: n,
    canvasWidth: a,
    canvasHeight: r,
    fallbackColor: o,
    outlineColorDark: c,
    outlineColorLight: u,
    linesDrawnAt: d,
    deadDrawables: h
  } = e;
  null == d.current[t.id] && (d.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
  let m = t.points.map(e => (0, l.RR)(e, a, r)),
    p = d.current[t.id],
    E = e => p + e.deltaTime,
    g = e => E(e) + 1500 >= Date.now(),
    f = e => E(e) <= Date.now() && g(e),
    C = m.find(f);
  if (null == C) {
    !g(t.points[t.points.length - 1]) && h.push(t);
    return
  }
  let _ = (e, t) => {
      let l = null;
      n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(C.x, C.y);
      for (let e = 1; e < m.length; e++) {
        let t = m[e];
        f(t) && (n.lineTo(t.x, t.y), l = t)
      }
      return n.stroke(), l
    },
    {
      fillColor: I,
      outlineColor: x
    } = (0, l.bg)(t.userId, c, u, o),
    T = _(x, 6 + s.q2),
    N = null != T && f(T);
  N && (0, i.I)(n, T.x, T.y, x, s.q2), _(I, 6), N && (0, i.T)(n, T.x, T.y, t.userId)
}