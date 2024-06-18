"use strict";
n.d(t, {
  $: function() {
    return d
  },
  R: function() {
    return r
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(186325),
  _ = n(689938),
  c = n(879967);
(i = r || (r = {})).WANDERING_CUBES = "wanderingCubes", i.CHASING_DOTS = "chasingDots", i.PULSING_ELLIPSIS = "pulsingEllipsis", i.SPINNING_CIRCLE = "spinningCircle", i.SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple", i.LOW_MOTION = "lowMotion";

function d(e) {
  let {
    type: t = "wanderingCubes",
    animated: n = !0,
    className: i,
    itemClassName: r,
    "aria-label": a,
    ...d
  } = e, {
    reducedMotion: E
  } = o.useContext(u.S), I = E.enabled ? function(e) {
    switch (e) {
      case "wanderingCubes":
      case "chasingDots":
        return "lowMotion";
      default:
        return e
    }
  }(t) : t;
  if (a = null != a ? a : _.Z.Messages.LOADING, "spinningCircle" === I || "spinningCircleSimple" === I) return (0, s.jsx)("div", {
    className: l()(c.spinner, c[I], i, {
      [c.stopAnimation]: !n
    }),
    role: "img",
    "aria-label": a,
    ...d,
    children: (0, s.jsx)("div", {
      className: c.spinningCircleInner,
      children: (0, s.jsxs)("svg", {
        className: c.circular,
        viewBox: "25 25 50 50",
        children: ["spinningCircle" === I && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("circle", {
            className: l()(c.path, c.path3, r),
            cx: "50",
            cy: "50",
            r: "20"
          }), (0, s.jsx)("circle", {
            className: l()(c.path, c.path2, r),
            cx: "50",
            cy: "50",
            r: "20"
          })]
        }), (0, s.jsx)("circle", {
          className: l()(c.path, r),
          cx: "50",
          cy: "50",
          r: "20"
        })]
      })
    })
  });
  let T = l()(c.item, r);
  return (0, s.jsx)("span", {
    className: l()(c.spinner, i, {
      [c.stopAnimation]: !n
    }),
    role: "img",
    "aria-label": a,
    ...d,
    children: (0, s.jsxs)("span", {
      className: l()(c.inner, c[I]),
      children: [(0, s.jsx)("span", {
        className: T
      }), (0, s.jsx)("span", {
        className: T
      }), "pulsingEllipsis" === I || "lowMotion" === I ? (0, s.jsx)("span", {
        className: T
      }) : null]
    })
  })
}
d.Type = r