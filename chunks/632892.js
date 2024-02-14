"use strict";
n.r(t), n.d(t, {
  FeatureBorderTypes: function() {
    return r
  },
  default: function() {
    return d
  }
});
var s, r, a = n("37983"),
  l = n("884691"),
  i = n("414456"),
  u = n.n(i),
  c = n("834832");
(s = r || (r = {})).PREMIUM = "premium", s.LIMITED = "limited";
let o = {
  premium: {
    border: c.premiumFeatureBorder,
    background: c.premiumBackground
  },
  limited: {
    border: c.limitedFeatureBorder,
    background: c.limitedBackground
  }
};
var d = l.forwardRef(function(e, t) {
  let {
    children: n,
    type: s = "premium",
    isShown: r,
    hasBackground: l = !1,
    className: i,
    backgroundClassName: d
  } = e;
  if (!r) return (0, a.jsx)(a.Fragment, {
    children: n
  });
  let {
    border: f,
    background: m
  } = o[s];
  return (0, a.jsx)("div", {
    ref: t,
    className: u(f, i),
    children: (0, a.jsx)("div", {
      className: u(l ? m : c.background, d),
      children: n
    })
  })
})