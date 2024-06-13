"use strict";
a.r(e), a.d(e, {
  default: function() {
    return c
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  i = a("120356"),
  l = a.n(i),
  r = a("481060"),
  u = a("420019");

function o(t) {
  let {
    alt: e,
    ...a
  } = t, [i, l] = s.useState(!0);
  return (0, n.jsxs)(n.Fragment, {
    children: [i && (0, n.jsx)(r.Spinner, {
      type: r.Spinner.Type.LOW_MOTION,
      className: u.loader
    }), (0, n.jsx)("img", {
      ...a,
      alt: e,
      onLoad: () => l(!1)
    })]
  })
}

function c(t) {
  let {
    src: e,
    backgroundSrc: a,
    alt: s,
    aspectRatio: i,
    className: r,
    imageChildClassName: c,
    ...d
  } = t;
  return (0, n.jsxs)("div", {
    className: l()(u.container, r),
    children: [(0, n.jsx)("img", {
      src: a,
      alt: s,
      className: u.backgroundImage
    }), (0, n.jsx)("div", {
      className: u.backgroundImageFilter
    }), (0, n.jsx)("div", {
      style: {
        aspectRatio: i
      },
      className: u.imageContainer,
      children: (0, n.jsx)(o, {
        src: e,
        alt: s,
        className: l()(u.image, c),
        ...d
      })
    })]
  })
}