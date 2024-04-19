"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var r = n("735250"),
  i = n("470079"),
  l = n("120356"),
  s = n.n(l),
  o = n("481060"),
  u = n("186231");

function a(e) {
  let {
    alt: t,
    ...n
  } = e, [l, s] = i.useState(!0);
  return (0, r.jsxs)(r.Fragment, {
    children: [l && (0, r.jsx)(o.Spinner, {
      type: o.Spinner.Type.LOW_MOTION,
      className: u.loader
    }), (0, r.jsx)("img", {
      ...n,
      alt: t,
      onLoad: () => s(!1)
    })]
  })
}

function c(e) {
  let {
    src: t,
    backgroundSrc: n,
    alt: i,
    aspectRatio: l,
    className: o,
    imageChildClassName: c,
    ...d
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(u.container, o),
    children: [(0, r.jsx)("img", {
      src: n,
      alt: i,
      className: u.backgroundImage
    }), (0, r.jsx)("div", {
      className: u.backgroundImageFilter
    }), (0, r.jsx)("div", {
      style: {
        aspectRatio: l
      },
      className: u.imageContainer,
      children: (0, r.jsx)(a, {
        src: t,
        alt: i,
        className: s()(u.image, c),
        ...d
      })
    })]
  })
}