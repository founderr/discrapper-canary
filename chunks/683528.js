t.d(e, {
    Z: function () {
        return x;
    }
});
var r = t(200651),
    i = t(192379),
    l = t(120356),
    o = t.n(l),
    a = t(481060),
    s = t(607070),
    u = t(124347),
    c = t(52824),
    d = t(549635),
    m = t(388032),
    f = t(244190);
function h(n) {
    return 'media-view-scroll-thumbnail-'.concat(n);
}
let _ = i.memo(function (n) {
    var e;
    let { item: t } = n;
    let i =
        'IMAGE' === (e = t).type
            ? (0, c.q)({
                  proxyURL: e.proxyUrl,
                  url: e.url
              })
            : 'VIDEO' === e.type && null != e.proxyUrl
              ? (0, d.D)(e.proxyUrl)
              : null;
    return null == i
        ? null
        : (0, r.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: i,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt
          });
});
function x(n) {
    let { items: e, currentIndex: t, onGalleryItemClick: l } = n,
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let n = document.getElementById(h(t));
            null != u.current &&
                null != n &&
                u.current.scrollIntoViewNode({
                    node: n,
                    animate: !s.Z.useReducedMotion,
                    padding: 24
                });
        }, [t]),
        (0, r.jsx)('div', {
            className: f.galleryContainer,
            children: (0, r.jsx)(a.AdvancedScrollerThin, {
                orientation: 'horizontal',
                className: f.gallery,
                ref: u,
                children: e.map((n, i) => {
                    let s = i === t,
                        u = s ? m.t['qv/U5e'] : m.t.zviMAA;
                    return (0, r.jsx)(
                        a.Clickable,
                        {
                            id: h(i),
                            className: o()(f.galleryItem, { [f.selected]: s }),
                            'aria-label': m.intl.formatToPlainString(u, {
                                pageNumber: i + 1,
                                totalPages: e.length
                            }),
                            onClick: () => l(i),
                            children: (0, r.jsx)(_, { item: n })
                        },
                        i
                    );
                })
            })
        })
    );
}
