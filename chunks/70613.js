"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("236471");
let i = [n("992134")],
  l = ["#FFFFFF"],
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

function d(e) {
  let {
    className: t,
    firing: n = !0,
    wind: d = 2
  } = e, [c, p] = r.useState(null), [m, f] = r.useState(null), h = (0, s.useConfettiCannon)(m, c), E = r.useMemo(() => new s.Environment({
    wind: d
  }), [d]), S = r.useCallback(() => {
    let e = null == m ? void 0 : m.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    h.createConfetti({
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
  }, [h, m]);
  return r.useEffect(() => {
    let e = n ? setInterval(S, o) : null;
    return () => clearInterval(e)
  }, [n, S]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.ConfettiCanvas, {
      ref: f,
      className: t,
      environment: E
    }), (0, a.jsx)(s.SpriteCanvas, {
      ref: p,
      colors: l,
      sprites: i,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}