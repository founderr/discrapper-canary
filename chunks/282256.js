"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("393903"),
  i = n("979264"),
  r = n("915432");
t.default = l.memo(function(e) {
  let {
    children: t,
    ...n
  } = e, o = l.useRef(null), [u, d] = l.useState(0), [c, f] = l.useState(0), [h, m] = l.useState(0), p = l.useCallback(() => {
    var e, t;
    let n = null === (e = E.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
      a = null === (t = o.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
    if (null == n || null == a) {
      d(0), f(0), m(0);
      return
    }
    let l = a.right - n.right,
      s = a.width - l;
    d(l), f(s > 0 ? s : 0), m(l > 0 ? 1 : 0)
  }, []), E = (0, s.useResizeObserver)(p), C = (0, i.useShouldDisplayClanTag)(n.userId);
  return l.useEffect(() => {
    null != E.current && p()
  }, [C]), (0, a.jsxs)("div", {
    className: r.container,
    ref: E,
    children: [(0, a.jsx)("div", {
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