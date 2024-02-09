"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  MonetizationListingImageAspectStable: function() {
    return c
  }
});
var u = n("37983");
n("884691");
var r = n("617258"),
  a = n("769846"),
  i = n("801765"),
  l = n("955735");
let s = (0, r.cssValueToNumber)(a.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function o(e) {
  let {
    listing: t,
    imageSize: n,
    alt: r,
    ...a
  } = e, l = (0, i.useListingThumbnailUrl)(t, n);
  return (0, u.jsx)("img", {
    src: l,
    alt: r,
    ...a
  })
}

function c(e) {
  let {
    listing: t,
    aspectRatio: n = 16 / 9,
    height: r,
    ...a
  } = e, o = (r - 2 * s) * n, c = (0, i.useListingThumbnailUrl)(t, o), d = (0, i.useListingThumbnailUrl)(t, o, {
    shouldAnimate: !1
  });
  return (0, u.jsx)(l.default, {
    src: c,
    backgroundSrc: d,
    aspectRatio: n,
    ...a
  })
}