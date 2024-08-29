n.d(t, {
    h: function () {
        return h;
    }
}),
    n(47120);
var a = n(735250),
    r = n(470079),
    s = n(442837),
    o = n(481060),
    i = n(607070),
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
    let { config: s, index: i, handleCTAClick: l, text: c, reducedMotion: f = !1 } = e,
        p = r.useMemo(() => (0, C.E8)(s, f), [s, f]);
    return (0, a.jsxs)('div', {
        className: _.headerContainer,
        children: [
            (0, a.jsxs)('div', {
                className: _.headerInnerContainer,
                children: [
                    null == s.backgroundVideoSrc || f
                        ? (0, a.jsx)('img', {
                              src: s.backgroundStaticSrc,
                              alt: '',
                              className: _.headerAsset
                          })
                        : (0, a.jsx)(u.Z, {
                              autoPlay: !0,
                              muted: !0,
                              loop: !0,
                              playsInline: !0,
                              responsive: !0,
                              className: _.headerAsset,
                              children: (0, a.jsx)('source', {
                                  src: s.backgroundVideoSrc,
                                  type: 'video/mp4'
                              })
                          }),
                    (0, a.jsxs)('div', {
                        className: _.headerContent,
                        style: { color: null !== (t = s.textColor) && void 0 !== t ? t : (0, d.Lq)(m.Ilk.WHITE_100) },
                        children: [
                            (0, a.jsx)('div', {
                                className: _.badgeContainer,
                                style: { visibility: null != s.badge ? 'visible' : 'hidden' },
                                children:
                                    null != s.badge &&
                                    (0, a.jsx)(o.Text, {
                                        variant: 'text-xs/semibold',
                                        className: _.badge,
                                        children: s.badge.label()
                                    })
                            }),
                            (0, a.jsxs)('div', {
                                className: _.logoAndDescriptionContainer,
                                children: [
                                    null != s.logoSrc &&
                                        (0, a.jsx)('img', {
                                            src: s.logoSrc,
                                            alt: '',
                                            className: _.logo
                                        }),
                                    (null != s.description || null != c) &&
                                        (0, a.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'currentColor',
                                            children: null !== (n = s.description) && void 0 !== n ? n : c
                                        })
                                ]
                            }),
                            (0, a.jsx)('div', {
                                children:
                                    null != s.cta &&
                                    (0, a.jsx)(o.Button, {
                                        onClick: () => l(s, i),
                                        children: s.cta.label()
                                    })
                            })
                        ]
                    })
                ]
            }),
            p.map((e, t) =>
                (0, a.jsx)(
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
        o = r.useMemo(() => {
            let e = {};
            for (let n of t) e[n.skuId] = n;
            return e;
        }, [t]),
        d = r.useMemo(() => (0, C.yc)(o), [o]),
        { analyticsLocations: u } = (0, s.cj)([p.Z], () => p.Z.getAnalytics()),
        { analyticsLocations: h } = (0, c.ZP)([...u, l.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL]),
        x = r.useCallback(
            (e, t) => {
                let a = e.cta;
                f.default.track(m.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
                    location_stack: h,
                    slide_id: e.id,
                    slide_index: t,
                    sku_id: null == a ? void 0 : a.categorySkuId
                }),
                    (null == a ? void 0 : a.categorySkuId) != null && n(a.categorySkuId);
            },
            [h, n]
        ),
        I = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
        E = r.useCallback(
            (e, t) => {
                var n, r;
                let s = null === (n = e.cta) || void 0 === n ? void 0 : n.categorySkuId,
                    i = null != s ? (null === (r = o[s]) || void 0 === r ? void 0 : r.summary) : void 0;
                return (0, a.jsx)(b, {
                    config: e,
                    text: i,
                    handleCTAClick: x,
                    reducedMotion: I,
                    index: t
                });
            },
            [o, x, I]
        ),
        v = r.useCallback(
            (e) => {
                var t;
                return null === (t = d[e]) || void 0 === t ? void 0 : t.id;
            },
            [d]
        );
    return (0, a.jsx)('div', {
        className: _.carouselContainer,
        children: (0, a.jsx)(g.U, {
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
