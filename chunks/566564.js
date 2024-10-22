r(47120), r(653041);
var s = r(200651),
    n = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(180650),
    o = r(442837),
    c = r(481060),
    d = r(580747),
    u = r(594174),
    m = r(960048),
    f = r(381585),
    p = r(597688),
    C = r(1870),
    h = r(884697),
    g = r(251068),
    _ = r(43610),
    b = r(744112),
    x = r(223143),
    E = r(823941),
    I = r(752053),
    v = r(38900),
    T = r(709999),
    L = r(215023),
    S = r(689938),
    k = r(632007),
    N = r(454410),
    B = r(783433),
    j = r(170873),
    O = r(562292),
    Z = r(196315);
t.Z = (e) => {
    var t, r, a, y, P, R;
    let { handleTransition: A, numVisibleItems: w } = e,
        { categories: M, isFetchingCategories: H, fetchCategoriesError: D, fetchPurchasesError: F, claimError: U, refreshCategories: W } = (0, x.Z)(),
        V = null !== (t = null != D ? D : F) && void 0 !== t ? t : U,
        z = Array.from(M.values()),
        G = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        K = n.createRef(),
        Y = (0, _.t)('CollectiblesFeedShop'),
        $ = (0, g.m)('CollectiblesFeedShop'),
        X = (0, b.b)('Collectibles Shop Button'),
        q = (0, d.Z)('shop_disable_cache'),
        J = (0, d.Z)('shop_include_unpublished'),
        Q = $ ? z[0] : p.Z.getCategory(Y ? l.T.SPOOKY_NIGHT : l.T.BAND),
        ee = $ ? z[1] : p.Z.getCategory(Y ? l.T.BAND : l.T.AUTUMN_EQUINOX),
        et = p.Z.getCategory(l.T.ANIME_V2),
        er = $
            ? (0, h.uV)(null !== (r = null == Q ? void 0 : Q.heroBanner) && void 0 !== r ? r : '', {
                  size: L.pv,
                  format: 'jpg'
              })
            : Y
              ? Z
              : j,
        es = $
            ? (0, h.uV)(null !== (a = null == ee ? void 0 : ee.featuredBlock) && void 0 !== a ? a : '', {
                  size: L.J0,
                  format: 'png'
              })
            : Y
              ? B
              : O,
        en = $
            ? (0, h.uV)(null !== (y = null == et ? void 0 : et.featuredBlock) && void 0 !== y ? y : '', {
                  size: L.J0,
                  format: 'png'
              })
            : N,
        ea = n.useCallback(() => {
            W();
        }, [W]),
        ei = $ ? (null !== (P = null == Q ? void 0 : Q.heroRanking) && void 0 !== P ? P : []) : Y ? L.Ku : L.WC,
        el = n.useMemo(
            () =>
                ei
                    .map((e) => p.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: p.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!C.Z.getPurchase(e.skuId),
                            s = !!C.Z.getPurchase(t.skuId);
                        return Number(r) - Number(s);
                    })
                    .slice(0, 4),
            [H, Y]
        ),
        eo = n.useMemo(
            () =>
                L.yo
                    .map((e) => p.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: p.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!C.Z.getPurchase(e.skuId),
                            s = !!C.Z.getPurchase(t.skuId);
                        return Number(r) - Number(s);
                    }),
            [H]
        );
    if (null == G) return null;
    let ec = S.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null == Q ? void 0 : Q.name });
    if (null != V) {
        let e = [];
        return (
            null != D ? e.push('shop load fetch categories error: '.concat(V.message)) : null != F ? e.push('shop load fetch purchase error: '.concat(V.message)) : e.push('shop load claim error: '.concat(V.message)),
            m.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: G.isStaff().toString(),
                    preloadEnabled: X.toString(),
                    disableCache: q.toString(),
                    includeUnpublished: J.toString()
                }
            }),
            (0, s.jsx)(I.Z, {
                onRetry: ea,
                errorMessage: V.message
            })
        );
    }
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: k.shop,
            children: [
                (0, s.jsxs)('div', {
                    className: k.banner,
                    children: [
                        (0, s.jsx)('div', {
                            className: k.bannerImage,
                            style: { backgroundImage: 'url('.concat(er, ')') }
                        }),
                        (0, s.jsx)('div', { className: i()(k.bannerShadow, k.left) }),
                        (0, s.jsx)('div', { className: i()(k.bannerShadow, k.right) })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: i()(k.content, k.mainContent),
                    children: [
                        (0, s.jsxs)('div', {
                            className: i()(k.heroHeaderContainer),
                            children: [
                                H
                                    ? (0, s.jsx)('div', { className: i()(k.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, s.jsxs)('div', {
                                          className: i()(k.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == Q ? void 0 : Q.unpublishedAt) != null &&
                                                  (0, s.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: S.Z.Messages.LIMITED_TIME,
                                                      className: k.limitedTimeBadge
                                                  }),
                                              (0, s.jsx)('img', {
                                                  className: k.heroHeaderLogo,
                                                  src: (0, h.uV)(null !== (R = null == Q ? void 0 : Q.logo) && void 0 !== R ? R : '', { size: E.n }),
                                                  alt: null == Q ? void 0 : Q.name
                                              }),
                                              (0, s.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: k.subHeaderText,
                                                  children: null == Q ? void 0 : Q.summary
                                              })
                                          ]
                                      }),
                                !H &&
                                    (0, s.jsx)('div', {
                                        className: k.heroHeaderButtonContainer,
                                        children: (0, s.jsx)(c.Button, {
                                            className: k.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => A('shop latest category hero', null == Q ? void 0 : Q.skuId),
                                            children: ec
                                        })
                                    })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: i()(k.row, k.feed, k.feedSingleRow),
                            children: H
                                ? (0, s.jsx)(s.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, s.jsx)(v.K, {}, t))
                                  })
                                : (0, s.jsx)(s.Fragment, {
                                      children: el.map((e, t) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: r, ...n } = e;
                                          return (0, s.jsx)(
                                              f.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'top 4'
                                                  },
                                                  children: (0, s.jsx)(
                                                      T.Z,
                                                      {
                                                          product: n,
                                                          category: r,
                                                          user: G,
                                                          isInFeedView: !0
                                                      },
                                                      null == e ? void 0 : e.skuId
                                                  )
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, s.jsx)('div', {
                            className: i()(k.section, k.col2, k.featuredBlocksContainer),
                            children: H
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)('div', {
                                              className: i()(k.skeleton, k.featuredBlock),
                                              children: (0, s.jsx)('div', { className: k.skeletonBody })
                                          }),
                                          (0, s.jsx)('div', {
                                              className: i()(k.skeleton, k.featuredBlock),
                                              children: (0, s.jsx)('div', { className: k.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsxs)(c.Clickable, {
                                              className: i()(k.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(es, ')') },
                                              onClick: () => A('shop marketing tile', null == ee ? void 0 : ee.skuId),
                                              children: [
                                                  (null == ee ? void 0 : ee.unpublishedAt) != null &&
                                                      (0, s.jsx)(c.TextBadge, {
                                                          disableColor: !0,
                                                          text: S.Z.Messages.LIMITED_TIME,
                                                          className: k.featuredBlockBadge
                                                      }),
                                                  (0, s.jsx)(c.Button, {
                                                      className: k.featuredBlockButton,
                                                      color: c.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: S.Z.Messages.TAKE_ME_THERE
                                                  })
                                              ]
                                          }),
                                          (0, s.jsx)(c.Clickable, {
                                              className: i()(k.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(en, ')') },
                                              onClick: () => A('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !H &&
                                                  (0, s.jsxs)(s.Fragment, {
                                                      children: [
                                                          (0, s.jsx)(c.TextBadge, {
                                                              disableColor: !0,
                                                              text: S.Z.Messages.MOST_POPULAR,
                                                              className: k.featuredBlockBadge
                                                          }),
                                                          (0, s.jsx)(c.Button, {
                                                              className: k.featuredBlockButton,
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
                        (0, s.jsxs)('div', {
                            className: i()(k.row, k.between, k.section),
                            children: [
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: S.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, s.jsxs)(c.Clickable, {
                                    className: k.shopAll,
                                    onClick: () => A('shop all top'),
                                    children: [
                                        (0, s.jsx)(c.ServerGridIcon, {}),
                                        (0, s.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: S.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: k.feed,
                            ref: K,
                            children: H
                                ? (0, s.jsx)(s.Fragment, { children: [...Array(12)].map((e, t) => (0, s.jsx)(v.K, {}, t + 1)) })
                                : (0, s.jsx)(s.Fragment, {
                                      children: eo.slice(0, w).map((e, t) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: r, ...n } = e;
                                          return (0, s.jsx)(
                                              f.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'popular picks'
                                                  },
                                                  children: (0, s.jsx)(
                                                      T.Z,
                                                      {
                                                          product: n,
                                                          category: r,
                                                          user: G,
                                                          isInFeedView: !0
                                                      },
                                                      null == e ? void 0 : e.skuId
                                                  )
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        w >= L.iA &&
                            (0, s.jsxs)('div', {
                                className: k.endOfFeed,
                                children: [
                                    (0, s.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: S.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, s.jsx)(c.Button, {
                                        className: k.endOfFeedButton,
                                        onClick: () => {
                                            A('shop all bottom', void 0, !0);
                                        },
                                        children: (0, s.jsx)(c.Text, {
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
