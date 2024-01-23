"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  u = n.n(l),
  s = n("77078"),
  o = n("511606");

function a(e) {
  let {
    alt: t,
    ...n
  } = e, [l, u] = r.useState(!0);
  return (0, i.jsxs)(i.Fragment, {
    children: [l && (0, i.jsx)(s.Spinner, {
      type: s.Spinner.Type.LOW_MOTION,
      className: o.loader
    }), (0, i.jsx)("img", {
      ...n,
      alt: t,
      onLoad: () => u(!1)
    })]
  })
}

function d(e) {
  let {
    src: t,
    backgroundSrc: n,
    alt: r,
    aspectRatio: l,
    className: s,
    imageChildClassName: d,
    ...c
  } = e;
  return (0, i.jsxs)("div", {
    className: u(o.container, s),
    children: [(0, i.jsx)("img", {
      src: n,
      alt: r,
      className: o.backgroundImage
    }), (0, i.jsx)("div", {
      className: o.backgroundImageFilter
    }), (0, i.jsx)("div", {
      style: {
        aspectRatio: l
      },
      className: o.imageContainer,
      children: (0, i.jsx)(a, {
        src: t,
        alt: r,
        className: u(o.image, d),
        ...c
      })
    })]
  })
}