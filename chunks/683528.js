t.d(n, {
    Z: function () {
        return g;
    }
});
var i = t(200651),
    a = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(481060),
    s = t(607070),
    u = t(124347),
    c = t(52824),
    d = t(549635),
    h = t(217702),
    m = t(388032),
    p = t(52131);
function f(e) {
    return 'media-view-scroll-thumbnail-'.concat(e);
}
let _ = a.memo(function (e) {
    var n;
    let { item: t } = e;
    let a =
        'IMAGE' === (n = t).type
            ? (0, c.q)({
                  proxyURL: n.proxyUrl,
                  url: n.url
              })
            : 'VIDEO' === n.type && null != n.proxyUrl
              ? (0, d.D)(n.proxyUrl)
              : null;
    return null == a
        ? null
        : (0, i.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: a,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt,
              mediaLayoutType: h.hV.MOSAIC
          });
});
function g(e) {
    let { items: n, currentIndex: t, onGalleryItemClick: r } = e,
        u = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            let e = document.getElementById(f(t));
            null != u.current &&
                null != e &&
                u.current.scrollIntoViewNode({
                    node: e,
                    animate: !s.Z.useReducedMotion,
                    padding: 24
                });
        }, [t]),
        (0, i.jsx)('div', {
            className: p.galleryContainer,
            children: (0, i.jsx)(o.AdvancedScrollerThin, {
                orientation: 'horizontal',
                className: p.gallery,
                ref: u,
                onClick: (e) => e.stopPropagation(),
                children: n.map((e, a) => {
                    let s = a === t,
                        u = s ? m.t['qv/U5e'] : m.t.zviMAA;
                    return (0, i.jsxs)(
                        o.Clickable,
                        {
                            id: f(a),
                            className: p.galleryItem,
                            'aria-label': m.intl.formatToPlainString(u, {
                                pageNumber: a + 1,
                                totalPages: n.length
                            }),
                            onClick: () => r(a),
                            children: [(0, i.jsx)('div', { className: l()(p.galleryItemOverlay, { [p.selected]: s }) }), (0, i.jsx)(_, { item: e })]
                        },
                        a
                    );
                })
            })
        })
    );
}
