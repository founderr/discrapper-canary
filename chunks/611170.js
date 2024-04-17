"use strict";
n.r(t), n.d(t, {
  renderImageComponentForGalleryItem: function() {
    return s
  },
  renderVideoComponentForGalleryItem: function() {
    return o
  }
});
var l = n("591759"),
  a = n("524444");

function s(e) {
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

function o(e) {
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