n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var a = n(735250),
  r = n(470079),
  l = n(887024);
let s = [n(992134)],
  u = ["#FFFFFF"],
  i = 1e3 / 60,
  d = {
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
  } = e, [o, h] = r.useState(null), [f, b] = r.useState(null), m = (0, l.uR)(f, o), E = r.useMemo(() => new l.qA({
    wind: c
  }), [c]), C = r.useCallback(() => {
    let e = null == f ? void 0 : f.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    m.createConfetti({
      ...d,
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
  }, [m, f]);
  return r.useEffect(() => {
    let e = n ? setInterval(C, i) : null;
    return () => clearInterval(e)
  }, [n, C]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.O_, {
      ref: b,
      className: t,
      environment: E
    }), (0, a.jsx)(l.Ji, {
      ref: h,
      colors: u,
      sprites: s,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}