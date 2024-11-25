t.d(n, {
    aB: function () {
        return h;
    },
    rJ: function () {
        return x;
    },
    yF: function () {
        return p;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(916616),
    a = t(981729),
    o = t(911969),
    s = t(558522),
    c = t(591759),
    u = t(524444),
    d = t(981631),
    m = t(388032),
    f = t(650519);
function p(e) {
    let n = i.useRef(null),
        t = e.item.originalItem.media;
    if (t.loadingState === o.f.LOADED_NOT_FOUND)
        return (0, l.jsx)(a.u, {
            text: m.intl.string(m.t.UvDfMz),
            position: 'bottom',
            align: 'center',
            targetElementRef: n,
            children: (e) =>
                (0, l.jsx)('div', {
                    ...e,
                    className: f.notFoundPlaceholder,
                    role: 'img',
                    children: (0, l.jsx)(s.Z, {
                        ref: n,
                        className: f.brokenImageIcon
                    })
                })
        });
    let c = t.loadingState === o.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
    return (0, l.jsx)(r.E, {
        readyState: c,
        src: '',
        width: 350,
        height: 350,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        mediaLayoutType: e.mediaLayoutType,
        useFullWidth: e.useFullWidth,
        zoomable: !1
    });
}
function h(e) {
    let n = e.item.originalItem.media;
    return (0, u.Yi)({
        ...e,
        alt: e.item.originalItem.description,
        src: n.proxyUrl,
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholderVersion,
        sourceMetadata: { message: e.message }
    });
}
function x(e) {
    let n = e.item.originalItem.media,
        t = c.Z.toURLSafe(n.proxyUrl);
    return null == t
        ? null
        : (t.searchParams.append('format', 'webp'),
          (0, u.lV)({
              ...e,
              poster: t.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              sourceMetadata: { message: e.message }
          }));
}
