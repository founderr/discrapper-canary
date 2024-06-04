"use strict";
n.r(t), n.d(t, {
  ContentImage: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("410030"),
  o = n("438071"),
  u = n("988358");

function d(e) {
  let {
    src: t,
    size: n,
    className: s,
    alt: d = "icon",
    fallbackSrc: c
  } = e, f = (0, r.default)(), [h, m] = l.useState(!1), [p, E] = l.useState(!1), C = null == c || p;
  return null == t || h && C ? (0, a.jsx)(o.default, {
    width: n,
    height: n,
    color: "dark" === f ? "white" : "black",
    className: i()(u.contentImage, s)
  }) : (0, a.jsx)("img", {
    style: {
      maxWidth: "".concat(n, "px"),
      height: "".concat(n, "px")
    },
    className: i()(u.contentImage, s),
    src: h && null != c ? c : t,
    alt: d,
    onError: e => h ? E(!0) : m(!0)
  })
}