n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(887024);
let a = [n(992134)],
  r = ["#FFFFFF"],
  o = 1e3 / 60,
  c = {
    velocity: {
      type: "static-random",
      minValue: {
        x: 0,
        y: 1
      },
      maxValue: {
        x: 3,
        y: 3
      }
    },
    rotation: {
      type: "linear-random",
      minValue: {
        x: 0,
        y: 0,
        z: 0
      },
      maxValue: {
        x: 0,
        y: 0,
        z: 360
      },
      minAddValue: {
        x: 0,
        y: 0,
        z: -5
      },
      maxAddValue: {
        x: 0,
        y: 0,
        z: 5
      }
    },
    size: {
      type: "static-random",
      minValue: 2,
      maxValue: 6
    },
    dragCoefficient: {
      type: "static",
      value: {
        x: .05,
        y: .05
      }
    },
    opacity: {
      type: "static",
      value: .3
    }
  };

function u(e) {
  let {
    className: t,
    firing: n = !0,
    wind: u = 2
  } = e, [d, E] = i.useState(null), [_, I] = i.useState(null), T = (0, l.uR)(_, d), m = i.useMemo(() => new l.qA({
    wind: u
  }), [u]), N = i.useCallback(() => {
    let e = null == _ ? void 0 : _.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    T.createConfetti({
      ...c,
      position: {
        type: "static-random",
        minValue: {
          x: -t.width / 2,
          y: -6
        },
        maxValue: {
          x: t.width,
          y: -6
        }
      }
    })
  }, [T, _]);
  return i.useEffect(() => {
    let e = n ? setInterval(N, o) : null;
    return () => clearInterval(e)
  }, [n, N]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(l.O_, {
      ref: I,
      className: t,
      environment: m
    }), (0, s.jsx)(l.Ji, {
      ref: E,
      colors: r,
      sprites: a,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}