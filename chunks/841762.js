t.d(n, {
  Z: function() {
    return c
  }
}), t(47120);
var r = t(735250),
  i = t(470079),
  l = t(120356),
  o = t.n(l),
  u = t(481060),
  s = t(455225);

function a(e) {
  let {
    alt: n,
    ...t
  } = e, [l, o] = i.useState(!0);
  return (0, r.jsxs)(r.Fragment, {
    children: [l && (0, r.jsx)(u.Spinner, {
      type: u.Spinner.Type.LOW_MOTION,
      className: s.loader
    }), (0, r.jsx)("img", {
      ...t,
      alt: n,
      onLoad: () => o(!1)
    })]
  })
}

function c(e) {
  let {
    src: n,
    backgroundSrc: t,
    alt: i,
    aspectRatio: l,
    className: u,
    imageChildClassName: c,
    ...d
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(s.container, u),
    children: [(0, r.jsx)("img", {
      src: t,
      alt: i,
      className: s.backgroundImage
    }), (0, r.jsx)("div", {
      className: s.backgroundImageFilter
    }), (0, r.jsx)("div", {
      style: {
        aspectRatio: l
      },
      className: s.imageContainer,
      children: (0, r.jsx)(a, {
        src: n,
        alt: i,
        className: o()(s.image, c),
        ...d
      })
    })]
  })
}