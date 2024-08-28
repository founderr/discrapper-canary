n.d(t, {
    h: function () {
        return h;
    }
}),
    n(47120);
var r = n(735250),
    s = n(470079),
    a = n(442837),
    i = n(481060),
    o = n(607070),
    l = n(100527),
    c = n(906732),
    d = n(44315),
    u = n(70097),
    f = n(626135),
    p = n(328347),
    g = n(530915),
    C = n(948625),
    m = n(981631),
    _ = n(246986);
function b(e) {
    var t, n;
    let { config: a, index: o, handleCTAClick: l, text: c, reducedMotion: f = !1 } = e,
        p = s.useMemo(() => (0, C.E8)(a, f), [a, f]);
    return (0, r.jsxs)('div', {
        className: _.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                className: _.headerInnerContainer,
                children: [
                    null == a.backgroundVideoSrc || f
                        ? (0, r.jsx)('img', {
                              src: a.backgroundStaticSrc,
                              alt: '',
                              className: _.headerAsset
                          })
                        : (0, r.jsx)(u.Z, {
                              autoPlay: !0,
                              muted: !0,
                              loop: !0,
                              playsInline: !0,
                              responsive: !0,
                              className: _.headerAsset,
                              children: (0, r.jsx)('source', {
                                  src: a.backgroundVideoSrc,
                                  type: 'video/mp4'
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: _.headerContent,
                        style: { color: null !== (t = a.textColor) && void 0 !== t ? t : (0, d.Lq)(m.Ilk.WHITE_100) },
                        children: [
                            (0, r.jsx)('div', {
                                className: _.badgeContainer,
                                style: { visibility: null != a.badge ? 'visible' : 'hidden' },
                                children:
                                    null != a.badge &&
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-xs/semibold',
                                        className: _.badge,
                                        children: a.badge.label()
                                    })
                            }),
                            (0, r.jsxs)('div', {
                                className: _.logoAndDescriptionContainer,
                                children: [
                                    null != a.logoSrc &&
                                        (0, r.jsx)('img', {
                                            src: a.logoSrc,
                                            alt: '',
                                            className: _.logo
                                        }),
                                    (null != a.description || null != c) &&
                                        (0, r.jsx)(i.Text, {
                                            variant: 'text-md/normal',
                                            color: 'currentColor',
                                            children: null !== (n = a.description) && void 0 !== n ? n : c
                                        })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                children:
                                    null != a.cta &&
                                    (0, r.jsx)(i.Button, {
                                        onClick: () => l(a, o),
                                        children: a.cta.label()
                                    })
                            })
                        ]
                    })
                ]
            }),
            p.map((e, t) =>
                (0, r.jsx)(
                    'img',
                    {
                        src: e,
                        className: _.overflowImage,
                        alt: ''
                    },
                    t
                )
            )
        ]
    });
}
function h(e) {
    let { categories: t, handleScrollToCategory: n } = e,
        i = s.useMemo(() => {
            let e = {};
            for (let n of t) e[n.skuId] = n;
            return e;
        }, [t]),
        d = s.useMemo(() => (0, C.yc)(i), [i]),
        { analyticsLocations: u } = (0, a.cj)([p.Z], () => p.Z.getAnalytics()),
        { analyticsLocations: h } = (0, c.ZP)([...u, l.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL]),
        x = s.useCallback(
            (e, t) => {
                let r = e.cta;
                f.default.track(m.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
                    location_stack: h,
                    slide_id: e.id,
                    slide_index: t,
                    sku_id: null == r ? void 0 : r.categorySkuId
                }),
                    (null == r ? void 0 : r.categorySkuId) != null && n(r.categorySkuId);
            },
            [h, n]
        ),
        I = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        E = s.useCallback(
            (e, t) => {
                var n, s;
                let a = null === (n = e.cta) || void 0 === n ? void 0 : n.categorySkuId,
                    o = null != a ? (null === (s = i[a]) || void 0 === s ? void 0 : s.summary) : void 0;
                return (0, r.jsx)(b, {
                    config: e,
                    text: o,
                    handleCTAClick: x,
                    reducedMotion: I,
                    index: t
                });
            },
            [i, x, I]
        ),
        v = s.useCallback(
            (e) => {
                var t;
                return null === (t = d[e]) || void 0 === t ? void 0 : t.id;
            },
            [d]
        );
    return (0, r.jsx)('div', {
        className: _.carouselContainer,
        children: (0, r.jsx)(g.U, {
            carouselId: 'collectibles_shop_header_carousel',
            className: _.carousel,
            items: d,
            renderItem: E,
            getItemId: v,
            controlsClassName: _.paginationControls,
            paginationButtonClassName: _.paginationButton,
            delay: 6000,
            analyticsLocations: h,
            unidirectional: !0
        })
    });
}
