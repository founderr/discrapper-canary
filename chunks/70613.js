"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var r = n("735250"),
  a = n("470079"),
  s = n("911765");
let i = [n("992134")],
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
    firing: n = !0,
    wind: c = 2
  } = e, [d, f] = a.useState(null), [E, p] = a.useState(null), m = (0, s.useConfettiCannon)(E, d), S = a.useMemo(() => new s.Environment({
    wind: c
  }), [c]), A = a.useCallback(() => {
    let e = null == E ? void 0 : E.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    m.createConfetti({
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
  }, [m, E]);
  return a.useEffect(() => {
    let e = n ? setInterval(A, u) : null;
    return () => clearInterval(e)
  }, [n, A]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.ConfettiCanvas, {
      ref: p,
      className: t,
      environment: S
    }), (0, r.jsx)(s.SpriteCanvas, {
      ref: f,
      colors: l,
      sprites: i,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}