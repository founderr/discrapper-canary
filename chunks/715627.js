l(47120);
var i = l(735250),
  n = l(470079),
  u = l(887024),
  o = l(745510),
  a = l(675654);
let r = {
    xMin: -40,
    xMax: 40,
    yMin: -40,
    yMax: -70
  },
  s = (e, t, l) => null == l ? t : e * l / 100,
  c = n.memo(function(e) {
    let {
      confettiTarget: t,
      colors: l,
      emojiURL: c,
      numBursts: p,
      particlesPerBurst: f,
      offsetXPercentageMax: h,
      offsetXPercentageMin: m,
      offsetYPercentageMax: d,
      offsetYPercentageMin: x,
      customConfettiCanvas: y,
      speedValues: g = r,
      dragCoefficientValue: C = .001,
      onAnimationEnd: M
    } = e, [V, v] = n.useState(null), {
      confettiCanvas: k
    } = n.useContext(o.h), w = (0, u.uR)(null != y ? y : k, V), [K, b] = n.useState(!1);
    n.useEffect(() => {
      K && (null == M || M())
    });
    let z = n.useMemo(() => {
      if (null != c) return [{
        src: c,
        colorize: !1
      }]
    }, [c]);
    return n.useEffect(() => {
      if (null == t) return;
      let e = Array(null != p ? p : 4).fill(0);
      return e = e.map((l, i) => setTimeout(() => {
        w.createMultipleConfetti(function(e, t, l, i, n) {
          let u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : r,
            o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .001,
            c = s(e.width, 100, l),
            p = s(e.height, 75, n),
            f = s(e.width, 350, t),
            h = s(e.height, 75, i),
            {
              xMin: m,
              xMax: d,
              yMin: x,
              yMax: y
            } = u;
          return {
            ...a.We,
            position: {
              type: "static-random",
              minValue: {
                x: e.left + c,
                y: e.top + p
              },
              maxValue: {
                x: e.left + f,
                y: e.top + h
              }
            },
            velocity: {
              type: "static-random",
              minValue: {
                x: m,
                y: x
              },
              maxValue: {
                x: d,
                y: y
              }
            },
            size: {
              type: "static-random",
              minValue: a.Ko,
              maxValue: a.Ko
            },
            dragCoefficient: {
              type: "static",
              value: o
            }
          }
        }(t.getBoundingClientRect(), h, m, d, x, g, C), null != f ? f : 50), i === e.length - 1 && null != M && b(!0)
      }, 60 * i)), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [w, t, p, f, h, m, d, x, g, C, M]), (0, i.jsx)(u.Ji, {
      ref: v,
      sprites: null != z ? z : a.CA,
      colors: null != l ? l : a.Br,
      spriteWidth: a.Ko,
      spriteHeight: a.Ko
    })
  });
t.Z = c