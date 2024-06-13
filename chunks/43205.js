"use strict";
n.r(t), n.d(t, {
  ContentImage: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  l = n("120356"),
  i = n.n(l),
  o = n("410030"),
  s = n("438071"),
  u = n("988358");

function d(e) {
  let {
    src: t,
    size: n,
    className: l,
    alt: d = "icon",
    fallbackSrc: c
  } = e, g = (0, o.default)(), [f, m] = r.useState(!1), [E, T] = r.useState(!1), _ = null == c || E;
  return null == t || f && _ ? (0, a.jsx)(s.default, {
    width: n,
    height: n,
    color: "dark" === g ? "white" : "black",
    className: i()(u.contentImage, l)
  }) : (0, a.jsx)("img", {
    style: {
      maxWidth: "".concat(n, "px"),
      height: "".concat(n, "px")
    },
    className: i()(u.contentImage, l),
    src: f && null != c ? c : t,
    alt: d,
    onError: e => f ? T(!0) : m(!0)
  })
}