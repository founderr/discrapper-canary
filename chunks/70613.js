"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var r = n("735250"),
  a = n("470079"),
  s = n("887024");
let u = [n("992134")],
  i = ["#FFFFFF"],
  l = 1e3 / 60,
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

function o(e) {
  let {
    className: t,
    firing: n = !0,
    wind: o = 2
  } = e, [d, f] = a.useState(null), [E, A] = a.useState(null), S = (0, s.useConfettiCannon)(E, d), C = a.useMemo(() => new s.Environment({
    wind: o
  }), [o]), P = a.useCallback(() => {
    let e = null == E ? void 0 : E.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    S.createConfetti({
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
  }, [S, E]);
  return a.useEffect(() => {
    let e = n ? setInterval(P, l) : null;
    return () => clearInterval(e)
  }, [n, P]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.ConfettiCanvas, {
      ref: A,
      className: t,
      environment: C
    }), (0, r.jsx)(s.SpriteCanvas, {
      ref: f,
      colors: i,
      sprites: u,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}