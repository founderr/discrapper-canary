s(47120);
var n = s(735250),
  a = s(470079),
  i = s(887024),
  r = s(745510),
  l = s(675654);
let o = {
    xMin: -40,
    xMax: 40,
    yMin: -40,
    yMax: -70
  },
  c = (e, t, s) => null == s ? t : e * s / 100,
  E = a.memo(function(e) {
    let {
      confettiTarget: t,
      colors: s,
      emojiURL: E,
      numBursts: _,
      particlesPerBurst: u,
      offsetXPercentageMax: d,
      offsetXPercentageMin: T,
      offsetYPercentageMax: I,
      offsetYPercentageMin: R,
      customConfettiCanvas: A,
      speedValues: N = o,
      dragCoefficientValue: C = .001,
      onAnimationEnd: g
    } = e, [m, M] = a.useState(null), {
      confettiCanvas: S
    } = a.useContext(r.h), p = (0, i.uR)(null != A ? A : S, m), [h, f] = a.useState(!1);
    a.useEffect(() => {
      h && (null == g || g())
    });
    let O = a.useMemo(() => {
      if (null != E) return [{
        src: E,
        colorize: !1
      }]
    }, [E]);
    return a.useEffect(() => {
      if (null == t) return;
      let e = Array(null != _ ? _ : 4).fill(0);
      return e = e.map((s, n) => setTimeout(() => {
        p.createMultipleConfetti(function(e, t, s, n, a) {
          let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
            r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .001,
            E = c(e.width, 100, s),
            _ = c(e.height, 75, a),
            u = c(e.width, 350, t),
            d = c(e.height, 75, n),
            {
              xMin: T,
              xMax: I,
              yMin: R,
              yMax: A
            } = i;
          return {
            ...l.We,
            position: {
              type: "static-random",
              minValue: {
                x: e.left + E,
                y: e.top + _
              },
              maxValue: {
                x: e.left + u,
                y: e.top + d
              }
            },
            velocity: {
              type: "static-random",
              minValue: {
                x: T,
                y: R
              },
              maxValue: {
                x: I,
                y: A
              }
            },
            size: {
              type: "static-random",
              minValue: l.Ko,
              maxValue: l.Ko
            },
            dragCoefficient: {
              type: "static",
              value: r
            }
          }
        }(t.getBoundingClientRect(), d, T, I, R, N, C), null != u ? u : 50), n === e.length - 1 && null != g && f(!0)
      }, 60 * n)), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [p, t, _, u, d, T, I, R, N, C, g]), (0, n.jsx)(i.Ji, {
      ref: M,
      sprites: null != O ? O : l.CA,
      colors: null != s ? s : l.Br,
      spriteWidth: l.Ko,
      spriteHeight: l.Ko
    })
  });
t.Z = E