"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("558522"),
  a = n("888868");

function o(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: o,
    imageNotFoundClassName: l
  } = e, [u, d] = r.useState(!1);
  return "not-found" === t.state || u ? (0, i.jsx)("div", {
    className: l,
    children: (0, i.jsx)(s.default, {
      className: a.brokenImageIcon
    })
  }) : "loading" === t.state ? null : (0, i.jsx)("img", {
    alt: n,
    className: o,
    src: t.url,
    onError: () => d(!0)
  })
}