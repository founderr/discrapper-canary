"use strict";
n.r(t), n.d(t, {
  FeatureBorderTypes: function() {
    return r
  },
  default: function() {
    return c
  }
});
var i, r, l = n("37983"),
  s = n("884691"),
  a = n("414456"),
  o = n.n(a),
  u = n("623682");
(i = r || (r = {})).PREMIUM = "premium", i.LIMITED = "limited";
let d = {
  premium: {
    border: u.premiumFeatureBorder,
    background: u.premiumBackground
  },
  limited: {
    border: u.limitedFeatureBorder,
    background: u.limitedBackground
  }
};
var c = s.forwardRef(function(e, t) {
  let {
    children: n,
    type: i = "premium",
    isShown: r,
    hasBackground: s = !1,
    className: a,
    backgroundClassName: c
  } = e;
  if (!r) return (0, l.jsx)(l.Fragment, {
    children: n
  });
  let {
    border: f,
    background: E
  } = d[i];
  return (0, l.jsx)("div", {
    ref: t,
    className: o(f, a),
    children: (0, l.jsx)("div", {
      className: o(s ? E : u.background, c),
      children: n
    })
  })
})