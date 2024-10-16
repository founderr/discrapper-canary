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
    N = r(632007),
    L = r(454410),
    O = r(783433),
    B = r(170873),
    k = r(562292),
    j = r(196315);
t.Z = (e) => {
    var t, r, s, R, Z;
    let { handleTransition: A, numVisibleItems: P } = e,
        { categories: M, isFetchingCategories: y, error: w, refreshCategories: F } = (0, b.Z)(),
        H = Array.from(M.values()),
        D = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        U = n.createRef(),
        W = (0, g.t)('CollectiblesFeedShop'),
        G = (0, _.m)('CollectiblesFeedShop'),
        V = (0, h.b)('Collectibles Shop Button'),
        z = (0, d.Z)('shop_disable_cache'),
        Y = (0, d.Z)('shop_include_unpublished'),
        K = G ? H[0] : p.Z.getCategory(W ? o.T.SPOOKY_NIGHT : o.T.BAND),
        $ = G ? H[1] : p.Z.getCategory(W ? o.T.BAND : o.T.AUTUMN_EQUINOX),
        X = p.Z.getCategory(o.T.ANIME_V2),
        q = G
            ? (0, C.uV)(null !== (t = null == K ? void 0 : K.heroBanner) && void 0 !== t ? t : '', {
                  size: v.pv,
                  format: 'jpg'
              })
            : W
              ? j
              : B,
        J = G
            ? (0, C.uV)(null !== (r = null == $ ? void 0 : $.featuredBlock) && void 0 !== r ? r : '', {
                  size: v.J0,
                  format: 'png'
              })
            : W
              ? O
              : k,
        Q = G
            ? (0, C.uV)(null !== (s = null == X ? void 0 : X.featuredBlock) && void 0 !== s ? s : '', {
                  size: v.J0,
                  format: 'png'
              })
            : L,
        ee = n.useCallback(() => {
            F();
        }, [F]),
        et = G ? (null !== (R = null == K ? void 0 : K.heroRanking) && void 0 !== R ? R : []) : W ? v.Ku : v.WC,
        er = n.useMemo(
            () =>
                et
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
            [y, W]
        ),
        ea = n.useMemo(
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
            [y]
        );
    if (null == D) return null;
    let en = S.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null == K ? void 0 : K.name });
    if (null != w)
        return (
            f.Z.captureMessage('shop load error: ' + w.message, {
                tags: {
                    isStaff: D.isStaff.toString(),
                    preloadEnabled: V.toString(),
                    disableCache: z.toString(),
                    includeUnpublished: Y.toString()
                }
            }),
            (0, a.jsx)(I.Z, {
                onRetry: ee,
                errorMessage: w.message
            })
        );
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: N.shop,
            children: [
                (0, a.jsxs)('div', {
                    className: N.banner,
                    children: [
                        (0, a.jsx)('div', {
                            className: N.bannerImage,
                            style: { backgroundImage: 'url('.concat(q, ')') }
                        }),
                        (0, a.jsx)('div', { className: i()(N.bannerShadow, N.left) }),
                        (0, a.jsx)('div', { className: i()(N.bannerShadow, N.right) })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: i()(N.content, N.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(N.heroHeaderContainer),
                            children: [
                                y
                                    ? (0, a.jsx)('div', { className: i()(N.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(N.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == K ? void 0 : K.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: S.Z.Messages.LIMITED_TIME,
                                                      className: N.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: N.heroHeaderLogo,
                                                  src: (0, C.uV)(null !== (Z = null == K ? void 0 : K.logo) && void 0 !== Z ? Z : '', { size: E.n }),
                                                  alt: null == K ? void 0 : K.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: N.subHeaderText,
                                                  children: null == K ? void 0 : K.summary
                                              })
                                          ]
                                      }),
                                !y &&
                                    (0, a.jsx)('div', {
                                        className: N.heroHeaderButtonContainer,
                                        children: (0, a.jsx)(c.Button, {
                                            className: N.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => A('shop latest category hero', null == K ? void 0 : K.skuId),
                                            children: en
                                        })
                                    })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(N.row, N.feed, N.feedSingleRow),
                            children: y
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(x.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: er.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: D,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsx)('div', {
                            className: i()(N.section, N.col2, N.featuredBlocksContainer),
                            children: y
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: i()(N.skeleton, N.featuredBlock),
                                              children: (0, a.jsx)('div', { className: N.skeletonBody })
                                          }),
                                          (0, a.jsx)('div', {
                                              className: i()(N.skeleton, N.featuredBlock),
                                              children: (0, a.jsx)('div', { className: N.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsxs)(c.Clickable, {
                                              className: i()(N.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(J, ')') },
                                              onClick: () => A('shop marketing tile', null == $ ? void 0 : $.skuId),
                                              children: [
                                                  (null == $ ? void 0 : $.unpublishedAt) != null &&
                                                      (0, a.jsx)(c.TextBadge, {
                                                          disableColor: !0,
                                                          text: S.Z.Messages.LIMITED_TIME,
                                                          className: N.featuredBlockBadge
                                                      }),
                                                  (0, a.jsx)(c.Button, {
                                                      className: N.featuredBlockButton,
                                                      color: c.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: S.Z.Messages.TAKE_ME_THERE
                                                  })
                                              ]
                                          }),
                                          (0, a.jsx)(c.Clickable, {
                                              className: i()(N.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(Q, ')') },
                                              onClick: () => A('shop marketing tile', o.T.ANIME_V2),
                                              children:
                                                  !y &&
                                                  (0, a.jsxs)(a.Fragment, {
                                                      children: [
                                                          (0, a.jsx)(c.TextBadge, {
                                                              disableColor: !0,
                                                              text: S.Z.Messages.MOST_POPULAR,
                                                              className: N.featuredBlockBadge
                                                          }),
                                                          (0, a.jsx)(c.Button, {
                                                              className: N.featuredBlockButton,
                                                              color: c.ButtonColors.WHITE,
                                                              onClick: () => {},
                                                              children: S.Z.Messages.TAKE_ME_THERE
                                                          })
                                                      ]
                                                  })
                                          })
                                      ]
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(N.row, N.between, N.section),
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: S.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: N.shopAll,
                                    onClick: () => A('shop all top'),
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
                            className: N.feed,
                            ref: U,
                            children: y
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(x.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: ea.slice(0, P).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: D,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        P >= v.iA &&
                            (0, a.jsxs)('div', {
                                className: N.endOfFeed,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: S.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        className: N.endOfFeedButton,
                                        onClick: () => {
                                            A('shop all bottom', void 0, !0);
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
