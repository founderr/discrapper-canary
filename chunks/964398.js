n(47120), n(411104);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  r = n.n(s),
  a = n(481060),
  o = n(65205),
  u = n(689938),
  c = n(179216);

function d(e) {
  let {
    className: t
  } = e;
  return (0, l.jsxs)("svg", {
    className: t,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    children: [(0, l.jsx)("g", {
      filter: "url(#a)",
      children: (0, l.jsx)("path", {
        d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
        fill: "currentColor"
      })
    }), (0, l.jsx)("defs", {
      children: (0, l.jsxs)("filter", {
        id: "a",
        x: "0",
        y: "0",
        width: "48",
        height: "48",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [(0, l.jsx)("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), (0, l.jsx)("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), (0, l.jsx)("feOffset", {
          dy: "8"
        }), (0, l.jsx)("feGaussianBlur", {
          stdDeviation: "8"
        }), (0, l.jsx)("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        }), (0, l.jsx)("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_605_72103"
        }), (0, l.jsx)("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_605_72103",
          result: "shape"
        })]
      })
    })]
  })
}
let h = [{
    x: .5,
    y: .05
  }, {
    x: .95,
    y: .2
  }, {
    x: 1,
    y: .5
  }, {
    x: .95,
    y: .8
  }, {
    x: .5,
    y: .95
  }, {
    x: .05,
    y: .8
  }, {
    x: 0,
    y: .5
  }, {
    x: .05,
    y: .2
  }],
  p = h.length;

