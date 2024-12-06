n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(180650),
    o = n(442837),
    c = n(622535),
    d = n(481060),
    u = n(607070),
    m = n(70097),
    h = n(580747),
    p = n(594174),
    f = n(451478),
    g = n(960048),
    C = n(381585),
    v = n(597688),
    b = n(884697),
    x = n(251068),
    _ = n(744112),
    k = n(223143),
    I = n(937510),
    j = n(297651),
    S = n(823941),
    E = n(752053),
    T = n(38900),
    N = n(709999),
    B = n(957058),
    y = n(215023),
    L = n(388032),
    P = n(218142),
    Z = n(196315);
t.Z = (e) => {
    var t, n, i, O, w, A;
    let { handleTransition: R, numVisibleItems: H } = e,
        { categories: F, isFetchingCategories: D, fetchCategoriesError: V, fetchPurchasesError: M, claimError: W, refreshCategories: U } = (0, k.ZP)({ location: 'CollectiblesFeedShop' }),
        G = null !== (t = null != V ? V : M) && void 0 !== t ? t : W,
        z = Array.from(F.values()),
        K = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        $ = a.createRef(),
        Y = (0, x.m)('CollectiblesFeedShop'),
        J = (0, _.b)('Collectibles Shop Button'),
        q = (0, h.Z)('shop_disable_cache'),
        Q = (0, h.Z)('shop_include_unpublished'),
        X = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        ee = (0, o.e7)([f.Z], () => f.Z.isFocused()),
        et = (0, B.u)(),
        en = Y ? z[0] : v.Z.getCategory(s.T.SPOOKY_NIGHT),
        er = Y ? z[1] : v.Z.getCategory(s.T.BAND),
        ea = v.Z.getCategory(s.T.ANIME_V2),
        ei = Y
            ? (0, b.uV)(null !== (n = null == en ? void 0 : en.heroBanner) && void 0 !== n ? n : '', {
                  size: y.pv,
                  format: 'jpg'
              })
            : Z,
        el = a.useCallback(() => {
            U();
        }, [U]),
        es = Y ? (null !== (i = null == en ? void 0 : en.heroRanking) && void 0 !== i ? i : []) : y.Ku,
        eo = a.useMemo(() => et(es), [D, et]),
        ec = (0, I.l)(eo).slice(0, 4),
        ed = a.useMemo(() => et(y.yo), [D, et]),
        eu = (0, I.l)(ed),
        em = (null == en ? void 0 : en.skuId) != null ? (0, y.ZS)(en.skuId) : void 0;
    if (null == K) return null;
    let eh = (e) => {
            var t;
            let { category: n, showMostPopularBadge: a } = e,
                { handleCardVisibilityChange: i } = (0, j.E)(n.skuId, 'home', 'marketing'),
                s = !0 === a ? L.intl.string(L.t['o/oRJC']) : (null == n ? void 0 : n.unpublishedAt) != null ? L.intl.string(L.t['h/uBCQ']) : void 0,
                o = (0, b.uV)(null !== (t = null == n ? void 0 : n.featuredBlock) && void 0 !== t ? t : '', {
                    size: y.J0,
                    format: 'png'
                });
            return (0, r.jsx)(c.$, {
                onChange: i,
                threshold: 0,
                children: (0, r.jsxs)(d.Clickable, {
                    className: l()(P.featuredBlock),
                    style: { backgroundImage: 'url('.concat(o, ')') },
                    onClick: () => R('shop marketing tile', null == n ? void 0 : n.skuId),
                    children: [
                        null != s &&
                            (0, r.jsx)(d.TextBadge, {
                                disableColor: !0,
                                text: s,
                                className: P.featuredBlockBadge
                            }),
                        (0, r.jsx)(d.Button, {
                            className: P.featuredBlockButton,
                            color: d.ButtonColors.WHITE,
                            onClick: () => {},
                            children: L.intl.string(L.t.jVcuVV)
                        })
                    ]
                })
            });
        },
        ep = L.intl.formatToPlainString(L.t.wvKYCg, { category_name: null == en ? void 0 : en.name });
    if (null != G) {
        let e = [];
        null != V ? e.push('shop load fetch categories error: '.concat(G.message)) : null != M ? e.push('shop load fetch purchase error: '.concat(G.message)) : e.push('shop load claim error: '.concat(G.message)),
            g.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: K.isStaff().toString(),
                    preloadEnabled: J.toString(),
                    disableCache: q.toString(),
                    includeUnpublished: Q.toString()
                }
            });
    }
    if (null != V)
        return (0, r.jsx)(E.Z, {
            onRetry: el,
            errorOrigin: E.i.SHOP_PAGE,
            errorMessage: V.message
        });
    let ef = null !== (O = null == em ? void 0 : em.heroBanner) && void 0 !== O ? O : void 0;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: P.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: P.banner,
                    children: [
                        (null == ef ? void 0 : ef.animationSource) != null && !X && ee
                            ? (0, r.jsx)(m.Z, {
                                  className: P.bannerVideoBackground,
                                  src: ef.animationSource,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: P.bannerImage,
                                  style: { backgroundImage: 'url('.concat(ei, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: l()(P.bannerShadow, P.left, { [P.darker]: null == ef ? void 0 : ef.darker }),
                            style: (null == ef ? void 0 : ef.gradientLeft) != null ? { background: null == ef ? void 0 : ef.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: l()(P.bannerShadow, P.right, { [P.darker]: null == ef ? void 0 : ef.darker }),
                            style: (null == ef ? void 0 : ef.gradientRight) != null ? { background: null == ef ? void 0 : ef.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: l()(P.content, P.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(P.heroHeaderContainer),
                            children: [
                                D
                                    ? (0, r.jsx)('div', { className: l()(P.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: l()(P.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == en ? void 0 : en.unpublishedAt) != null &&
                                                  (0, r.jsx)(d.TextBadge, {
                                                      disableColor: !0,
                                                      text: L.intl.string(L.t['h/uBCQ']),
                                                      className: P.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: l()(P.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: P.heroHeaderLogo,
                                                          src: (0, b.uV)(null !== (A = null !== (w = null == en ? void 0 : en.heroLogo) && void 0 !== w ? w : null == en ? void 0 : en.logo) && void 0 !== A ? A : '', { size: S.n }),
                                                          alt: null == en ? void 0 : en.name
                                                      }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != em && em.showDarkBannerText ? P.subHeaderTextDark : P.subHeaderText,
                                                          children: null == en ? void 0 : en.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !D &&
                                    (0, r.jsx)('div', {
                                        className: P.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(d.Button, {
                                            className: P.heroHeaderButton,
                                            color: d.ButtonColors.WHITE,
                                            onClick: () => R('shop latest category hero', null == en ? void 0 : en.skuId),
                                            children: ep
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: l()(P.row, P.feed, P.feedSingleRow),
                            children: D
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(T.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ec.map((e, t) => {
                                          let n = v.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    C.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'top 4',
                                                            categoryPosition: 0
                                                        },
                                                        children: (0, r.jsx)(
                                                            N.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: K,
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
                            className: l()(P.section, P.col2, P.featuredBlocksContainer),
                            children: (0, r.jsx)(
                                () =>
                                    D
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: l()(P.skeleton, P.featuredBlock),
                                                      children: (0, r.jsx)('div', { className: P.skeletonBody })
                                                  }),
                                                  (0, r.jsx)('div', {
                                                      className: l()(P.skeleton, P.featuredBlock),
                                                      children: (0, r.jsx)('div', { className: P.skeletonBody })
                                                  })
                                              ]
                                          })
                                        : (0, r.jsxs)(C.k0, {
                                              newValue: {
                                                  categoryPosition: 1,
                                                  pageSection: 'featured_block'
                                              },
                                              children: [
                                                  null != er && (0, r.jsx)(eh, { category: er }),
                                                  null != ea &&
                                                      (0, r.jsx)(eh, {
                                                          category: ea,
                                                          showMostPopularBadge: !0
                                                      })
                                              ]
                                          }),
                                {}
                            )
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(P.row, P.between, P.section),
                            children: [
                                (0, r.jsx)(d.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: L.intl.string(L.t.ivaAAw)
                                }),
                                (0, r.jsxs)(d.Clickable, {
                                    className: P.shopAll,
                                    onClick: () => R('shop all top'),
                                    children: [
                                        (0, r.jsx)(d.ServerGridIcon, {}),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            children: L.intl.string(L.t.xFcotb)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: P.feed,
                            ref: $,
                            children: D
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(T.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eu.slice(0, H).map((e, t) => {
                                          let n = v.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    C.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'popular picks',
                                                            categoryPosition: 2
                                                        },
                                                        children: (0, r.jsx)(
                                                            N.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: K,
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
                        H >= y.iA &&
                            (0, r.jsxs)('div', {
                                className: P.endOfFeed,
                                children: [
                                    (0, r.jsx)(d.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: L.intl.string(L.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(d.Button, {
                                        className: P.endOfFeedButton,
                                        onClick: () => {
                                            R('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(d.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: L.intl.string(L.t.AfrvRE)
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
