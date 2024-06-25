n.d(t, {
  Q: function() {
    return I
  }
});
var l, i, s = n(735250),
  a = n(470079),
  r = n(500923),
  o = n.n(r),
  c = n(442837),
  u = n(704215),
  d = n(607070),
  h = n(605236),
  m = n(175355),
  E = n(160683),
  p = n(921944),
  g = n(627952);

function f(e) {
  let t = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
    n = a.useRef(null);
  return a.useEffect(() => {
    let l;
    return null != n.current && (l = o().loadAnimation({
      container: n.current,
      renderer: "svg",
      loop: !0,
      autoplay: !t,
      animationData: JSON.parse(JSON.stringify(e))
    })), () => {
      null == l || l.destroy()
    }
  }, [n, t, e]), n
}

function C() {
  return (0, s.jsx)("div", {
    ref: f(l || (l = n.t(m, 2))),
    className: g.glow
  })
}

function _() {
  return (0, s.jsx)("div", {
    ref: f(i || (i = n.t(E, 2))),
    className: g.trinkets
  })
}
let I = e => {
  let {
    children: t
  } = e;
  return a.useEffect(() => {
    setTimeout(() => (0, h.EW)(u.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
      dismissAction: p.L.AUTO_DISMISS
    }), 1e4)
  }, []), (0, s.jsxs)("div", {
    className: g.animation,
    children: [(0, s.jsx)(C, {}), (0, s.jsx)("div", {
      className: g.circleLayer
    }), (0, s.jsx)("div", {
      className: g.omniButton,
      children: t
    }), (0, s.jsx)(_, {})]
  })
}