"use strict";
a.r(t), a.d(t, {
  MonetizationListingImageAspectStable: function() {
    return o
  },
  default: function() {
    return u
  }
});
var s = a("735250");
a("470079");
var n = a("468194"),
  i = a("477690"),
  l = a("166081"),
  r = a("841762");
let c = (0, n.cssValueToNumber)(i.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function u(e) {
  let {
    listing: t,
    imageSize: a,
    alt: n,
    ...i
  } = e, r = (0, l.useListingThumbnailUrl)(t, a);
  return (0, s.jsx)("img", {
    src: r,
    alt: n,
    ...i
  })
}

function o(e) {
  let {
    listing: t,
    aspectRatio: a = 16 / 9,
    height: n,
    ...i
  } = e, u = (n - 2 * c) * a, o = (0, l.useListingThumbnailUrl)(t, u), d = (0, l.useListingThumbnailUrl)(t, u, {
    shouldAnimate: !1
  });
  return (0, s.jsx)(r.default, {
    src: o,
    backgroundSrc: d,
    aspectRatio: a,
    ...i
  })
}