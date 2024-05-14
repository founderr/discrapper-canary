"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  r = n("557533"),
  s = n.n(r),
  a = n("349361"),
  o = n("418944");

function u(e) {
  let {
    children: t,
    gradientClassName: n,
    ...r
  } = e, u = l.useRef(null), [d, c] = l.useState(!0), f = () => {
    var e;
    (null === (e = u.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? c(!1) : c(!0)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.AdvancedScrollerThin, {
      ...r,
      fade: !0,
      ref: e => {
        null != e && (u.current = e, f())
      },
      onScroll: f,
      children: t
    }), (0, i.jsx)("div", {
      className: s()(o.containerScrollGradient, n),
      "data-shown": d
    })]
  })
}