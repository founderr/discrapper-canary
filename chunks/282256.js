"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("393903"),
  i = n("979264"),
  r = n("224351");
t.default = l.memo(function(e) {
  let {
    children: t,
    ...n
  } = e, o = l.useRef(null), [u, d] = l.useState(0), [c, f] = l.useState(0), [h, m] = l.useState(0), [p, E] = l.useState(0), C = l.useCallback(e => {
    let t = e.target.getBoundingClientRect(),
      n = o.current,
      a = null == n ? void 0 : n.getBoundingClientRect();
    if (null == n) {
      d(0);
      return
    }
    let l = null != n ? n.getBoundingClientRect().right - t.right : 0,
      s = null != a ? a.width - l : 0;
    d(l), f(s > 0 ? s : 0), m(l > 0 ? 1 : 0), E(t.width)
  }, []), g = l.useRef({
    box: "content-box"
  }), S = (0, s.useResizeObserver)(C, g.current);
  return (0, a.jsxs)("div", {
    ref: S,
    className: r.container,
    children: [(0, a.jsx)("div", {
      style: {
        maxWidth: p
      },
      className: r.usernameContainer,
      children: t
    }), (0, a.jsxs)("div", {
      className: r.chipletParent,
      children: [(0, a.jsx)("span", {
        className: r.chipletContainer,
        ref: o,
        children: (0, a.jsx)(i.default, {
          ...n
        })
      }), (0, a.jsx)("div", {
        style: {
          width: c,
          opacity: h,
          right: u
        },
        className: r.overflowingFade
      })]
    })]
  })
})