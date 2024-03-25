"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  r = n.n(a),
  i = n("124969"),
  l = n("316664");

function o(e) {
  let {
    children: t,
    className: n,
    ...a
  } = e, o = t();
  return (0, s.jsx)(i.default, {
    ...a,
    className: r(n, l.container),
    contentClassName: l.content,
    children: o.map((e, t) => (0, s.jsx)("div", {
      className: l.column,
      style: {
        flexBasis: "".concat(100 / o.length, "%")
      },
      children: e
    }, t))
  })
}