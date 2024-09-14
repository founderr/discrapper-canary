r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(180650),
    l = r(442837),
    c = r(481060),
    d = r(594174),
    u = r(597688),
    f = r(1870),
    p = r(884697),
    m = r(123983),
    C = r(223143),
    _ = r(823941),
    g = r(38900),
    h = r(709999),
    b = r(215023),
    E = r(689938),
    I = r(632007),
    x = r(367815),
    v = r(933285),
    T = r(80995),
    S = r(725763),
    L = r(83498);
t.Z = (e) => {
    var t, r, s, N, O, B, k;
    let { handleTransition: j, numVisibleItems: R } = e,
        { isFetchingCategories: P } = (0, C.Z)(),
        Z = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        A = n.createRef(),
        M = (0, m.U)('CollectiblesFeedShop'),
        y = (0, l.cj)([u.Z], () => ({ feature: u.Z.getCategory(M ? '1282816432056569866' : o.T.THE_VAULT) })),
        w = M ? b.v7 : b.s8,
        F = n.useMemo(
            () =>
                w
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    })
                    .slice(0, 4),
            [P]
        ),
        H = n.useMemo(
            () =>
                b.yo
                    .map((e) => u.Z.getProduct(e))
                    .filter((e) => null != e)
                    .map((e) => ({
                        ...e,
                        category: u.Z.getCategoryForProduct(e.skuId)
                    }))
                    .filter((e) => null != e.category)
                    .sort((e, t) => {
                        let r = !!f.Z.getPurchase(e.skuId),
                            a = !!f.Z.getPurchase(t.skuId);
                        return Number(r) - Number(a);
                    }),
            [P]
        );
    if (null == Z) return null;
    let D = M ? E.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null === (t = y.feature) || void 0 === t ? void 0 : t.name }) : E.Z.Messages.COLLECTIBLES_SHOP_THE_VAULT_COLLECTION;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: I.shop,
            children: [
                (0, a.jsx)('div', {
                    className: I.banner,
                    children: (0, a.jsx)('div', {
                        className: I.bannerImage,
                        style: { backgroundImage: 'url('.concat(M ? T : L, ')') }
                    })
                }),
                (0, a.jsxs)('div', {
                    className: i()(I.content, I.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(I.heroHeaderContainer),
                            children: [
                                P
                                    ? (0, a.jsx)('div', { className: i()(I.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(I.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null === (s = y.feature) || void 0 === s ? void 0 : s.unpublishedAt) != null &&
                                                  (0, a.jsx)(c.TextBadge, {
                                                      disableColor: !0,
                                                      text: E.Z.Messages.LIMITED_TIME,
                                                      className: I.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: I.heroHeaderLogo,
                                                  src: (0, p.uV)(null !== (k = null === (N = y.feature) || void 0 === N ? void 0 : N.logo) && void 0 !== k ? k : '', { size: _.n }),
                                                  alt: null === (O = y.feature) || void 0 === O ? void 0 : O.name
                                              }),
                                              (0, a.jsx)(c.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  children: null === (B = y.feature) || void 0 === B ? void 0 : B.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: I.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(c.Button, {
                                        className: I.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => j('shop latest category hero'),
                                        children: D
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(I.row, I.feed, I.feedSingleRow),
                            children: P
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(g.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: F.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              h.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: Z,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(I.section, I.col2, I.featuredBlocksContainer),
                            children: [
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(I.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(M ? S : v, ')') },
                                    onClick: () => j('shop marketing tile', M ? '1157406994873991284' : o.T.DOJO),
                                    children: [
                                        (null === (r = u.Z.getCategory(M ? '1157406994873991284' : o.T.DOJO)) || void 0 === r ? void 0 : r.unpublishedAt) != null &&
                                            (0, a.jsx)(c.TextBadge, {
                                                disableColor: !0,
                                                text: E.Z.Messages.LIMITED_TIME,
                                                className: I.featuredBlockBadge
                                            }),
                                        (0, a.jsx)(c.Button, {
                                            className: I.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: E.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(I.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(x, ')') },
                                    onClick: () => j('shop marketing tile', o.T.ANIME_V2),
                                    children: [
                                        (0, a.jsx)(c.TextBadge, {
                                            disableColor: !0,
                                            text: E.Z.Messages.MOST_POPULAR,
                                            className: I.featuredBlockBadge
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            className: I.featuredBlockButton,
                                            color: c.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: E.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(I.row, I.between, I.section),
                            children: [
                                (0, a.jsx)(c.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: E.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(c.Clickable, {
                                    className: I.shopAll,
                                    onClick: () => j('shop all top'),
                                    children: [
                                        (0, a.jsx)(c.ServerGridIcon, {}),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: E.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: I.feed,
                            ref: A,
                            children: P
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(g.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: H.slice(0, R).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              h.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: Z,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        R >= b.iA &&
                            (0, a.jsxs)('div', {
                                className: I.endOfFeed,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: E.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        className: I.endOfFeedButton,
                                        onClick: () => {
                                            j('shop all bottom', void 0, !0);
                                        },
                                        children: (0, a.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: E.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
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
