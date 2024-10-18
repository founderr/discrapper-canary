s(47120), s(653041);
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
    var t, s, n, Z, y, P;
    let { handleTransition: R, numVisibleItems: A } = e,
        { categories: w, isFetchingCategories: M, fetchCategoriesError: H, fetchPurchasesError: D, claimError: F, refreshCategories: U } = (0, b.Z)(),
        W = null !== (t = null != H ? H : D) && void 0 !== t ? t : F,
        V = Array.from(w.values()),
        z = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        G = r.createRef(),
        K = (0, g.t)('CollectiblesFeedShop'),
        Y = (0, h.m)('CollectiblesFeedShop'),
        $ = (0, _.b)('Collectibles Shop Button'),
        X = (0, d.Z)('shop_disable_cache'),
        q = (0, d.Z)('shop_include_unpublished'),
        J = Y ? V[0] : C.Z.getCategory(K ? l.T.SPOOKY_NIGHT : l.T.BAND),
        Q = Y ? V[1] : C.Z.getCategory(K ? l.T.BAND : l.T.AUTUMN_EQUINOX),
        ee = C.Z.getCategory(l.T.ANIME_V2),
        et = Y
            ? (0, p.uV)(null !== (s = null == J ? void 0 : J.heroBanner) && void 0 !== s ? s : '', {
                  size: L.pv,
                  format: 'jpg'
              })
            : K
              ? O
              : B,
        es = Y
            ? (0, p.uV)(null !== (n = null == Q ? void 0 : Q.featuredBlock) && void 0 !== n ? n : '', {
                  size: L.J0,
                  format: 'png'
              })
            : K
              ? k
              : j,
        ea = Y
            ? (0, p.uV)(null !== (Z = null == ee ? void 0 : ee.featuredBlock) && void 0 !== Z ? Z : '', {
                  size: L.J0,
                  format: 'png'
              })
            : N,
        er = r.useCallback(() => {
            U();
        }, [U]),
        en = Y ? (null !== (y = null == J ? void 0 : J.heroRanking) && void 0 !== y ? y : []) : K ? L.Ku : L.WC,
        ei = r.useMemo(
            () =>
                en
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
            [M, K]
        ),
        el = r.useMemo(
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
            [M]
        );
    if (null == z) return null;
    let eo = v.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null == J ? void 0 : J.name });
    if (null != W) {
        let e = [];
        return (
            null != H ? e.push('shop load fetch categories error: '.concat(W.message)) : null != D ? e.push('shop load fetch purchase error: '.concat(W.message)) : e.push('shop load claim error: '.concat(W.message)),
            m.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: z.isStaff().toString(),
                    preloadEnabled: $.toString(),
                    disableCache: X.toString(),
                    includeUnpublished: q.toString()
                }
            }),
            (0, a.jsx)(E.Z, {
                onRetry: er,
                errorMessage: W.message
            })
        );
    }
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: S.shop,
            children: [
                (0, a.jsxs)('div', {
                    className: S.banner,
                    children: [
                        (0, a.jsx)('div', {
                            className: S.bannerImage,
                            style: { backgroundImage: 'url('.concat(et, ')') }
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
                                M
                                    ? (0, a.jsx)('div', { className: i()(S.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(S.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == J ? void 0 : J.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: v.Z.Messages.LIMITED_TIME,
                                                      className: S.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: S.heroHeaderLogo,
                                                  src: (0, p.uV)(null !== (P = null == J ? void 0 : J.logo) && void 0 !== P ? P : '', { size: x.n }),
                                                  alt: null == J ? void 0 : J.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: S.subHeaderText,
                                                  children: null == J ? void 0 : J.summary
                                              })
                                          ]
                                      }),
                                !M &&
                                    (0, a.jsx)('div', {
                                        className: S.heroHeaderButtonContainer,
                                        children: (0, a.jsx)(c.Button, {
                                            className: S.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => R('shop latest category hero', null == J ? void 0 : J.skuId),
                                            children: eo
                                        })
                                    })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(S.row, S.feed, S.feedSingleRow),
                            children: M
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(I.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: ei.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...s } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: s,
                                                  category: t,
                                                  user: z,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsx)('div', {
                            className: i()(S.section, S.col2, S.featuredBlocksContainer),
                            children: M
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
                                              style: { backgroundImage: 'url('.concat(es, ')') },
                                              onClick: () => R('shop marketing tile', null == Q ? void 0 : Q.skuId),
                                              children: [
                                                  (null == Q ? void 0 : Q.unpublishedAt) != null &&
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
                                              style: { backgroundImage: 'url('.concat(ea, ')') },
                                              onClick: () => R('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !M &&
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
                                    onClick: () => R('shop all top'),
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
                            ref: G,
                            children: M
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(I.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: el.slice(0, A).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...s } = e;
                                          return (0, a.jsx)(
                                              T.Z,
                                              {
                                                  product: s,
                                                  category: t,
                                                  user: z,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        A >= L.iA &&
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
                                            R('shop all bottom', void 0, !0);
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
