"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("887024");
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

function o(e) {
  let {
    className: t,
    firing: n = !0,
    wind: o = 2
  } = e, [d, f] = r.useState(null), [E, m] = r.useState(null), p = (0, s.useConfettiCannon)(E, d), A = r.useMemo(() => new s.Environment({
    wind: o
  }), [o]), S = r.useCallback(() => {
    let e = null == E ? void 0 : E.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    p.createConfetti({
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
  }, [p, E]);
  return r.useEffect(() => {
    let e = n ? setInterval(S, i) : null;
    return () => clearInterval(e)
  }, [n, S]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.ConfettiCanvas, {
      ref: m,
      className: t,
      environment: A
    }), (0, a.jsx)(s.SpriteCanvas, {
      ref: f,
      colors: u,
      sprites: l,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}