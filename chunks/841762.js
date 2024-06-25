t.d(n, {
  Z: function() {
    return c
  }
}), t(47120);
var i = t(735250),
  r = t(470079),
  o = t(120356),
  l = t.n(o),
  u = t(481060),
  s = t(455225);

function a(e) {
  let {
    alt: n,
    ...t
  } = e, [o, l] = r.useState(!0);
  return (0, i.jsxs)(i.Fragment, {
    children: [o && (0, i.jsx)(u.Spinner, {
      type: u.Spinner.Type.LOW_MOTION,
      className: s.loader
    }), (0, i.jsx)("img", {
      ...t,
      alt: n,
      onLoad: () => l(!1)
    })]
  })
}

function c(e) {
  let {
    src: n,
    backgroundSrc: t,
    alt: r,
    aspectRatio: o,
    className: u,
    imageChildClassName: c,
    ...d
  } = e;
  return (0, i.jsxs)("div", {
    className: l()(s.container, u),
    children: [(0, i.jsx)("img", {
      src: t,
      alt: r,
      className: s.backgroundImage
    }), (0, i.jsx)("div", {
      className: s.backgroundImageFilter
    }), (0, i.jsx)("div", {
      style: {
        aspectRatio: o
      },
      className: s.imageContainer,
      children: (0, i.jsx)(a, {
        src: n,
        alt: r,
        className: l()(s.image, c),
        ...d
      })
    })]
  })
}