"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
}), i("47120");
var n = i("735250"),
  s = i("470079"),
  r = i("911765");
let a = [i("992134")],
  o = ["#FFFFFF"],
  l = 1e3 / 60,
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
    firing: i = !0,
    wind: d = 2
  } = e, [c, p] = s.useState(null), [h, m] = s.useState(null), f = (0, r.useConfettiCannon)(h, c), v = s.useMemo(() => new r.Environment({
    wind: d
  }), [d]), b = s.useCallback(() => {
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
  return s.useEffect(() => {
    let e = i ? setInterval(b, l) : null;
    return () => clearInterval(e)
  }, [i, b]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.ConfettiCanvas, {
      ref: m,
      className: t,
      environment: v
    }), (0, n.jsx)(r.SpriteCanvas, {
      ref: p,
      colors: o,
      sprites: a,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}