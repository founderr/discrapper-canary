"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  a = n("561445"),
  l = e => {
    let {
      aspectRatio: t,
      style: n,
      className: i,
      children: l
    } = e;
    return (0, s.jsx)("div", {
      className: r(a.outer, i),
      style: {
        paddingTop: "".concat(1 / t * 100, "%"),
        ...n
      },
      children: (0, s.jsx)("div", {
        className: a.inner,
        children: l
      })
    })
  }