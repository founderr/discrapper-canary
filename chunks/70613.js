"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var r = n("735250"),
  a = n("470079"),
  s = n("911765");
let l = [n("992134")],
  u = ["#FFFFFF"],
  i = 1e3 / 60,
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

function d(e) {
  let {
    className: t,
    firing: n = !0,
    wind: d = 2
  } = e, [o, f] = a.useState(null), [E, A] = a.useState(null), C = (0, s.useConfettiCannon)(E, o), S = a.useMemo(() => new s.Environment({
    wind: d
  }), [d]), P = a.useCallback(() => {
    let e = null == E ? void 0 : E.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    C.createConfetti({
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
  }, [C, E]);
  return a.useEffect(() => {
    let e = n ? setInterval(P, i) : null;
    return () => clearInterval(e)
  }, [n, P]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.ConfettiCanvas, {
      ref: A,
      className: t,
      environment: S
    }), (0, r.jsx)(s.SpriteCanvas, {
      ref: f,
      colors: u,
      sprites: l,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}