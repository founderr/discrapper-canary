n.d(t, {
    a: function () {
        return o;
    },
    r: function () {
        return s;
    }
});
var r = n(591759),
    i = n(524444),
    a = n(231338);
function o(e) {
    let t = e.item.originalItem.media;
    return (0, i.Yi)({
        ...e,
        alt: e.item.originalItem.description,
        src: t.proxyUrl,
        original: t.url,
        placeholder: t.placeholder,
        placeholderVersion: t.placeholderVersion,
        renderForwardComponent: a.Vq
    });
}
function s(e) {
    let t = e.item.originalItem.media,
        n = r.Z.toURLSafe(t.proxyUrl);
    return null == n
        ? null
        : (n.searchParams.append('format', 'webp'),
          (0, i.lV)({
              ...e,
              poster: n.toString(),
              alt: e.item.originalItem.description,
              src: t.proxyUrl,
              placeholder: t.placeholder,
              placeholderVersion: t.placeholderVersion,
              renderForwardComponent: a.Vq
          }));
}
