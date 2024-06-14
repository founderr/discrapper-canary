"use strict";
n.r(e), n.d(e, {
  default: function() {
    return u
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  l = n("557533"),
  a = n.n(l),
  s = n("349361"),
  o = n("418944");

function u(t) {
  let {
    children: e,
    gradientClassName: n,
    ...l
  } = t, u = r.useRef(null), [d, c] = r.useState(!0), f = () => {
    var t;
    (null === (t = u.current) || void 0 === t ? void 0 : t.isScrolledToBottom()) === !0 ? c(!1) : c(!0)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.AdvancedScrollerThin, {
      ...l,
      fade: !0,
      ref: t => {
        null != t && (u.current = t, f())
      },
      onScroll: f,
      children: e
    }), (0, i.jsx)("div", {
      className: a()(o.containerScrollGradient, n),
      "data-shown": d
    })]
  })
}