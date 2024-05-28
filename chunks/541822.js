"use strict";
n.r(t), n.d(t, {
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

function u(e) {
  let {
    children: t,
    gradientClassName: n,
    ...l
  } = e, u = r.useRef(null), [d, c] = r.useState(!0), f = () => {
    var e;
    (null === (e = u.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? c(!1) : c(!0)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.AdvancedScrollerThin, {
      ...l,
      fade: !0,
      ref: e => {
        null != e && (u.current = e, f())
      },
      onScroll: f,
      children: t
    }), (0, i.jsx)("div", {
      className: a()(o.containerScrollGradient, n),
      "data-shown": d
    })]
  })
}