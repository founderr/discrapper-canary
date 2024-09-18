r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(474401),
    l = r.n(o),
    c = r(180650),
    d = r(442837),
    u = r(481060),
    f = r(594174),
    p = r(597688),
    m = r(1870),
    C = r(884697),
    _ = r(123983),
    g = r(223143),
    h = r(823941),
    b = r(38900),
    E = r(709999),
    I = r(215023),
    x = r(689938),
    T = r(632007),
    v = r(367815),
    S = r(933285),
    L = r(80995),
    N = r(725763),
    O = r(83498);
let B = { [c.T.AUTUMN_EQUINOX]: { hero: { left: T.darker } } },
    k = (e) => (null == e ? {} : l()(B, e, {}));
t.Z = (e) => {
    var t, r, s, o, B, j, R;
    let { handleTransition: P, numVisibleItems: Z } = e,
        { isFetchingCategories: A } = (0, g.Z)(),
        M = (0, d.e7)([f.default], () => f.default.getCurrentUser()),
        y = n.createRef(),
        w = (0, _.U)('CollectiblesFeedShop'),
        H = w ? c.T.AUTUMN_EQUINOX : c.T.THE_VAULT,
        F = k(H),
        D = (0, d.cj)([p.Z], () => ({ feature: p.Z.getCategory(H) })),
        U = w ? I.v7 : I.s8,
        W = n.useMemo(
            () =>
                U.map((e) => p.Z.getProduct(e))
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
            [A]
        ),
        G = n.useMemo(
            () =>
                I.yo
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
    if (null == M) return null;
    let V = w ? x.Z.Messages.COLLECTIBLES_SHOP_CATEGORY_COLLECTION.format({ category_name: null === (t = D.feature) || void 0 === t ? void 0 : t.name }) : x.Z.Messages.COLLECTIBLES_SHOP_THE_VAULT_COLLECTION;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: T.shop,
            children: [
                (0, a.jsxs)('div', {
                    className: T.banner,
                    children: [
                        (0, a.jsx)('div', {
                            className: T.bannerImage,
                            style: { backgroundImage: 'url('.concat(w ? L : O, ')') }
                        }),
                        (0, a.jsx)('div', { className: i()(T.bannerShadow, T.left, l()(F, 'hero.left')) }),
                        (0, a.jsx)('div', { className: i()(T.bannerShadow, T.right, l()(F, 'hero.right')) })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: i()(T.content, T.mainContent),
                    children: [
                        (0, a.jsxs)('div', {
                            className: i()(T.heroHeaderContainer),
                            children: [
                                A
                                    ? (0, a.jsx)('div', { className: i()(T.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, a.jsxs)('div', {
                                          className: i()(T.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              (null === (s = D.feature) || void 0 === s ? void 0 : s.unpublishedAt) != null &&
                                                  (0, a.jsx)(u.TextBadge, {
                                                      disableColor: !0,
                                                      text: x.Z.Messages.LIMITED_TIME,
                                                      className: T.limitedTimeBadge
                                                  }),
                                              (0, a.jsx)('img', {
                                                  className: T.heroHeaderLogo,
                                                  src: (0, C.uV)(null !== (R = null === (o = D.feature) || void 0 === o ? void 0 : o.logo) && void 0 !== R ? R : '', { size: h.n }),
                                                  alt: null === (B = D.feature) || void 0 === B ? void 0 : B.name
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  color: 'always-white',
                                                  variant: 'text-md/normal',
                                                  className: T.subHeaderText,
                                                  children: null === (j = D.feature) || void 0 === j ? void 0 : j.summary
                                              })
                                          ]
                                      }),
                                (0, a.jsx)('div', {
                                    className: T.heroHeaderButtonContainer,
                                    children: (0, a.jsx)(u.Button, {
                                        className: T.heroHeaderButton,
                                        color: u.ButtonColors.WHITE,
                                        onClick: () => P('shop latest category hero'),
                                        children: V
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: i()(T.row, T.feed, T.feedSingleRow),
                            children: A
                                ? (0, a.jsx)(a.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, a.jsx)(b.K, {}, t))
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: W.map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              E.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: M,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(T.section, T.col2, T.featuredBlocksContainer),
                            children: [
                                (0, a.jsxs)(u.Clickable, {
                                    className: i()(T.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(w ? N : S, ')') },
                                    onClick: () => P('shop marketing tile', w ? '1157406994873991284' : c.T.DOJO),
                                    children: [
                                        (null === (r = p.Z.getCategory(w ? '1157406994873991284' : c.T.DOJO)) || void 0 === r ? void 0 : r.unpublishedAt) != null &&
                                            (0, a.jsx)(u.TextBadge, {
                                                disableColor: !0,
                                                text: x.Z.Messages.LIMITED_TIME,
                                                className: T.featuredBlockBadge
                                            }),
                                        (0, a.jsx)(u.Button, {
                                            className: T.featuredBlockButton,
                                            color: u.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: x.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                }),
                                (0, a.jsxs)(u.Clickable, {
                                    className: i()(T.featuredBlock),
                                    style: { backgroundImage: 'url('.concat(v, ')') },
                                    onClick: () => P('shop marketing tile', c.T.ANIME_V2),
                                    children: [
                                        (0, a.jsx)(u.TextBadge, {
                                            disableColor: !0,
                                            text: x.Z.Messages.MOST_POPULAR,
                                            className: T.featuredBlockBadge
                                        }),
                                        (0, a.jsx)(u.Button, {
                                            className: T.featuredBlockButton,
                                            color: u.ButtonColors.WHITE,
                                            onClick: () => {},
                                            children: x.Z.Messages.TAKE_ME_THERE
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsxs)('div', {
                            className: i()(T.row, T.between, T.section),
                            children: [
                                (0, a.jsx)(u.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: x.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                }),
                                (0, a.jsxs)(u.Clickable, {
                                    className: T.shopAll,
                                    onClick: () => P('shop all top'),
                                    children: [
                                        (0, a.jsx)(u.ServerGridIcon, {}),
                                        (0, a.jsx)(u.Text, {
                                            variant: 'text-sm/medium',
                                            children: x.Z.Messages.COLLECTIBLES_SHOP_ALL
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: T.feed,
                            ref: y,
                            children: A
                                ? (0, a.jsx)(a.Fragment, { children: [...Array(12)].map((e, t) => (0, a.jsx)(b.K, {}, t + 1)) })
                                : (0, a.jsx)(a.Fragment, {
                                      children: G.slice(0, Z).map((e) => {
                                          if (null == e || null == e.category) return null;
                                          let { category: t, ...r } = e;
                                          return (0, a.jsx)(
                                              E.Z,
                                              {
                                                  product: r,
                                                  category: t,
                                                  user: M,
                                                  isInFeedView: !0
                                              },
                                              null == e ? void 0 : e.skuId
                                          );
                                      })
                                  })
                        }),
                        Z >= I.iA &&
                            (0, a.jsxs)('div', {
                                className: T.endOfFeed,
                                children: [
                                    (0, a.jsx)(u.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: x.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT
                                    }),
                                    (0, a.jsx)(u.Button, {
                                        className: T.endOfFeedButton,
                                        onClick: () => {
                                            P('shop all bottom', void 0, !0);
                                        },
                                        children: (0, a.jsx)(u.Text, {
                                            variant: 'text-md/medium',
                                            color: 'always-white',
                                            children: x.Z.Messages.COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON
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
