t.d(n, {
    Z: function () {
        return E;
    }
});
var r = t(200651),
    i = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(481060),
    s = t(607070),
    u = t(124347),
    c = t(52824),
    d = t(549635),
    m = t(689938),
    _ = t(244190);
function f(e) {
    return 'media-view-scroll-thumbnail-'.concat(e);
}
let h = i.memo(function (e) {
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
              alt: t.alt
          });
});
function E(e) {
    let { items: n, currentIndex: t, onGalleryItemClick: a } = e,
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = document.getElementById(f(t));
            null != u.current &&
                null != e &&
                u.current.scrollIntoViewNode({
                    node: e,
                    animate: !s.Z.useReducedMotion,
                    padding: 24
                });
        }, [t]),
        (0, r.jsx)('div', {
            className: _.galleryContainer,
            children: (0, r.jsx)(o.AdvancedScrollerThin, {
                orientation: 'horizontal',
                className: _.gallery,
                ref: u,
                children: n.map((e, i) => {
                    let s = i === t,
                        u = s ? m.Z.Messages.PAGINATION_CURRENT_ITEM_LABEL : m.Z.Messages.PAGINATION_ITEM_LABEL;
                    return (0, r.jsx)(
                        o.Clickable,
                        {
                            id: f(t),
                            className: l()(_.galleryItem, { [_.selected]: s }),
                            'aria-label': u.format({
                                pageNumber: i + 1,
                                totalPages: n.length
                            }),
                            onClick: () => a(i),
                            children: (0, r.jsx)(h, { item: e })
                        },
                        i
                    );
                })
            })
        })
    );
}
