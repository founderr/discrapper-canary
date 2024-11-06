l.d(n, {
    a: function () {
        return r;
    },
    r: function () {
        return a;
    }
});
var t = l(591759),
    i = l(524444);
function r(e) {
    let n = e.item.originalItem.media;
    return (0, i.Yi)({
        ...e,
        alt: e.item.originalItem.description,
        src: n.proxyUrl,
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholderVersion,
        sourceMetadata: { message: e.message }
    });
}
function a(e) {
    let n = e.item.originalItem.media,
        l = t.Z.toURLSafe(n.proxyUrl);
    return null == l
        ? null
        : (l.searchParams.append('format', 'webp'),
          (0, i.lV)({
              ...e,
              poster: l.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              sourceMetadata: { message: e.message }
          }));
}
