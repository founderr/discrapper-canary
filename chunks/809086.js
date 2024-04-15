"use strict";
n.r(t), n.d(t, {
  MonetizationListingImageAspectStable: function() {
    return d
  },
  default: function() {
    return c
  }
});
var r = n("735250");
n("470079");
var s = n("468194"),
  a = n("477690"),
  u = n("166081"),
  l = n("841762");
let i = (0, s.cssValueToNumber)(a.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function c(e) {
  let {
    listing: t,
    imageSize: n,
    alt: s,
    ...a
  } = e, l = (0, u.useListingThumbnailUrl)(t, n);
  return (0, r.jsx)("img", {
    src: l,
    alt: s,
    ...a
  })
}

function d(e) {
  let {
    listing: t,
    aspectRatio: n = 16 / 9,
    height: s,
    ...a
  } = e, c = (s - 2 * i) * n, d = (0, u.useListingThumbnailUrl)(t, c), o = (0, u.useListingThumbnailUrl)(t, c, {
    shouldAnimate: !1
  });
  return (0, r.jsx)(l.default, {
    src: d,
    backgroundSrc: o,
    aspectRatio: n,
    ...a
  })
}