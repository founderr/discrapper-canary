"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("887024");
let i = [s("992134")],
  l = ["#FFFFFF"],
  u = 1e3 / 60,
  o = {
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
    firing: s = !0,
    wind: c = 2
  } = e, [d, C] = a.useState(null), [E, f] = a.useState(null), p = (0, r.useConfettiCannon)(E, d), m = a.useMemo(() => new r.Environment({
    wind: c
  }), [c]), A = a.useCallback(() => {
    let e = null == E ? void 0 : E.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    p.createConfetti({
      ...o,
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
  }, [p, E]);
  return a.useEffect(() => {
    let e = s ? setInterval(A, u) : null;
    return () => clearInterval(e)
  }, [s, A]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.ConfettiCanvas, {
      ref: f,
      className: t,
      environment: m
    }), (0, n.jsx)(r.SpriteCanvas, {
      ref: C,
      colors: l,
      sprites: i,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}