t.d(n, {
    aB: function () {
        return s;
    },
    rJ: function () {
        return c;
    },
    yF: function () {
        return o;
    }
});
var l = t(200651);
t(192379);
var i = t(295435),
    r = t(591759),
    a = t(524444);
function o(e) {
    let n = e.item.originalItem.media;
    return (0, l.jsx)(i.S, {
        media: n,
        placeholderWidth: 350,
        placeholderHeight: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        useFullWidth: e.useFullWidth,
        mediaLayoutType: e.mediaLayoutType
    });
}
function s(e) {
    let n = e.item.originalItem.media;
    return (0, a.Yi)({
        ...e,
        alt: e.item.originalItem.description,
        src: n.proxyUrl,
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholderVersion,
        sourceMetadata: { message: e.message }
    });
}
function c(e) {
    let n = e.item.originalItem.media,
        t = r.Z.toURLSafe(n.proxyUrl);
    return null == t
        ? null
        : (t.searchParams.append('format', 'webp'),
          (0, a.lV)({
              ...e,
              poster: t.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              sourceMetadata: { message: e.message }
          }));
}
