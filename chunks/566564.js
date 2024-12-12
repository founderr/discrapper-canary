n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(180650),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    m = n(580747),
    h = n(594174),
    p = n(451478),
    f = n(960048),
    g = n(381585),
    C = n(597688),
    v = n(884697),
    b = n(606414),
    x = n(744112),
    _ = n(223143),
    k = n(937510),
    I = n(823941),
    S = n(752053),
    j = n(38900),
    E = n(709999),
    T = n(529180),
    N = n(957058),
    B = n(215023),
    y = n(388032),
    L = n(218142);
t.Z = (e) => {
    var t, n, i, P, Z, O;
    let { handleTransition: w, numVisibleItems: A } = e,
        { categories: R, isFetchingCategories: F, fetchCategoriesError: H, fetchPurchasesError: D, claimError: V, refreshCategories: M } = (0, _.ZP)({ location: 'CollectiblesFeedShop' }),
        W = null !== (t = null != H ? H : D) && void 0 !== t ? t : V,
        U = Array.from(R.values()),
        G = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        z = a.createRef(),
        $ = (0, x.b)('Collectibles Shop Button'),
        K = (0, m.Z)('shop_disable_cache'),
        J = (0, m.Z)('shop_include_unpublished'),
        Y = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        q = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        Q = (0, N.u)(),
        X = (0, b.c)('CollectiblesFeedShop') && null != C.Z.getCategory(s.T.ROBERT),
        ee = U[0],
        et = U[1],
        en = C.Z.getCategory(X ? s.T.ROBERT : s.T.ANIME_V2),
        er = (0, v.uV)(null !== (n = null == ee ? void 0 : ee.heroBanner) && void 0 !== n ? n : '', {
            size: B.pv,
            format: 'jpg'
        }),
        ea = a.useCallback(() => {
            M();
        }, [M]),
        ei = null !== (i = null == ee ? void 0 : ee.heroRanking) && void 0 !== i ? i : [],
        el = a.useMemo(() => Q(ei), [F, Q]),
        es = (0, k.l)(el).slice(0, 4),
        eo = a.useMemo(() => Q(B.yo), [F, Q]),
        ec = (0, k.l)(eo),
        ed = (null == ee ? void 0 : ee.skuId) != null ? (0, B.ZS)(ee.skuId) : void 0;
    if (null == G) return null;
    let eu = y.intl.formatToPlainString(y.t.wvKYCg, { category_name: null == ee ? void 0 : ee.name });
    if (null != W) {
        let e = [];
        null != H ? e.push('shop load fetch categories error: '.concat(W.message)) : null != D ? e.push('shop load fetch purchase error: '.concat(W.message)) : e.push('shop load claim error: '.concat(W.message)),
            f.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: G.isStaff().toString(),
                    preloadEnabled: $.toString(),
                    disableCache: K.toString(),
                    includeUnpublished: J.toString()
                }
            });
    }
    if (null != H)
        return (0, r.jsx)(S.Z, {
            onRetry: ea,
            errorOrigin: S.i.SHOP_PAGE,
            errorMessage: H.message
        });
    let em = null !== (P = null == ed ? void 0 : ed.heroBanner) && void 0 !== P ? P : void 0;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: L.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: L.banner,
                    children: [
                        (null == em ? void 0 : em.animationSource) != null && !Y && q
                            ? (0, r.jsx)(u.Z, {
                                  className: L.bannerVideoBackground,
                                  src: em.animationSource,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: L.bannerImage,
                                  style: { backgroundImage: 'url('.concat(er, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: l()(L.bannerShadow, L.left, { [L.darker]: null == em ? void 0 : em.darker }),
                            style: (null == em ? void 0 : em.gradientLeft) != null ? { background: null == em ? void 0 : em.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: l()(L.bannerShadow, L.right, { [L.darker]: null == em ? void 0 : em.darker }),
                            style: (null == em ? void 0 : em.gradientRight) != null ? { background: null == em ? void 0 : em.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: l()(L.content, L.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(L.heroHeaderContainer),
                            children: [
                                F
                                    ? (0, r.jsx)('div', { className: l()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: l()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == ee ? void 0 : ee.unpublishedAt) != null &&
                                                  (0, r.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: y.intl.string(y.t['h/uBCQ']),
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: l()(L.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: L.heroHeaderLogo,
                                                          src: (0, v.uV)(null !== (O = null !== (Z = null == ee ? void 0 : ee.heroLogo) && void 0 !== Z ? Z : null == ee ? void 0 : ee.logo) && void 0 !== O ? O : '', { size: I.n }),
                                                          alt: null == ee ? void 0 : ee.name
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != ed && ed.showDarkBannerText ? L.subHeaderTextDark : L.subHeaderText,
                                                          children: null == ee ? void 0 : ee.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !F &&
                                    (0, r.jsx)('div', {
                                        className: L.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(c.Button, {
                                            className: L.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => w('shop latest category hero', null == ee ? void 0 : ee.skuId),
                                            children: eu
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: l()(L.row, L.feed, L.feedSingleRow),
                            children: F
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(j.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: es.map((e, t) => {
                                          let n = C.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    g.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'top 4',
                                                            categoryPosition: 0
                                                        },
                                                        children: (0, r.jsx)(
                                                            E.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: G,
                                                                isInFeedView: !0
                                                            },
                                                            e.skuId
                                                        )
                                                    },
                                                    null == e ? void 0 : e.skuId
                                                );
                                      })
                                  })
                        }),
                        (0, r.jsx)('div', {
                            className: l()(L.section, L.col2, L.featuredBlocksContainer),
                            children: (0, r.jsx)(() => {
                                if (F)
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: l()(L.skeleton, L.featuredBlock),
                                                children: (0, r.jsx)('div', { className: L.skeletonBody })
                                            }),
                                            (0, r.jsx)('div', {
                                                className: l()(L.skeleton, L.featuredBlock),
                                                children: (0, r.jsx)('div', { className: L.skeletonBody })
                                            })
                                        ]
                                    });
                                let e = (null == et ? void 0 : et.unpublishedAt) != null ? y.intl.string(y.t['h/uBCQ']) : void 0,
                                    t = y.intl.string(new Date() > B.gJ ? y.t.l0CjbW : y.t.uPewb2),
                                    n = X ? t : y.intl.string(y.t['o/oRJC']);
                                return (0, r.jsxs)(g.k0, {
                                    newValue: {
                                        categoryPosition: 1,
                                        pageSection: 'featured_block'
                                    },
                                    children: [
                                        null != et &&
                                            (0, r.jsx)(T.g, {
                                                category: et,
                                                badgeText: e,
                                                handleTransition: w
                                            }),
                                        null != en &&
                                            (0, r.jsx)(T.g, {
                                                category: en,
                                                badgeText: n,
                                                handleTransition: w
                                            })
                                    ]
                                });
                            }, {})
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(L.row, L.between, L.section),
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: y.intl.string(y.t.ivaAAw)
                                }),
                                (0, r.jsxs)(c.Clickable, {
                                    className: L.shopAll,
                                    onClick: () => w('shop all top'),
                                    children: [
                                        (0, r.jsx)(c.ServerGridIcon, {}),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: y.intl.string(y.t.xFcotb)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: L.feed,
                            ref: z,
                            children: F
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(j.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ec.slice(0, A).map((e, t) => {
                                          let n = C.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    g.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'popular picks',
                                                            categoryPosition: 2
                                                        },
                                                        children: (0, r.jsx)(
                                                            E.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: G,
                                                                isInFeedView: !0
                                                            },
                                                            e.skuId
                                                        )
                                                    },
                                                    null == e ? void 0 : e.skuId
                                                );
                                      })
                                  })
                        }),
                        A >= B.iA &&
                            (0, r.jsxs)('div', {
                                className: L.endOfFeed,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: y.intl.string(y.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        className: L.endOfFeedButton,
                                        onClick: () => {
                                            w('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: y.intl.string(y.t.AfrvRE)
                                        })
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    });
};
