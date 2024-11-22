n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(557816),
    o = n.n(l),
    c = n(180650),
    d = n(442837),
    u = n(481060),
    m = n(607070),
    p = n(70097),
    h = n(580747),
    f = n(594174),
    g = n(451478),
    C = n(960048),
    b = n(381585),
    v = n(597688),
    x = n(884697),
    _ = n(251068),
    k = n(744112),
    I = n(228624),
    j = n(223143),
    E = n(937510),
    S = n(823941),
    T = n(752053),
    N = n(38900),
    B = n(709999),
    y = n(215023),
    L = n(388032),
    Z = n(632007),
    P = n(454410),
    O = n(783433),
    w = n(196315);
t.Z = (e) => {
    var t, n, i, l, A, R, H, F;
    let { handleTransition: D, numVisibleItems: V } = e,
        { categories: M, isFetchingCategories: W, fetchCategoriesError: U, fetchPurchasesError: G, claimError: z, refreshCategories: K } = (0, j.Z)(),
        $ = null !== (t = null != U ? U : G) && void 0 !== t ? t : z,
        Y = Array.from(M.values()),
        J = (0, d.e7)([f.default], () => f.default.getCurrentUser()),
        q = a.createRef(),
        Q = (0, _.m)('CollectiblesFeedShop'),
        X = (0, k.b)('Collectibles Shop Button'),
        ee = (0, h.Z)('shop_disable_cache'),
        et = (0, h.Z)('shop_include_unpublished'),
        en = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        er = (0, d.e7)([g.Z], () => g.Z.isFocused()),
        ea = (0, I.ed)('CollectiblesFeedShop'),
        ei = Q ? Y[0] : v.Z.getCategory(c.T.SPOOKY_NIGHT),
        es = Q ? Y[1] : v.Z.getCategory(c.T.BAND),
        el = v.Z.getCategory(c.T.ANIME_V2),
        eo = Q
            ? (0, x.uV)(null !== (n = null == ei ? void 0 : ei.heroBanner) && void 0 !== n ? n : '', {
                  size: y.pv,
                  format: 'jpg'
              })
            : w,
        ec = Q
            ? (0, x.uV)(null !== (i = null == es ? void 0 : es.featuredBlock) && void 0 !== i ? i : '', {
                  size: y.J0,
                  format: 'png'
              })
            : O,
        ed = Q
            ? (0, x.uV)(null !== (l = null == el ? void 0 : el.featuredBlock) && void 0 !== l ? l : '', {
                  size: y.J0,
                  format: 'png'
              })
            : P,
        eu = a.useCallback(() => {
            K();
        }, [K]),
        em = Q ? (null !== (A = null == ei ? void 0 : ei.heroRanking) && void 0 !== A ? A : []) : y.Ku,
        ep = a.useMemo(() => em.map((e) => v.Z.getProduct(e)).filter((e) => null != e), [W]),
        eh = (0, E.l)(ep).slice(0, 4),
        ef = a.useMemo(
            () =>
                o()(
                    y.yo
                        .map((e) => {
                            let t = v.Z.getProduct(e);
                            return ea && null != t && null != t.variantGroupStoreListingId ? v.Z.getProductByStoreListingId(t.variantGroupStoreListingId) : t;
                        })
                        .filter((e) => null != e),
                    'storeListingId'
                ),
            [W, ea]
        ),
        eg = (0, E.l)(ef),
        eC = (null == ei ? void 0 : ei.skuId) != null ? (0, y.ZS)(ei.skuId) : void 0;
    if (null == J) return null;
    let eb = L.intl.formatToPlainString(L.t.wvKYCg, { category_name: null == ei ? void 0 : ei.name });
    if (null != $) {
        let e = [];
        null != U ? e.push('shop load fetch categories error: '.concat($.message)) : null != G ? e.push('shop load fetch purchase error: '.concat($.message)) : e.push('shop load claim error: '.concat($.message)),
            C.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: J.isStaff().toString(),
                    preloadEnabled: X.toString(),
                    disableCache: ee.toString(),
                    includeUnpublished: et.toString()
                }
            });
    }
    if (null != U)
        return (0, r.jsx)(T.Z, {
            onRetry: eu,
            errorOrigin: T.i.SHOP_PAGE,
            errorMessage: U.message
        });
    let ev = null !== (R = null == eC ? void 0 : eC.heroBanner) && void 0 !== R ? R : void 0;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: Z.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: Z.banner,
                    children: [
                        (null == ev ? void 0 : ev.animationSource) != null && !en && er
                            ? (0, r.jsx)(p.Z, {
                                  className: Z.bannerVideoBackground,
                                  src: ev.animationSource,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: Z.bannerImage,
                                  style: { backgroundImage: 'url('.concat(eo, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: s()(Z.bannerShadow, Z.left, { [Z.darker]: null == ev ? void 0 : ev.darker }),
                            style: (null == ev ? void 0 : ev.gradientLeft) != null ? { background: null == ev ? void 0 : ev.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: s()(Z.bannerShadow, Z.right, { [Z.darker]: null == ev ? void 0 : ev.darker }),
                            style: (null == ev ? void 0 : ev.gradientRight) != null ? { background: null == ev ? void 0 : ev.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: s()(Z.content, Z.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(Z.heroHeaderContainer),
                            children: [
                                W
                                    ? (0, r.jsx)('div', { className: s()(Z.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: s()(Z.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == ei ? void 0 : ei.unpublishedAt) != null &&
                                                  (0, r.jsx)(u.TextBadge, {
                                                      disableColor: !0,
                                                      text: L.intl.string(L.t['h/uBCQ']),
                                                      className: Z.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: s()(Z.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: Z.heroHeaderLogo,
                                                          src: (0, x.uV)(null !== (F = null !== (H = null == ei ? void 0 : ei.heroLogo) && void 0 !== H ? H : null == ei ? void 0 : ei.logo) && void 0 !== F ? F : '', { size: S.n }),
                                                          alt: null == ei ? void 0 : ei.name
                                                      }),
                                                      (0, r.jsx)(u.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != eC && eC.showDarkBannerText ? Z.subHeaderTextDark : Z.subHeaderText,
                                                          children: null == ei ? void 0 : ei.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !W &&
                                    (0, r.jsx)('div', {
                                        className: Z.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(u.Button, {
                                            className: Z.heroHeaderButton,
                                            color: u.ButtonColors.WHITE,
                                            onClick: () => D('shop latest category hero', null == ei ? void 0 : ei.skuId),
                                            children: eb
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: s()(Z.row, Z.feed, Z.feedSingleRow),
                            children: W
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(N.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eh.map((e, t) => {
                                          let n = v.Z.getCategoryForProduct(e.skuId);
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
                                                            B.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: J,
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
                            className: s()(Z.section, Z.col2, Z.featuredBlocksContainer),
                            children: W
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: s()(Z.skeleton, Z.featuredBlock),
                                              children: (0, r.jsx)('div', { className: Z.skeletonBody })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: s()(Z.skeleton, Z.featuredBlock),
                                              children: (0, r.jsx)('div', { className: Z.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)(u.Clickable, {
                                              className: s()(Z.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(ec, ')') },
                                              onClick: () => D('shop marketing tile', null == es ? void 0 : es.skuId),
                                              children: [
                                                  (null == es ? void 0 : es.unpublishedAt) != null &&
                                                      (0, r.jsx)(u.TextBadge, {
                                                          disableColor: !0,
                                                          text: L.intl.string(L.t['h/uBCQ']),
                                                          className: Z.featuredBlockBadge
                                                      }),
                                                  (0, r.jsx)(u.Button, {
                                                      className: Z.featuredBlockButton,
                                                      color: u.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: L.intl.string(L.t.jVcuVV)
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(u.Clickable, {
                                              className: s()(Z.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(ed, ')') },
                                              onClick: () => D('shop marketing tile', c.T.ANIME_V2),
                                              children:
                                                  !W &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(u.TextBadge, {
                                                              disableColor: !0,
                                                              text: L.intl.string(L.t['o/oRJC']),
                                                              className: Z.featuredBlockBadge
                                                          }),
                                                          (0, r.jsx)(u.Button, {
                                                              className: Z.featuredBlockButton,
                                                              color: u.ButtonColors.WHITE,
                                                              onClick: () => {},
                                                              children: L.intl.string(L.t.jVcuVV)
                                                          })
                                                      ]
                                                  })
                                          })
                                      ]
                                  })
                        }),
                        (0, r.jsxs)('div', {
                            className: s()(Z.row, Z.between, Z.section),
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: L.intl.string(L.t.ivaAAw)
                                }),
                                (0, r.jsxs)(u.Clickable, {
                                    className: Z.shopAll,
                                    onClick: () => D('shop all top'),
                                    children: [
                                        (0, r.jsx)(u.ServerGridIcon, {}),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            children: L.intl.string(L.t.xFcotb)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: Z.feed,
                            ref: q,
                            children: W
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(N.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eg.slice(0, V).map((e, t) => {
                                          let n = v.Z.getCategoryForProduct(e.skuId);
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
                                                            B.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: J,
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
                        V >= y.iA &&
                            (0, r.jsxs)('div', {
                                className: Z.endOfFeed,
                                children: [
                                    (0, r.jsx)(u.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: L.intl.string(L.t.Yr70c3)
                                    }),
                                    (0, r.jsx)(u.Button, {
                                        className: Z.endOfFeedButton,
                                        onClick: () => {
                                            D('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(u.Text, {
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
