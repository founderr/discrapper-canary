n(47120);
var o = n(735250),
  s = n(470079),
  r = n(887024),
  a = n(920906),
  i = n(442837),
  l = n(110924),
  c = n(607070),
  d = n(819640),
  u = n(569379),
  p = n(675654),
  m = n(251217),
  x = n(197857);
let g = ["#51BC9D"];
t.Z = e => {
  var t;
  let {
    quest: n,
    progressBarRef: C,
    isExpanded: f
  } = e, {
    completionSpring: h,
    startCompletionAnimation: _
  } = (0, u.GX)(), E = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, S = s.useRef(!1), T = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), v = s.useRef(null), N = (0, i.e7)([d.Z], () => d.Z.hasLayers()), j = (0, l.Z)(N), [A, B] = s.useState(null), [b, R] = s.useState(null), y = s.useRef(new r.qA({
    gravity: 0,
    wind: 0
  })), I = (0, r.uR)(A, b), O = s.useCallback(() => {
    if (T) return;
    let e = C.current,
      t = v.current;
    if (null != t && null != e && I.isReady) {
      var n, o, s, r;
      let {
        x: a,
        y: i
      } = e.getBoundingClientRect(), {
        x: l,
        y: c
      } = t.getBoundingClientRect();
      I.createMultipleConfetti((n = a - l, o = i - c, s = e.clientHeight, r = e.clientWidth, {
        ...p.We,
        position: {
          type: "static-random",
          minValue: {
            x: n,
            y: o
          },
          maxValue: {
            x: n + s,
            y: o + r
          }
        },
        velocity: {
          type: "static-random",
          minValue: {
            x: -20,
            y: -20
          },
          maxValue: {
            x: 20,
            y: 20
          }
        },
        opacity: {
          type: "linear",
          value: 2,
          addValue: -.1
        },
        dragCoefficient: {
          type: "static",
          value: 1e-4
        },
        size: {
          type: "static-random",
          minValue: 2,
          maxValue: 3
        }
      }), 100)
    }
  }, [C, v, I, T]), M = (0, l.Z)(f);
  return (s.useEffect(() => {
    E && f && !M && (_(), O())
  }, [f, E, _, O, M]), s.useEffect(() => {
    E && !N && j && setTimeout(() => {
      _(), O()
    }, 200)
  }, [E, j, N, _, O]), s.useEffect(() => {
    if (!!I.isReady) !S.current && E && (_(), O()), S.current = E
  }, [E, S, O, _, I]), T) ? null : (0, o.jsxs)("div", {
    className: m.wrapper,
    "aria-hidden": "true",
    ref: v,
    children: [(0, o.jsx)(a.animated.div, {
      className: m.background,
      style: {
        opacity: h
      }
    }), (0, o.jsx)(r.O_, {
      ref: B,
      className: m.confetti,
      environment: y.current
    }), (0, o.jsx)(r.Ji, {
      ref: R,
      sprites: [x],
      colors: g,
      spriteWidth: p.Ko,
      spriteHeight: p.Ko
    })]
  })
}