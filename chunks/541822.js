"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  l = n("557533"),
  s = n.n(l),
  a = n("349361"),
  o = n("916524");

function c(e) {
  let {
    children: t,
    gradientClassName: n,
    ...l
  } = e, c = r.useRef(null), [d, u] = r.useState(!0), f = () => {
    var e;
    (null === (e = c.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? u(!1) : u(!0)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.AdvancedScrollerThin, {
      ...l,
      fade: !0,
      ref: e => {
        null != e && (c.current = e, f())
      },
      onScroll: f,
      children: t
    }), (0, i.jsx)("div", {
      className: s()(o.containerScrollGradient, n),
      "data-shown": d
    })]
  })
}