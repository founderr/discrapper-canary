"use strict";
r.r(t), r.d(t, {
  MonetizationListingImageAspectStable: function() {
    return d
  },
  default: function() {
    return c
  }
});
var n = r("735250");
r("470079");
var a = r("468194"),
  s = r("477690"),
  l = r("166081"),
  u = r("841762");
let i = (0, a.cssValueToNumber)(s.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function c(e) {
  let {
    listing: t,
    imageSize: r,
    alt: a,
    ...s
  } = e, u = (0, l.useListingThumbnailUrl)(t, r);
  return (0, n.jsx)("img", {
    src: u,
    alt: a,
    ...s
  })
}

function d(e) {
  let {
    listing: t,
    aspectRatio: r = 16 / 9,
    height: a,
    ...s
  } = e, c = (a - 2 * i) * r, d = (0, l.useListingThumbnailUrl)(t, c), o = (0, l.useListingThumbnailUrl)(t, c, {
    shouldAnimate: !1
  });
  return (0, n.jsx)(u.default, {
    src: d,
    backgroundSrc: o,
    aspectRatio: r,
    ...s
  })
}