function g(e, t, n) {
  let l = e * t;
  return e > .5 ? l - n : e < .5 ? l : l - n / 2
}
let m = (e, t) => {
  let n = Math.abs(t.x),
    l = 180 / Math.PI * Math.atan2(Math.abs(t.y), n),
    i = e / 2 - 28.8;
  return {
    x: Math.max(i * Math.cos(2 * Math.PI * l / 360), 0),
    y: Math.max(i * Math.sin(2 * Math.PI * l / 360), 0)
  }
};
t.Z = i.memo(function(e) {
  let {
    wheelWidth: t,
    wheelHeight: n,
    itemWidth: C,
    itemHeight: E,
    showDeadZoneIndicator: f,
    activeItem: _,
    onItemSelect: I,
    onItemAction: N,
    interactive: Z = !0,
    children: S
  } = e, x = i.useRef(null), L = i.useRef([]), T = i.useRef(!1), v = i.useRef(null), [A, M] = i.useState(0), [R, O] = i.useState({
    x: 0,
    y: 0
  }), P = Math.abs(R.x) + Math.abs(R.y) > 0, b = i.useMemo(() => r().chunk(S, p), [S]), j = i.useCallback((e, t) => {
    null == L.current[A] ? L.current[A] = [] : L.current[A][t] = e
  }, [A]), y = i.useCallback((e, t) => {
    v.current = t, I(p * e + t)
  }, [I]), D = i.useCallback(() => {
    v.current = null, I(null)
  }, [I]), U = i.useCallback(e => {
    D(), T.current = e
  }, [D]), G = i.useCallback((e, t, n) => {
    if (T.current) {
      O({
        x: 0,
        y: 0
      });
      return
    }
    let l = {
        x: e.x - t.x,
        y: e.y - t.y
      },
      i = l.x < 0,
      s = l.y < 0,
      r = m(n, l),
      a = i ? Math.max(l.x, -r.x) : Math.min(l.x, r.x);
    O({
      x: a / 2,
      y: (s ? Math.max(l.y, -r.y) : Math.min(l.y, r.y)) / 2
    })
  }, []), w = i.useCallback(e => {
    if (null != v.current) e.preventDefault(), e.stopPropagation(), null == N || N(p * A + v.current)
  }, [N, A]), k = i.useMemo(() => (0, s.throttle)(e => {
    if (null == x.current) return;
    let l = x.current.getBoundingClientRect(),
      i = l.left + l.width / 2,
      s = {
        x: i,
        y: l.top + l.height / 2
      },
      r = {
        x: e.clientX,
        y: e.clientY
      };
    if (G(r, s, Math.max(t, n)), T.current) {
      null != _ && D();
      return
    }
    let a = (0, o.ld)(s, r, Math.max(t, n));
    for (let e = 0; e < L.current[A].length; e++) {
      let t = L.current[A][e];
      if (null == t) continue;
      let n = t.getBoundingClientRect();
      if ((0, o.Vr)(s, a, n)) {
        y(A, e);
        return
      }
    }
    D()
  }, 16), [_, G, D, y, A, n, t]), B = i.useCallback(e => {
    if (!Z) return;
    let t = A + (e.deltaY > 0 ? 1 : -1);
    t >= 0 && t < b.length && (null != v.current && (b[t].length > v.current ? y(t, v.current) : D()), M(t))
  }, [Z, A, b, y, D]), V = i.useMemo(() => b[A].map((e, i) => {
    let s = h[i];
    if (null == s) throw Error("Too many items supplied ".concat(S.length, " expected max of ").concat(h.length));
    let r = g(s.x, t, C),
      a = g(s.y, n, E);
    return (0, l.jsx)("div", {
      ref: e => j(e, i),
      className: c.chatWheelItem,
      style: {
        left: r,
        top: a,
        width: C,
        height: E
      },
      children: e
    }, i)
  }), [b, A, t, C, n, E, S.length, j]);
  return (0, l.jsx)(a.Clickable, {
    className: c.chatWheelMouseInput,
    onMouseMove: k,
    onWheel: B,
    onClick: w,
    children: (0, l.jsxs)("div", {
      ref: x,
      className: c.chatWheel,
      style: {
        width: t,
        height: n
      },
      children: [(0, l.jsxs)("svg", {
        className: c.chatWheelBackground,
        viewBox: "0 0 288 288",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, l.jsxs)("filter", {
          id: "soundboard-wheel-background-shadow",
          x: "0",
          y: "0",
          width: "288",
          height: "288",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [(0, l.jsx)("feFlood", {
            floodOpacity: "0",
            result: "BackgroundImageFix"
          }), (0, l.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha"
          }), (0, l.jsx)("feOffset", {
            dy: "8"
          }), (0, l.jsx)("feGaussianBlur", {
            stdDeviation: "8"
          }), (0, l.jsx)("feColorMatrix", {
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          }), (0, l.jsx)("feBlend", {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_489_60382"
          }), (0, l.jsx)("feBlend", {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_489_60382",
            result: "shape"
          })]
        }), (0, l.jsxs)("g", {
          filter: "url(#soundboard-wheel-background-shadow)",
          children: [(0, l.jsx)("circle", {
            className: c.chatWheelBackground,
            cx: "144",
            cy: "144",
            r: "103.68",
            strokeWidth: "40.32"
          }), f && (0, l.jsx)("circle", {
            className: c.chatWheelDeadZone,
            onMouseEnter: () => U(!0),
            onMouseLeave: () => U(!1),
            cx: 144,
            cy: 144,
            r: 28.8
          }), P && (0, l.jsx)("circle", {
            className: c.chatWheelCenter,
            cx: 144 + R.x,
            cy: 144 + R.y,
            r: 28.8
          })]
        }), f && (0, l.jsx)("circle", {
          className: c.chatWheelDeadZone,
          onMouseEnter: () => U(!0),
          onMouseLeave: () => U(!1),
          cx: 144,
          cy: 144,
          r: 28.8,
          stroke: "none"
        })]
      }), (0, l.jsxs)("div", {
        className: c.innerContent,
        children: [f && (0, l.jsx)(d, {
          className: c.chatWheelDeadZoneIcon
        }), Z && b.length > 1 ? (0, l.jsx)("div", {
          className: c.paginationHint,
          children: u.Z.Messages.CHAT_WHEEL_PAGINATION_HINT
        }) : null]
      }), V]
    })
  })
})