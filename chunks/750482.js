"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  MonetizationListingImageAspectStable: function() {
    return c
  }
});
var r = n("37983");
n("884691");
var u = n("617258"),
  i = n("769846"),
  a = n("801765"),
  l = n("955735");
let s = (0, u.cssValueToNumber)(i.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function o(e) {
  let {
    listing: t,
    imageSize: n,
    alt: u,
    ...i
  } = e, l = (0, a.useListingThumbnailUrl)(t, n);
  return (0, r.jsx)("img", {
    src: l,
    alt: u,
    ...i
  })
}

function c(e) {
  let {
    listing: t,
    aspectRatio: n = 16 / 9,
    height: u,
    ...i
  } = e, o = (u - 2 * s) * n, c = (0, a.useListingThumbnailUrl)(t, o), d = (0, a.useListingThumbnailUrl)(t, o, {
    shouldAnimate: !1
  });
  return (0, r.jsx)(l.default, {
    src: c,
    backgroundSrc: d,
    aspectRatio: n,
    ...i
  })
}