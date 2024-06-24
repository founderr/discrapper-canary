n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var r = n(735250),
  a = n(470079),
  s = n(887024);
let l = [n(992134)],
  i = ["#FFFFFF"],
  o = 1e3 / 60,
  u = {
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

function c(e) {
  let {
    className: t,
    firing: n = !0,
    wind: c = 2
  } = e, [d, E] = a.useState(null), [h, p] = a.useState(null), f = (0, s.uR)(h, d), C = a.useMemo(() => new s.qA({
    wind: c
  }), [c]), _ = a.useCallback(() => {
    let e = null == h ? void 0 : h.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    f.createConfetti({
      ...u,
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
  }, [f, h]);
  return a.useEffect(() => {
    let e = n ? setInterval(_, o) : null;
    return () => clearInterval(e)
  }, [n, _]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.O_, {
      ref: p,
      className: t,
      environment: C
    }), (0, r.jsx)(s.Ji, {
      ref: E,
      colors: i,
      sprites: l,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}