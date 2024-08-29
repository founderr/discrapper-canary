n.d(t, {
    h: function () {
        return h;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    s = n(442837),
    o = n(481060),
    i = n(607070),
    c = n(100527),
    l = n(906732),
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
    let { config: s, index: i, handleCTAClick: c, text: l, reducedMotion: f = !1 } = e,
        p = a.useMemo(() => (0, C.E8)(s, f), [s, f]);
    return (0, r.jsxs)('div', {
        className: _.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                className: _.headerInnerContainer,
                children: [
                    null == s.backgroundVideoSrc || f
                        ? (0, r.jsx)('img', {
                              src: s.backgroundStaticSrc,
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
                                  src: s.backgroundVideoSrc,
                                  type: 'video/mp4'
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: _.headerContent,
                        style: { color: null !== (t = s.textColor) && void 0 !== t ? t : (0, d.Lq)(m.Ilk.WHITE_100) },
                        children: [
                            (0, r.jsx)('div', {
                                className: _.badgeContainer,
                                style: { visibility: null != s.badge ? 'visible' : 'hidden' },
                                children:
                                    null != s.badge &&
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xs/semibold',
                                        className: _.badge,
                                        children: s.badge.label()
                                    })
                            }),
                            (0, r.jsxs)('div', {
                                className: _.logoAndDescriptionContainer,
                                children: [
                                    null != s.logoSrc &&
                                        (0, r.jsx)('img', {
                                            src: s.logoSrc,
                                            alt: '',
                                            className: _.logo
                                        }),
                                    (null != s.description || null != l) &&
                                        (0, r.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            color: 'currentColor',
                                            children: null !== (n = s.description) && void 0 !== n ? n : l
                                        })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                children:
                                    null != s.cta &&
                                    (0, r.jsx)(o.Button, {
                                        onClick: () => c(s, i),
                                        children: s.cta.label()
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
        o = a.useMemo(() => {
            let e = {};
            for (let n of t) e[n.skuId] = n;
            return e;
        }, [t]),
        d = a.useMemo(() => (0, C.yc)(o), [o]),
        { analyticsLocations: u } = (0, s.cj)([p.Z], () => p.Z.getAnalytics()),
        { analyticsLocations: h } = (0, l.ZP)([...u, c.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL]),
        x = a.useCallback(
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
        I = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
        E = a.useCallback(
            (e, t) => {
                var n, a;
                let s = null === (n = e.cta) || void 0 === n ? void 0 : n.categorySkuId,
                    i = null != s ? (null === (a = o[s]) || void 0 === a ? void 0 : a.summary) : void 0;
                return (0, r.jsx)(b, {
                    config: e,
                    text: i,
                    handleCTAClick: x,
                    reducedMotion: I,
                    index: t
                });
            },
            [o, x, I]
        ),
        v = a.useCallback(
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
