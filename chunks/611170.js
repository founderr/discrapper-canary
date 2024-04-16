"use strict";
t.r(n), t.d(n, {
  renderImageComponentForGalleryItem: function() {
    return s
  },
  renderVideoComponentForGalleryItem: function() {
    return u
  }
});
var l = t("591759"),
  a = t("524444");

function s(e) {
  let n = e.item.originalItem.media;
  return (0, a.renderImageComponent)({
    ...e,
    src: n.proxyUrl,
    original: n.url,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholderVersion
  })
}

function u(e) {
  let n = e.item.originalItem.media,
    t = l.default.toURLSafe(n.proxyUrl);
  return null == t ? null : (t.searchParams.append("format", "jpeg"), (0, a.renderVideoComponent)({
    ...e,
    poster: t.toString(),
    src: n.proxyUrl,
    placeholder: n.placeholder,
    placeholderVersion: n.placeholderVersion
  }))
}