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
    var t, r, s;
    let { handleTransition: R, numVisibleItems: Z } = e,
        { categories: P, isFetchingCategories: A, error: M, refreshCategories: y } = (0, b.Z)(),
        w = Array.from(P.values()),
        H = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        F = n.createRef(),
        D = (0, g.t)('CollectiblesFeedShop'),
        U = (0, _.m)('CollectiblesFeedShop'),
        W = (0, h.b)('Collectibles Shop Button'),
        G = (0, d.Z)('shop_disable_cache'),
        V = (0, d.Z)('shop_include_unpublished'),
        z = U ? w[0] : p.Z.getCategory(D ? o.T.SPOOKY_NIGHT : o.T.BAND),
        Y = U ? w[1] : p.Z.getCategory(D ? o.T.BAND : o.T.AUTUMN_EQUINOX),
        K = U
            ? (0, C.uV)(null !== (t = null == z ? void 0 : z.heroBanner) && void 0 !== t ? t : '', {
                  size: v.pv,
                  format: 'jpg'
              })
            : D
              ? j
              : B,
        $ = U
            ? (0, C.uV)(null !== (r = null == Y ? void 0 : Y.featuredBlock) && void 0 !== r ? r : '', {
                  size: v.J0,
                  format: 'png'
              })
            : D
              ? O
              : k,
        X = n.useCallback(() => {
            y();
        }, [y]),
        q = D ? v.Ku : v.WC,
        J = n.useMemo(
            () =>
                q
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
                    })
                    .slice(0, 4),
            [A, D]
        ),
        Q = n.useMemo(
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
            [A]
        );
    if (null == H) return null;
    let ee = S.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null == z ? void 0 : z.name });
    if (null != M)
        return (
            f.Z.captureMessage('shop load error: ' + M.message, {
                tags: {
                    isStaff: H.isStaff.toString(),
                    preloadEnabled: W.toString(),
                    disableCache: G.toString(),
                    includeUnpublished: V.toString()
                }
            }),
            (0, a.jsx)(I.Z, {
                onRetry: X,
                errorMessage: M.message
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
                            style: { backgroundImage: 'url('.concat(K, ')') }
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
                                A
                                    ? (0, a.jsx)('div', { className: i()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == z ? void 0 : z.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: S.Z.Messages.LIMITED_TIME,
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: L.heroHeaderLogo,
                                                  src: (0, C.uV)(null !== (s = null == z ? void 0 : z.logo) && void 0 !== s ? s : '', { size: E.n }),
                                                  alt: null == z ? void 0 : z.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: L.subHeaderText,
                                                  children: null == z ? void 0 : z.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: L.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(c.Button, {
                                        className: L.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => R('shop latest category hero', null == z ? void 0 : z.skuId),
                                        children: ee
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(L.row, L.feed, L.feedSingleRow),
                            children: A
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(x.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: J.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: H,
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
                                    style: { backgroundImage: 'url('.concat($, ')') },
                                    onClick: () => R('shop marketing tile', null == Y ? void 0 : Y.skuId),
                                    children: [
                                        (null == Y ? void 0 : Y.unpublishedAt) != null &&
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
                                    onClick: () => R('shop marketing tile', o.T.ANIME_V2),
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
                                    onClick: () => R('shop all top'),
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
                            ref: F,
                            children: A
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(x.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: Q.slice(0, Z).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: H,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        Z >= v.iA &&
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
                                            R('shop all bottom', void 0, !0);
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
