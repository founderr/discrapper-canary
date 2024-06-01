"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  l = n.n(s),
  o = n("481060"),
  u = n("420019");

function a(e) {
  let {
    alt: t,
    ...n
  } = e, [s, l] = r.useState(!0);
  return (0, i.jsxs)(i.Fragment, {
    children: [s && (0, i.jsx)(o.Spinner, {
      type: o.Spinner.Type.LOW_MOTION,
      className: u.loader
    }), (0, i.jsx)("img", {
      ...n,
      alt: t,
      onLoad: () => l(!1)
    })]
  })
}

function d(e) {
  let {
    src: t,
    backgroundSrc: n,
    alt: r,
    aspectRatio: s,
    className: o,
    imageChildClassName: d,
    ...c
  } = e;
  return (0, i.jsxs)("div", {
    className: l()(u.container, o),
    children: [(0, i.jsx)("img", {
      src: n,
      alt: r,
      className: u.backgroundImage
    }), (0, i.jsx)("div", {
      className: u.backgroundImageFilter
    }), (0, i.jsx)("div", {
      style: {
        aspectRatio: s
      },
      className: u.imageContainer,
      children: (0, i.jsx)(a, {
        src: t,
        alt: r,
        className: l()(u.image, d),
        ...c
      })
    })]
  })
}