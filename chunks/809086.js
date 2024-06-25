t.d(n, {
  Z: function() {
    return c
  },
  e: function() {
    return u
  }
});
var r = t(735250);
t(470079);
var o = t(468194),
  a = t(477690),
  l = t(166081),
  s = t(841762);
let i = (0, o.Mg)(a.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function c(e) {
  let {
    listing: n,
    imageSize: t,
    alt: o,
    ...a
  } = e, s = (0, l.U)(n, t);
  return (0, r.jsx)("img", {
    src: s,
    alt: o,
    ...a
  })
}

function u(e) {
  let {
    listing: n,
    aspectRatio: t = 16 / 9,
    height: o,
    ...a
  } = e, c = (o - 2 * i) * t, u = (0, l.U)(n, c), d = (0, l.U)(n, c, {
    shouldAnimate: !1
  });
  return (0, r.jsx)(s.Z, {
    src: u,
    backgroundSrc: d,
    aspectRatio: t,
    ...a
  })
}