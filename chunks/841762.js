"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  i = a("120356"),
  l = a.n(i),
  r = a("481060"),
  c = a("420019");

function u(e) {
  let {
    alt: t,
    ...a
  } = e, [i, l] = n.useState(!0);
  return (0, s.jsxs)(s.Fragment, {
    children: [i && (0, s.jsx)(r.Spinner, {
      type: r.Spinner.Type.LOW_MOTION,
      className: c.loader
    }), (0, s.jsx)("img", {
      ...a,
      alt: t,
      onLoad: () => l(!1)
    })]
  })
}

function o(e) {
  let {
    src: t,
    backgroundSrc: a,
    alt: n,
    aspectRatio: i,
    className: r,
    imageChildClassName: o,
    ...d
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(c.container, r),
    children: [(0, s.jsx)("img", {
      src: a,
      alt: n,
      className: c.backgroundImage
    }), (0, s.jsx)("div", {
      className: c.backgroundImageFilter
    }), (0, s.jsx)("div", {
      style: {
        aspectRatio: i
      },
      className: c.imageContainer,
      children: (0, s.jsx)(u, {
        src: t,
        alt: n,
        className: l()(c.image, o),
        ...d
      })
    })]
  })
}