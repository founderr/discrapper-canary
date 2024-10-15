t.d(n, {
    a: function () {
        return a;
    },
    r: function () {
        return r;
    }
});
var l = t(591759),
    i = t(524444);
function a(e) {
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
function r(e) {
    let n = e.item.originalItem.media,
        t = l.Z.toURLSafe(n.proxyUrl);
    return null == t
        ? null
        : (t.searchParams.append('format', 'webp'),
          (0, i.lV)({
              ...e,
              poster: t.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              sourceMetadata: { message: e.message }
          }));
}
