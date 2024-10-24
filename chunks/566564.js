n(47120), n(653041);
var r = n(200651),
    s = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(180650),
    o = n(442837),
    c = n(481060),
    d = n(580747),
    u = n(594174),
    m = n(960048),
    f = n(381585),
    p = n(597688),
    C = n(1870),
    h = n(884697),
    g = n(251068),
    _ = n(43610),
    b = n(744112),
    x = n(223143),
    E = n(823941),
    v = n(752053),
    I = n(38900),
    T = n(709999),
    L = n(215023),
    S = n(689938),
    k = n(632007),
    N = n(454410),
    B = n(783433),
    j = n(170873),
    O = n(562292),
    Z = n(196315);
t.Z = (e) => {
    var t, n, a, y, P, R;
    let { handleTransition: A, numVisibleItems: w } = e,
        { categories: M, isFetchingCategories: H, fetchCategoriesError: D, fetchPurchasesError: F, claimError: U, refreshCategories: W } = (0, x.Z)(),
        V = null !== (t = null != D ? D : F) && void 0 !== t ? t : U,
        z = Array.from(M.values()),
        G = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        Y = s.createRef(),
        K = (0, _.t)('CollectiblesFeedShop'),
        $ = (0, g.m)('CollectiblesFeedShop'),
        X = (0, b.b)('Collectibles Shop Button'),
        q = (0, d.Z)('shop_disable_cache'),
        J = (0, d.Z)('shop_include_unpublished'),
        Q = $ ? z[0] : p.Z.getCategory(K ? l.T.SPOOKY_NIGHT : l.T.BAND),
        ee = $ ? z[1] : p.Z.getCategory(K ? l.T.BAND : l.T.AUTUMN_EQUINOX),
        et = p.Z.getCategory(l.T.ANIME_V2),
        en = $
            ? (0, h.uV)(null !== (n = null == Q ? void 0 : Q.heroBanner) && void 0 !== n ? n : '', {
                  size: L.pv,
                  format: 'jpg'
              })
            : K
              ? Z
              : j,
        er = $
            ? (0, h.uV)(null !== (a = null == ee ? void 0 : ee.featuredBlock) && void 0 !== a ? a : '', {
                  size: L.J0,
                  format: 'png'
              })
            : K
              ? B
              : O,
        es = $
            ? (0, h.uV)(null !== (y = null == et ? void 0 : et.featuredBlock) && void 0 !== y ? y : '', {
                  size: L.J0,
                  format: 'png'
              })
            : N,
        ea = s.useCallback(() => {
            W();
        }, [W]),
        ei = $ ? (null !== (P = null == Q ? void 0 : Q.heroRanking) && void 0 !== P ? P : []) : K ? L.Ku : L.WC,
        el = s.useMemo(
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
                        let n = !!C.Z.getPurchase(e.skuId),
                            r = !!C.Z.getPurchase(t.skuId);
                        return Number(n) - Number(r);
                    })
                    .slice(0, 4),
            [H, K]
        ),
        eo = s.useMemo(
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
                        let n = !!C.Z.getPurchase(e.skuId),
                            r = !!C.Z.getPurchase(t.skuId);
                        return Number(n) - Number(r);
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
            (0, r.jsx)(v.Z, {
                onRetry: ea,
                errorMessage: V.message
            })
        );
    }
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)('div', {
            className: k.shop,
            children: [
                (0, r.jsxs)('div', {
                    className: k.banner,
                    children: [
                        (0, r.jsx)('div', {
                            className: k.bannerImage,
                            style: { backgroundImage: 'url('.concat(en, ')') }
                        }),
                        (0, r.jsx)('div', { className: i()(k.bannerShadow, k.left) }),
                        (0, r.jsx)('div', { className: i()(k.bannerShadow, k.right) })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: i()(k.content, k.mainContent),
                    children: [
                        (0, r.jsxs)('div', {
                            className: i()(k.heroHeaderContainer),
                            children: [
                                H
                                    ? (0, r.jsx)('div', { className: i()(k.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: i()(k.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null == Q ? void 0 : Q.unpublishedAt) != null &&
                                                  (0, r.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: S.Z.Messages.LIMITED_TIME,
                                                      className: k.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: i()(k.heroLogoNameContainer),
                                                  style: (null == Q ? void 0 : Q.skuId) === l.T.MYTHICAL_CREATURES ? { alignItems: 'center' } : {},
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: k.heroHeaderLogo,
                                                          src: (0, h.uV)(null !== (R = null == Q ? void 0 : Q.logo) && void 0 !== R ? R : '', { size: E.n }),
                                                          alt: null == Q ? void 0 : Q.name
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          color: 'always-white',
                                                          variant: 'text-md/normal',
                                                          className: k.subHeaderText,
                                                          children: null == Q ? void 0 : Q.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !H &&
                                    (0, r.jsx)('div', {
                                        className: k.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(c.Button, {
                                            className: k.heroHeaderButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => A('shop latest category hero', null == Q ? void 0 : Q.skuId),
                                            children: ec
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: i()(k.row, k.feed, k.feedSingleRow),
                            children: H
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(I.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: el.map((e, t) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: n, ...s } = e;
                                          return (0, r.jsx)(
                                              f.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'top 4'
                                                  },
                                                  children: (0, r.jsx)(
                                                      T.Z,
                                                      {
                                                          product: s,
                                                          category: n,
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
                        (0, r.jsx)('div', {
                            className: i()(k.section, k.col2, k.featuredBlocksContainer),
                            children: H
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(k.skeleton, k.featuredBlock),
                                              children: (0, r.jsx)('div', { className: k.skeletonBody })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: i()(k.skeleton, k.featuredBlock),
                                              children: (0, r.jsx)('div', { className: k.skeletonBody })
                                          })
                                      ]
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)(c.Clickable, {
                                              className: i()(k.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(er, ')') },
                                              onClick: () => A('shop marketing tile', null == ee ? void 0 : ee.skuId),
                                              children: [
                                                  (null == ee ? void 0 : ee.unpublishedAt) != null &&
                                                      (0, r.jsx)(c.TextBadge, {
                                                          disableColor: !0,
                                                          text: S.Z.Messages.LIMITED_TIME,
                                                          className: k.featuredBlockBadge
                                                      }),
                                                  (0, r.jsx)(c.Button, {
                                                      className: k.featuredBlockButton,
                                                      color: c.ButtonColors.WHITE,
                                                      onClick: () => {},
                                                      children: S.Z.Messages.TAKE_ME_THERE
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(c.Clickable, {
                                              className: i()(k.featuredBlock),
                                              style: { backgroundImage: 'url('.concat(es, ')') },
                                              onClick: () => A('shop marketing tile', l.T.ANIME_V2),
                                              children:
                                                  !H &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)(c.TextBadge, {
                                                              disableColor: !0,
                                                              text: S.Z.Messages.MOST_POPULAR,
                                                              className: k.featuredBlockBadge
                                                          }),
                                                          (0, r.jsx)(c.Button, {
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
                        (0, r.jsxs)('div', {
                            className: i()(k.row, k.between, k.section),
                            children: [
                                (0, r.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: S.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, r.jsxs)(c.Clickable, {
                                    className: k.shopAll,
                                    onClick: () => A('shop all top'),
                                    children: [
                                        (0, r.jsx)(c.ServerGridIcon, {}),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: S.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: k.feed,
                            ref: Y,
                            children: H
                                ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(I.K, {}, t + 1)) })
                                : (0, r.jsx)(r.Fragment, {
                                      children: eo.slice(0, w).map((e, t) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: n, ...s } = e;
                                          return (0, r.jsx)(
                                              f.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'popular picks'
                                                  },
                                                  children: (0, r.jsx)(
                                                      T.Z,
                                                      {
                                                          product: s,
                                                          category: n,
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
                            (0, r.jsxs)('div', {
                                className: k.endOfFeed,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: S.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, r.jsx)(c.Button, {
                                        className: k.endOfFeedButton,
                                        onClick: () => {
                                            A('shop all bottom', void 0, !0);
                                        },
                                        children: (0, r.jsx)(c.Text, {
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
