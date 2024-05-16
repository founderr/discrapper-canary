"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("735250");
l("470079");
var i = l("120356"),
  r = l.n(i),
  a = l("481060"),
  s = l("149318");

function o(e) {
  let {
    loading: t,
    children: l
  } = e;
  return (0, n.jsxs)("div", {
    className: s.container,
    children: [t ? (0, n.jsx)("div", {
      className: s.spinnerContainer,
      children: (0, n.jsx)(a.Spinner, {
        className: s.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      })
    }) : null, (0, n.jsx)("div", {
      className: r()({
        [s.loading]: t
      }),
      children: l
    })]
  })
}