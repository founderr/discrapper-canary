s(47120);
var a = s(735250),
    r = s(470079),
    n = s(120356),
    i = s.n(n),
    l = s(180650),
    o = s(442837),
    c = s(481060),
    d = s(580747),
    u = s(594174),
    m = s(960048),
    C = s(597688),
    f = s(1870),
    p = s(884697),
    h = s(251068),
    g = s(43610),
    _ = s(744112),
    b = s(223143),
    x = s(823941),
    E = s(752053),
    I = s(38900),
    T = s(709999),
    L = s(215023),
    v = s(689938),
    S = s(632007),
    N = s(454410),
    k = s(783433),
    B = s(170873),
    j = s(562292),
    O = s(196315);
t.Z = (e) => {
    var t, s, n, Z, y;
    let { handleTransition: P, numVisibleItems: R } = e,
        { categories: A, isFetchingCategories: w, error: M, refreshCategories: H } = (0, b.Z)(),
        D = Array.from(A.values()),
        F = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        U = r.createRef(),
        W = (0, g.t)('CollectiblesFeedShop'),
        V = (0, h.m)('CollectiblesFeedShop'),
        z = (0, _.b)('Collectibles Shop Button'),
        G = (0, d.Z)('shop_disable_cache'),
        K = (0, d.Z)('shop_include_unpublished'),
        Y = V ? D[0] : C.Z.getCategory(W ? l.T.SPOOKY_NIGHT : l.T.BAND),
        $ = V ? D[1] : C.Z.getCategory(W ? l.T.BAND : l.T.AUTUMN_EQUINOX),
        X = C.Z.getCategory(l.T.ANIME_V2),
        q = V
            ? (0, p.uV)(null !== (t = null == Y ? void 0 : Y.heroBanner) && void 0 !== t ? t : '', {
                  size: L.pv,
                  format: 'jpg'
              })
            : W
              ? O
              : B,
        J = V
            ? (0, p.uV)(null !== (s = null == $ ? void 0 : $.featuredBlock) && void 0 !== s ? s : '', {
                  size: L.J0,
                  format: 'png'
              })
            : W
              ? k
              : j,
        Q = V
            ? (0, p.uV)(null !== (n = null == X ? void 0 : X.featuredBlock) && void 0 !== n ? n : '', {
                  size: L.J0,
                  format: 'png'
              })
            : N,
        ee = r.useCallback(() => {
            H();
        }, [H]),
        et = V ? (null !== (Z = null == Y ? void 0 : Y.heroRanking) && void 0 !== Z ? Z : []) : W ? L.Ku : L.WC,
        es = r.useMemo(
            () =>
                et
                    .map((e) => C.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: C.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let s = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(s) - Number(a);
                    })
                    .slice(0, 4),
            [w, W]
        ),
        ea = r.useMemo(
            () =>
                L.yo
                    .map((e) => C.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: C.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let s = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(s) - Number(a);
                    }),
            [w]
        );
    if (null == F) return null;
    let er = v.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null == Y ? void 0 : Y.name });
    if (null != M)
        return (
            m.Z.captureMessage('shop load error: ' + M.message, {
                tags: {
                    isStaff: F.isStaff.toString(),
                    preloadEnabled: z.toString(),
                    disableCache: G.toString(),
                    includeUnpublished: K.toString()
                }
            }),
            (0, a.jsx)(E.Z, {
                onRetry: ee,
                errorMessage: M.message
            })
        );
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: S.shop,
            children: [
                (0, a.jsxs)('div', {
                    className: S.banner,
                    children: [
                        (0, a.jsx)('div', {
                            className: S.bannerImage,
                            style: { backgroundImage: 'url('.concat(q, ')') }
                        }),
                        (0, a.jsx)('div', { className: i()(S.bannerShadow, S.left) }),
                        (0, a.jsx)('div', { className: i()(S.bannerShadow, S.right) })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: i()(S.content, S.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(S.heroHeaderContainer),
                            children: [
                                w
                                    ? (0, a.jsx)('div', { className: i()(S.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(S.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == Y ? void 0 : Y.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: v.Z.Messages.LIMITED_TIME,
                                                      className: S.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: S.heroHeaderLogo,
                                                  src: (0, p.uV)(null !== (y = null == Y ? void 0 : Y.logo) && void 0 !== y ? y : '', { size: x.n }),
                                                  alt: null == Y ? void 0 : Y.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: S.subHeaderText,
                                                  children: null == Y ? void 0 : Y.summary
                                              })
                                          ]
                                      }),
                                !w &&
                                    (0, a.jsx)('div', {
                                        className: S.heroHeaderButtonContainer,
                                        children: (0, a.jsx)(c.Button, {
                                            className: S.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => P('shop latest category hero', null == Y ? void 0 : Y.skuId),
                                            children: er
                                        })
                                    })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(S.row, S.feed, S.feedSingleRow),
                            children: w
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(I.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: es.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...s } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: s,
                                                  category: t,
                                                  user: F,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsx)('div', {
                            className: i()(S.section, S.col2, S.featuredBlocksContainer),
                            children: w
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: i()(S.skeleton, S.featuredBlock),
                                              children: (0, a.jsx)('div', { className: S.skeletonBody })
                                          }),
                                          (0, a.jsx)('div', {
                                              className: i()(S.skeleton, S.featuredBlock),
                                              children: (0, a.jsx)('div', { className: S.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsxs)(c.Clickable, {
                                              className: i()(S.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(J, ')') },
                                              onClick: () => P('shop marketing tile', null == $ ? void 0 : $.skuId),
                                              children: [
                                                  (null == $ ? void 0 : $.unpublishedAt) != null &&
                                                      (0, a.jsx)(c.TextBadge, {
                                                          disableColor: !0,
                                                          text: v.Z.Messages.LIMITED_TIME,
                                                          className: S.featuredBlockBadge
                                                      }),
                                                  (0, a.jsx)(c.Button, {
                                                      className: S.featuredBlockButton,
                                                      color: c.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: v.Z.Messages.TAKE_ME_THERE
                                                  })
                                              ]
                                          }),
                                          (0, a.jsx)(c.Clickable, {
                                              className: i()(S.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(Q, ')') },
                                              onClick: () => P('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !w &&
                                                  (0, a.jsxs)(a.Fragment, {
                                                      children: [
                                                          (0, a.jsx)(c.TextBadge, {
                                                              disableColor: !0,
                                                              text: v.Z.Messages.MOST_POPULAR,
                                                              className: S.featuredBlockBadge
                                                          }),
                                                          (0, a.jsx)(c.Button, {
                                                              className: S.featuredBlockButton,
                                                              color: c.ButtonColors.WHITE,
                                                              onClick: () => {},
                                                              children: v.Z.Messages.TAKE_ME_THERE
                                                          })
                                                      ]
                                                  })
                                          })
                                      ]
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(S.row, S.between, S.section),
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: v.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: S.shopAll,
                                    onClick: () => P('shop all top'),
                                    children: [
                                        (0, a.jsx)(c.ServerGridIcon, {}),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: v.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: S.feed,
                            ref: U,
                            children: w
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(I.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: ea.slice(0, R).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...s } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: s,
                                                  category: t,
                                                  user: F,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        R >= L.iA &&
                            (0, a.jsxs)('div', {
                                className: S.endOfFeed,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: v.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        className: S.endOfFeedButton,
                                        onClick: () => {
                                            P('shop all bottom', void 0, !0);
                                        },
                                        children: (0, a.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: v.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
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
