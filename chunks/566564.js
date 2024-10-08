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
    T = r(709999),
    v = r(215023),
    S = r(689938),
    L = r(632007),
    N = r(454410),
    O = r(783433),
    B = r(170873),
    k = r(562292),
    j = r(196315);
t.Z = (e) => {
    var t;
    let { handleTransition: r, numVisibleItems: s } = e,
        { categories: R, isFetchingCategories: Z, error: P, refreshCategories: A } = (0, b.Z)(),
        M = Array.from(R.values()),
        y = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        w = n.createRef(),
        H = (0, g.t)('CollectiblesFeedShop'),
        F = (0, _.m)('CollectiblesFeedShop'),
        D = (0, h.b)('Collectibles Shop Button'),
        U = (0, d.Z)('shop_disable_cache'),
        W = (0, d.Z)('shop_include_unpublished'),
        G = F ? M[0] : p.Z.getCategory(H ? o.T.SPOOKY_NIGHT : o.T.BAND),
        V = F ? M[1] : p.Z.getCategory(H ? o.T.BAND : o.T.AUTUMN_EQUINOX),
        z = n.useCallback(() => {
            A();
        }, [A]),
        Y = H ? v.Ku : v.WC,
        K = n.useMemo(
            () =>
                Y.map((e) => p.Z.getProduct(e))
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
            [Z, H]
        ),
        $ = n.useMemo(
            () =>
                v.yo
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
            [Z]
        );
    if (null == y) return null;
    let X = S.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null == G ? void 0 : G.name });
    if (null != P)
        return (
            f.Z.captureMessage('shop load error: ' + P.message, {
                tags: {
                    isStaff: y.isStaff.toString(),
                    preloadEnabled: D.toString(),
                    disableCache: U.toString(),
                    includeUnpublished: W.toString()
                }
            }),
            (0, a.jsx)(I.Z, {
                onRetry: z,
                errorMessage: P.message
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
                            style: { backgroundImage: 'url('.concat(H ? j : B, ')') }
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
                                Z
                                    ? (0, a.jsx)('div', { className: i()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == G ? void 0 : G.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: S.Z.Messages.LIMITED_TIME,
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: L.heroHeaderLogo,
                                                  src: (0, C.uV)(null !== (t = null == G ? void 0 : G.logo) && void 0 !== t ? t : '', { size: E.n }),
                                                  alt: null == G ? void 0 : G.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: L.subHeaderText,
                                                  children: null == G ? void 0 : G.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: L.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(c.Button, {
                                        className: L.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => r('shop latest category hero', null == G ? void 0 : G.skuId),
                                        children: X
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(L.row, L.feed, L.feedSingleRow),
                            children: Z
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(x.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: K.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: y,
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
                                    style: { backgroundImage: 'url('.concat(H ? O : k, ')') },
                                    onClick: () => r('shop marketing tile', null == V ? void 0 : V.skuId),
                                    children: [
                                        (null == V ? void 0 : V.unpublishedAt) != null &&
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
                                    onClick: () => r('shop marketing tile', o.T.ANIME_V2),
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
                                    onClick: () => r('shop all top'),
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
                            ref: w,
                            children: Z
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(x.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: $.slice(0, s).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: y,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        s >= v.iA &&
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
                                            r('shop all bottom', void 0, !0);
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
