"use strict";
a.r(e), a.d(e, {
  MonetizationListingImageAspectStable: function() {
    return c
  },
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("468194"),
  i = a("477690"),
  l = a("166081"),
  r = a("841762");
let u = (0, s.cssValueToNumber)(i.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function o(t) {
  let {
    listing: e,
    imageSize: a,
    alt: s,
    ...i
  } = t, r = (0, l.useListingThumbnailUrl)(e, a);
  return (0, n.jsx)("img", {
    src: r,
    alt: s,
    ...i
  })
}

function c(t) {
  let {
    listing: e,
    aspectRatio: a = 16 / 9,
    height: s,
    ...i
  } = t, o = (s - 2 * u) * a, c = (0, l.useListingThumbnailUrl)(e, o), d = (0, l.useListingThumbnailUrl)(e, o, {
    shouldAnimate: !1
  });
  return (0, n.jsx)(r.default, {
    src: c,
    backgroundSrc: d,
    aspectRatio: a,
    ...i
  })
}