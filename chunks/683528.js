t.d(n, {
    Z: function () {
        return f;
    }
});
var r = t(200651),
    a = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(481060),
    s = t(124347),
    u = t(52824),
    c = t(549635),
    d = t(689938),
    m = t(244190);
let _ = a.memo(function (e) {
    var n;
    let { item: t } = e;
    let a =
        'IMAGE' === (n = t).type
            ? (0, u.q)({
                  proxyURL: n.proxyUrl,
                  url: n.url
              })
            : 'VIDEO' === n.type && null != n.proxyUrl
              ? (0, c.D)(n.proxyUrl)
              : null;
    return null == a
        ? null
        : (0, r.jsx)(s.ZP, {
              width: 48,
              height: 48,
              src: a,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt
          });
});
function f(e) {
    let { items: n, currentIndex: t, onGalleryItemClick: a } = e;
    return (0, r.jsx)('div', {
        className: m.galleryContainer,
        children: (0, r.jsx)('div', {
            className: m.gallery,
            children: n.map((e, i) => {
                let s = i === t,
                    u = s ? d.Z.Messages.PAGINATION_CURRENT_ITEM_LABEL : d.Z.Messages.PAGINATION_ITEM_LABEL;
                return (0, r.jsx)(
                    o.Clickable,
                    {
                        className: l()(m.galleryItem, { [m.selected]: s }),
                        'aria-label': u.format({
                            pageNumber: i + 1,
                            totalPages: n.length
                        }),
                        onClick: () => a(i),
                        children: (0, r.jsx)(_, { item: e })
                    },
                    i
                );
            })
        })
    });
}
