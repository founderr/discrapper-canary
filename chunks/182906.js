"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("558522"),
  i = n("373977");

function r(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: r,
    imageNotFoundClassName: o
  } = e, [u, d] = l.useState(!1);
  return "not-found" === t.state || u ? (0, s.jsx)("div", {
    className: o,
    children: (0, s.jsx)(a.default, {
      className: i.brokenImageIcon
    })
  }) : "loading" === t.state ? null : (0, s.jsx)("img", {
    alt: n,
    className: r,
    src: t.url,
    onError: () => d(!0)
  })
}