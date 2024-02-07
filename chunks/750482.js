"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  },
  MonetizationListingImageAspectStable: function() {
    return c
  }
});
var r = n("37983");
n("884691");
var s = n("617258"),
  u = n("769846"),
  o = n("801765"),
  l = n("955735");
let i = (0, s.cssValueToNumber)(u.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function a(e) {
  let {
    listing: t,
    imageSize: n,
    alt: s,
    ...u
  } = e, l = (0, o.useListingThumbnailUrl)(t, n);
  return (0, r.jsx)("img", {
    src: l,
    alt: s,
    ...u
  })
}

function c(e) {
  let {
    listing: t,
    aspectRatio: n = 16 / 9,
    height: s,
    ...u
  } = e, a = (s - 2 * i) * n, c = (0, o.useListingThumbnailUrl)(t, a), d = (0, o.useListingThumbnailUrl)(t, a, {
    shouldAnimate: !1
  });
  return (0, r.jsx)(l.default, {
    src: c,
    backgroundSrc: d,
    aspectRatio: n,
    ...u
  })
}