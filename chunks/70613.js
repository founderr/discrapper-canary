"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  r = n("911765");
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

function d(e) {
  let {
    className: t,
    firing: n = !0,
    wind: d = 2
  } = e, [c, C] = a.useState(null), [E, _] = a.useState(null), f = (0, r.useConfettiCannon)(E, c), A = a.useMemo(() => new r.Environment({
    wind: d
  }), [d]), p = a.useCallback(() => {
    let e = null == E ? void 0 : E.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    f.createConfetti({
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
  }, [f, E]);
  return a.useEffect(() => {
    let e = n ? setInterval(p, u) : null;
    return () => clearInterval(e)
  }, [n, p]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(r.ConfettiCanvas, {
      ref: _,
      className: t,
      environment: A
    }), (0, s.jsx)(r.SpriteCanvas, {
      ref: C,
      colors: l,
      sprites: i,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}