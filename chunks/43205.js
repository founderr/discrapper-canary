"use strict";
a.r(t), a.d(t, {
  ContentImage: function() {
    return d
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  l = a("120356"),
  i = a.n(l),
  o = a("410030"),
  s = a("438071"),
  u = a("988358");

function d(e) {
  let {
    src: t,
    size: a,
    className: l,
    alt: d = "icon",
    fallbackSrc: c
  } = e, g = (0, o.default)(), [f, E] = r.useState(!1), [m, T] = r.useState(!1), _ = null == c || m;
  return null == t || f && _ ? (0, n.jsx)(s.default, {
    width: a,
    height: a,
    color: "dark" === g ? "white" : "black",
    className: i()(u.contentImage, l)
  }) : (0, n.jsx)("img", {
    style: {
      maxWidth: "".concat(a, "px"),
      height: "".concat(a, "px")
    },
    className: i()(u.contentImage, l),
    src: f && null != c ? c : t,
    alt: d,
    onError: e => f ? T(!0) : E(!0)
  })
}