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
    var t, r;
    let { handleTransition: s, numVisibleItems: R } = e,
        { categories: Z, isFetchingCategories: P, error: A, refreshCategories: M } = (0, b.Z)(),
        y = Array.from(Z.values()),
        w = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        H = n.createRef(),
        F = (0, g.t)('CollectiblesFeedShop'),
        D = (0, _.m)('CollectiblesFeedShop'),
        U = (0, h.b)('Collectibles Shop Button'),
        W = (0, d.Z)('shop_disable_cache'),
        G = (0, d.Z)('shop_include_unpublished'),
        V = D ? y[0] : p.Z.getCategory(F ? o.T.SPOOKY_NIGHT : o.T.BAND),
        z = D ? y[1] : p.Z.getCategory(F ? o.T.BAND : o.T.AUTUMN_EQUINOX),
        Y = D
            ? (0, C.uV)(null !== (t = null == V ? void 0 : V.heroBanner) && void 0 !== t ? t : '', {
                  size: v.pv,
                  format: 'jpg'
              })
            : F
              ? j
              : B,
        K = n.useCallback(() => {
            M();
        }, [M]),
        $ = F ? v.Ku : v.WC,
        X = n.useMemo(
            () =>
                $.map((e) => p.Z.getProduct(e))
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
            [P, F]
        ),
        q = n.useMemo(
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
            [P]
        );
    if (null == w) return null;
    let Q = S.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null == V ? void 0 : V.name });
    if (null != A)
        return (
            f.Z.captureMessage('shop load error: ' + A.message, {
                tags: {
                    isStaff: w.isStaff.toString(),
                    preloadEnabled: U.toString(),
                    disableCache: W.toString(),
                    includeUnpublished: G.toString()
                }
            }),
            (0, a.jsx)(I.Z, {
                onRetry: K,
                errorMessage: A.message
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
                            style: { backgroundImage: 'url('.concat(Y, ')') }
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
                                P
                                    ? (0, a.jsx)('div', { className: i()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == V ? void 0 : V.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: S.Z.Messages.LIMITED_TIME,
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: L.heroHeaderLogo,
                                                  src: (0, C.uV)(null !== (r = null == V ? void 0 : V.logo) && void 0 !== r ? r : '', { size: E.n }),
                                                  alt: null == V ? void 0 : V.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: L.subHeaderText,
                                                  children: null == V ? void 0 : V.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: L.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(c.Button, {
                                        className: L.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => s('shop latest category hero', null == V ? void 0 : V.skuId),
                                        children: Q
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(L.row, L.feed, L.feedSingleRow),
                            children: P
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(x.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: X.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: w,
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
                                    style: { backgroundImage: 'url('.concat(F ? O : k, ')') },
                                    onClick: () => s('shop marketing tile', null == z ? void 0 : z.skuId),
                                    children: [
                                        (null == z ? void 0 : z.unpublishedAt) != null &&
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
                                    onClick: () => s('shop marketing tile', o.T.ANIME_V2),
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
                                    onClick: () => s('shop all top'),
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
                            ref: H,
                            children: P
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(x.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: q.slice(0, R).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: w,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        R >= v.iA &&
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
                                            s('shop all bottom', void 0, !0);
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
