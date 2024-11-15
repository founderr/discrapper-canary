t.d(n, {
    Z: function () {
        return _;
    }
});
var r = t(200651),
    i = t(192379),
    a = t(120356),
    o = t.n(a),
    l = t(481060),
    s = t(607070),
    u = t(124347),
    c = t(52824),
    d = t(549635),
    m = t(217702),
    h = t(388032),
    f = t(159076);
function p(e) {
    return 'media-view-scroll-thumbnail-'.concat(e);
}
let g = i.memo(function (e) {
    var n;
    let { item: t } = e;
    let i =
        'IMAGE' === (n = t).type
            ? (0, c.q)({
                  proxyURL: n.proxyUrl,
                  url: n.url
              })
            : 'VIDEO' === n.type && null != n.proxyUrl
              ? (0, d.D)(n.proxyUrl)
              : null;
    return null == i
        ? null
        : (0, r.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: i,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt,
              mediaLayoutType: m.hV.MOSAIC
          });
});
function _(e) {
    let { items: n, currentIndex: t, onGalleryItemClick: a } = e,
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = document.getElementById(p(t));
            null != u.current &&
                null != e &&
                u.current.scrollIntoViewNode({
                    node: e,
                    animate: !s.Z.useReducedMotion,
                    padding: 24
                });
        }, [t]),
        (0, r.jsx)('div', {
            className: f.galleryContainer,
            children: (0, r.jsx)(l.AdvancedScrollerThin, {
                orientation: 'horizontal',
                className: f.gallery,
                ref: u,
                onClick: (e) => e.stopPropagation(),
                children: n.map((e, i) => {
                    let s = i === t,
                        u = s ? h.t['qv/U5e'] : h.t.zviMAA;
                    return (0, r.jsxs)(
                        l.Clickable,
                        {
                            id: p(i),
                            className: f.galleryItem,
                            'aria-label': h.intl.formatToPlainString(u, {
                                pageNumber: i + 1,
                                totalPages: n.length
                            }),
                            onClick: () => a(i),
                            children: [(0, r.jsx)('div', { className: o()(f.galleryItemOverlay, { [f.selected]: s }) }), (0, r.jsx)(g, { item: e })]
                        },
                        i
                    );
                })
            })
        })
    );
}
