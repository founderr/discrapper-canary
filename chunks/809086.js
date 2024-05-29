"use strict";
t.r(n), t.d(n, {
  MonetizationListingImageAspectStable: function() {
    return c
  },
  default: function() {
    return l
  }
});
var a = t("735250");
t("470079");
var r = t("468194"),
  s = t("477690"),
  o = t("166081"),
  i = t("841762");
let u = (0, r.cssValueToNumber)(s.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function l(e) {
  let {
    listing: n,
    imageSize: t,
    alt: r,
    ...s
  } = e, i = (0, o.useListingThumbnailUrl)(n, t);
  return (0, a.jsx)("img", {
    src: i,
    alt: r,
    ...s
  })
}

function c(e) {
  let {
    listing: n,
    aspectRatio: t = 16 / 9,
    height: r,
    ...s
  } = e, l = (r - 2 * u) * t, c = (0, o.useListingThumbnailUrl)(n, l), d = (0, o.useListingThumbnailUrl)(n, l, {
    shouldAnimate: !1
  });
  return (0, a.jsx)(i.default, {
    src: c,
    backgroundSrc: d,
    aspectRatio: t,
    ...s
  })
}