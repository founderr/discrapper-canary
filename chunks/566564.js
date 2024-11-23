n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(557816),
    o = n.n(s),
    c = n(180650),
    d = n(442837),
    u = n(622535),
    m = n(481060),
    h = n(607070),
    p = n(70097),
    f = n(580747),
    g = n(594174),
    C = n(451478),
    v = n(960048),
    b = n(381585),
    x = n(597688),
    _ = n(884697),
    k = n(251068),
    I = n(744112),
    j = n(228624),
    S = n(223143),
    E = n(937510),
    T = n(297651),
    N = n(823941),
    B = n(752053),
    y = n(38900),
    L = n(709999),
    P = n(215023),
    Z = n(388032),
    O = n(632007),
    w = n(196315);
t.Z = (e) => {
    var t, n, i, s, A, R;
    let { handleTransition: H, numVisibleItems: F } = e,
        { categories: D, isFetchingCategories: V, fetchCategoriesError: M, fetchPurchasesError: W, claimError: U, refreshCategories: G } = (0, S.Z)(),
        z = null !== (t = null != M ? M : W) && void 0 !== t ? t : U,
        K = Array.from(D.values()),
        $ = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        Y = a.createRef(),
        q = (0, k.m)('CollectiblesFeedShop'),
        J = (0, I.b)('Collectibles Shop Button'),
        Q = (0, f.Z)('shop_disable_cache'),
        X = (0, f.Z)('shop_include_unpublished'),
        ee = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        et = (0, d.e7)([C.Z], () => C.Z.isFocused()),
        en = (0, j.ed)('CollectiblesFeedShop'),
        er = q ? K[0] : x.Z.getCategory(c.T.SPOOKY_NIGHT),
        ea = q ? K[1] : x.Z.getCategory(c.T.BAND),
        ei = x.Z.getCategory(c.T.ANIME_V2),
        el = q
            ? (0, _.uV)(null !== (n = null == er ? void 0 : er.heroBanner) && void 0 !== n ? n : '', {
                  size: P.pv,
                  format: 'jpg'
              })
            : w,
        es = a.useCallback(() => {
            G();
        }, [G]),
        eo = q ? (null !== (i = null == er ? void 0 : er.heroRanking) && void 0 !== i ? i : []) : P.Ku,
        ec = a.useMemo(() => eo.map((e) => x.Z.getProduct(e)).filter((e) => null != e), [V]),
        ed = (0, E.l)(ec).slice(0, 4),
        eu = a.useMemo(
            () =>
                o()(
                    P.yo
                        .map((e) => {
                            let t = x.Z.getProduct(e);
                            return en && null != t && null != t.variantGroupStoreListingId ? x.Z.getProductByStoreListingId(t.variantGroupStoreListingId) : t;
                        })
                        .filter((e) => null != e),
                    'storeListingId'
                ),
            [V, en]
        ),
        em = (0, E.l)(eu),
        eh = (null == er ? void 0 : er.skuId) != null ? (0, P.ZS)(er.skuId) : void 0;
    if (null == $) return null;
    let ep = (e) => {
            var t;
            let { category: n, showMostPopularBadge: a } = e,
                { handleCardVisibilityChange: i } = (0, T.E)(n.skuId, 'home', 'marketing'),
                s = !0 === a ? Z.intl.string(Z.t['o/oRJC']) : (null == n ? void 0 : n.unpublishedAt) != null ? Z.intl.string(Z.t['h/uBCQ']) : void 0,
                o = (0, _.uV)(null !== (t = null == n ? void 0 : n.featuredBlock) && void 0 !== t ? t : '', {
                    size: P.J0,
                    format: 'png'
                });
            return (0, r.jsx)(u.$, {
                onChange: i,
                threshold: 0,
                children: (0, r.jsxs)(m.Clickable, {
                    className: l()(O.featuredBlock),
                    style: { backgroundImage: 'url('.concat(o, ')') },
                    onClick: () => H('shop marketing tile', null == n ? void 0 : n.skuId),
                    children: [
                        null != s &&
                            (0, r.jsx)(m.TextBadge, {
                                disableColor: !0,
                                text: s,
                                className: O.featuredBlockBadge
                            }),
                        (0, r.jsx)(m.Button, {
                            className: O.featuredBlockButton,
                            color: m.ButtonColors.WHITE,
                            onClick: () => {},
                            children: Z.intl.string(Z.t.jVcuVV)
                        })
                    ]
                })
            });
        },
        ef = Z.intl.formatToPlainString(Z.t.wvKYCg, { category_name: null == er ? void 0 : er.name });
    if (null != z) {
        let e = [];
        null != M ? e.push('shop load fetch categories error: '.concat(z.message)) : null != W ? e.push('shop load fetch purchase error: '.concat(z.message)) : e.push('shop load claim error: '.concat(z.message)),
            v.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: $.isStaff().toString(),
                    preloadEnabled: J.toString(),
                    disableCache: Q.toString(),
                    includeUnpublished: X.toString()
                }
            });
    }
    if (null != M)
        return (0, r.jsx)(B.Z, {
            onRetry: es,
            errorOrigin: B.i.SHOP_PAGE,
            errorMessage: M.message
        });
    let eg = null !== (s = null == eh ? void 0 : eh.heroBanner) && void 0 !== s ? s : void 0;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: O.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: O.banner,
                    children: [
                        (null == eg ? void 0 : eg.animationSource) != null && !ee && et
                            ? (0, r.jsx)(p.Z, {
                                  className: O.bannerVideoBackground,
                                  src: eg.animationSource,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: O.bannerImage,
                                  style: { backgroundImage: 'url('.concat(el, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: l()(O.bannerShadow, O.left, { [O.darker]: null == eg ? void 0 : eg.darker }),
                            style: (null == eg ? void 0 : eg.gradientLeft) != null ? { background: null == eg ? void 0 : eg.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: l()(O.bannerShadow, O.right, { [O.darker]: null == eg ? void 0 : eg.darker }),
                            style: (null == eg ? void 0 : eg.gradientRight) != null ? { background: null == eg ? void 0 : eg.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: l()(O.content, O.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(O.heroHeaderContainer),
                            children: [
                                V
                                    ? (0, r.jsx)('div', { className: l()(O.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: l()(O.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == er ? void 0 : er.unpublishedAt) != null &&
                                                  (0, r.jsx)(m.TextBadge, {
                                                      disableColor: !0,
                                                      text: Z.intl.string(Z.t['h/uBCQ']),
                                                      className: O.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: l()(O.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: O.heroHeaderLogo,
                                                          src: (0, _.uV)(null !== (R = null !== (A = null == er ? void 0 : er.heroLogo) && void 0 !== A ? A : null == er ? void 0 : er.logo) && void 0 !== R ? R : '', { size: N.n }),
                                                          alt: null == er ? void 0 : er.name
                                                      }),
                                                      (0, r.jsx)(m.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != eh && eh.showDarkBannerText ? O.subHeaderTextDark : O.subHeaderText,
                                                          children: null == er ? void 0 : er.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !V &&
                                    (0, r.jsx)('div', {
                                        className: O.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(m.Button, {
                                            className: O.heroHeaderButton,
                                            color: m.ButtonColors.WHITE,
                                            onClick: () => H('shop latest category hero', null == er ? void 0 : er.skuId),
                                            children: ef
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: l()(O.row, O.feed, O.feedSingleRow),
                            children: V
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(y.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: ed.map((e, t) => {
                                          let n = x.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    b.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'top 4',
                                                            categoryPosition: 0
                                                        },
                                                        children: (0, r.jsx)(
                                                            L.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: $,
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
                            className: l()(O.section, O.col2, O.featuredBlocksContainer),
                            children: (0, r.jsx)(
                                () =>
                                    V
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: l()(O.skeleton, O.featuredBlock),
                                                      children: (0, r.jsx)('div', { className: O.skeletonBody })
                                                  }),
                                                  (0, r.jsx)('div', {
                                                      className: l()(O.skeleton, O.featuredBlock),
                                                      children: (0, r.jsx)('div', { className: O.skeletonBody })
                                                  })
                                              ]
                                          })
                                        : (0, r.jsxs)(b.k0, {
                                              newValue: {
                                                  categoryPosition: 1,
                                                  pageSection: 'featured_block'
                                              },
                                              children: [
                                                  null != ea && (0, r.jsx)(ep, { category: ea }),
                                                  null != ei &&
                                                      (0, r.jsx)(ep, {
                                                          category: ei,
                                                          showMostPopularBadge: !0
                                                      })
                                              ]
                                          }),
                                {}
                            )
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(O.row, O.between, O.section),
                            children: [
                                (0, r.jsx)(m.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: Z.intl.string(Z.t.ivaAAw)
                                }),
                                (0, r.jsxs)(m.Clickable, {
                                    className: O.shopAll,
                                    onClick: () => H('shop all top'),
                                    children: [
                                        (0, r.jsx)(m.ServerGridIcon, {}),
                                        (0, r.jsx)(m.Text, {
                                            variant: 'text-sm/medium',
                                            children: Z.intl.string(Z.t.xFcotb)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: O.feed,
                            ref: Y,
                            children: V
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(y.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: em.slice(0, F).map((e, t) => {
                                          let n = x.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, r.jsx)(
                                                    b.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'popular picks',
                                                            categoryPosition: 2
                                                        },
                                                        children: (0, r.jsx)(
                                                            L.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: $,
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
                        F >= P.iA &&
                            (0, r.jsxs)('div', {
                                className: O.endOfFeed,
                                children: [
                                    (0, r.jsx)(m.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: Z.intl.string(Z.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(m.Button, {
                                        className: O.endOfFeedButton,
                                        onClick: () => {
                                            H('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(m.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: Z.intl.string(Z.t.AfrvRE)
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
