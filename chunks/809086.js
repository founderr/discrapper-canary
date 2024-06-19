e.d(n, {
  Z: function() {
    return c
  },
  e: function() {
    return u
  }
});
var a = e(735250);
e(470079);
var i = e(468194),
  r = e(477690),
  s = e(166081),
  l = e(841762);
let o = (0, i.Mg)(r.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function c(t) {
  let {
    listing: n,
    imageSize: e,
    alt: i,
    ...r
  } = t, l = (0, s.U)(n, e);
  return (0, a.jsx)("img", {
    src: l,
    alt: i,
    ...r
  })
}

function u(t) {
  let {
    listing: n,
    aspectRatio: e = 16 / 9,
    height: i,
    ...r
  } = t, c = (i - 2 * o) * e, u = (0, s.U)(n, c), d = (0, s.U)(n, c, {
    shouldAnimate: !1
  });
  return (0, a.jsx)(l.Z, {
    src: u,
    backgroundSrc: d,
    aspectRatio: e,
    ...r
  })
}