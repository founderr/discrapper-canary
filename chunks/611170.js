t.d(n, {
    a: function () {
        return r;
    },
    r: function () {
        return o;
    }
});
var l = t(591759),
    i = t(524444),
    a = t(231338);
function r(e) {
    let n = e.item.originalItem.media;
    return (0, i.Yi)({
        ...e,
        alt: e.item.originalItem.description,
        src: n.proxyUrl,
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholderVersion,
        renderForwardComponent: a.Vq
    });
}
function o(e) {
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
              renderForwardComponent: a.Vq
          }));
}
