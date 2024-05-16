"use strict";
n.r(t), n.d(t, {
  renderImageComponentForGalleryItem: function() {
    return u
  },
  renderVideoComponentForGalleryItem: function() {
    return i
  }
});
var l = n("591759"),
  a = n("524444");

function u(e) {
  let t = e.item.originalItem.media;
  return (0, a.renderImageComponent)({
    ...e,
    alt: e.item.originalItem.description,
    src: t.proxyUrl,
    original: t.url,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholderVersion
  })
}

function i(e) {
  let t = e.item.originalItem.media,
    n = l.default.toURLSafe(t.proxyUrl);
  return null == n ? null : (n.searchParams.append("format", "jpeg"), (0, a.renderVideoComponent)({
    ...e,
    poster: n.toString(),
    alt: e.item.originalItem.description,
    src: t.proxyUrl,
    placeholder: t.placeholder,
    placeholderVersion: t.placeholderVersion
  }))
}