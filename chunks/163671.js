"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  i = n.n(a),
  l = n("819570"),
  r = n("136324");

function o(e) {
  let {
    children: t,
    className: n,
    ...a
  } = e, o = t();
  return (0, s.jsx)(l.default, {
    ...a,
    className: i()(n, r.container),
    contentClassName: r.content,
    children: o.map((e, t) => (0, s.jsx)("div", {
      className: r.column,
      style: {
        flexBasis: "".concat(100 / o.length, "%")
      },
      children: e
    }, t))
  })
}