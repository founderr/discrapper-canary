"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("887024");
let o = [a("992134")],
  i = ["#FFFFFF"],
  u = 1e3 / 60,
  l = {
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
    firing: a = !0,
    wind: c = 2
  } = e, [d, p] = r.useState(null), [f, y] = r.useState(null), C = (0, s.useConfettiCannon)(f, d), A = r.useMemo(() => new s.Environment({
    wind: c
  }), [c]), P = r.useCallback(() => {
    let e = null == f ? void 0 : f.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    C.createConfetti({
      ...l,
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
  }, [C, f]);
  return r.useEffect(() => {
    let e = a ? setInterval(P, u) : null;
    return () => clearInterval(e)
  }, [a, P]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.ConfettiCanvas, {
      ref: y,
      className: t,
      environment: A
    }), (0, n.jsx)(s.SpriteCanvas, {
      ref: p,
      colors: i,
      sprites: o,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}