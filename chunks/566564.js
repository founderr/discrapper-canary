r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(180650),
    l = r(442837),
    c = r(481060),
    d = r(580747),
    u = r(594174),
    f = r(960048),
    p = r(597688),
    m = r(1870),
    C = r(884697),
    _ = r(251068),
    g = r(43610),
    h = r(744112),
    b = r(223143),
    E = r(823941),
    I = r(752053),
    x = r(38900),
    v = r(709999),
    T = r(215023),
    S = r(689938),
    L = r(632007),
    N = r(454410),
    O = r(783433),
    B = r(170873),
    k = r(562292),
    j = r(196315);
t.Z = (e) => {
    var t, r, s, R;
    let { handleTransition: Z, numVisibleItems: P } = e,
        { categories: A, isFetchingCategories: M, error: y, refreshCategories: w } = (0, b.Z)(),
        H = Array.from(A.values()),
        F = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        D = n.createRef(),
        U = (0, g.t)('CollectiblesFeedShop'),
        W = (0, _.m)('CollectiblesFeedShop'),
        G = (0, h.b)('Collectibles Shop Button'),
        V = (0, d.Z)('shop_disable_cache'),
        z = (0, d.Z)('shop_include_unpublished'),
        Y = W ? H[0] : p.Z.getCategory(U ? o.T.SPOOKY_NIGHT : o.T.BAND),
        K = W ? H[1] : p.Z.getCategory(U ? o.T.BAND : o.T.AUTUMN_EQUINOX),
        $ = W
            ? (0, C.uV)(null !== (t = null == Y ? void 0 : Y.heroBanner) && void 0 !== t ? t : '', {
                  size: T.pv,
                  format: 'jpg'
              })
            : U
              ? j
              : B,
        X = W
            ? (0, C.uV)(null !== (r = null == K ? void 0 : K.featuredBlock) && void 0 !== r ? r : '', {
                  size: T.J0,
                  format: 'png'
              })
            : U
              ? O
              : k,
        q = n.useCallback(() => {
            w();
        }, [w]),
        J = W ? (null !== (s = null == Y ? void 0 : Y.heroRanking) && void 0 !== s ? s : []) : U ? T.Ku : T.WC,
        Q = n.useMemo(
            () =>
                J.map((e) => p.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: p.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!m.Z.getPurchase(e.skuId),
                            a = !!m.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    })
                    .slice(0, 4),
            [M, U]
        ),
        ee = n.useMemo(
            () =>
                T.yo
                    .map((e) => p.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: p.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!m.Z.getPurchase(e.skuId),
                            a = !!m.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    }),
            [M]
        );
    if (null == F) return null;
    let et = S.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null == Y ? void 0 : Y.name });
    if (null != y)
        return (
            f.Z.captureMessage('shop load error: ' + y.message, {
                tags: {
                    isStaff: F.isStaff.toString(),
                    preloadEnabled: G.toString(),
                    disableCache: V.toString(),
                    includeUnpublished: z.toString()
                }
            }),
            (0, a.jsx)(I.Z, {
                onRetry: q,
                errorMessage: y.message
            })
        );
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: L.shop,
            children: [
                (0, a.jsxs)('div', {
                    className: L.banner,
                    children: [
                        (0, a.jsx)('div', {
                            className: L.bannerImage,
                            style: { backgroundImage: 'url('.concat($, ')') }
                        }),
                        (0, a.jsx)('div', { className: i()(L.bannerShadow, L.left) }),
                        (0, a.jsx)('div', { className: i()(L.bannerShadow, L.right) })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: i()(L.content, L.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(L.heroHeaderContainer),
                            children: [
                                M
                                    ? (0, a.jsx)('div', { className: i()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == Y ? void 0 : Y.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: S.Z.Messages.LIMITED_TIME,
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: L.heroHeaderLogo,
                                                  src: (0, C.uV)(null !== (R = null == Y ? void 0 : Y.logo) && void 0 !== R ? R : '', { size: E.n }),
                                                  alt: null == Y ? void 0 : Y.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: L.subHeaderText,
                                                  children: null == Y ? void 0 : Y.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: L.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(c.Button, {
                                        className: L.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => Z('shop latest category hero', null == Y ? void 0 : Y.skuId),
                                        children: et
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(L.row, L.feed, L.feedSingleRow),
                            children: M
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(x.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: Q.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              v.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: F,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(L.section, L.col2, L.featuredBlocksContainer),
                            children: [
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(L.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(X, ')') },
                                    onClick: () => Z('shop marketing tile', null == K ? void 0 : K.skuId),
                                    children: [
                                        (null == K ? void 0 : K.unpublishedAt) != null &&
                                            (0, a.jsx)(c.TextBadge, {
                                                disableColor: !0,
                                                text: S.Z.Messages.LIMITED_TIME,
                                                className: L.featuredBlockBadge
                                            }),
                                        (0, a.jsx)(c.Button, {
                                            className: L.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: S.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(L.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(N, ')') },
                                    onClick: () => Z('shop marketing tile', o.T.ANIME_V2),
                                    children: [
                                        (0, a.jsx)(c.TextBadge, {
                                            disableColor: !0,
                                            text: S.Z.Messages.MOST_POPULAR,
                                            className: L.featuredBlockBadge
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            className: L.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: S.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(L.row, L.between, L.section),
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: S.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: L.shopAll,
                                    onClick: () => Z('shop all top'),
                                    children: [
                                        (0, a.jsx)(c.ServerGridIcon, {}),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: S.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: L.feed,
                            ref: D,
                            children: M
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(x.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: ee.slice(0, P).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              v.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: F,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        P >= T.iA &&
                            (0, a.jsxs)('div', {
                                className: L.endOfFeed,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: S.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        className: L.endOfFeedButton,
                                        onClick: () => {
                                            Z('shop all bottom', void 0, !0);
                                        },
                                        children: (0, a.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: S.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
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
